export declare const findByTelephone: (telephone: string) => import("../generated/prisma/models.js").Prisma__ProprietaireClient<{
    id: string;
    email: string | null;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    telephone: string;
    prenom: string;
    nom: string;
    sexe: string | null;
} | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const findByEmail: (email: string) => import("../generated/prisma/models.js").Prisma__ProprietaireClient<{
    id: string;
    email: string | null;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    telephone: string;
    prenom: string;
    nom: string;
    sexe: string | null;
} | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const findById: (id: string) => import("../generated/prisma/models.js").Prisma__ProprietaireClient<{
    id: string;
    email: string | null;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    telephone: string;
    prenom: string;
    nom: string;
    sexe: string | null;
} | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const create: (data: {
    prenom: string;
    nom: string;
    sexe?: string | null;
    telephone: string;
    email?: string | null;
    password: string;
}) => import("../generated/prisma/models.js").Prisma__ProprietaireClient<{
    id: string;
    email: string | null;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    telephone: string;
    prenom: string;
    nom: string;
    sexe: string | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const createRefreshToken: (data: {
    proprietaireId: string;
    tokenHash: string;
    expiresAt: Date;
}) => import("../generated/prisma/models.js").Prisma__ProprietaireRefreshTokenClient<{
    id: string;
    createdAt: Date;
    tokenHash: string;
    expiresAt: Date;
    revokedAt: Date | null;
    proprietaireId: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const findRefreshToken: (tokenHash: string) => import("../generated/prisma/models.js").Prisma__ProprietaireRefreshTokenClient<{
    id: string;
    createdAt: Date;
    tokenHash: string;
    expiresAt: Date;
    revokedAt: Date | null;
    proprietaireId: string;
} | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const revokeRefreshToken: (tokenHash: string) => import("../generated/prisma/models.js").Prisma__ProprietaireRefreshTokenClient<{
    id: string;
    createdAt: Date;
    tokenHash: string;
    expiresAt: Date;
    revokedAt: Date | null;
    proprietaireId: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const revokeAllRefreshTokens: (proprietaireId: string) => import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<import("../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
//# sourceMappingURL=owner.repository.d.ts.map