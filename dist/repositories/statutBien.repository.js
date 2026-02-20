import { prisma } from "../config/database.js";
export const findAll = () => prisma.statutBien.findMany({
    where: { actif: true },
    orderBy: { ordre: "asc" },
});
export const findAllAdmin = () => prisma.statutBien.findMany({ orderBy: { ordre: "asc" } });
export const findById = (id) => prisma.statutBien.findUnique({ where: { id } });
export const findBySlug = (slug) => prisma.statutBien.findUnique({ where: { slug } });
export const findByOrdre = (ordre) => prisma.statutBien.findFirst({ where: { ordre } });
export const create = (data) => prisma.statutBien.create({ data });
export const update = (id, data) => prisma.statutBien.update({ where: { id }, data });
export const remove = (id) => prisma.statutBien.delete({ where: { id } });
//# sourceMappingURL=statutBien.repository.js.map