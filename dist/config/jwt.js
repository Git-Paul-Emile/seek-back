import jwt from "jsonwebtoken";
// Fonctions utilitaires pour les secrets
const getAccessTokenSecret = () => {
    const secret = process.env.ACCESS_TOKEN_SECRET;
    if (!secret) {
        throw new Error("ACCESS_TOKEN_SECRET manquant dans .env");
    }
    return secret;
};
const getRefreshTokenSecret = () => {
    const secret = process.env.REFRESH_TOKEN_SECRET;
    if (!secret) {
        throw new Error("REFRESH_TOKEN_SECRET manquant dans .env");
    }
    return secret;
};
// Configuration des durées
export const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY || "15m";
export const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY || "7d";
/**
 * Générer un access token JWT
 */
export const generateAccessToken = (payload) => {
    return jwt.sign(payload, getAccessTokenSecret(), {
        expiresIn: ACCESS_TOKEN_EXPIRY,
    });
};
/**
 * Générer un refresh token JWT
 */
export const generateRefreshToken = (payload) => {
    return jwt.sign(payload, getRefreshTokenSecret(), {
        expiresIn: REFRESH_TOKEN_EXPIRY,
    });
};
/**
 * Générer une paire de tokens (access + refresh)
 */
export const generateTokenPair = (payload) => {
    const accessToken = generateAccessToken({
        sub: payload.userId,
        telephone: payload.telephone,
        role: payload.role,
    });
    const refreshToken = generateRefreshToken({
        sub: payload.userId,
        tokenId: payload.tokenId,
    });
    return { accessToken, refreshToken };
};
/**
 * Vérifier un access token
 */
export const verifyAccessToken = (token) => {
    return jwt.verify(token, getAccessTokenSecret());
};
/**
 * Vérifier un refresh token
 */
export const verifyRefreshToken = (token) => {
    return jwt.verify(token, getRefreshTokenSecret());
};
/**
 * Décoder un token sans vérifier (utile pour debugging)
 */
export const decodeToken = (token) => {
    const decoded = jwt.decode(token);
    return decoded;
};
//# sourceMappingURL=jwt.js.map