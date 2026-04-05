import { prisma } from "../config/database.js";
import { StatutBail } from "../generated/prisma/enums.js";
// ─── Include helper ───────────────────────────────────────────────────────────
const BAIL_INCLUDE = {
    locataire: {
        select: {
            id: true,
            nom: true,
            prenom: true,
            telephone: true,
            email: true,
            statut: true,
            nbOccupants: true,
            presenceEnfants: true,
        },
    },
    bien: {
        select: {
            id: true,
            titre: true,
            ville: true,
            quartier: true,
            prix: true,
            caution: true,
            frequencePaiement: true,
            typeTransaction: { select: { slug: true } },
        },
    },
};
// ─── CRUD ─────────────────────────────────────────────────────────────────────
export const create = async (data) => {
    return prisma.bailLocation.create({
        data,
        include: BAIL_INCLUDE,
    });
};
export const findById = async (id) => {
    return prisma.bailLocation.findUnique({
        where: { id },
        include: BAIL_INCLUDE,
    });
};
export const findActifByBien = async (bienId) => {
    return prisma.bailLocation.findFirst({
        where: {
            bienId,
            statut: {
                in: [
                    StatutBail.ACTIF,
                    StatutBail.EN_ATTENTE,
                    StatutBail.EN_PREAVIS,
                    StatutBail.EN_RENOUVELLEMENT,
                ],
            },
        },
        include: BAIL_INCLUDE,
    });
};
export const findAArchiverByBien = async (bienId) => {
    return prisma.bailLocation.findFirst({
        where: {
            bienId,
            statut: { in: [StatutBail.TERMINE, StatutBail.RESILIE] },
        },
        include: BAIL_INCLUDE,
        orderBy: { updatedAt: "desc" },
    });
};
export const findByBien = async (bienId) => {
    return prisma.bailLocation.findMany({
        where: { bienId },
        include: BAIL_INCLUDE,
        orderBy: { createdAt: "desc" },
    });
};
export const updateStatut = async (id, statut) => {
    return prisma.bailLocation.update({
        where: { id },
        data: { statut },
        include: BAIL_INCLUDE,
    });
};
export const prolonger = async (id, dateFinBail) => {
    return prisma.bailLocation.update({
        where: { id },
        data: { dateFinBail },
        include: BAIL_INCLUDE,
    });
};
export const remove = async (id) => {
    return prisma.bailLocation.delete({ where: { id } });
};
// ─── Statut bien helper ───────────────────────────────────────────────────────
export const getStatutBienBySlug = async (slug) => {
    return prisma.statutBien.findUnique({ where: { slug } });
};
export const updateBienStatut = async (bienId, statutBienId) => {
    return prisma.bien.update({
        where: { id: bienId },
        data: { statutBienId },
    });
};
//# sourceMappingURL=bail.repository.js.map