import { prisma } from "../config/database.js";
import { StatutBailInvitation } from "../generated/prisma/enums.js";
// ─── Include helper ───────────────────────────────────────────────────────────
const INVITATION_INCLUDE_OWNER = {
    bien: { select: { id: true, titre: true, ville: true, adresse: true, quartier: true } },
    locataire: { select: { id: true, nom: true, prenom: true, telephone: true, email: true, statut: true } },
};
const INVITATION_INCLUDE_LOCATAIRE = {
    bien: { select: { id: true, titre: true, ville: true, adresse: true, quartier: true } },
    proprietaire: { select: { id: true, nom: true, prenom: true, telephone: true } },
};
export const create = async (data) => {
    return prisma.bailInvitation.create({
        data,
        include: INVITATION_INCLUDE_OWNER,
    });
};
export const findByToken = async (token) => {
    return prisma.bailInvitation.findUnique({
        where: { token },
        include: {
            ...INVITATION_INCLUDE_LOCATAIRE,
            locataire: { select: { id: true, nom: true, prenom: true, telephone: true, email: true } },
        },
    });
};
export const findByLocataireId = async (locataireId) => {
    return prisma.bailInvitation.findMany({
        where: {
            locataireId,
            statut: StatutBailInvitation.PENDING,
            expiresAt: { gt: new Date() },
        },
        include: INVITATION_INCLUDE_LOCATAIRE,
        orderBy: { createdAt: "desc" },
    });
};
export const findByProprietaireId = async (proprietaireId) => {
    return prisma.bailInvitation.findMany({
        where: { proprietaireId },
        include: INVITATION_INCLUDE_OWNER,
        orderBy: { createdAt: "desc" },
    });
};
export const findPendingByBienAndLocataire = async (bienId, locataireId) => {
    return prisma.bailInvitation.findFirst({
        where: { bienId, locataireId, statut: StatutBailInvitation.PENDING },
    });
};
export const updateStatut = async (id, statut) => {
    return prisma.bailInvitation.update({
        where: { id },
        data: { statut },
    });
};
// Expire les anciennes invitations dépassées
export const expireOldInvitations = async () => {
    return prisma.bailInvitation.updateMany({
        where: { statut: StatutBailInvitation.PENDING, expiresAt: { lt: new Date() } },
        data: { statut: StatutBailInvitation.EXPIREE },
    });
};
//# sourceMappingURL=bailInvitation.repository.js.map