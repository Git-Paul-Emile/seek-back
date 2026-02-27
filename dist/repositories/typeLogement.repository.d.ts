interface TypeLogementType {
    id: string;
    nom: string;
    slug: string;
    image: string | null;
    actif: boolean;
    ordre: number;
    createdAt: Date;
    updatedAt: Date;
}
type TypeLogementWithCount = TypeLogementType & {
    count: number;
};
export declare const findAll: () => Promise<TypeLogementWithCount[]>;
export declare const findAllAdmin: () => import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    slug: string;
    image: string | null;
    actif: boolean;
    ordre: number;
}[]>;
export declare const findById: (id: string) => Promise<TypeLogementType | null>;
export declare const findBySlug: (slug: string) => Promise<TypeLogementType | null>;
export declare const findByOrdre: (ordre: number) => Promise<TypeLogementType | null>;
export declare const create: (data: {
    nom: string;
    slug: string;
    image?: string;
    ordre?: number;
}) => Promise<TypeLogementType>;
export declare const update: (id: string, data: Partial<{
    nom: string;
    slug: string;
    image: string;
    actif: boolean;
    ordre: number;
}>) => Promise<TypeLogementType>;
export declare const remove: (id: string) => Promise<TypeLogementType>;
export {};
//# sourceMappingURL=typeLogement.repository.d.ts.map