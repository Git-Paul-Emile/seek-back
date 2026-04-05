import type { CategorieEquipement } from "../generated/prisma/client.js";
export declare const getAll: () => Promise<CategorieEquipement[]>;
export declare const getActive: () => Promise<CategorieEquipement[]>;
export declare const create: (data: {
    nom: string;
    actif?: boolean;
    ordre?: number;
}) => Promise<CategorieEquipement>;
export declare const update: (id: string, data: Partial<{
    nom: string;
    actif: boolean;
    ordre: number;
}>) => Promise<CategorieEquipement>;
export declare const remove: (id: string) => Promise<void>;
//# sourceMappingURL=categorieEquipement.service.d.ts.map