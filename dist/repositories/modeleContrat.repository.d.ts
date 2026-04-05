export interface CreateModeleContratData {
    titre: string;
    typeBail?: string | null;
    contenu: string;
    actif?: boolean;
    ordre?: number;
}
export interface UpdateModeleContratData {
    titre?: string;
    typeBail?: string | null;
    contenu?: string;
    actif?: boolean;
    ordre?: number;
}
export declare const create: (data: CreateModeleContratData) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    titre: string;
    actif: boolean;
    ordre: number;
    contenu: string;
    typeBail: string | null;
}>;
export declare const findById: (id: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    titre: string;
    actif: boolean;
    ordre: number;
    contenu: string;
    typeBail: string | null;
} | null>;
export declare const update: (id: string, data: UpdateModeleContratData) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    titre: string;
    actif: boolean;
    ordre: number;
    contenu: string;
    typeBail: string | null;
}>;
export declare const remove: (id: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    titre: string;
    actif: boolean;
    ordre: number;
    contenu: string;
    typeBail: string | null;
}>;
export declare const countContrats: (modeleId: string) => Promise<number>;
export declare const findMany: (params: {
    page: number;
    limit: number;
    typeBail?: string;
    actif?: boolean;
}) => Promise<{
    items: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        titre: string;
        actif: boolean;
        ordre: number;
        contenu: string;
        typeBail: string | null;
    }[];
    total: number;
}>;
export declare const findActifs: (typeBail?: string) => Promise<{
    id: string;
    titre: string;
    ordre: number;
    typeBail: string | null;
}[]>;
//# sourceMappingURL=modeleContrat.repository.d.ts.map