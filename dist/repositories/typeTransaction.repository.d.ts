import type { TypeTransaction } from "../generated/prisma/index.js";
export declare const findAll: () => Promise<TypeTransaction[]>;
export declare const findAllAdmin: () => Promise<TypeTransaction[]>;
export declare const findById: (id: string) => Promise<TypeTransaction | null>;
export declare const findBySlug: (slug: string) => Promise<TypeTransaction | null>;
export declare const findByOrdre: (ordre: number) => Promise<TypeTransaction | null>;
export declare const create: (data: {
    nom: string;
    slug: string;
    ordre?: number;
}) => Promise<TypeTransaction>;
export declare const update: (id: string, data: Partial<{
    nom: string;
    slug: string;
    actif: boolean;
    ordre: number;
}>) => Promise<TypeTransaction>;
export declare const remove: (id: string) => Promise<TypeTransaction>;
//# sourceMappingURL=typeTransaction.repository.d.ts.map