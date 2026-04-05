import { prisma } from "../config/database.js";
// ─── Pays ─────────────────────────────────────────────────────────────────────
export const findAllPays = () => prisma.pays.findMany({ orderBy: { nom: "asc" } });
export const findAllPaysAdmin = () => prisma.pays.findMany({
    orderBy: { nom: "asc" },
    include: { _count: { select: { villes: true } } },
});
export const createPays = (data) => prisma.pays.create({ data });
export const updatePays = (id, data) => prisma.pays.update({ where: { id }, data });
export const deletePays = (id) => prisma.pays.delete({ where: { id } });
// ─── Villes ───────────────────────────────────────────────────────────────────
export const findVillesByPays = (paysId) => prisma.ville.findMany({ where: { paysId }, orderBy: { nom: "asc" } });
export const findAllVillesAdmin = (paysId) => prisma.ville.findMany({
    where: paysId ? { paysId } : undefined,
    orderBy: { nom: "asc" },
    include: {
        pays: { select: { id: true, nom: true, code: true } },
        _count: { select: { quartiers: true } },
    },
});
export const createVille = (data) => prisma.ville.create({ data, include: { pays: true } });
export const updateVille = (id, data) => prisma.ville.update({ where: { id }, data, include: { pays: true } });
export const deleteVille = (id) => prisma.ville.delete({ where: { id } });
// ─── Quartiers ────────────────────────────────────────────────────────────────
export const findQuartiersByVille = (villeId) => prisma.quartier.findMany({ where: { villeId }, orderBy: { nom: "asc" } });
export const findAllQuartiersAdmin = (villeId) => prisma.quartier.findMany({
    where: villeId ? { villeId } : undefined,
    orderBy: { nom: "asc" },
    include: {
        ville: { select: { id: true, nom: true, pays: { select: { id: true, nom: true } } } },
    },
});
export const createQuartier = (data) => prisma.quartier.create({ data, include: { ville: { include: { pays: true } } } });
export const updateQuartier = (id, data) => prisma.quartier.update({ where: { id }, data, include: { ville: { include: { pays: true } } } });
export const deleteQuartier = (id) => prisma.quartier.delete({ where: { id } });
//# sourceMappingURL=geo.repository.js.map