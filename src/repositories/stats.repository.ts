import { prisma } from "../config/database.js";

export interface SiteStats {
  annoncesActives: number;
  proprietaires:   number;
  villesCouvertes: number;
}

export const getSiteStats = async (): Promise<SiteStats> => {
  const [annoncesActives, proprietaires, villesCouvertes] = await Promise.all([
    prisma.bien.count({ where: { statutAnnonce: "PUBLIE" } }),
    prisma.proprietaire.count(),
    prisma.ville.count(),
  ]);

  return {
    annoncesActives,
    proprietaires,
    villesCouvertes,
  };
};

// ─── Stats Admin ──────────────────────────────────────────────────────────────

export interface AdminStats {
  annoncesByStatut: { statut: string; count: number }[];
  annoncesByTypeLogement: { nom: string; count: number }[];
  annoncesByTypeTransaction: { nom: string; count: number }[];
  topVilles: { ville: string; count: number }[];
  totalProprietaires: number;
  totalBiens: number;
  recentEnAttente: {
    id: string;
    titre: string | null;
    ville: string | null;
    proprietaire: { prenom: string | null; nom: string | null } | null;
    createdAt: Date;
    hasPendingRevision: boolean;
  }[];
}

// ─── Stats Propriétaires ────────────────────────────────────────────────────────

export interface ProprietaireStats {
  total: number;
  byStatutVerification: { statut: string; count: number }[];
  byVille: { ville: string; count: number }[];
  topProprietaires: {
    id: string;
    nom: string;
    prenom: string;
    telephone: string;
    email: string | null;
    totalBiens: number;
    biensActifs: number;
    totalLocataires: number;
  }[];
  recentProprietaires: {
    id: string;
    nom: string;
    prenom: string;
    telephone: string;
    email: string | null;
    statutVerification: string;
    createdAt: Date;
  }[];
}

export const getProprietairesStats = async (): Promise<ProprietaireStats> => {
  const [total, byStatut, byVille, topProprietaires, recentProprietaires] = await Promise.all([
    // Total propriétaires
    prisma.proprietaire.count(),
    
    // Répartition par statut de vérification
    prisma.proprietaire.groupBy({
      by: ["statutVerification"],
      _count: true,
    }).then((rows) =>
      rows.map((r) => ({
        statut: r.statutVerification,
        count: r._count,
      }))
    ),
    
    // Répartition par ville (basé sur les biens)
    prisma.bien.groupBy({
      by: ["ville"],
      where: { ville: { not: null } },
      _count: true,
      orderBy: { _count: { ville: "desc" } },
      take: 10,
    }).then((rows) =>
      rows.map((r) => ({ ville: r.ville!, count: r._count }))
    ),
    
    // Top 10 propriétaires par nombre de biens
    prisma.proprietaire.findMany({
      take: 10,
      orderBy: {
        biens: { _count: "desc" },
      },
      include: {
        _count: {
          select: { biens: true },
        },
        biens: {
          where: { statutAnnonce: "PUBLIE" },
          select: { id: true },
        },
        locataires: {
          select: { id: true },
        },
      },
    }).then((rows) =>
      rows.map((p) => ({
        id: p.id,
        nom: p.nom,
        prenom: p.prenom,
        telephone: p.telephone,
        email: p.email,
        totalBiens: p._count.biens,
        biensActifs: p.biens.length,
        totalLocataires: p.locataires.length,
      }))
    ),
    
    // 10 derniers propriétaires inscrits
    prisma.proprietaire.findMany({
      take: 10,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        nom: true,
        prenom: true,
        telephone: true,
        email: true,
        statutVerification: true,
        createdAt: true,
      },
    }),
  ]);

  return {
    total,
    byStatutVerification: byStatut,
    byVille,
    topProprietaires,
    recentProprietaires,
  };
};

// ─── Détails d'un propriétaire pour l'admin ──────────────────────────────────

export interface ProprietaireDetail {
  id: string;
  prenom: string;
  nom: string;
  telephone: string;
  email: string | null;
  statutVerification: string;
  verifiedAt: Date | null;
  createdAt: Date;
  totalBiens: number;
  biens: {
    id: string;
    titre: string | null;
    ville: string | null;
    statutAnnonce: string;
    prix: number | null;
    createdAt: Date;
  }[];
  totalLocataires: number;
  totalBails: number;
  bailsActifs: number;
}

export const getProprietaireDetail = async (id: string): Promise<ProprietaireDetail | null> => {
  const proprietaire = await prisma.proprietaire.findUnique({
    where: { id },
    include: {
      _count: {
        select: {
          biens: true,
          locataire: true,
          bails: true,
        },
      },
      biens: {
        select: {
          id: true,
          titre: true,
          ville: true,
          statutAnnonce: true,
          prix: true,
          createdAt: true,
        },
        orderBy: { createdAt: "desc" },
      },
      bails: {
        where: { statut: "ACTIF" },
        select: { id: true },
      },
    },
  });

  if (!proprietaire) return null;

  return {
    id: proprietaire.id,
    prenom: proprietaire.prenom,
    nom: proprietaire.nom,
    telephone: proprietaire.telephone,
    email: proprietaire.email,
    statutVerification: proprietaire.statutVerification,
    verifiedAt: proprietaire.verifiedAt,
    createdAt: proprietaire.createdAt,
    totalBiens: proprietaire._count.biens,
    biens: proprietaire.biens,
    totalLocataires: proprietaire._count.locataire,
    totalBails: proprietaire._count.bails,
    bailsActifs: proprietaire.bails.length,
  };
};

export const getAdminStats = async (): Promise<AdminStats> => {
  // Les brouillons n'ont aucune visibilité côté admin
  const statuts = ["EN_ATTENTE", "PUBLIE", "REJETE", "ANNULE"] as const;

  const [
    countsByStatut,
    countsByTypeLogement,
    countsByTypeTransaction,
    villeGroups,
    totalProprietaires,
    totalBiens,
    recentEnAttente,
  ] = await Promise.all([
    // Counts par statut (EN_ATTENTE include hasPendingRevision publiés)
    Promise.all(
      statuts.map(async (s) => {
        let count: number;
        if (s === "EN_ATTENTE") {
          count = await prisma.bien.count({
            where: {
              OR: [
                { statutAnnonce: "EN_ATTENTE" },
                { statutAnnonce: "PUBLIE", hasPendingRevision: true },
              ],
            },
          });
        } else if (s === "PUBLIE") {
          count = await prisma.bien.count({
            where: { statutAnnonce: "PUBLIE", hasPendingRevision: false },
          });
        } else {
          count = await prisma.bien.count({ where: { statutAnnonce: s } });
        }
        return { statut: s, count };
      })
    ),
    // Counts par type de logement (publiés uniquement)
    prisma.bien.groupBy({
      by: ["typeLogementId"],
      where: { statutAnnonce: "PUBLIE", typeLogementId: { not: null } },
      _count: true,
    }).then(async (rows) => {
      const ids = rows.map((r) => r.typeLogementId!);
      const types = await prisma.typeLogement.findMany({
        where: { id: { in: ids } },
        select: { id: true, nom: true },
      });
      const map = new Map(types.map((t) => [t.id, t.nom]));
      return rows
        .map((r) => ({ nom: map.get(r.typeLogementId!) ?? "Inconnu", count: r._count }))
        .sort((a, b) => b.count - a.count);
    }),
    // Counts par type de transaction (publiés uniquement)
    prisma.bien.groupBy({
      by: ["typeTransactionId"],
      where: { statutAnnonce: "PUBLIE", typeTransactionId: { not: null } },
      _count: true,
    }).then(async (rows) => {
      const ids = rows.map((r) => r.typeTransactionId!);
      const types = await prisma.typeTransaction.findMany({
        where: { id: { in: ids } },
        select: { id: true, nom: true },
      });
      const map = new Map(types.map((t) => [t.id, t.nom]));
      return rows
        .map((r) => ({ nom: map.get(r.typeTransactionId!) ?? "Inconnu", count: r._count }))
        .sort((a, b) => b.count - a.count);
    }),
    // Top 8 villes (publiés)
    prisma.bien.groupBy({
      by: ["ville"],
      where: { statutAnnonce: "PUBLIE", ville: { not: null } },
      _count: true,
      orderBy: { _count: { ville: "desc" } },
      take: 8,
    }).then((rows) =>
      rows.map((r) => ({ ville: r.ville!, count: r._count }))
    ),
    // Total propriétaires
    prisma.proprietaire.count(),
    // Total biens hors brouillons
    prisma.bien.count({ where: { statutAnnonce: { not: "BROUILLON" } } }),
    // 5 dernières annonces EN_ATTENTE ou révision en attente
    prisma.bien.findMany({
      where: {
        OR: [
          { statutAnnonce: "EN_ATTENTE" },
          { statutAnnonce: "PUBLIE", hasPendingRevision: true },
        ],
      },
      orderBy: { updatedAt: "desc" },
      take: 5,
      select: {
        id: true,
        titre: true,
        ville: true,
        createdAt: true,
        hasPendingRevision: true,
        proprietaire: { select: { prenom: true, nom: true } },
      },
    }),
  ]);

  return {
    annoncesByStatut: countsByStatut,
    annoncesByTypeLogement: countsByTypeLogement,
    annoncesByTypeTransaction: countsByTypeTransaction,
    topVilles: villeGroups,
    totalProprietaires,
    totalBiens,
    recentEnAttente,
  };
};
