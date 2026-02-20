import type { CategorieMeubleModel as CategorieMeuble } from "../generated/prisma/index.js";
export declare const getAll: () => Promise<CategorieMeuble[]>;
export declare const getActive: () => Promise<CategorieMeuble[]>;
export declare const create: (data: {
    nom: string;
    actif?: boolean;
    ordre?: number;
}) => Promise<CategorieMeuble>;
export declare const update: (id: string, data: Partial<{
    nom: string;
    actif: boolean;
    ordre: number;
}>) => Promise<CategorieMeuble>;
export declare const remove: (id: string) => Promise<void>;
//# sourceMappingURL=categorieMeuble.service.d.ts.map