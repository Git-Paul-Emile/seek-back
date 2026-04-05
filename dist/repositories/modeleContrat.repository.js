import { prisma } from "../config/database.js";
// ─── CRUD ─────────────────────────────────────────────────────────────────────
export const create = async (data) => {
    return prisma.modeleContrat.create({ data });
};
export const findById = async (id) => {
    return prisma.modeleContrat.findUnique({ where: { id } });
};
export const update = async (id, data) => {
    return prisma.modeleContrat.update({ where: { id }, data });
};
export const remove = async (id) => {
    return prisma.modeleContrat.delete({ where: { id } });
};
export const countContrats = async (modeleId) => {
    return prisma.contrat.count({ where: { modeleId } });
};
// ─── List avec pagination ─────────────────────────────────────────────────────
export const findMany = async (params) => {
    const { page, limit, typeBail, actif } = params;
    const skip = (page - 1) * limit;
    const where = {
        ...(typeBail !== undefined ? { typeBail } : {}),
        ...(actif !== undefined ? { actif } : {}),
    };
    const [items, total] = await Promise.all([
        prisma.modeleContrat.findMany({
            where,
            orderBy: [{ ordre: "asc" }, { createdAt: "asc" }],
            skip,
            take: limit,
        }),
        prisma.modeleContrat.count({ where }),
    ]);
    return { items, total };
};
// ─── Liste publique (actifs seulement, optionnel filtre typeBail) ─────────────
export const findActifs = async (typeBail) => {
    return prisma.modeleContrat.findMany({
        where: {
            actif: true,
            ...(typeBail ? { OR: [{ typeBail }, { typeBail: null }] } : {}),
        },
        orderBy: [{ ordre: "asc" }, { createdAt: "asc" }],
        select: { id: true, titre: true, typeBail: true, ordre: true },
    });
};
//# sourceMappingURL=modeleContrat.repository.js.map