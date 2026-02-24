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
      proprietaire: {
        select: { id: true, prenom: true, nom: true, telephone: true, email: true },
      },
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
  const [brouillon, en_attente, publie, rejete, annule] = await prisma.$transaction([
    prisma.bien.count({ where: { statutAnnonce: "BROUILLON" } }),
    prisma.bien.count({ where: { statutAnnonce: "EN_ATTENTE" } }),
    prisma.bien.count({ where: { statutAnnonce: "PUBLIE" } }),
    prisma.bien.count({ where: { statutAnnonce: "REJETE" } }),
    prisma.bien.count({ where: { statutAnnonce: "ANNULE" as any } }),
  ]);
  return { BROUILLON: brouillon, EN_ATTENTE: en_attente, PUBLIE: publie, REJETE: rejete, ANNULE: annule };
};

export const getAnnonces = async (params: {
  statut?: StatutAnnonce;
  page?: number;
  limit?: number;
  includeAnnonule?: boolean;
}) => {
  const page = params.page ?? 1;
  const limit = params.limit ?? 20;
  const skip = (page - 1) * limit;

  // Si un filtre de statut spécifique est demandé, l'utiliser tel quel
  // Sinon, exclure les annulées par défaut (pour la vue "Tous")
  let where: any = {};
  if (params.statut) {
    where.statutAnnonce = params.statut;
  } else if (!params.includeAnnonule) {
    // Pas de filtre et pas explicitement demandé - exclure les annulées
    where.statutAnnonce = { not: "ANNULE" as any };
  }

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
    where: { 
      statutAnnonce: "PUBLIE",
      // Exclure automatiquement les annonces annulées
    },
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

// ─── Public — annonce publiée par ID ─────────────────────────────────────────────

export const getAnnoncePublieById = async (id: string) => {
  return prisma.bien.findFirst({
    where: { 
      id, 
      // Exclure les annonces annulées - elles ne doivent pas être visibles
      statutAnnonce: { not: "ANNULE" as any }
    },
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

// ─── Public — annonces similaires avec système de score ───────────────────────

// Type pour un bien avec les relations de base
export interface BienWithRelations {
  id: string;
  titre: string | null;
  description: string | null;
  typeLogementId: string | null;
  typeTransactionId: string | null;
  statutBienId: string | null;
  proprietaireId: string;
  pays: string | null;
  region: string | null;
  ville: string | null;
  quartier: string | null;
  adresse: string | null;
  latitude: number | null;
  longitude: number | null;
  surface: number | null;
  nbChambres: number | null;
  nbSdb: number | null;
  prix: number | null;
  photos: string[];
  statutAnnonce: string;
  createdAt: Date;
  updatedAt: Date;
  typeLogement: { id: string; nom: string; slug: string } | null;
  typeTransaction: { id: string; nom: string; slug: string } | null;
  statutBien: { id: string; nom: string; slug: string } | null;
}

interface SimilarityScore {
  bien: BienWithRelations;
  score: number;
}

/**
 * Calcule le score de similarité entre deux biens
 * 
 * Critères de score:
 * - Même type de logement: +30 points
 * - Même quartier: +25 points  
 * - Prix ±20%: +25 points
 * - Prix ±10% supplémentaire: +15 points
 * - Même transaction (vente/location): +20 points
 */
function calculateSimilarityScore(
  bien: BienWithRelations,
  referenceBien: BienWithRelations
): number {
  if (!bien || !referenceBien) return 0;

  let score = 0;

  // Même type de logement (+30 points)
  if (bien.typeLogementId && referenceBien.typeLogementId && 
      bien.typeLogementId === referenceBien.typeLogementId) {
    score += 30;
  }

  // Même quartier (+25 points)
  if (bien.quartier && referenceBien.quartier &&
      bien.quartier.toLowerCase().trim() === referenceBien.quartier.toLowerCase().trim()) {
    score += 25;
  }

  // Prix dans la plage ±20% (+25 points)
  if (bien.prix && referenceBien.prix && referenceBien.prix > 0) {
    const priceDiff = Math.abs(bien.prix - referenceBien.prix) / referenceBien.prix;
    
    if (priceDiff <= 0.20) {
      score += 25;
    } else if (priceDiff <= 0.50) {
      // Prix entre 20% et 50% de différence (+10 points)
      score += 10;
    }
    
    // Bonus supplémentaire pour prix très proche ±10% (+15 points)
    if (priceDiff <= 0.10) {
      score += 15;
    }
  }

  // Même type de transaction (vente/location) (+20 points)
  if (bien.typeTransactionId && referenceBien.typeTransactionId &&
      bien.typeTransactionId === referenceBien.typeTransactionId) {
    score += 20;
  }

  return score;
}

export const getAnnoncesSimilairesWithScore = async (
  bienId: string,
  limit: number = 4
): Promise<BienWithRelations[]> => {
  // Récupérer le bien de référence (version légère)
  const referenceBien = await prisma.bien.findUnique({
    where: { id: bienId },
    select: {
      id: true,
      typeLogementId: true,
      typeTransactionId: true,
      ville: true,
      quartier: true,
      prix: true,
    },
  });
  
  if (!referenceBien) {
    return [];
  }

  // Liste des IDs à exclure (le bien actuel)
  const excludedIds = [bienId];

  // Requête principale: même ville et même transaction (exclut automatiquement les annulées)
  let candidates = await prisma.bien.findMany({
    where: {
      statutAnnonce: "PUBLIE",
      id: { notIn: excludedIds },
      ville: referenceBien.ville,
      typeTransactionId: referenceBien.typeTransactionId,
    },
    include: {
      typeLogement: { select: { id: true, nom: true, slug: true } },
      typeTransaction: { select: { id: true, nom: true, slug: true } },
      statutBien: { select: { id: true, nom: true, slug: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  // Ajouter les IDs trouvés à la liste d'exclusion
  const foundIds = [...excludedIds, ...candidates.map(b => b.id)];

  // Si pas assez de résultats, élargir: même transaction mais autre ville
  if (candidates.length < limit) {
    const remainingLimit = limit - candidates.length;
    const otherCandidates = await prisma.bien.findMany({
      where: {
        statutAnnonce: "PUBLIE",
        id: { notIn: foundIds },
        typeTransactionId: referenceBien.typeTransactionId,
        // Exclure si ville définie mais différente
        ...(referenceBien.ville ? {
          NOT: {
            ville: referenceBien.ville
          }
        } : {})
      },
      include: {
        typeLogement: { select: { id: true, nom: true, slug: true } },
        typeTransaction: { select: { id: true, nom: true, slug: true } },
        statutBien: { select: { id: true, nom: true, slug: true } },
      },
      orderBy: { createdAt: "desc" },
      take: remainingLimit * 2,
    });
    
    candidates = [...candidates, ...otherCandidates];
    foundIds.push(...otherCandidates.map(b => b.id));
  }

  // Si toujours pas assez, prendre d'autres transactions de la même ville
  if (candidates.length < limit) {
    const remainingLimit = limit - candidates.length;
    const fallbackCandidates = await prisma.bien.findMany({
      where: {
        statutAnnonce: "PUBLIE",
        id: { notIn: foundIds },
        ville: referenceBien.ville,
      },
      include: {
        typeLogement: { select: { id: true, nom: true, slug: true } },
        typeTransaction: { select: { id: true, nom: true, slug: true } },
        statutBien: { select: { id: true, nom: true, slug: true } },
      },
      orderBy: { createdAt: "desc" },
      take: remainingLimit * 2,
    });
    
    candidates = [...candidates, ...fallbackCandidates];
  }

  // Calculer le score pour chaque candidat
  const scoredCandidates: SimilarityScore[] = candidates.map(bien => ({
    bien: bien as BienWithRelations,
    score: calculateSimilarityScore(bien as BienWithRelations, referenceBien as BienWithRelations),
  }));

  // Trier par score décroissant et prendre les meilleurs
  scoredCandidates.sort((a, b) => b.score - a.score);

  // Retourner uniquement les biens avec un score > 0 (pertinents)
  const relevantResults = scoredCandidates
    .filter(scored => scored.score > 0)
    .slice(0, limit)
    .map(scored => scored.bien);

  return relevantResults;
};

// Ancienne méthode conservée pour compatibilité (délègue vers la nouvelle)
export const getAnnoncesSimilaires = async (
  bienId: string,
  _typeLogementId: string | null,
  _typeTransactionId: string | null,
  _ville: string | null,
  limit: number = 4
) => {
  return getAnnoncesSimilairesWithScore(bienId, limit);
};
