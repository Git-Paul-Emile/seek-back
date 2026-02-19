import { prisma } from "../config/database.js";
import type { Equipement } from "../generated/prisma/index.js";

export const findAll = (): Promise<Equipement[]> =>
  prisma.equipement.findMany({
    where: { actif: true },
    orderBy: [{ categorie: "asc" }, { nom: "asc" }],
  });

export const findAllAdmin = (): Promise<Equipement[]> =>
  prisma.equipement.findMany({ orderBy: [{ categorie: "asc" }, { nom: "asc" }] });

export const findById = (id: string): Promise<Equipement | null> =>
  prisma.equipement.findUnique({ where: { id } });

export const findByNomAndCategorie = (nom: string, categorie: string): Promise<Equipement | null> =>
  prisma.equipement.findUnique({ where: { nom_categorie: { nom, categorie } } });

export const createMany = (items: { nom: string; categorie: string }[]): Promise<Equipement[]> =>
  prisma.$transaction(items.map((item) => prisma.equipement.create({ data: item })));

export const update = (
  id: string,
  data: Partial<{ nom: string; categorie: string; actif: boolean }>
): Promise<Equipement> =>
  prisma.equipement.update({ where: { id }, data });

export const remove = (id: string): Promise<Equipement> =>
  prisma.equipement.delete({ where: { id } });
