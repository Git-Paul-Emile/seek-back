import type { TypeLogement } from "../generated/prisma/index.js";
export declare const getAll: () => Promise<TypeLogement[]>;
export declare const getAllAdmin: () => Promise<TypeLogement[]>;
export declare const getById: (id: string) => Promise<TypeLogement | null>;
export declare const create: (data: {
    nom: string;
    image?: string;
    ordre?: number;
}) => Promise<TypeLogement>;
export declare const update: (id: string, data: Partial<{
    nom: string;
    image: string;
    actif: boolean;
    ordre: number;
}>) => Promise<TypeLogement>;
export declare const remove: (id: string) => Promise<void>;
//# sourceMappingURL=typeLogement.service.d.ts.map