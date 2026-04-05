import { Prisma } from "../generated/prisma/client.js";
import { prisma } from "../config/database.js";
// List signalements admin
export const findSignalements = async (filter) => {
    const where = {};
    if (filter?.statut) {
        where.statut = filter.statut;
    }
    if (filter?.search) {
        where.OR = [
            { nom: { contains: filter.search, mode: "insensitive" } },
            { telephone: { contains: filter.search } },
            { bien: { titre: { contains: filter.search, mode: "insensitive" } } },
        ];
    }
    return prisma.signalement.findMany({
        where,
        include: {
            bien: {
                select: {
                    id: true,
                    titre: true,
                    proprietaire: {
                        select: { id: true, nom: true, prenom: true, telephone: true, nbSignalementsValides: true, estSuspendu: true }
                    }
                }
            }
        },
        orderBy: { createdAt: "desc" }
    });
};
// Obtenir by ID
export const findById = async (id) => {
    return prisma.signalement.findUnique({
        where: { id },
        include: {
            bien: {
                include: {
                    proprietaire: true,
                    typeLogement: true,
                    typeTransaction: true,
                    quartierRel: {
                        include: { ville: { include: { pays: true } } }
                    }
                }
            },
            comptePublic: true
        }
    });
};
// Create
export const create = async (data) => {
    return prisma.signalement.create({ data });
};
// Check existant anti-abus
export const getExisting = async (bienId, comptePublicId, telephone) => {
    const where = { bienId };
    if (comptePublicId) {
        where.comptePublicId = comptePublicId;
    }
    else if (telephone) {
        where.telephone = telephone;
    }
    else {
        return null;
    }
    return prisma.signalement.findFirst({ where });
};
// Valider
export const valider = async (id, adminId, bienId, proprietaireId) => {
    return prisma.$transaction(async (tx) => {
        // 1. Valider le signalement
        const signalement = await tx.signalement.update({
            where: { id },
            data: {
                statut: "VALIDE",
                traitePar: adminId,
                dateTraitement: new Date()
            }
        });
        // 2. Supprimer définitivement le bien.
        // Le signalement est aussi supprimé par cascade via la relation Prisma.
        await tx.bien.delete({
            where: { id: bienId }
        });
        // 3. Incrémenter le compteur du proprio
        const proprietaire = await tx.proprietaire.update({
            where: { id: proprietaireId },
            data: {
                nbSignalementsValides: { increment: 1 }
            }
        });
        return { signalement, proprietaire };
    });
};
// Rejeter
export const rejeter = async (id, adminId) => {
    return prisma.signalement.update({
        where: { id },
        data: {
            statut: "REJETE",
            traitePar: adminId,
            dateTraitement: new Date()
        }
    });
};
//# sourceMappingURL=signalement.repository.js.map