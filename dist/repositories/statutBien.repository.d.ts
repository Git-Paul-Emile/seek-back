import type { StatutBien } from "../generated/prisma/index.js";
export declare const findAll: () => Promise<StatutBien[]>;
export declare const findAllAdmin: () => Promise<StatutBien[]>;
export declare const findById: (id: string) => Promise<StatutBien | null>;
export declare const findBySlug: (slug: string) => Promise<StatutBien | null>;
export declare const findByOrdre: (ordre: number) => Promise<StatutBien | null>;
export declare const create: (data: {
    nom: string;
    slug: string;
    ordre?: number;
}) => Promise<StatutBien>;
export declare const update: (id: string, data: Partial<{
    nom: string;
    slug: string;
    actif: boolean;
    ordre: number;
}>) => Promise<StatutBien>;
export declare const remove: (id: string) => Promise<StatutBien>;
//# sourceMappingURL=statutBien.repository.d.ts.map