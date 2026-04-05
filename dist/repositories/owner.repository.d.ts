export declare const findByTelephone: (telephone: string) => import("../generated/prisma/models.js").Prisma__ProprietaireClient<{
    id: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
    sexe: string | null;
    password: string;
    statutVerification: import("../generated/prisma/enums.js").StatutVerification;
    verifiedAt: Date | null;
    telephoneVerifie: boolean;
    telephoneOtp: string | null;
    telephoneOtpExpiresAt: Date | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    nbAvertissements: number;
    nbSignalementsValides: number;
    estRestreint: boolean;
    dateFinRestriction: Date | null;
    dateFinSuspension: Date | null;
    estBanni: boolean;
    dateBannissement: Date | null;
} | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const findByEmail: (email: string) => import("../generated/prisma/models.js").Prisma__ProprietaireClient<{
    id: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
    sexe: string | null;
    password: string;
    statutVerification: import("../generated/prisma/enums.js").StatutVerification;
    verifiedAt: Date | null;
    telephoneVerifie: boolean;
    telephoneOtp: string | null;
    telephoneOtpExpiresAt: Date | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    nbAvertissements: number;
    nbSignalementsValides: number;
    estRestreint: boolean;
    dateFinRestriction: Date | null;
    dateFinSuspension: Date | null;
    estBanni: boolean;
    dateBannissement: Date | null;
} | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const findById: (id: string) => import("../generated/prisma/models.js").Prisma__ProprietaireClient<{
    id: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
    sexe: string | null;
    password: string;
    statutVerification: import("../generated/prisma/enums.js").StatutVerification;
    verifiedAt: Date | null;
    telephoneVerifie: boolean;
    telephoneOtp: string | null;
    telephoneOtpExpiresAt: Date | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    nbAvertissements: number;
    nbSignalementsValides: number;
    estRestreint: boolean;
    dateFinRestriction: Date | null;
    dateFinSuspension: Date | null;
    estBanni: boolean;
    dateBannissement: Date | null;
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
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
    sexe: string | null;
    password: string;
    statutVerification: import("../generated/prisma/enums.js").StatutVerification;
    verifiedAt: Date | null;
    telephoneVerifie: boolean;
    telephoneOtp: string | null;
    telephoneOtpExpiresAt: Date | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    nbAvertissements: number;
    nbSignalementsValides: number;
    estRestreint: boolean;
    dateFinRestriction: Date | null;
    dateFinSuspension: Date | null;
    estBanni: boolean;
    dateBannissement: Date | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const update: (id: string, data: {
    prenom?: string;
    nom?: string;
    sexe?: string | null;
    telephone?: string;
    email?: string | null;
    password?: string;
}) => import("../generated/prisma/models.js").Prisma__ProprietaireClient<{
    id: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
    sexe: string | null;
    password: string;
    statutVerification: import("../generated/prisma/enums.js").StatutVerification;
    verifiedAt: Date | null;
    telephoneVerifie: boolean;
    telephoneOtp: string | null;
    telephoneOtpExpiresAt: Date | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    nbAvertissements: number;
    nbSignalementsValides: number;
    estRestreint: boolean;
    dateFinRestriction: Date | null;
    dateFinSuspension: Date | null;
    estBanni: boolean;
    dateBannissement: Date | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const remove: (id: string) => import("../generated/prisma/models.js").Prisma__ProprietaireClient<{
    id: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
    sexe: string | null;
    password: string;
    statutVerification: import("../generated/prisma/enums.js").StatutVerification;
    verifiedAt: Date | null;
    telephoneVerifie: boolean;
    telephoneOtp: string | null;
    telephoneOtpExpiresAt: Date | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    nbAvertissements: number;
    nbSignalementsValides: number;
    estRestreint: boolean;
    dateFinRestriction: Date | null;
    dateFinSuspension: Date | null;
    estBanni: boolean;
    dateBannissement: Date | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const createRefreshToken: (data: {
    proprietaireId: string;
    tokenHash: string;
    expiresAt: Date;
}) => import("../generated/prisma/models.js").Prisma__ProprietaireRefreshTokenClient<{
    proprietaireId: string;
    id: string;
    createdAt: Date;
    expiresAt: Date;
    tokenHash: string;
    revokedAt: Date | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const findRefreshToken: (tokenHash: string) => import("../generated/prisma/models.js").Prisma__ProprietaireRefreshTokenClient<{
    proprietaireId: string;
    id: string;
    createdAt: Date;
    expiresAt: Date;
    tokenHash: string;
    revokedAt: Date | null;
} | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const revokeRefreshToken: (tokenHash: string) => import("../generated/prisma/models.js").Prisma__ProprietaireRefreshTokenClient<{
    proprietaireId: string;
    id: string;
    createdAt: Date;
    expiresAt: Date;
    tokenHash: string;
    revokedAt: Date | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const revokeAllRefreshTokens: (proprietaireId: string) => import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<import("../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
export declare const createPasswordResetToken: (data: {
    proprietaireId: string;
    tokenHash: string;
    expiresAt: Date;
}) => import("../generated/prisma/models.js").Prisma__PasswordResetTokenClient<{
    proprietaireId: string;
    id: string;
    createdAt: Date;
    expiresAt: Date;
    tokenHash: string;
    usedAt: Date | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const findPasswordResetToken: (tokenHash: string) => import("../generated/prisma/models.js").Prisma__PasswordResetTokenClient<{
    proprietaireId: string;
    id: string;
    createdAt: Date;
    expiresAt: Date;
    tokenHash: string;
    usedAt: Date | null;
} | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const markPasswordResetTokenUsed: (tokenHash: string) => import("../generated/prisma/models.js").Prisma__PasswordResetTokenClient<{
    proprietaireId: string;
    id: string;
    createdAt: Date;
    expiresAt: Date;
    tokenHash: string;
    usedAt: Date | null;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const invalidatePasswordResetTokens: (proprietaireId: string) => import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<import("../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
//# sourceMappingURL=owner.repository.d.ts.map