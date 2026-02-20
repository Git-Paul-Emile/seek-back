import type { Admin, RefreshToken } from "../generated/prisma/index.js";
export declare const findAdminByEmail: (email: string) => Promise<Admin | null>;
export declare const findAdminById: (id: string) => Promise<Admin | null>;
export declare const createRefreshToken: (data: {
    adminId: string;
    tokenHash: string;
    expiresAt: Date;
}) => Promise<RefreshToken>;
export declare const findRefreshToken: (tokenHash: string) => Promise<RefreshToken | null>;
/** Révoque un token précis (logout ou rotation) */
export declare const revokeRefreshToken: (tokenHash: string) => Promise<RefreshToken>;
/** Révoque TOUS les tokens d'un admin (compromission détectée) */
export declare const revokeAllRefreshTokens: (adminId: string) => Promise<{
    count: number;
}>;
/** Supprime les tokens expirés (nettoyage optionnel) */
export declare const deleteExpiredRefreshTokens: () => Promise<{
    count: number;
}>;
//# sourceMappingURL=auth.repository.d.ts.map