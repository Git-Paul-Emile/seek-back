export declare const findAllPays: () => import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    code: string;
    nom: string;
}[]>;
export declare const findVillesByPays: (paysId: string) => import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    paysId: string;
}[]>;
//# sourceMappingURL=geo.repository.d.ts.map