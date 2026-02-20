import { prisma } from "../config/database.js";
export const findAll = () => prisma.categorieMeuble.findMany({ orderBy: [{ ordre: "asc" }, { nom: "asc" }] });
export const findActive = () => prisma.categorieMeuble.findMany({
    where: { actif: true },
    orderBy: [{ ordre: "asc" }, { nom: "asc" }],
});
export const findById = (id) => prisma.categorieMeuble.findUnique({ where: { id } });
export const findBySlug = (slug) => prisma.categorieMeuble.findUnique({ where: { slug } });
export const findByNom = (nom) => prisma.categorieMeuble.findUnique({ where: { nom } });
export const create = (data) => prisma.categorieMeuble.create({ data });
export const update = (id, data) => prisma.categorieMeuble.update({ where: { id }, data });
export const remove = (id) => prisma.categorieMeuble.delete({ where: { id } });
export const countMeubles = (id) => prisma.meuble.count({ where: { categorieId: id } });
//# sourceMappingURL=categorieMeuble.repository.js.map