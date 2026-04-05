import { prisma } from "../config/database.js";
// ─── Include helper ───────────────────────────────────────────────────────────
const CONTRAT_INCLUDE = {
    modele: {
        select: { id: true, titre: true, typeBail: true },
    },
};
// ─── CRUD ─────────────────────────────────────────────────────────────────────
export const create = async (data) => {
    return prisma.contrat.create({ data, include: CONTRAT_INCLUDE });
};
export const findByBailId = async (bailId) => {
    return prisma.contrat.findUnique({ where: { bailId }, include: CONTRAT_INCLUDE });
};
export const update = async (id, data) => {
    return prisma.contrat.update({ where: { id }, data, include: CONTRAT_INCLUDE });
};
export const updateStatut = async (id, statut) => {
    return prisma.contrat.update({ where: { id }, data: { statut }, include: CONTRAT_INCLUDE });
};
export const remove = async (id) => {
    return prisma.contrat.delete({ where: { id } });
};
//# sourceMappingURL=contrat.repository.js.map