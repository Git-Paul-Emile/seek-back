import type { TypeLogement } from "../generated/prisma/index.js";
export declare const findAll: () => Promise<TypeLogement[]>;
export declare const findAllAdmin: () => Promise<TypeLogement[]>;
export declare const findById: (id: string) => Promise<TypeLogement | null>;
export declare const findBySlug: (slug: string) => Promise<TypeLogement | null>;
export declare const findByOrdre: (ordre: number) => Promise<TypeLogement | null>;
export declare const create: (data: {
    nom: string;
    slug: string;
    image?: string;
    ordre?: number;
}) => Promise<TypeLogement>;
export declare const update: (id: string, data: Partial<{
    nom: string;
    slug: string;
    image: string;
    actif: boolean;
    ordre: number;
}>) => Promise<TypeLogement>;
export declare const remove: (id: string) => Promise<TypeLogement>;
//# sourceMappingURL=typeLogement.repository.d.ts.map