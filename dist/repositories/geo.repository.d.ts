export declare const findAllPays: () => import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    code: string;
}[]>;
export declare const findAllPaysAdmin: () => import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
    _count: {
        villes: number;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    code: string;
})[]>;
export declare const createPays: (data: {
    nom: string;
    code: string;
}) => import("../generated/prisma/models.js").Prisma__PaysClient<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    code: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const updatePays: (id: string, data: {
    nom?: string;
    code?: string;
}) => import("../generated/prisma/models.js").Prisma__PaysClient<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    code: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const deletePays: (id: string) => import("../generated/prisma/models.js").Prisma__PaysClient<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    code: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const findVillesByPays: (paysId: string) => import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    paysId: string;
}[]>;
export declare const findAllVillesAdmin: (paysId?: string) => import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
    pays: {
        id: string;
        nom: string;
        code: string;
    };
    _count: {
        quartiers: number;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    paysId: string;
})[]>;
export declare const createVille: (data: {
    nom: string;
    paysId: string;
}) => import("../generated/prisma/models.js").Prisma__VilleClient<{
    pays: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        code: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    paysId: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const updateVille: (id: string, data: {
    nom?: string;
    paysId?: string;
}) => import("../generated/prisma/models.js").Prisma__VilleClient<{
    pays: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        code: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    paysId: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const deleteVille: (id: string) => import("../generated/prisma/models.js").Prisma__VilleClient<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    paysId: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const findQuartiersByVille: (villeId: string) => import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    latitude: number;
    longitude: number;
    nom: string;
    villeId: string;
}[]>;
export declare const findAllQuartiersAdmin: (villeId?: string) => import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
    ville: {
        id: string;
        pays: {
            id: string;
            nom: string;
        };
        nom: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    latitude: number;
    longitude: number;
    nom: string;
    villeId: string;
})[]>;
export declare const createQuartier: (data: {
    nom: string;
    villeId: string;
    latitude: number;
    longitude: number;
}) => import("../generated/prisma/models.js").Prisma__QuartierClient<{
    ville: {
        pays: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            code: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        paysId: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    latitude: number;
    longitude: number;
    nom: string;
    villeId: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const updateQuartier: (id: string, data: {
    nom?: string;
    villeId?: string;
    latitude?: number;
    longitude?: number;
}) => import("../generated/prisma/models.js").Prisma__QuartierClient<{
    ville: {
        pays: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            code: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        paysId: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    latitude: number;
    longitude: number;
    nom: string;
    villeId: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
export declare const deleteQuartier: (id: string) => import("../generated/prisma/models.js").Prisma__QuartierClient<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    latitude: number;
    longitude: number;
    nom: string;
    villeId: string;
}, never, import("@prisma/client/runtime/library").DefaultArgs, {
    omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
}>;
//# sourceMappingURL=geo.repository.d.ts.map