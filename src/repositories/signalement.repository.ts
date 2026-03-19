import { prisma } from "../config/database.js";

export interface CreateSignalementData {
  bienId: string;
  signaleParNom?: string;
  signaleParTel: string;
  signaleParEmail?: string;
  motif: string; // MotifSignalement enum value
  justification?: string;
  preuve?: string;
}

// ─── Créer un signalement ──────────────────────────────────────────────────────

export const create = async (data: CreateSignalementData) => {
  return prisma.signalement.create({
    data: {
      bienId:          data.bienId,
      signaleParNom:   data.signaleParNom,
      signaleParTel:   data.signaleParTel,
      signaleParEmail: data.signaleParEmail,
      motif:           data.motif as any,
      justification:   data.justification,
      preuve:          data.preuve,
    },
  });
};

// ─── Vérifier si ce téléphone a déjà signalé ce bien ────────────────────────

export const existsByTel = async (bienId: string, signaleParTel: string) => {
  const count = await prisma.signalement.count({
    where: { bienId, signaleParTel },
  });
  return count > 0;
};

// ─── Compter les signalements ACTIFS d'un bien ──────────────────────────────

export const countActifsByBien = async (bienId: string) => {
  return prisma.signalement.count({ where: { bienId, statut: "ACTIF" } });
};

// ─── Lister les biens signalés (agrégé) — admin ─────────────────────────────

export const findBiensSignales = async (params: {
  page?: number;
  limit?: number;
  priorite?: "HAUTE" | "BASSE";
}) => {
  const page  = params.page  ?? 1;
  const limit = params.limit ?? 20;
  const skip  = (page - 1) * limit;

  const biensAvecSignalements = await prisma.bien.findMany({
    where: {
      signalements: { some: { statut: "ACTIF" } },
    },
    select: {
      id: true,
      titre: true,
      ville: true,
      quartier: true,
      reportCount: true,
      statutAnnonce: true,
      actif: true,
      proprietaire: {
        select: {
          id: true,
          prenom: true,
          nom: true,
          telephone: true,
          email: true,
          nbAvertissements: true,
        },
      },
      signalements: {
        where: { statut: "ACTIF" },
        select: { motif: true, createdAt: true },
        orderBy: { createdAt: "desc" },
      },
    },
    orderBy: { reportCount: "desc" },
    skip,
    take: limit,
  });

  const total = await prisma.bien.count({
    where: { signalements: { some: { statut: "ACTIF" } } },
  });

  const items = biensAvecSignalements.map((b) => {
    const motifs = b.signalements.map((s) => s.motif as string);
    const estUrgent = motifs.includes("ARNAQUE_SUSPECTEE");
    const priorite: "HAUTE" | "BASSE" =
      b.reportCount >= 3 || estUrgent ? "HAUTE" : "BASSE";
    return {
      id:                  b.id,
      titre:               b.titre,
      ville:               b.ville,
      quartier:            b.quartier,
      reportCount:         b.reportCount,
      statutAnnonce:       b.statutAnnonce,
      actif:               b.actif,
      proprietaire:        b.proprietaire,
      dernierMotif:        b.signalements[0]?.motif ?? null,
      dernierSignalementAt: b.signalements[0]?.createdAt ?? null,
      priorite,
    };
  });

  const filtered = params.priorite
    ? items.filter((i) => i.priorite === params.priorite)
    : items;

  return { data: filtered, total, page, limit };
};

// ─── Détail d'un bien signalé — admin ───────────────────────────────────────

export const findDetailByBien = async (bienId: string) => {
  return prisma.bien.findUnique({
    where: { id: bienId },
    select: {
      id: true,
      titre: true,
      ville: true,
      quartier: true,
      photos: true,
      reportCount: true,
      statutAnnonce: true,
      actif: true,
      proprietaire: {
        select: {
          id: true,
          prenom: true,
          nom: true,
          telephone: true,
          email: true,
          nbAvertissements: true,
          estRestreint: true,
          estSuspendu: true,
        },
      },
      signalements: {
        where: { statut: "ACTIF" },
        orderBy: { createdAt: "desc" },
      },
      adminAvertissements: {
        orderBy: { createdAt: "desc" },
        take: 10,
        select: { message: true, createdAt: true },
      },
    },
  });
};

// ─── Marquer tous les signalements ACTIFS d'un bien comme TRAITÉS ────────────

export const traiterAllByBien = async (bienId: string) => {
  return prisma.signalement.updateMany({
    where: { bienId, statut: "ACTIF" },
    data:  { statut: "TRAITE" as any },
  });
};

// ─── Compter les biens avec signalements ACTIFS (badge admin) ────────────────

export const countBiensSignales = async () => {
  return prisma.bien.count({
    where: { signalements: { some: { statut: "ACTIF" } } },
  });
};
