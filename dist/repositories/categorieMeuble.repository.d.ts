import type { CategorieMeubleModel as CategorieMeuble } from "../generated/prisma/index.js";
export declare const findAll: () => Promise<CategorieMeuble[]>;
export declare const findActive: () => Promise<CategorieMeuble[]>;
export declare const findById: (id: string) => Promise<CategorieMeuble | null>;
export declare const findBySlug: (slug: string) => Promise<CategorieMeuble | null>;
export declare const findByNom: (nom: string) => Promise<CategorieMeuble | null>;
export declare const create: (data: {
    nom: string;
    slug: string;
    actif?: boolean;
    ordre?: number;
}) => Promise<CategorieMeuble>;
export declare const update: (id: string, data: Partial<{
    nom: string;
    slug: string;
    actif: boolean;
    ordre: number;
}>) => Promise<CategorieMeuble>;
export declare const remove: (id: string) => Promise<CategorieMeuble>;
export declare const countMeubles: (id: string) => Promise<number>;
//# sourceMappingURL=categorieMeuble.repository.d.ts.map