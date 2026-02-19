import { prisma } from "../config/database.js";
import type { Meuble } from "../generated/prisma/index.js";

export const findAll = (): Promise<Meuble[]> =>
  prisma.meuble.findMany({
    where: { actif: true },
    orderBy: [{ categorie: "asc" }, { nom: "asc" }],
  });

export const findAllAdmin = (): Promise<Meuble[]> =>
  prisma.meuble.findMany({ orderBy: [{ categorie: "asc" }, { nom: "asc" }] });

export const findById = (id: string): Promise<Meuble | null> =>
  prisma.meuble.findUnique({ where: { id } });

export const findByNomAndCategorie = (nom: string, categorie: string): Promise<Meuble | null> =>
  prisma.meuble.findUnique({ where: { nom_categorie: { nom, categorie } } });

export const createMany = (items: { nom: string; categorie: string }[]): Promise<Meuble[]> =>
  prisma.$transaction(items.map((item) => prisma.meuble.create({ data: item })));

export const update = (
  id: string,
  data: Partial<{ nom: string; categorie: string; actif: boolean }>
): Promise<Meuble> =>
  prisma.meuble.update({ where: { id }, data });

export const remove = (id: string): Promise<Meuble> =>
  prisma.meuble.delete({ where: { id } });
