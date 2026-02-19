import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import * as OwnerRepo from "../repositories/owner.repository.js";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface OwnerTokenPair {
  accessToken: string;
  refreshToken: string;
  refreshTokenExpiresAt: Date;
}

export interface JwtOwnerPayload {
  sub: string;
  prenom: string;
  nom: string;
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
  prenom: string,
  nom: string
): OwnerTokenPair => {
  const accessExpiry = process.env.OWNER_ACCESS_TOKEN_EXPIRY ?? "15m";
  const refreshExpiry = process.env.OWNER_REFRESH_TOKEN_EXPIRY ?? "30d";

  const accessToken = jwt.sign(
    { sub: id, prenom, nom } as JwtOwnerPayload,
    getSecret("OWNER_ACCESS_TOKEN_SECRET"),
    { expiresIn: accessExpiry } as jwt.SignOptions
  );

  const refreshToken = jwt.sign(
    { sub: id, prenom, nom } as JwtOwnerPayload,
    getSecret("OWNER_REFRESH_TOKEN_SECRET"),
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

export const verifyOwnerAccessToken = (token: string): JwtOwnerPayload => {
  try {
    return jwt.verify(
      token,
      getSecret("OWNER_ACCESS_TOKEN_SECRET")
    ) as JwtOwnerPayload;
  } catch {
    throw new AppError("Token d'accès invalide ou expiré", StatusCodes.UNAUTHORIZED);
  }
};

// ─── Inscription ──────────────────────────────────────────────────────────────

export const register = async (data: {
  prenom: string;
  nom: string;
  sexe?: string;
  telephone: string;
  email?: string;
  password: string;
}): Promise<
  OwnerTokenPair & { proprietaire: { id: string; prenom: string; nom: string } }
> => {
  // Normaliser les champs optionnels (chaîne vide → null)
  const telephone = data.telephone.replace(/\s/g, "");
  const email = data.email?.trim() === "" ? null : data.email?.trim() ?? null;
  const sexe = data.sexe?.trim() === "" ? null : data.sexe ?? null;

  // Unicité du téléphone
  const existingPhone = await OwnerRepo.findByTelephone(telephone);
  if (existingPhone) {
    throw new AppError(
      "Ce numéro de téléphone est déjà associé à un compte.",
      StatusCodes.CONFLICT
    );
  }

  // Unicité de l'email (si fourni)
  if (email) {
    const existingEmail = await OwnerRepo.findByEmail(email);
    if (existingEmail) {
      throw new AppError(
        "Cette adresse email est déjà associée à un compte.",
        StatusCodes.CONFLICT
      );
    }
  }

  // Hachage du mot de passe
  const saltRounds = parseInt(process.env.BCRYPT_SALT ?? "12", 10);
  const hashedPassword = await bcrypt.hash(data.password, saltRounds);

  // Création du propriétaire
  const proprietaire = await OwnerRepo.create({
    prenom: data.prenom.trim(),
    nom: data.nom.trim(),
    sexe,
    telephone,
    email,
    password: hashedPassword,
  });

  // Génération des tokens et persistance du refresh token
  const tokens = generateTokenPair(
    proprietaire.id,
    proprietaire.prenom,
    proprietaire.nom
  );

  await OwnerRepo.createRefreshToken({
    proprietaireId: proprietaire.id,
    tokenHash: hashToken(tokens.refreshToken),
    expiresAt: tokens.refreshTokenExpiresAt,
  });

  return {
    ...tokens,
    proprietaire: {
      id: proprietaire.id,
      prenom: proprietaire.prenom,
      nom: proprietaire.nom,
    },
  };
};

// ─── Connexion ────────────────────────────────────────────────────────────────

/** Supprime les espaces, tirets et parenthèses d'un numéro */
const normalizePhone = (phone: string) => phone.replace(/[\s\-()]/g, "");

/** Cherche un propriétaire par téléphone en essayant plusieurs variantes */
const findByPhoneVariants = async (raw: string) => {
  const stripped = normalizePhone(raw);

  // 1. Correspondance exacte (après normalisation)
  let found = await OwnerRepo.findByTelephone(stripped);
  if (found) return found;

  // 2. Sans indicatif → essayer avec +221 (Sénégal)
  if (!stripped.startsWith("+")) {
    found = await OwnerRepo.findByTelephone(`+221${stripped}`);
    if (found) return found;
  }

  // 3. Avec indicatif → essayer sans le +XXX (1 à 3 chiffres)
  if (stripped.startsWith("+")) {
    const local = stripped.replace(/^\+\d{1,3}/, "");
    found = await OwnerRepo.findByTelephone(local);
    if (found) return found;
  }

  return null;
};

export const login = async (data: {
  identifiant: string;
  password: string;
}): Promise<
  OwnerTokenPair & { proprietaire: { id: string; prenom: string; nom: string; telephone: string; email?: string } }
> => {
  const identifiant = data.identifiant.trim();

  // Chercher par téléphone (plusieurs variantes) puis par email
  let proprietaire = await findByPhoneVariants(identifiant);
  if (!proprietaire) {
    proprietaire = await OwnerRepo.findByEmail(identifiant);
  }

  // Message intentionnellement générique pour ne pas révéler l'existence du compte
  if (!proprietaire) {
    throw new AppError(
      "Identifiant ou mot de passe incorrect.",
      StatusCodes.UNAUTHORIZED
    );
  }

  const valid = await bcrypt.compare(data.password, proprietaire.password);
  if (!valid) {
    throw new AppError(
      "Identifiant ou mot de passe incorrect.",
      StatusCodes.UNAUTHORIZED
    );
  }

  const tokens = generateTokenPair(
    proprietaire.id,
    proprietaire.prenom,
    proprietaire.nom
  );

  await OwnerRepo.createRefreshToken({
    proprietaireId: proprietaire.id,
    tokenHash: hashToken(tokens.refreshToken),
    expiresAt: tokens.refreshTokenExpiresAt,
  });

  return {
    ...tokens,
    proprietaire: {
      id: proprietaire.id,
      prenom: proprietaire.prenom,
      nom: proprietaire.nom,
      telephone: proprietaire.telephone,
      email: proprietaire.email ?? undefined,
    },
  };
};

// ─── Refresh ──────────────────────────────────────────────────────────────────

export const refresh = async (
  oldRefreshToken: string
): Promise<OwnerTokenPair> => {
  let payload: JwtOwnerPayload;
  try {
    payload = jwt.verify(
      oldRefreshToken,
      getSecret("OWNER_REFRESH_TOKEN_SECRET")
    ) as JwtOwnerPayload;
  } catch {
    throw new AppError("Refresh token invalide ou expiré", StatusCodes.UNAUTHORIZED);
  }

  const tokenHash = hashToken(oldRefreshToken);
  const stored = await OwnerRepo.findRefreshToken(tokenHash);

  if (!stored) {
    await OwnerRepo.revokeAllRefreshTokens(payload.sub);
    throw new AppError("Token révoqué ou inconnu — session terminée", StatusCodes.UNAUTHORIZED);
  }

  if (stored.revokedAt !== null) {
    await OwnerRepo.revokeAllRefreshTokens(payload.sub);
    throw new AppError("Token déjà utilisé — compromission détectée", StatusCodes.UNAUTHORIZED);
  }

  if (stored.expiresAt < new Date()) {
    throw new AppError("Refresh token expiré", StatusCodes.UNAUTHORIZED);
  }

  await OwnerRepo.revokeRefreshToken(tokenHash);

  const proprietaire = await OwnerRepo.findById(payload.sub);
  if (!proprietaire) {
    throw new AppError("Compte introuvable", StatusCodes.UNAUTHORIZED);
  }

  const tokens = generateTokenPair(
    proprietaire.id,
    proprietaire.prenom,
    proprietaire.nom
  );

  await OwnerRepo.createRefreshToken({
    proprietaireId: proprietaire.id,
    tokenHash: hashToken(tokens.refreshToken),
    expiresAt: tokens.refreshTokenExpiresAt,
  });

  return tokens;
};

// ─── Logout ───────────────────────────────────────────────────────────────────

export const logout = async (refreshToken: string): Promise<void> => {
  const tokenHash = hashToken(refreshToken);
  const stored = await OwnerRepo.findRefreshToken(tokenHash);
  if (stored && !stored.revokedAt) {
    await OwnerRepo.revokeRefreshToken(tokenHash);
  }
};

// ─── Me ───────────────────────────────────────────────────────────────────────

export const me = async (id: string) => {
  const p = await OwnerRepo.findById(id);
  if (!p) throw new AppError("Compte introuvable", StatusCodes.UNAUTHORIZED);
  return {
    id: p.id,
    prenom: p.prenom,
    nom: p.nom,
    telephone: p.telephone,
    email: p.email ?? undefined,
  };
};
