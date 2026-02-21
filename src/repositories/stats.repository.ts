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
