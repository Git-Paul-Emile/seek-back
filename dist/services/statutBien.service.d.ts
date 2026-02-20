import type { StatutBien } from "../generated/prisma/index.js";
export declare const getAll: () => Promise<StatutBien[]>;
export declare const getAllAdmin: () => Promise<StatutBien[]>;
export declare const getById: (id: string) => Promise<StatutBien | null>;
export declare const create: (data: {
    nom: string;
    ordre?: number;
}) => Promise<StatutBien>;
export declare const update: (id: string, data: Partial<{
    nom: string;
    actif: boolean;
    ordre: number;
}>) => Promise<StatutBien>;
export declare const remove: (id: string) => Promise<void>;
//# sourceMappingURL=statutBien.service.d.ts.map