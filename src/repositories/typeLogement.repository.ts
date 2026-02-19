import { prisma } from "../config/database.js";
import type { TypeLogement } from "../generated/prisma/index.js";

export const findAll = (): Promise<TypeLogement[]> =>
  prisma.typeLogement.findMany({
    where:   { actif: true },
    orderBy: { ordre: "asc" },
  });

export const findAllAdmin = (): Promise<TypeLogement[]> =>
  prisma.typeLogement.findMany({ orderBy: { ordre: "asc" } });

export const findById = (id: string): Promise<TypeLogement | null> =>
  prisma.typeLogement.findUnique({ where: { id } });

export const findBySlug = (slug: string): Promise<TypeLogement | null> =>
  prisma.typeLogement.findUnique({ where: { slug } });

export const findByOrdre = (ordre: number): Promise<TypeLogement | null> =>
  prisma.typeLogement.findFirst({ where: { ordre } });

export const create = (data: {
  nom: string;
  slug: string;
  image?: string;
  ordre?: number;
}): Promise<TypeLogement> =>
  prisma.typeLogement.create({ data });

export const update = (
  id: string,
  data: Partial<{ nom: string; slug: string; image: string; actif: boolean; ordre: number }>
): Promise<TypeLogement> =>
  prisma.typeLogement.update({ where: { id }, data });

export const remove = (id: string): Promise<TypeLogement> =>
  prisma.typeLogement.delete({ where: { id } });
