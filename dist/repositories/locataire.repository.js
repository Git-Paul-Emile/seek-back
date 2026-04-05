import { prisma } from "../config/database.js";
import { StatutVerificationLocataire } from "../generated/prisma/enums.js";
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
    dateExpirationPiece: true,
    autoriteDelivrance: true,
    situationProfessionnelle: true,
    statut: true,
    activationToken: true,
    tokenExpiresAt: true,
    // Suspension
    estSuspendu: true,
    motifSuspension: true,
    dateSuspension: true,
    suspenduPar: true,
    createdAt: true,
    updatedAt: true,
    verification: {
        select: {
            id: true,
            typePiece: true,
            pieceIdentiteRecto: true,
            pieceIdentiteVerso: true,
            selfie: true,
            statut: true,
            conditionsAcceptees: true,
            motifRejet: true,
            dateTraitement: true,
            createdAt: true,
            updatedAt: true,
        },
    },
};
// ─── CRUD ─────────────────────────────────────────────────────────────────────
export const create = async (data) => {
    return prisma.locataire.create({
        data,
        select: LOCATAIRE_SELECT,
    });
};
export const findById = async (id, proprietaireId) => {
    const whereClause = proprietaireId
        ? {
            id,
            OR: [
                { proprietaireId },
                { bails: { some: { proprietaireId } } },
            ],
        }
        : { id };
    return prisma.locataire.findFirst({
        where: whereClause,
        select: {
            ...LOCATAIRE_SELECT,
            password: true,
            bails: {
                where: proprietaireId ? { proprietaireId } : undefined,
                include: {
                    bien: {
                        select: { id: true, titre: true, ville: true, quartier: true, actif: true },
                    },
                    contrat: {
                        select: { id: true, statut: true },
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
/** Recherche globale par téléphone ou email (pour détecter un compte existant) */
export const searchByContact = async (params) => {
    if (!params.telephone && !params.email)
        return null;
    return prisma.locataire.findFirst({
        where: {
            OR: [
                params.telephone ? { telephone: params.telephone } : undefined,
                params.email ? { email: params.email } : undefined,
            ].filter(Boolean),
        },
        select: {
            id: true,
            proprietaireId: true,
            nom: true,
            prenom: true,
            telephone: true,
            email: true,
            statut: true,
        },
    });
};
export const findByProprietaire = async (proprietaireId) => {
    return prisma.locataire.findMany({
        where: {
            OR: [
                { proprietaireId },
                { bails: { some: { proprietaireId } } },
            ],
        },
        select: {
            ...LOCATAIRE_SELECT,
            bails: {
                where: { proprietaireId },
                select: {
                    id: true,
                    statut: true,
                    dateDebutBail: true,
                    dateFinBail: true,
                    montantLoyer: true,
                    bien: { select: { id: true, titre: true, ville: true } },
                    contrat: {
                        select: { id: true, statut: true },
                    },
                },
                orderBy: { createdAt: "desc" },
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
    return prisma.$transaction(async (tx) => {
        // Récupère les IDs des baux pour supprimer les contrats liés
        const bails = await tx.bailLocation.findMany({
            where: { locataireId: id },
            select: { id: true },
        });
        const bailIds = bails.map((b) => b.id);
        if (bailIds.length > 0) {
            await tx.contrat.deleteMany({ where: { bailId: { in: bailIds } } });
        }
        // Supprime tokens et baux manuellement (protection si CASCADE non configuré en DB)
        await tx.locataireRefreshToken.deleteMany({ where: { locataireId: id } });
        await tx.bailLocation.deleteMany({ where: { locataireId: id } });
        return tx.locataire.delete({ where: { id } });
    });
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
export const createVerification = async (data) => {
    return prisma.locataireVerification.create({
        data: {
            locataireId: data.locataireId,
            typePiece: data.typePiece ?? "CNI",
            pieceIdentiteRecto: data.pieceIdentiteRecto,
            pieceIdentiteVerso: data.pieceIdentiteVerso,
            selfie: data.selfie,
            conditionsAcceptees: data.conditionsAcceptees ?? false,
            statut: StatutVerificationLocataire.PENDING,
        },
    });
};
export const updateVerification = async (locataireId, data) => {
    return prisma.locataireVerification.upsert({
        where: { locataireId },
        create: {
            locataireId,
            typePiece: data.typePiece ?? "CNI",
            pieceIdentiteRecto: data.pieceIdentiteRecto,
            pieceIdentiteVerso: data.pieceIdentiteVerso,
            selfie: data.selfie,
            conditionsAcceptees: data.conditionsAcceptees ?? false,
            statut: data.statut ?? StatutVerificationLocataire.PENDING,
        },
        update: data,
    });
};
export const getVerificationByLocataireId = async (locataireId) => {
    return prisma.locataireVerification.findUnique({
        where: { locataireId },
    });
};
// ─── Validation de la vérification par le propriétaire ─────────────────────────────
export const approveVerification = async (locataireId, proprietaireId) => {
    // Vérifier que le propriétaire a accès au locataire (créateur ou via bail)
    const locataire = await prisma.locataire.findFirst({
        where: {
            id: locataireId,
            OR: [
                { proprietaireId },
                { bails: { some: { proprietaireId } } },
            ],
        },
    });
    if (!locataire) {
        return null;
    }
    return prisma.locataireVerification.update({
        where: { locataireId },
        data: {
            statut: StatutVerificationLocataire.VERIFIED,
            traitePar: proprietaireId,
            dateTraitement: new Date(),
            motifRejet: null,
        },
    });
};
export const rejectVerification = async (locataireId, proprietaireId, motifRejet) => {
    // Vérifier que le propriétaire a accès au locataire (créateur ou via bail)
    const locataire = await prisma.locataire.findFirst({
        where: {
            id: locataireId,
            OR: [
                { proprietaireId },
                { bails: { some: { proprietaireId } } },
            ],
        },
    });
    if (!locataire) {
        return null;
    }
    return prisma.locataireVerification.update({
        where: { locataireId },
        data: {
            statut: StatutVerificationLocataire.REJECTED,
            traitePar: proprietaireId,
            dateTraitement: new Date(),
            motifRejet,
        },
    });
};
// ─── Password reset tokens ────────────────────────────────────────────────────
export const createPasswordResetToken = async (data) => {
    return prisma.locatairePasswordResetToken.create({ data });
};
export const findPasswordResetToken = async (tokenHash) => {
    return prisma.locatairePasswordResetToken.findUnique({ where: { tokenHash } });
};
export const invalidatePasswordResetTokens = async (locataireId) => {
    return prisma.locatairePasswordResetToken.deleteMany({ where: { locataireId } });
};
export const markPasswordResetTokenUsed = async (tokenHash) => {
    return prisma.locatairePasswordResetToken.update({
        where: { tokenHash },
        data: { usedAt: new Date() },
    });
};
// ─── Nombre de vérifications en attente ─────────────────────────────────────
export const getPendingVerificationsCount = async (proprietaireId) => {
    return prisma.locataireVerification.count({
        where: {
            statut: StatutVerificationLocataire.PENDING,
            locataire: {
                OR: [
                    { proprietaireId },
                    { bails: { some: { proprietaireId } } },
                ],
            },
        },
    });
};
//# sourceMappingURL=locataire.repository.js.map