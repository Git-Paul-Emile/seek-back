import { prisma } from "../config/database.js";
import type { StatutBail } from "../generated/prisma/enums.js";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface CreateBailData {
  bienId: string;
  locataireId: string;
  proprietaireId: string;
  typeBail?: string | null;
  dateDebutBail: Date;
  dateFinBail?: Date | null;
  renouvellement?: boolean;
  montantLoyer: number;
  montantCaution?: number | null;
  cautionVersee?: boolean;
  jourLimitePaiement?: number | null;
  frequencePaiement?: string | null;
}

// ─── Include helper ───────────────────────────────────────────────────────────

const BAIL_INCLUDE = {
  locataire: {
    select: {
      id: true,
      nom: true,
      prenom: true,
      telephone: true,
      email: true,
      statut: true,
      nbOccupants: true,
      presenceEnfants: true,
    },
  },
  bien: {
    select: {
      id: true,
      titre: true,
      ville: true,
      quartier: true,
      prix: true,
      caution: true,
      frequencePaiement: true,
      typeTransaction: { select: { slug: true } },
    },
  },
} as const;

// ─── CRUD ─────────────────────────────────────────────────────────────────────

export const create = async (data: CreateBailData) => {
  return prisma.bailLocation.create({
    data,
    include: BAIL_INCLUDE,
  });
};

export const findById = async (id: string) => {
  return prisma.bailLocation.findUnique({
    where: { id },
    include: BAIL_INCLUDE,
  });
};

export const findActifByBien = async (bienId: string) => {
  return prisma.bailLocation.findFirst({
    where: { bienId, statut: "ACTIF" },
    include: BAIL_INCLUDE,
  });
};

export const findByBien = async (bienId: string) => {
  return prisma.bailLocation.findMany({
    where: { bienId },
    include: BAIL_INCLUDE,
    orderBy: { createdAt: "desc" },
  });
};

export const updateStatut = async (id: string, statut: StatutBail) => {
  return prisma.bailLocation.update({
    where: { id },
    data: { statut },
    include: BAIL_INCLUDE,
  });
};

export const prolonger = async (id: string, dateFinBail: Date) => {
  return prisma.bailLocation.update({
    where: { id },
    data: { dateFinBail },
    include: BAIL_INCLUDE,
  });
};

export const remove = async (id: string) => {
  return prisma.bailLocation.delete({ where: { id } });
};

// ─── Statut bien helper ───────────────────────────────────────────────────────

export const getStatutBienBySlug = async (slug: string) => {
  return prisma.statutBien.findUnique({ where: { slug } });
};

export const updateBienStatut = async (bienId: string, statutBienId: string) => {
  return prisma.bien.update({
    where: { id: bienId },
    data: { statutBienId },
  });
};
