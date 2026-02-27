import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import * as LocataireRepo from "../repositories/locataire.repository.js";
import type { TypePieceIdentite } from "../generated/prisma/enums.js";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface LocataireTokenPair {
  accessToken: string;
  refreshToken: string;
  refreshTokenExpiresAt: Date;
}

export interface JwtLocatairePayload {
  sub: string;
  nom: string;
  prenom: string;
  iat?: number;
  exp?: number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getSecret = (key: string): string => {
  const value = process.env[key];
  if (!value) throw new Error(`Variable d'environnement manquante : ${key}`);
  return value;
};

const hashToken = (token: string): string =>
  crypto.createHash("sha256").update(token).digest("hex");

const parseExpiry = (expiry: string): number => {
  const unit = expiry.slice(-1);
  const value = parseInt(expiry.slice(0, -1), 10);
  const multipliers: Record<string, number> = { s: 1, m: 60, h: 3600, d: 86400 };
  return value * (multipliers[unit] ?? 60);
};

const generateTokenPair = (
  id: string,
  nom: string,
  prenom: string
): LocataireTokenPair => {
  const accessExpiry = process.env.LOCATAIRE_ACCESS_TOKEN_EXPIRY ?? "15m";
  const refreshExpiry = process.env.LOCATAIRE_REFRESH_TOKEN_EXPIRY ?? "30d";

  const accessToken = jwt.sign(
    { sub: id, nom, prenom } as JwtLocatairePayload,
    getSecret("LOCATAIRE_ACCESS_TOKEN_SECRET"),
    { expiresIn: accessExpiry } as jwt.SignOptions
  );

  const refreshToken = jwt.sign(
    { sub: id, nom, prenom } as JwtLocatairePayload,
    getSecret("LOCATAIRE_REFRESH_TOKEN_SECRET"),
    { expiresIn: refreshExpiry } as jwt.SignOptions
  );

  return {
    accessToken,
    refreshToken,
    refreshTokenExpiresAt: new Date(
      Date.now() + parseExpiry(refreshExpiry) * 1000
    ),
  };
};

// ─── Vérification du token ────────────────────────────────────────────────────

export const verifyLocataireAccessToken = (
  token: string
): JwtLocatairePayload => {
  try {
    return jwt.verify(
      token,
      getSecret("LOCATAIRE_ACCESS_TOKEN_SECRET")
    ) as JwtLocatairePayload;
  } catch {
    throw new AppError(
      "Token d'accès invalide ou expiré",
      StatusCodes.UNAUTHORIZED
    );
  }
};

// ─── Activation ───────────────────────────────────────────────────────────────

export const activer = async (data: {
  token: string;
  password: string;
  dateNaissance?: Date | null;
  lieuNaissance?: string | null;
  nationalite?: string | null;
  sexe?: string | null;
  numPieceIdentite?: string | null;
  typePiece?: TypePieceIdentite | null;
  dateDelivrance?: Date | null;
  dateExpiration?: Date | null;
  autoriteDelivrance?: string | null;
  situationProfessionnelle?: string | null;
}): Promise<LocataireTokenPair & { locataire: { id: string; nom: string; prenom: string } }> => {
  const locataire = await LocataireRepo.findByActivationToken(data.token);
  if (!locataire) {
    throw new AppError("Lien d'activation invalide", StatusCodes.BAD_REQUEST);
  }
  if (locataire.tokenExpiresAt && locataire.tokenExpiresAt < new Date()) {
    throw new AppError(
      "Ce lien d'activation a expiré. Demandez un nouveau lien à votre propriétaire.",
      StatusCodes.BAD_REQUEST
    );
  }
  if (locataire.statut === "ACTIF") {
    throw new AppError(
      "Ce compte est déjà activé. Connectez-vous.",
      StatusCodes.CONFLICT
    );
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
    dateExpiration: data.dateExpiration,
    autoriteDelivrance: data.autoriteDelivrance,
    situationProfessionnelle: data.situationProfessionnelle,
  });

  const tokens = generateTokenPair(locataire.id, locataire.nom, locataire.prenom);
  await LocataireRepo.createRefreshToken({
    locataireId: locataire.id,
    tokenHash: hashToken(tokens.refreshToken),
    expiresAt: tokens.refreshTokenExpiresAt,
  });

  return {
    ...tokens,
    locataire: { id: locataire.id, nom: locataire.nom, prenom: locataire.prenom },
  };
};

// ─── Connexion ────────────────────────────────────────────────────────────────

const normalizePhone = (phone: string) => phone.replace(/[\s\-()]/g, "");

export const login = async (data: {
  identifiant: string;
  password: string;
}): Promise<LocataireTokenPair & { locataire: { id: string; nom: string; prenom: string } }> => {
  const identifiant = data.identifiant.trim();

  // Chercher par téléphone puis email
  let locataire = await LocataireRepo.findByTelephone(normalizePhone(identifiant));
  if (!locataire && identifiant.includes("@")) {
    locataire = await LocataireRepo.findByEmail(identifiant);
  }

  if (!locataire) {
    throw new AppError(
      "Identifiant ou mot de passe incorrect.",
      StatusCodes.UNAUTHORIZED
    );
  }

  if (locataire.statut !== "ACTIF") {
    throw new AppError(
      "Votre compte n'est pas encore activé. Utilisez le lien d'activation envoyé par votre propriétaire.",
      StatusCodes.FORBIDDEN
    );
  }

  if (!locataire.password) {
    throw new AppError(
      "Identifiant ou mot de passe incorrect.",
      StatusCodes.UNAUTHORIZED
    );
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

  return {
    ...tokens,
    locataire: { id: full.id, nom: full.nom, prenom: full.prenom },
  };
};

// ─── Refresh ──────────────────────────────────────────────────────────────────

export const refresh = async (
  oldRefreshToken: string
): Promise<LocataireTokenPair> => {
  let payload: JwtLocatairePayload;
  try {
    payload = jwt.verify(
      oldRefreshToken,
      getSecret("LOCATAIRE_REFRESH_TOKEN_SECRET")
    ) as JwtLocatairePayload;
  } catch {
    throw new AppError(
      "Refresh token invalide ou expiré",
      StatusCodes.UNAUTHORIZED
    );
  }

  const tokenHash = hashToken(oldRefreshToken);
  const stored = await LocataireRepo.findRefreshToken(tokenHash);

  if (!stored) {
    await LocataireRepo.revokeAllRefreshTokens(payload.sub);
    throw new AppError(
      "Token révoqué ou inconnu — session terminée",
      StatusCodes.UNAUTHORIZED
    );
  }
  if (stored.revokedAt !== null) {
    await LocataireRepo.revokeAllRefreshTokens(payload.sub);
    throw new AppError(
      "Token déjà utilisé — compromission détectée",
      StatusCodes.UNAUTHORIZED
    );
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

  return tokens;
};

// ─── Logout ───────────────────────────────────────────────────────────────────

export const logout = async (refreshToken: string): Promise<void> => {
  const tokenHash = hashToken(refreshToken);
  const stored = await LocataireRepo.findRefreshToken(tokenHash);
  if (stored && !stored.revokedAt) {
    await LocataireRepo.revokeRefreshToken(tokenHash);
  }
};

// ─── Me ───────────────────────────────────────────────────────────────────────

export const me = async (id: string) => {
  const locataire = await LocataireRepo.findById(id);
  if (!locataire)
    throw new AppError("Compte introuvable", StatusCodes.UNAUTHORIZED);
  return locataire;
};

// ─── Mise à jour du profil (identité) ────────────────────────────────────────

export const updateProfil = async (
  id: string,
  data: {
    dateNaissance?: Date | null;
    lieuNaissance?: string | null;
    nationalite?: string | null;
    sexe?: string | null;
    numPieceIdentite?: string | null;
    typePiece?: TypePieceIdentite | null;
    dateDelivrance?: Date | null;
    dateExpiration?: Date | null;
    autoriteDelivrance?: string | null;
    situationProfessionnelle?: string | null;
  }
) => {
  const existing = await LocataireRepo.findById(id);
  if (!existing) throw new AppError("Compte introuvable", StatusCodes.NOT_FOUND);
  return LocataireRepo.update(id, data);
};
