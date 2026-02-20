import { prisma } from "../config/database.js";
// ─── Admin ────────────────────────────────────────────────────────────────────
export const findAdminByEmail = (email) => prisma.admin.findUnique({ where: { email } });
export const findAdminById = (id) => prisma.admin.findUnique({ where: { id } });
// ─── RefreshToken ─────────────────────────────────────────────────────────────
export const createRefreshToken = (data) => prisma.refreshToken.create({ data });
export const findRefreshToken = (tokenHash) => prisma.refreshToken.findUnique({ where: { tokenHash } });
/** Révoque un token précis (logout ou rotation) */
export const revokeRefreshToken = (tokenHash) => prisma.refreshToken.update({
    where: { tokenHash },
    data: { revokedAt: new Date() },
});
/** Révoque TOUS les tokens d'un admin (compromission détectée) */
export const revokeAllRefreshTokens = (adminId) => prisma.refreshToken.updateMany({
    where: { adminId, revokedAt: null },
    data: { revokedAt: new Date() },
});
/** Supprime les tokens expirés (nettoyage optionnel) */
export const deleteExpiredRefreshTokens = () => prisma.refreshToken.deleteMany({
    where: { expiresAt: { lt: new Date() } },
});
//# sourceMappingURL=auth.repository.js.map