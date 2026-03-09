import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import { prisma } from "../config/database.js";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
  refreshTokenExpiresAt: Date;
}

export interface JwtPayload {
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

const generateTokenPair = (id: string, nom: string, prenom: string): TokenPair => {
  const accessExpiry = process.env.COMPTE_PUBLIC_ACCESS_TOKEN_EXPIRY ?? "15m";
  const refreshExpiry = process.env.COMPTE_PUBLIC_REFRESH_TOKEN_EXPIRY ?? "30d";

  const accessToken = jwt.sign(
    { sub: id, nom, prenom } as JwtPayload,
    getSecret("COMPTE_PUBLIC_ACCESS_TOKEN_SECRET"),
    { expiresIn: accessExpiry } as jwt.SignOptions
  );

  const refreshToken = jwt.sign(
    { sub: id, nom, prenom } as JwtPayload,
    getSecret("COMPTE_PUBLIC_REFRESH_TOKEN_SECRET"),
    { expiresIn: refreshExpiry } as jwt.SignOptions
  );

  return {
    accessToken,
    refreshToken,
    refreshTokenExpiresAt: new Date(Date.now() + parseExpiry(refreshExpiry) * 1000),
  };
};

export const verifyAccessToken = (token: string): JwtPayload => {
  try {
    return jwt.verify(token, getSecret("COMPTE_PUBLIC_ACCESS_TOKEN_SECRET")) as JwtPayload;
  } catch {
    throw new AppError("Token d'accès invalide ou expiré", StatusCodes.UNAUTHORIZED);
  }
};

// ─── Register ─────────────────────────────────────────────────────────────────

export const register = async (data: {
  nom: string;
  prenom: string;
  telephone: string;
  email?: string | null;
  password: string;
}) => {
  const existing = await prisma.comptePublic.findFirst({
    where: {
      OR: [
        { telephone: data.telephone },
        ...(data.email ? [{ email: data.email }] : []),
      ],
    },
  });

  if (existing) {
    throw new AppError("Un compte existe déjà avec ce numéro ou cet email", StatusCodes.CONFLICT);
  }

  const saltRounds = parseInt(process.env.BCRYPT_SALT ?? "12", 10);
  const hashedPassword = await bcrypt.hash(data.password, saltRounds);

  const compte = await prisma.comptePublic.create({
    data: {
      nom: data.nom,
      prenom: data.prenom,
      telephone: data.telephone,
      email: data.email ?? null,
      password: hashedPassword,
    },
  });

  const tokens = generateTokenPair(compte.id, compte.nom, compte.prenom);
  await saveRefreshToken(compte.id, tokens.refreshToken, tokens.refreshTokenExpiresAt);

  return { compte: { id: compte.id, nom: compte.nom, prenom: compte.prenom, telephone: compte.telephone, email: compte.email }, tokens };
};

// ─── Login ────────────────────────────────────────────────────────────────────

export const login = async (data: { telephone: string; password: string }) => {
  const compte = await prisma.comptePublic.findUnique({
    where: { telephone: data.telephone },
  });

  if (!compte || !(await bcrypt.compare(data.password, compte.password))) {
    throw new AppError("Numéro de téléphone ou mot de passe incorrect", StatusCodes.UNAUTHORIZED);
  }

  const tokens = generateTokenPair(compte.id, compte.nom, compte.prenom);
  await saveRefreshToken(compte.id, tokens.refreshToken, tokens.refreshTokenExpiresAt);

  return { compte: { id: compte.id, nom: compte.nom, prenom: compte.prenom, telephone: compte.telephone, email: compte.email }, tokens };
};

// ─── Refresh token ────────────────────────────────────────────────────────────

export const refreshTokens = async (rawToken: string) => {
  let payload: JwtPayload;
  try {
    payload = jwt.verify(rawToken, getSecret("COMPTE_PUBLIC_REFRESH_TOKEN_SECRET")) as JwtPayload;
  } catch {
    throw new AppError("Refresh token invalide ou expiré", StatusCodes.UNAUTHORIZED);
  }

  const tokenHash = hashToken(rawToken);
  const stored = await prisma.comptePublicRefreshToken.findUnique({ where: { tokenHash } });

  if (!stored || stored.revokedAt || stored.expiresAt < new Date()) {
    throw new AppError("Refresh token invalide", StatusCodes.UNAUTHORIZED);
  }

  // Rotate token
  await prisma.comptePublicRefreshToken.update({ where: { tokenHash }, data: { revokedAt: new Date() } });

  const compte = await prisma.comptePublic.findUnique({ where: { id: payload.sub } });
  if (!compte) throw new AppError("Compte introuvable", StatusCodes.UNAUTHORIZED);

  const tokens = generateTokenPair(compte.id, compte.nom, compte.prenom);
  await saveRefreshToken(compte.id, tokens.refreshToken, tokens.refreshTokenExpiresAt);

  return { compte: { id: compte.id, nom: compte.nom, prenom: compte.prenom, telephone: compte.telephone, email: compte.email }, tokens };
};

// ─── Logout ───────────────────────────────────────────────────────────────────

export const logout = async (rawToken: string) => {
  const tokenHash = hashToken(rawToken);
  await prisma.comptePublicRefreshToken.updateMany({
    where: { tokenHash, revokedAt: null },
    data: { revokedAt: new Date() },
  });
};

// ─── Me ───────────────────────────────────────────────────────────────────────

export const getMe = async (id: string) => {
  const compte = await prisma.comptePublic.findUnique({
    where: { id },
    select: { id: true, nom: true, prenom: true, telephone: true, email: true, createdAt: true },
  });
  if (!compte) throw new AppError("Compte introuvable", StatusCodes.NOT_FOUND);
  return compte;
};

// ─── Helpers internes ─────────────────────────────────────────────────────────

async function saveRefreshToken(comptePublicId: string, rawToken: string, expiresAt: Date) {
  await prisma.comptePublicRefreshToken.create({
    data: { comptePublicId, tokenHash: hashToken(rawToken), expiresAt },
  });
}
