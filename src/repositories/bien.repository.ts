import { prisma } from "../config/database.js";
import type { StatutAnnonce } from "../generated/prisma/enums.js";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface BienData {
  titre?: string | null;
  description?: string | null;
  typeLogementId?: string | null;
  typeTransactionId?: string | null;
  statutBienId?: string | null;
  proprietaireId: string;
  pays?: string | null;
  region?: string | null;
  ville?: string | null;
  quartier?: string | null;
  adresse?: string | null;
  pointRepere?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  surface?: number | null;
  nbChambres?: number | null;
  nbSdb?: number | null;
  nbSalons?: number | null;
  nbCuisines?: number | null;
  nbWc?: number | null;
  etage?: number | null;
  nbEtages?: number | null;
  meuble?: boolean;
  fumeurs?: boolean;
  animaux?: boolean;
  parking?: boolean;
  ascenseur?: boolean;
  prix?: number | null;
  frequencePaiement?: string | null;
  chargesIncluses?: boolean;
  caution?: number | null;
  disponibleLe?: Date | null;
  photos?: string[];
  statutAnnonce?: StatutAnnonce;
  equipementIds?: string[];
  meubles?: { meubleId: string; quantite: number }[];
}

// Keep backward compat alias
export type CreateBienData = BienData;

export interface EtablissementData {
  bienId: string;
  type: string;
  nom?: string | null;
  latitude: number;
  longitude: number;
  distance?: number | null;
}

// ─── Include helper ───────────────────────────────────────────────────────────

const BIEN_INCLUDE = {
  typeLogement: { select: { id: true, nom: true, slug: true } },
  typeTransaction: { select: { id: true, nom: true, slug: true } },
  statutBien: { select: { id: true, nom: true, slug: true } },
  equipements: {
    include: { equipement: { select: { id: true, nom: true } } },
  },
  meubles: {
    include: { meuble: { select: { id: true, nom: true } } },
  },
  proprietaire: {
    select: { id: true, prenom: true, nom: true, telephone: true, email: true },
  },
} as const;

// ─── Fonctions CRUD ───────────────────────────────────────────────────────────

export const createBien = async (data: BienData) => {
  const { equipementIds = [], meubles = [], ...bienData } = data;

  return prisma.bien.create({
    data: {
      ...bienData,
      equipements: equipementIds.length > 0
        ? { createMany: { data: equipementIds.map((equipementId) => ({ equipementId })), skipDuplicates: true } }
        : undefined,
      meubles: meubles.length > 0
        ? { createMany: { data: meubles, skipDuplicates: true } }
        : undefined,
    },
    include: BIEN_INCLUDE,
  });
};

export const updateBien = async (id: string, data: Partial<BienData>) => {
  const { equipementIds, meubles, proprietaireId: _pid, ...bienData } = data;

  // Delete and recreate equipements/meubles if provided
  if (equipementIds !== undefined || meubles !== undefined) {
    await prisma.$transaction([
      ...(equipementIds !== undefined
        ? [prisma.bienEquipement.deleteMany({ where: { bienId: id } })]
        : []),
      ...(meubles !== undefined
        ? [prisma.bienMeuble.deleteMany({ where: { bienId: id } })]
        : []),
    ]);
  }

  return prisma.bien.update({
    where: { id },
    data: {
      ...bienData,
      ...(equipementIds !== undefined && equipementIds.length > 0
        ? { equipements: { createMany: { data: equipementIds.map((equipementId) => ({ equipementId })), skipDuplicates: true } } }
        : {}),
      ...(meubles !== undefined && meubles.length > 0
        ? { meubles: { createMany: { data: meubles, skipDuplicates: true } } }
        : {}),
    },
    include: BIEN_INCLUDE,
  });
};

export const deleteBienById = async (id: string) => {
  return prisma.bien.delete({ where: { id } });
};

export const getDraftByProprietaire = async (proprietaireId: string) => {
  return prisma.bien.findFirst({
    where: { proprietaireId, statutAnnonce: "BROUILLON" },
    include: BIEN_INCLUDE,
  });
};

export const updateStatutAnnonce = async (
  id: string,
  statutAnnonce: StatutAnnonce,
  noteAdmin?: string
) => {
  return prisma.bien.update({
    where: { id },
    data: { statutAnnonce, ...(noteAdmin !== undefined ? { noteAdmin } : {}) },
    include: BIEN_INCLUDE,
  });
};

export const createEtablissements = async (items: EtablissementData[]) => {
  if (items.length === 0) return;
  return prisma.etablissement.createMany({ data: items });
};

export const getBiensByProprietaire = async (proprietaireId: string) => {
  return prisma.bien.findMany({
    where: { proprietaireId },
    orderBy: { createdAt: "desc" },
    include: {
      typeLogement: { select: { id: true, nom: true, slug: true } },
      typeTransaction: { select: { id: true, nom: true, slug: true } },
      statutBien: { select: { id: true, nom: true, slug: true } },
    },
  });
};

export const getBienById = async (id: string) => {
  return prisma.bien.findUnique({
    where: { id },
    include: {
      typeLogement: true,
      typeTransaction: true,
      statutBien: true,
      equipements: {
        include: { equipement: { include: { categorie: true } } },
      },
      meubles: {
        include: { meuble: { include: { categorie: true } } },
      },
      etablissements: true,
      proprietaire: {
        select: { id: true, prenom: true, nom: true, telephone: true, email: true },
      },
    },
  });
};

// ─── Admin — annonces ─────────────────────────────────────────────────────────

export const countAnnoncesPending = async () => {
  return prisma.bien.count({ where: { statutAnnonce: "EN_ATTENTE" } });
};

export const getAnnoncesCounts = async () => {
  const [brouillon, en_attente, publie, rejete] = await prisma.$transaction([
    prisma.bien.count({ where: { statutAnnonce: "BROUILLON" } }),
    prisma.bien.count({ where: { statutAnnonce: "EN_ATTENTE" } }),
    prisma.bien.count({ where: { statutAnnonce: "PUBLIE" } }),
    prisma.bien.count({ where: { statutAnnonce: "REJETE" } }),
  ]);
  return { BROUILLON: brouillon, EN_ATTENTE: en_attente, PUBLIE: publie, REJETE: rejete };
};

export const getAnnonces = async (params: {
  statut?: StatutAnnonce;
  page?: number;
  limit?: number;
}) => {
  const page = params.page ?? 1;
  const limit = params.limit ?? 20;
  const skip = (page - 1) * limit;

  const where = params.statut ? { statutAnnonce: params.statut } : {};

  const [items, total] = await prisma.$transaction([
    prisma.bien.findMany({
      where,
      skip,
      take: limit,
      orderBy: { updatedAt: "desc" },
      include: {
        typeLogement: { select: { id: true, nom: true, slug: true } },
        typeTransaction: { select: { id: true, nom: true, slug: true } },
        statutBien: { select: { id: true, nom: true, slug: true } },
        proprietaire: {
          select: { id: true, prenom: true, nom: true, telephone: true, email: true },
        },
      },
    }),
    prisma.bien.count({ where }),
  ]);

  return { items, total, page, limit, totalPages: Math.ceil(total / limit) };
};

// ─── Public — dernières annonces (pour page d'accueil) ────────────────────────

export const getDernieresAnnonces = async (limit: number = 8) => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const biens = await prisma.bien.findMany({
    where: { statutAnnonce: "PUBLIE" },
    take: limit,
    orderBy: { createdAt: "desc" },
    include: {
      typeLogement: { select: { id: true, nom: true, slug: true } },
      typeTransaction: { select: { id: true, nom: true, slug: true } },
      statutBien: { select: { id: true, nom: true, slug: true } },
    },
  });

  // Ajouter un flag "isNew" pour les annonces publiées il y a moins de 7 jours
  return biens.map((bien) => ({
    ...bien,
    isNew: bien.createdAt >= sevenDaysAgo,
  }));
};
