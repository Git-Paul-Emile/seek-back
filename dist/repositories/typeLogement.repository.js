import { prisma } from "../config/database.js";
export const findAll = () => prisma.typeLogement.findMany({
    where: { actif: true },
    orderBy: { ordre: "asc" },
});
export const findAllAdmin = () => prisma.typeLogement.findMany({ orderBy: { ordre: "asc" } });
export const findById = (id) => prisma.typeLogement.findUnique({ where: { id } });
export const findBySlug = (slug) => prisma.typeLogement.findUnique({ where: { slug } });
export const findByOrdre = (ordre) => prisma.typeLogement.findFirst({ where: { ordre } });
export const create = (data) => prisma.typeLogement.create({ data });
export const update = (id, data) => prisma.typeLogement.update({ where: { id }, data });
export const remove = (id) => prisma.typeLogement.delete({ where: { id } });
//# sourceMappingURL=typeLogement.repository.js.map