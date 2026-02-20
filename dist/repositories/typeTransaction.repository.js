import { prisma } from "../config/database.js";
export const findAll = () => prisma.typeTransaction.findMany({
    where: { actif: true },
    orderBy: { ordre: "asc" },
});
export const findAllAdmin = () => prisma.typeTransaction.findMany({ orderBy: { ordre: "asc" } });
export const findById = (id) => prisma.typeTransaction.findUnique({ where: { id } });
export const findBySlug = (slug) => prisma.typeTransaction.findUnique({ where: { slug } });
export const findByOrdre = (ordre) => prisma.typeTransaction.findFirst({ where: { ordre } });
export const create = (data) => prisma.typeTransaction.create({ data });
export const update = (id, data) => prisma.typeTransaction.update({ where: { id }, data });
export const remove = (id) => prisma.typeTransaction.delete({ where: { id } });
//# sourceMappingURL=typeTransaction.repository.js.map