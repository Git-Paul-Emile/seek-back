import type { TypeTransaction } from "../generated/prisma/index.js";
export declare const getAll: () => Promise<TypeTransaction[]>;
export declare const getAllAdmin: () => Promise<TypeTransaction[]>;
export declare const getById: (id: string) => Promise<TypeTransaction | null>;
export declare const create: (data: {
    nom: string;
    ordre?: number;
}) => Promise<TypeTransaction>;
export declare const update: (id: string, data: Partial<{
    nom: string;
    actif: boolean;
    ordre: number;
}>) => Promise<TypeTransaction>;
export declare const remove: (id: string) => Promise<void>;
//# sourceMappingURL=typeTransaction.service.d.ts.map