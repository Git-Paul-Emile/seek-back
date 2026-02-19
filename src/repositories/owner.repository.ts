import { prisma } from "../config/database.js";

// ─── Proprietaire ────────────────────────────────────────────────────────────

export const findByTelephone = (telephone: string) =>
  prisma.proprietaire.findUnique({ where: { telephone } });

export const findByEmail = (email: string) =>
  prisma.proprietaire.findUnique({ where: { email } });

export const findById = (id: string) =>
  prisma.proprietaire.findUnique({ where: { id } });

export const create = (data: {
  prenom: string;
  nom: string;
  sexe?: string | null;
  telephone: string;
  email?: string | null;
  password: string;
}) => prisma.proprietaire.create({ data });

// ─── ProprietaireRefreshToken ─────────────────────────────────────────────────

export const createRefreshToken = (data: {
  proprietaireId: string;
  tokenHash: string;
  expiresAt: Date;
}) => prisma.proprietaireRefreshToken.create({ data });

export const findRefreshToken = (tokenHash: string) =>
  prisma.proprietaireRefreshToken.findUnique({ where: { tokenHash } });

export const revokeRefreshToken = (tokenHash: string) =>
  prisma.proprietaireRefreshToken.update({
    where: { tokenHash },
    data: { revokedAt: new Date() },
  });

export const revokeAllRefreshTokens = (proprietaireId: string) =>
  prisma.proprietaireRefreshToken.updateMany({
    where: { proprietaireId, revokedAt: null },
    data: { revokedAt: new Date() },
  });
