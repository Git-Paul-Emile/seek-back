import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import * as AuthRepository from "../repositories/auth.repository.js";
// ─── Helpers ──────────────────────────────────────────────────────────────────
const getSecret = (key) => {
    const value = process.env[key];
    if (!value)
        throw new Error(`Variable d'environnement manquante : ${key}`);
    return value;
};
const hashToken = (token) => crypto.createHash("sha256").update(token).digest("hex");
const parseExpiry = (expiry) => {
    const unit = expiry.slice(-1);
    const value = parseInt(expiry.slice(0, -1), 10);
    const multipliers = { s: 1, m: 60, h: 3600, d: 86400 };
    return value * (multipliers[unit] ?? 60);
};
// ─── Génération de tokens ─────────────────────────────────────────────────────
const generateTokenPair = (adminId, email) => {
    const accessExpiry = process.env.ACCESS_TOKEN_EXPIRY ?? "15m";
    const refreshExpiry = process.env.REFRESH_TOKEN_EXPIRY ?? "7d";
    const accessToken = jwt.sign({ sub: adminId, email }, getSecret("ACCESS_TOKEN_SECRET"), { expiresIn: accessExpiry });
    const refreshToken = jwt.sign({ sub: adminId, email }, getSecret("REFRESH_TOKEN_SECRET"), { expiresIn: refreshExpiry });
    const refreshTokenExpiresAt = new Date(Date.now() + parseExpiry(refreshExpiry) * 1000);
    return { accessToken, refreshToken, refreshTokenExpiresAt };
};
// ─── Service : Login ──────────────────────────────────────────────────────────
export const login = async (email, password) => {
    // 1. Trouver l'admin
    const admin = await AuthRepository.findAdminByEmail(email);
    if (!admin) {
        throw new AppError("Email ou mot de passe incorrect", StatusCodes.UNAUTHORIZED);
    }
    // 2. Vérifier le mot de passe (timing-safe via bcrypt)
    const passwordValid = await bcrypt.compare(password, admin.password);
    if (!passwordValid) {
        throw new AppError("Email ou mot de passe incorrect", StatusCodes.UNAUTHORIZED);
    }
    // 3. Générer la paire de tokens
    const tokens = generateTokenPair(admin.id, admin.email);
    // 4. Persister le refresh token (hash uniquement)
    await AuthRepository.createRefreshToken({
        adminId: admin.id,
        tokenHash: hashToken(tokens.refreshToken),
        expiresAt: tokens.refreshTokenExpiresAt,
    });
    return tokens;
};
// ─── Service : Refresh ────────────────────────────────────────────────────────
export const refresh = async (oldRefreshToken) => {
    // 1. Vérifier la signature JWT
    let payload;
    try {
        payload = jwt.verify(oldRefreshToken, getSecret("REFRESH_TOKEN_SECRET"));
    }
    catch {
        throw new AppError("Refresh token invalide ou expiré", StatusCodes.UNAUTHORIZED);
    }
    // 2. Chercher le token en BDD
    const tokenHash = hashToken(oldRefreshToken);
    const storedToken = await AuthRepository.findRefreshToken(tokenHash);
    if (!storedToken) {
        // Token inconnu → possible replay attack après révocation → révoquer tout
        await AuthRepository.revokeAllRefreshTokens(payload.sub);
        throw new AppError("Token révoqué ou inconnu — session terminée", StatusCodes.UNAUTHORIZED);
    }
    if (storedToken.revokedAt !== null) {
        // Token déjà révoqué → signal de compromission → révoquer tous les tokens
        await AuthRepository.revokeAllRefreshTokens(payload.sub);
        throw new AppError("Token déjà utilisé — compromission détectée", StatusCodes.UNAUTHORIZED);
    }
    if (storedToken.expiresAt < new Date()) {
        throw new AppError("Refresh token expiré", StatusCodes.UNAUTHORIZED);
    }
    // 3. Rotation : révoquer l'ancien token
    await AuthRepository.revokeRefreshToken(tokenHash);
    // 4. Générer une nouvelle paire
    const tokens = generateTokenPair(payload.sub, payload.email);
    // 5. Persister le nouveau refresh token
    await AuthRepository.createRefreshToken({
        adminId: payload.sub,
        tokenHash: hashToken(tokens.refreshToken),
        expiresAt: tokens.refreshTokenExpiresAt,
    });
    return tokens;
};
// ─── Service : Logout ─────────────────────────────────────────────────────────
export const logout = async (refreshToken) => {
    const tokenHash = hashToken(refreshToken);
    const storedToken = await AuthRepository.findRefreshToken(tokenHash);
    if (storedToken && !storedToken.revokedAt) {
        await AuthRepository.revokeRefreshToken(tokenHash);
    }
};
// ─── Service : Vérification du access token ───────────────────────────────────
export const verifyAccessToken = (token) => {
    try {
        return jwt.verify(token, getSecret("ACCESS_TOKEN_SECRET"));
    }
    catch {
        throw new AppError("Token d'accès invalide ou expiré", StatusCodes.UNAUTHORIZED);
    }
};
//# sourceMappingURL=auth.service.js.map