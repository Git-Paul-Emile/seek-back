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
    select: { id: true, prenom: true, nom: true, telephone: true, email: true, statutVerification: true },
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

// ─── Révision d'une annonce publiée ──────────────────────────────────────────

export interface PendingRevisionData {
  titre?: string | null;
  description?: string | null;
  typeLogementId?: string | null;
  typeTransactionId?: string | null;
  statutBienId?: string | null;
  pays?: string | null;
  region?: string | null;
  ville?: string | null;
  quartier?: string | null;
  adresse?: string | null;
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
  disponibleLe?: string | null;
  photos?: string[];
  equipementIds?: string[];
  meubles?: { meubleId: string; quantite: number }[];
  // Resolved labels for display
  typeLogement?: { nom: string; slug: string } | null;
  typeTransaction?: { nom: string; slug: string } | null;
  statutBien?: { nom: string; slug: string } | null;
}

/** Saves a pending revision on a PUBLIE bien without changing the public-facing data */
export const soumettreRevision = async (id: string, revisionData: PendingRevisionData) => {
  return prisma.bien.update({
    where: { id },
    data: {
      hasPendingRevision: true,
      pendingRevision: revisionData as any,
    },
    include: BIEN_INCLUDE,
  });
};

/** Admin approves a pending revision — applies revision data to main fields */
export const approuverRevision = async (id: string) => {
  const bien = await prisma.bien.findUnique({ where: { id } });
  if (!bien || !bien.pendingRevision) {
    throw new Error("Pas de révision en attente");
  }

  const rev = bien.pendingRevision as PendingRevisionData;
  const equipementIds = rev.equipementIds ?? [];
  const meubles = rev.meubles ?? [];

  // Delete old relations
  await prisma.$transaction([
    prisma.bienEquipement.deleteMany({ where: { bienId: id } }),
    prisma.bienMeuble.deleteMany({ where: { bienId: id } }),
  ]);

  const { equipementIds: _eids, meubles: _mb, typeLogement: _tl, typeTransaction: _tt, statutBien: _sb, disponibleLe, ...rest } = rev;

  return prisma.bien.update({
    where: { id },
    data: {
      ...rest,
      disponibleLe: disponibleLe ? new Date(disponibleLe) : null,
      statutAnnonce: "PUBLIE",
      hasPendingRevision: false,
      pendingRevision: null as any,
      noteAdmin: null,
      ...(equipementIds.length > 0
        ? { equipements: { createMany: { data: equipementIds.map((equipementId) => ({ equipementId })), skipDuplicates: true } } }
        : {}),
      ...(meubles.length > 0
        ? { meubles: { createMany: { data: meubles, skipDuplicates: true } } }
        : {}),
    },
    include: BIEN_INCLUDE,
  });
};

/** Admin rejects a pending revision — discards revision, keeps current PUBLIE data */
export const rejeterRevision = async (id: string, noteAdmin?: string) => {
  return prisma.bien.update({
    where: { id },
    data: {
      hasPendingRevision: false,
      pendingRevision: null as any,
      noteAdmin: noteAdmin ?? null,
    },
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
        select: { id: true, prenom: true, nom: true, telephone: true, email: true, statutVerification: true },
      },
      bails: { where: { statut: "ACTIF" }, select: { id: true } },
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
        select: { id: true, prenom: true, nom: true, telephone: true, email: true, statutVerification: true },
      },
    },
  });
};

// ─── Admin — annonces ─────────────────────────────────────────────────────────

export const countAnnoncesPending = async () => {
  return prisma.bien.count({
    where: {
      OR: [
        { statutAnnonce: "EN_ATTENTE" },
        { statutAnnonce: "PUBLIE", hasPendingRevision: true },
      ],
    },
  });
};

export const getAnnoncesCounts = async () => {
  const [en_attente, revisions, publie, rejete, annule] = await prisma.$transaction([
    prisma.bien.count({ where: { statutAnnonce: "EN_ATTENTE" } }),
    prisma.bien.count({ where: { statutAnnonce: "PUBLIE", hasPendingRevision: true } }),
    prisma.bien.count({ where: { statutAnnonce: "PUBLIE", hasPendingRevision: false } }),
    prisma.bien.count({ where: { statutAnnonce: "REJETE" } }),
    prisma.bien.count({ where: { statutAnnonce: "ANNULE" as any } }),
  ]);
  // EN_ATTENTE count includes PUBLIE biens with pending revisions
  return { EN_ATTENTE: en_attente + revisions, PUBLIE: publie, REJETE: rejete, ANNULE: annule };
};

export const getAnnonces = async (params: {
  statut?: StatutAnnonce;
  page?: number;
  limit?: number;
  includeAnnonule?: boolean;
  includeBrouillon?: boolean;
}) => {
  const page = params.page ?? 1;
  const limit = params.limit ?? 20;
  const skip = (page - 1) * limit;

  // Par défaut, exclure les brouillons (ce sont des brouillons des propriétaires)
  // On n'affiche les brouillons que si explicitement demandé via includeBrouillon
  let where: any = {};

  if (params.statut === "EN_ATTENTE") {
    // EN_ATTENTE inclut aussi les PUBLIE avec révision en attente
    where.OR = [
      { statutAnnonce: "EN_ATTENTE" },
      { statutAnnonce: "PUBLIE", hasPendingRevision: true },
    ];
  } else if (params.statut === "PUBLIE") {
    // PUBLIE n'inclut que les biens publiés sans révision en attente
    where.statutAnnonce = "PUBLIE";
    where.hasPendingRevision = false;
  } else if (params.statut) {
    where.statutAnnonce = params.statut;
  } else {
    // Pas de filtre de statut - exclure annulés et brouillons par défaut
    where.statutAnnonce = { notIn: ["ANNULE" as any, "BROUILLON" as any] };
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
          select: { id: true, prenom: true, nom: true, telephone: true, email: true, statutVerification: true },
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
      actif: true,
    },
    take: limit,
    orderBy: { createdAt: "desc" },
    include: {
      typeLogement: { select: { id: true, nom: true, slug: true } },
      typeTransaction: { select: { id: true, nom: true, slug: true } },
      statutBien: { select: { id: true, nom: true, slug: true } },
      proprietaire: {
        select: { id: true, prenom: true, nom: true, telephone: true, email: true, statutVerification: true },
      },
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
      statutAnnonce: "PUBLIE",
      actif: true,
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
        select: { id: true, prenom: true, nom: true, telephone: true, email: true, statutVerification: true },
      },
    },
  });
};

// ─── Public — lieux distincts : quartiers depuis la table Quartier, villes depuis Ville ──

export const getDistinctLieux = async () => {
  const [quartierRows, villeRows] = await prisma.$transaction([
    prisma.quartier.findMany({
      select: { nom: true },
      orderBy: { nom: "asc" },
    }),
    prisma.ville.findMany({
      select: { nom: true },
      orderBy: { nom: "asc" },
    }),
  ]);
  return {
    quartiers: quartierRows.map((r) => r.nom),
    villes:    villeRows.map((r) => r.nom),
  };
};

// ─── Public — recherche avec filtres combinés ─────────────────────────────────

export const searchAnnoncePubliques = async (params: {
  quartier?: string;
  typeLogementSlug?: string;
  typeTransactionSlug?: string;
  prixMin?: number;
  prixMax?: number;
  nbChambresMin?: number;
  surfaceMin?: number;
  surfaceMax?: number;
  meuble?: boolean;
  parking?: boolean;
  ascenseur?: boolean;
  sortBy?: "prix" | "createdAt";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}) => {
  const page = Math.max(params.page ?? 1, 1);
  const limit = Math.min(params.limit ?? 12, 50);
  const skip = (page - 1) * limit;

  const where: any = { statutAnnonce: "PUBLIE", actif: true };

  if (params.quartier?.trim()) {
    const q = params.quartier.trim();
    where.OR = [
      { quartier: { contains: q, mode: "insensitive" } },
      { ville:    { contains: q, mode: "insensitive" } },
      { adresse:  { contains: q, mode: "insensitive" } },
      { region:   { contains: q, mode: "insensitive" } },
    ];
  }

  if (params.typeLogementSlug) {
    where.typeLogement = { slug: params.typeLogementSlug };
  }

  if (params.typeTransactionSlug) {
    where.typeTransaction = { slug: params.typeTransactionSlug };
  }

  if (params.prixMin !== undefined || params.prixMax !== undefined) {
    where.prix = {};
    if (params.prixMin !== undefined) where.prix.gte = params.prixMin;
    if (params.prixMax !== undefined) where.prix.lte = params.prixMax;
  }

  if (params.nbChambresMin !== undefined) {
    where.nbChambres = { gte: params.nbChambresMin };
  }

  if (params.surfaceMin !== undefined || params.surfaceMax !== undefined) {
    where.surface = {};
    if (params.surfaceMin !== undefined) where.surface.gte = params.surfaceMin;
    if (params.surfaceMax !== undefined) where.surface.lte = params.surfaceMax;
  }

  if (params.meuble === true)    where.meuble    = true;
  if (params.parking === true)   where.parking   = true;
  if (params.ascenseur === true) where.ascenseur = true;

  const sortField = params.sortBy ?? "createdAt";
  const sortDir   = params.sortOrder ?? "desc";
  // For prix sort, nulls last: put null prices at end regardless of direction
  const orderBy = sortField === "prix"
    ? [{ prix: { sort: sortDir, nulls: "last" as const } }]
    : [{ createdAt: sortDir as "asc" | "desc" }];

  const [items, total] = await prisma.$transaction([
    prisma.bien.findMany({
      where,
      skip,
      take: limit,
      orderBy,
      include: {
        typeLogement:    { select: { id: true, nom: true, slug: true } },
        typeTransaction: { select: { id: true, nom: true, slug: true } },
        statutBien:      { select: { id: true, nom: true, slug: true } },
        proprietaire:   { select: { id: true, prenom: true, nom: true, telephone: true, email: true, statutVerification: true } },
      },
    }),
    prisma.bien.count({ where }),
  ]);

  return { items, total, page, limit, totalPages: Math.ceil(total / limit) };
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
 * Score de similarité — adapté aux marchés immobiliers type Seek
 *
 * Critères (score max ≈ 135) :
 *   +35  même type de transaction (vente / location)  — fondamental
 *   +30  même type de logement                        — très important
 *   +20  même quartier                                — fort signal géographique
 *   +10  même ville (si quartier différent)           — signal géographique modéré
 *   +20  prix ±15 %                                   — très proche
 *   +12  prix ±30 %                                   — proche
 *    +5  prix ±50 %                                   — acceptable
 *   +10  surface ±30 %                                — physiquement comparable
 *   +10  nb chambres identique                        — même configuration
 *    +5  nb chambres ±1                               — configuration proche
 *
 * Seuil de pertinence : >= 35 (au moins même type de transaction)
 */
function calculateSimilarityScore(
  bien: BienWithRelations,
  referenceBien: BienWithRelations
): number {
  if (!bien || !referenceBien) return 0;

  let score = 0;

  // 1. Même type de transaction — FONDAMENTAL
  if (bien.typeTransactionId && referenceBien.typeTransactionId &&
      bien.typeTransactionId === referenceBien.typeTransactionId) {
    score += 35;
  }

  // 2. Même type de logement
  if (bien.typeLogementId && referenceBien.typeLogementId &&
      bien.typeLogementId === referenceBien.typeLogementId) {
    score += 30;
  }

  // 3. Géographie
  const sameVille = bien.ville && referenceBien.ville &&
    bien.ville.toLowerCase().trim() === referenceBien.ville.toLowerCase().trim();
  const sameQuartier = bien.quartier && referenceBien.quartier &&
    bien.quartier.toLowerCase().trim() === referenceBien.quartier.toLowerCase().trim();

  if (sameQuartier) {
    score += 20; // quartier identique — très fort signal
  } else if (sameVille) {
    score += 10; // même ville, quartiers différents
  }

  // 4. Prix similaire
  if (bien.prix && referenceBien.prix && referenceBien.prix > 0) {
    const priceDiff = Math.abs(bien.prix - referenceBien.prix) / referenceBien.prix;
    if (priceDiff <= 0.15) {
      score += 20;
    } else if (priceDiff <= 0.30) {
      score += 12;
    } else if (priceDiff <= 0.50) {
      score += 5;
    }
  }

  // 5. Surface similaire ±30 %
  if (bien.surface && referenceBien.surface && referenceBien.surface > 0) {
    const surfaceDiff = Math.abs(bien.surface - referenceBien.surface) / referenceBien.surface;
    if (surfaceDiff <= 0.30) {
      score += 10;
    }
  }

  // 6. Nombre de chambres
  if (bien.nbChambres != null && referenceBien.nbChambres != null) {
    const chambreDiff = Math.abs(bien.nbChambres - referenceBien.nbChambres);
    if (chambreDiff === 0) {
      score += 10;
    } else if (chambreDiff === 1) {
      score += 5;
    }
  }

  return score;
}

// Score minimum pour qu'une annonce soit considérée pertinente
const MIN_SIMILARITY_SCORE = 35; // au moins même type de transaction

export const getAnnoncesSimilairesWithScore = async (
  bienId: string,
  limit: number = 4
): Promise<BienWithRelations[]> => {
  // Récupérer le bien de référence avec tous les champs nécessaires au score
  const referenceBien = await prisma.bien.findUnique({
    where: { id: bienId },
    select: {
      id: true,
      typeLogementId: true,
      typeTransactionId: true,
      ville: true,
      quartier: true,
      prix: true,
      surface: true,
      nbChambres: true,
    },
  });

  if (!referenceBien) {
    return [];
  }

  const excludedIds = [bienId];
  const POOL_FACTOR = 4; // candidats à évaluer par slot demandé

  // ── Niveau 1 : même ville + même transaction + même type de logement ──────
  let candidates = await prisma.bien.findMany({
    where: {
      statutAnnonce: "PUBLIE",
      actif: true,
      id: { notIn: excludedIds },
      ville: referenceBien.ville,
      typeTransactionId: referenceBien.typeTransactionId,
      typeLogementId: referenceBien.typeLogementId,
    },
    include: {
      typeLogement: { select: { id: true, nom: true, slug: true } },
      typeTransaction: { select: { id: true, nom: true, slug: true } },
      statutBien: { select: { id: true, nom: true, slug: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  const foundIds = [...excludedIds, ...candidates.map(b => b.id)];

  // ── Niveau 2 : même ville + même transaction (type logement libre) ─────────
  if (candidates.length < limit * POOL_FACTOR) {
    const extras = await prisma.bien.findMany({
      where: {
        statutAnnonce: "PUBLIE",
        actif: true,
        id: { notIn: foundIds },
        ville: referenceBien.ville,
        typeTransactionId: referenceBien.typeTransactionId,
      },
      include: {
        typeLogement: { select: { id: true, nom: true, slug: true } },
        typeTransaction: { select: { id: true, nom: true, slug: true } },
        statutBien: { select: { id: true, nom: true, slug: true } },
      },
      orderBy: { createdAt: "desc" },
      take: limit * POOL_FACTOR,
    });
    candidates = [...candidates, ...extras];
    foundIds.push(...extras.map(b => b.id));
  }

  // ── Niveau 3 : même transaction + même type logement (autre ville) ────────
  if (candidates.length < limit * POOL_FACTOR) {
    const extras = await prisma.bien.findMany({
      where: {
        statutAnnonce: "PUBLIE",
        actif: true,
        id: { notIn: foundIds },
        typeTransactionId: referenceBien.typeTransactionId,
        typeLogementId: referenceBien.typeLogementId,
        ...(referenceBien.ville ? { NOT: { ville: referenceBien.ville } } : {}),
      },
      include: {
        typeLogement: { select: { id: true, nom: true, slug: true } },
        typeTransaction: { select: { id: true, nom: true, slug: true } },
        statutBien: { select: { id: true, nom: true, slug: true } },
      },
      orderBy: { createdAt: "desc" },
      take: limit * POOL_FACTOR,
    });
    candidates = [...candidates, ...extras];
  }

  // ── Scoring + tri ─────────────────────────────────────────────────────────
  const scored: SimilarityScore[] = candidates.map(b => ({
    bien: b as BienWithRelations,
    score: calculateSimilarityScore(b as BienWithRelations, referenceBien as BienWithRelations),
  }));

  scored.sort((a, b) => b.score - a.score);

  return scored
    .filter(s => s.score >= MIN_SIMILARITY_SCORE)
    .slice(0, limit)
    .map(s => s.bien);
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

// ─── Stats Propriétaire ───────────────────────────────────────────────────────

export interface OwnerStats {
  totalBiens: number;
  byStatut: { statut: string; count: number }[];
  recentBiens: {
    id: string;
    titre: string | null;
    statutAnnonce: string;
    ville: string | null;
    prix: number | null;
    photos: string[];
    updatedAt: Date;
    hasPendingRevision: boolean;
  }[];
  nbLocatairesActifs: number;
  nbBailsActifs: number;
  montantMensuelLoyers: number;
  nbEcheancesEnRetard: number;
}

export const getOwnerStats = async (proprietaireId: string): Promise<OwnerStats> => {
  const statuts = ["BROUILLON", "EN_ATTENTE", "PUBLIE", "REJETE", "ANNULE"] as const;

  const [totalBiens, countsByStatut, recentBiens, nbLocatairesActifs, bailsActifs, nbEcheancesEnRetard] = await Promise.all([
    prisma.bien.count({ where: { proprietaireId } }),
    Promise.all(
      statuts.map(async (s) => {
        let count: number;
        if (s === "EN_ATTENTE") {
          count = await prisma.bien.count({
            where: {
              proprietaireId,
              OR: [
                { statutAnnonce: "EN_ATTENTE" },
                { statutAnnonce: "PUBLIE", hasPendingRevision: true },
              ],
            },
          });
        } else if (s === "PUBLIE") {
          count = await prisma.bien.count({
            where: { proprietaireId, statutAnnonce: "PUBLIE", hasPendingRevision: false },
          });
        } else {
          count = await prisma.bien.count({ where: { proprietaireId, statutAnnonce: s } });
        }
        return { statut: s, count };
      })
    ),
    prisma.bien.findMany({
      where: { proprietaireId },
      orderBy: { updatedAt: "desc" },
      take: 5,
      select: {
        id: true,
        titre: true,
        statutAnnonce: true,
        ville: true,
        prix: true,
        photos: true,
        updatedAt: true,
        hasPendingRevision: true,
      },
    }),
    prisma.locataire.count({ where: { proprietaireId, statut: "ACTIF" } }),
    prisma.bailLocation.findMany({
      where: { proprietaireId, statut: "ACTIF" },
      select: { montantLoyer: true },
    }),
    prisma.echeancierLoyer.count({
      where: {
        bail: { proprietaireId },
        statut: "EN_RETARD",
      },
    }),
  ]);

  const montantMensuelLoyers = bailsActifs.reduce((sum, b) => sum + b.montantLoyer, 0);

  return {
    totalBiens,
    byStatut: countsByStatut,
    recentBiens,
    nbLocatairesActifs,
    nbBailsActifs: bailsActifs.length,
    montantMensuelLoyers,
    nbEcheancesEnRetard,
  };
};
