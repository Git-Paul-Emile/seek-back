export declare const findAll: () => import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
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
export declare const findAllAdmin: () => import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
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
export declare const findById: (id: string) => import("../generated/prisma/models.js").Prisma__MeubleClient<({
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
}) | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const findByNomAndCategorie: (nom: string, categorieId: string) => import("../generated/prisma/models.js").Prisma__MeubleClient<({
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
}) | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
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
}>) => import("../generated/prisma/models.js").Prisma__MeubleClient<{
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
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const remove: (id: string) => import("../generated/prisma/models.js").Prisma__MeubleClient<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    actif: boolean;
    categorieId: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
//# sourceMappingURL=meuble.repository.d.ts.map