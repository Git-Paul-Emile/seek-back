import { prisma } from "../config/database.js";
import type { StatutLocataire, TypePieceIdentite } from "../generated/prisma/enums.js";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface CreateLocataireData {
  proprietaireId: string;
  nom: string;
  prenom: string;
  telephone: string;
  email?: string | null;
  nbOccupants?: number;
  presenceEnfants?: boolean;
  activationToken: string;
  tokenExpiresAt: Date;
}

export interface UpdateLocataireOwnerData {
  nom?: string;
  prenom?: string;
  telephone?: string;
  email?: string | null;
  nbOccupants?: number;
  presenceEnfants?: boolean;
}

export interface UpdateLocataireIdentiteData {
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
  password?: string;
  statut?: StatutLocataire;
  activationToken?: string | null;
  tokenExpiresAt?: Date | null;
}

// ─── Include helper ───────────────────────────────────────────────────────────

const LOCATAIRE_SELECT = {
  id: true,
  proprietaireId: true,
  nom: true,
  prenom: true,
  telephone: true,
  email: true,
  nbOccupants: true,
  presenceEnfants: true,
  dateNaissance: true,
  lieuNaissance: true,
  nationalite: true,
  sexe: true,
  numPieceIdentite: true,
  typePiece: true,
  dateDelivrance: true,
  dateExpiration: true,
  autoriteDelivrance: true,
  situationProfessionnelle: true,
  statut: true,
  activationToken: true,
  tokenExpiresAt: true,
  createdAt: true,
  updatedAt: true,
} as const;

// ─── CRUD ─────────────────────────────────────────────────────────────────────

export const create = async (data: CreateLocataireData) => {
  return prisma.locataire.create({
    data,
    select: LOCATAIRE_SELECT,
  });
};

export const findById = async (id: string) => {
  return prisma.locataire.findUnique({
    where: { id },
    select: {
      ...LOCATAIRE_SELECT,
      password: true,
      bails: {
        include: {
          bien: {
            select: { id: true, titre: true, ville: true, quartier: true },
          },
          contrat: {
            select: { id: true, statut: true },
          },
        },
        orderBy: { createdAt: "desc" },
      },
    },
  });
};

export const findByIdWithPassword = async (id: string) => {
  return prisma.locataire.findUnique({ where: { id } });
};

export const findByActivationToken = async (token: string) => {
  return prisma.locataire.findUnique({ where: { activationToken: token } });
};

export const findByTelephone = async (telephone: string) => {
  return prisma.locataire.findFirst({ where: { telephone } });
};

export const findByEmail = async (email: string) => {
  return prisma.locataire.findFirst({ where: { email } });
};

export const findByProprietaire = async (proprietaireId: string) => {
  return prisma.locataire.findMany({
    where: { proprietaireId },
    select: {
      ...LOCATAIRE_SELECT,
      bails: {
        where: { statut: "ACTIF" },
        select: {
          id: true,
          statut: true,
          dateDebutBail: true,
          dateFinBail: true,
          montantLoyer: true,
          bien: { select: { id: true, titre: true, ville: true } },
          contrat: {
            select: { id: true, statut: true },
          },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};

export const update = async (
  id: string,
  data: UpdateLocataireOwnerData | UpdateLocataireIdentiteData
) => {
  return prisma.locataire.update({
    where: { id },
    data,
    select: LOCATAIRE_SELECT,
  });
};

export const remove = async (id: string) => {
  return prisma.$transaction(async (tx) => {
    // Récupère les IDs des baux pour supprimer les contrats liés
    const bails = await tx.bailLocation.findMany({
      where: { locataireId: id },
      select: { id: true },
    });
    const bailIds = bails.map((b) => b.id);
    if (bailIds.length > 0) {
      await tx.contrat.deleteMany({ where: { bailId: { in: bailIds } } });
    }
    // Supprime tokens et baux manuellement (protection si CASCADE non configuré en DB)
    await tx.locataireRefreshToken.deleteMany({ where: { locataireId: id } });
    await tx.bailLocation.deleteMany({ where: { locataireId: id } });
    return tx.locataire.delete({ where: { id } });
  });
};

// ─── Refresh tokens ───────────────────────────────────────────────────────────

export const createRefreshToken = async (data: {
  locataireId: string;
  tokenHash: string;
  expiresAt: Date;
}) => {
  return prisma.locataireRefreshToken.create({ data });
};

export const findRefreshToken = async (tokenHash: string) => {
  return prisma.locataireRefreshToken.findUnique({ where: { tokenHash } });
};

export const revokeRefreshToken = async (tokenHash: string) => {
  return prisma.locataireRefreshToken.update({
    where: { tokenHash },
    data: { revokedAt: new Date() },
  });
};

export const revokeAllRefreshTokens = async (locataireId: string) => {
  return prisma.locataireRefreshToken.updateMany({
    where: { locataireId, revokedAt: null },
    data: { revokedAt: new Date() },
  });
};
