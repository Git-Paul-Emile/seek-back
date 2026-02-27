import { prisma } from "../config/database.js";
// ─── Include helper ───────────────────────────────────────────────────────────
const LOCATAIRE_SELECT = {
    id: true,
    proprietaireId: true,
    nom: true,
    prenom: true,
    telephone: true,
    email: true,
    nbOccupants: true,
    presenceEnfants: true,
    dateNaissance: true,
    lieuNaissance: true,
    nationalite: true,
    sexe: true,
    numPieceIdentite: true,
    typePiece: true,
    dateDelivrance: true,
    dateExpiration: true,
    autoriteDelivrance: true,
    situationProfessionnelle: true,
    statut: true,
    activationToken: true,
    tokenExpiresAt: true,
    createdAt: true,
    updatedAt: true,
};
// ─── CRUD ─────────────────────────────────────────────────────────────────────
export const create = async (data) => {
    return prisma.locataire.create({
        data,
        select: LOCATAIRE_SELECT,
    });
};
export const findById = async (id) => {
    return prisma.locataire.findUnique({
        where: { id },
        select: {
            ...LOCATAIRE_SELECT,
            password: true,
            bails: {
                include: {
                    bien: {
                        select: { id: true, titre: true, ville: true, quartier: true },
                    },
                },
                orderBy: { createdAt: "desc" },
            },
        },
    });
};
export const findByIdWithPassword = async (id) => {
    return prisma.locataire.findUnique({ where: { id } });
};
export const findByActivationToken = async (token) => {
    return prisma.locataire.findUnique({ where: { activationToken: token } });
};
export const findByTelephone = async (telephone) => {
    return prisma.locataire.findFirst({ where: { telephone } });
};
export const findByEmail = async (email) => {
    return prisma.locataire.findFirst({ where: { email } });
};
export const findByProprietaire = async (proprietaireId) => {
    return prisma.locataire.findMany({
        where: { proprietaireId },
        select: {
            ...LOCATAIRE_SELECT,
            bails: {
                where: { statut: "ACTIF" },
                select: {
                    id: true,
                    statut: true,
                    dateDebutBail: true,
                    dateFinBail: true,
                    montantLoyer: true,
                    bien: { select: { id: true, titre: true, ville: true } },
                },
            },
        },
        orderBy: { createdAt: "desc" },
    });
};
export const update = async (id, data) => {
    return prisma.locataire.update({
        where: { id },
        data,
        select: LOCATAIRE_SELECT,
    });
};
export const remove = async (id) => {
    return prisma.locataire.delete({ where: { id } });
};
// ─── Refresh tokens ───────────────────────────────────────────────────────────
export const createRefreshToken = async (data) => {
    return prisma.locataireRefreshToken.create({ data });
};
export const findRefreshToken = async (tokenHash) => {
    return prisma.locataireRefreshToken.findUnique({ where: { tokenHash } });
};
export const revokeRefreshToken = async (tokenHash) => {
    return prisma.locataireRefreshToken.update({
        where: { tokenHash },
        data: { revokedAt: new Date() },
    });
};
export const revokeAllRefreshTokens = async (locataireId) => {
    return prisma.locataireRefreshToken.updateMany({
        where: { locataireId, revokedAt: null },
        data: { revokedAt: new Date() },
    });
};
//# sourceMappingURL=locataire.repository.js.map