import { prisma } from "../config/database.js";
// ─── Proprietaire ────────────────────────────────────────────────────────────
export const findByTelephone = (telephone) => prisma.proprietaire.findUnique({ where: { telephone } });
export const findByEmail = (email) => prisma.proprietaire.findUnique({ where: { email } });
export const findById = (id) => prisma.proprietaire.findUnique({ where: { id } });
export const create = (data) => prisma.proprietaire.create({ data });
// ─── ProprietaireRefreshToken ─────────────────────────────────────────────────
export const createRefreshToken = (data) => prisma.proprietaireRefreshToken.create({ data });
export const findRefreshToken = (tokenHash) => prisma.proprietaireRefreshToken.findUnique({ where: { tokenHash } });
export const revokeRefreshToken = (tokenHash) => prisma.proprietaireRefreshToken.update({
    where: { tokenHash },
    data: { revokedAt: new Date() },
});
export const revokeAllRefreshTokens = (proprietaireId) => prisma.proprietaireRefreshToken.updateMany({
    where: { proprietaireId, revokedAt: null },
    data: { revokedAt: new Date() },
});
//# sourceMappingURL=owner.repository.js.map