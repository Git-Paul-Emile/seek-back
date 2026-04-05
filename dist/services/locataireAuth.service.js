import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import * as LocataireRepo from "../repositories/locataire.repository.js";
import { prisma } from "../config/database.js";
import { envoyerNotification } from "./notification.service.js";
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
const generateTokenPair = (id, nom, prenom) => {
    const accessExpiry = process.env.LOCATAIRE_ACCESS_TOKEN_EXPIRY ?? "15m";
    const refreshExpiry = process.env.LOCATAIRE_REFRESH_TOKEN_EXPIRY ?? "30d";
    const accessToken = jwt.sign({ sub: id, nom, prenom }, getSecret("LOCATAIRE_ACCESS_TOKEN_SECRET"), { expiresIn: accessExpiry });
    const refreshToken = jwt.sign({ sub: id, nom, prenom }, getSecret("LOCATAIRE_REFRESH_TOKEN_SECRET"), { expiresIn: refreshExpiry });
    return {
        accessToken,
        refreshToken,
        refreshTokenExpiresAt: new Date(Date.now() + parseExpiry(refreshExpiry) * 1000),
    };
};
// ─── Vérification du token ────────────────────────────────────────────────────
export const verifyLocataireAccessToken = (token) => {
    try {
        return jwt.verify(token, getSecret("LOCATAIRE_ACCESS_TOKEN_SECRET"));
    }
    catch {
        throw new AppError("Token d'accès invalide ou expiré", StatusCodes.UNAUTHORIZED);
    }
};
// ─── Activation ───────────────────────────────────────────────────────────────
export const activer = async (data) => {
    const locataire = await LocataireRepo.findByActivationToken(data.token);
    if (!locataire) {
        throw new AppError("Lien d'activation invalide", StatusCodes.BAD_REQUEST);
    }
    if (locataire.tokenExpiresAt && locataire.tokenExpiresAt < new Date()) {
        throw new AppError("Ce lien d'activation a expiré. Demandez un nouveau lien à votre propriétaire.", StatusCodes.BAD_REQUEST);
    }
    if (locataire.statut === "ACTIF") {
        throw new AppError("Ce compte est déjà activé. Connectez-vous.", StatusCodes.CONFLICT);
    }
    const saltRounds = parseInt(process.env.BCRYPT_SALT ?? "12", 10);
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);
    await LocataireRepo.update(locataire.id, {
        password: hashedPassword,
        statut: "ACTIF",
        activationToken: null,
        tokenExpiresAt: null,
        dateNaissance: data.dateNaissance,
        lieuNaissance: data.lieuNaissance,
        nationalite: data.nationalite,
        sexe: data.sexe,
        numPieceIdentite: data.numPieceIdentite,
        typePiece: data.typePiece,
        dateDelivrance: data.dateDelivrance,
        dateExpirationPiece: data.dateExpirationPiece,
        autoriteDelivrance: data.autoriteDelivrance,
        situationProfessionnelle: data.situationProfessionnelle,
    });
    const tokens = generateTokenPair(locataire.id, locataire.nom, locataire.prenom);
    await LocataireRepo.createRefreshToken({
        locataireId: locataire.id,
        tokenHash: hashToken(tokens.refreshToken),
        expiresAt: tokens.refreshTokenExpiresAt,
    });
    const fullLocataire = await LocataireRepo.findById(locataire.id);
    if (!fullLocataire)
        throw new AppError("Compte introuvable", StatusCodes.NOT_FOUND);
    const proprietaire = await prisma.proprietaire.findUnique({
        where: { id: locataire.proprietaireId },
        select: { telephone: true, email: true, prenom: true, nom: true },
    });
    if (proprietaire?.telephone) {
        await envoyerNotification({
            type: "VERIFICATION_LOCATAIRE",
            target: "owner",
            telephone: proprietaire.telephone,
            email: proprietaire.email,
            sujet: "Compte locataire activé",
            contenu: `${fullLocataire.prenom} ${fullLocataire.nom} a activé son compte locataire.`,
            proprietaireId: locataire.proprietaireId,
            locataireId: fullLocataire.id,
            noSmsEmail: true,
        }).catch(() => null);
    }
    return {
        ...tokens,
        locataire: fullLocataire,
    };
};
// ─── Connexion ────────────────────────────────────────────────────────────────
const normalizePhone = (phone) => phone.replace(/[\s\-()]/g, "");
export const login = async (data) => {
    const identifiant = data.identifiant.trim();
    // Chercher par téléphone puis email
    let locataire = await LocataireRepo.findByTelephone(normalizePhone(identifiant));
    if (!locataire && identifiant.includes("@")) {
        locataire = await LocataireRepo.findByEmail(identifiant);
    }
    if (!locataire) {
        throw new AppError("Identifiant ou mot de passe incorrect.", StatusCodes.UNAUTHORIZED);
    }
    if (locataire.statut !== "ACTIF") {
        throw new AppError("Votre compte n'est pas encore activé. Utilisez le lien d'activation envoyé par votre propriétaire.", StatusCodes.FORBIDDEN);
    }
    if (!locataire.password) {
        throw new AppError("Identifiant ou mot de passe incorrect.", StatusCodes.UNAUTHORIZED);
    }
    // Charger avec le password
    const full = await LocataireRepo.findByIdWithPassword(locataire.id);
    if (!full || !full.password) {
        throw new AppError("Identifiant ou mot de passe incorrect.", StatusCodes.UNAUTHORIZED);
    }
    const valid = await bcrypt.compare(data.password, full.password);
    if (!valid) {
        throw new AppError("Identifiant ou mot de passe incorrect.", StatusCodes.UNAUTHORIZED);
    }
    const tokens = generateTokenPair(full.id, full.nom, full.prenom);
    await LocataireRepo.createRefreshToken({
        locataireId: full.id,
        tokenHash: hashToken(tokens.refreshToken),
        expiresAt: tokens.refreshTokenExpiresAt,
    });
    const locataireComplet = await LocataireRepo.findById(full.id);
    if (!locataireComplet)
        throw new AppError("Compte introuvable", StatusCodes.NOT_FOUND);
    return {
        ...tokens,
        locataire: locataireComplet,
    };
};
// ─── Refresh ──────────────────────────────────────────────────────────────────
export const refresh = async (oldRefreshToken) => {
    let payload;
    try {
        payload = jwt.verify(oldRefreshToken, getSecret("LOCATAIRE_REFRESH_TOKEN_SECRET"));
    }
    catch {
        throw new AppError("Refresh token invalide ou expiré", StatusCodes.UNAUTHORIZED);
    }
    const tokenHash = hashToken(oldRefreshToken);
    const stored = await LocataireRepo.findRefreshToken(tokenHash);
    if (!stored) {
        await LocataireRepo.revokeAllRefreshTokens(payload.sub);
        throw new AppError("Session expirée ou invalide. Veuillez vous reconnecter.", StatusCodes.UNAUTHORIZED);
    }
    if (stored.revokedAt !== null) {
        await LocataireRepo.revokeAllRefreshTokens(payload.sub);
        throw new AppError("Token déjà utilisé - compromission détectée", StatusCodes.UNAUTHORIZED);
    }
    if (stored.expiresAt < new Date()) {
        throw new AppError("Refresh token expiré", StatusCodes.UNAUTHORIZED);
    }
    await LocataireRepo.revokeRefreshToken(tokenHash);
    const locataire = await LocataireRepo.findByIdWithPassword(payload.sub);
    if (!locataire) {
        throw new AppError("Compte introuvable", StatusCodes.UNAUTHORIZED);
    }
    const tokens = generateTokenPair(locataire.id, locataire.nom, locataire.prenom);
    await LocataireRepo.createRefreshToken({
        locataireId: locataire.id,
        tokenHash: hashToken(tokens.refreshToken),
        expiresAt: tokens.refreshTokenExpiresAt,
    });
    return { ...tokens, locataireId: locataire.id };
};
// ─── Logout ───────────────────────────────────────────────────────────────────
export const logout = async (refreshToken) => {
    const tokenHash = hashToken(refreshToken);
    const stored = await LocataireRepo.findRefreshToken(tokenHash);
    if (stored && !stored.revokedAt) {
        await LocataireRepo.revokeRefreshToken(tokenHash);
        return stored.locataireId;
    }
    return null;
};
// ─── Me ───────────────────────────────────────────────────────────────────────
export const me = async (id) => {
    const locataire = await LocataireRepo.findById(id);
    if (!locataire)
        throw new AppError("Compte introuvable", StatusCodes.UNAUTHORIZED);
    return locataire;
};
// ─── Mise à jour du profil (identité) ────────────────────────────────────────
export const updateProfil = async (id, data) => {
    const existing = await LocataireRepo.findById(id);
    if (!existing)
        throw new AppError("Compte introuvable", StatusCodes.NOT_FOUND);
    return LocataireRepo.update(id, data);
};
// ─── Mot de passe oublié ──────────────────────────────────────────────────────
export const requestPasswordReset = async (identifiant) => {
    const stripped = identifiant.trim().replace(/[\s\-()]/g, "");
    let locataire = await LocataireRepo.findByTelephone(stripped);
    if (!locataire && !stripped.startsWith("+")) {
        locataire = await LocataireRepo.findByTelephone(`+221${stripped}`);
    }
    if (!locataire) {
        locataire = await LocataireRepo.findByEmail(identifiant.trim());
    }
    if (!locataire) {
        throw new AppError("Si ce compte existe, un lien a été envoyé.", StatusCodes.OK);
    }
    if (!locataire.password) {
        throw new AppError("Ce compte n'a pas encore été activé.", StatusCodes.BAD_REQUEST);
    }
    await LocataireRepo.invalidatePasswordResetTokens(locataire.id);
    const rawToken = crypto.randomBytes(32).toString("hex");
    const tokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1h
    await LocataireRepo.createPasswordResetToken({ locataireId: locataire.id, tokenHash, expiresAt });
    return { token: rawToken, email: locataire.email ?? null, telephone: locataire.telephone, prenom: locataire.prenom };
};
export const resetPassword = async (rawToken, newPassword) => {
    const tokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");
    const stored = await LocataireRepo.findPasswordResetToken(tokenHash);
    if (!stored)
        throw new AppError("Token invalide ou expiré", StatusCodes.BAD_REQUEST);
    if (stored.usedAt)
        throw new AppError("Ce lien a déjà été utilisé", StatusCodes.BAD_REQUEST);
    if (stored.expiresAt < new Date())
        throw new AppError("Ce lien a expiré", StatusCodes.BAD_REQUEST);
    const saltRounds = parseInt(process.env.BCRYPT_SALT ?? "12", 10);
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    await LocataireRepo.update(stored.locataireId, { password: hashedPassword });
    await LocataireRepo.markPasswordResetTokenUsed(tokenHash);
};
// ─── Suppression du compte (self-delete) ─────────────────────────────────────
export const supprimerCompte = async (locataireId) => {
    // Vérifier qu'il n'y a pas de bail actif
    const bailActif = await prisma.bailLocation.findFirst({
        where: {
            locataireId,
            statut: { in: ["ACTIF", "EN_PREAVIS", "EN_RENOUVELLEMENT", "EN_ATTENTE"] },
        },
    });
    if (bailActif) {
        throw new AppError("Vous ne pouvez pas supprimer votre compte tant qu'un bail est actif ou en cours.", StatusCodes.CONFLICT);
    }
    // Vérifier qu'il n'y a pas de paiement en attente
    const paiementEnAttente = await prisma.echeancierLoyer.findFirst({
        where: {
            locataireId,
            statut: { in: ["EN_ATTENTE", "EN_RETARD"] },
        },
    });
    if (paiementEnAttente) {
        throw new AppError("Vous ne pouvez pas supprimer votre compte avec des paiements en attente.", StatusCodes.CONFLICT);
    }
    await LocataireRepo.remove(locataireId);
};
//# sourceMappingURL=locataireAuth.service.js.map