import type { CategorieEquipementModel as CategorieEquipement } from "../generated/prisma/index.js";
export declare const findAll: () => Promise<CategorieEquipement[]>;
export declare const findActive: () => Promise<CategorieEquipement[]>;
export declare const findById: (id: string) => Promise<CategorieEquipement | null>;
export declare const findBySlug: (slug: string) => Promise<CategorieEquipement | null>;
export declare const findByNom: (nom: string) => Promise<CategorieEquipement | null>;
export declare const create: (data: {
    nom: string;
    slug: string;
    actif?: boolean;
    ordre?: number;
}) => Promise<CategorieEquipement>;
export declare const update: (id: string, data: Partial<{
    nom: string;
    slug: string;
    actif: boolean;
    ordre: number;
}>) => Promise<CategorieEquipement>;
export declare const remove: (id: string) => Promise<CategorieEquipement>;
export declare const countEquipements: (id: string) => Promise<number>;
//# sourceMappingURL=categorieEquipement.repository.d.ts.map