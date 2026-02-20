export declare const getAll: () => import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
    categorie: {
        id: string;
        nom: string;
        slug: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    actif: boolean;
    categorieId: string;
})[]>;
export declare const getAllAdmin: () => import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
    categorie: {
        id: string;
        nom: string;
        slug: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    actif: boolean;
    categorieId: string;
})[]>;
export declare const createMany: (items: {
    nom: string;
    categorieId: string;
}[]) => Promise<({
    categorie: {
        id: string;
        nom: string;
        slug: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    actif: boolean;
    categorieId: string;
})[]>;
export declare const update: (id: string, data: Partial<{
    nom: string;
    categorieId: string;
    actif: boolean;
}>) => Promise<{
    categorie: {
        id: string;
        nom: string;
        slug: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    actif: boolean;
    categorieId: string;
}>;
export declare const remove: (id: string) => Promise<void>;
//# sourceMappingURL=equipement.service.d.ts.map