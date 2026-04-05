export declare const getAll: (params: {
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
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}>;
export declare const getActifs: (typeBail?: string) => Promise<{
    id: string;
    titre: string;
    ordre: number;
    typeBail: string | null;
}[]>;
export declare const create: (data: {
    titre: string;
    typeBail?: string | null;
    contenu: string;
    actif?: boolean;
    ordre?: number;
}) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    titre: string;
    actif: boolean;
    ordre: number;
    contenu: string;
    typeBail: string | null;
}>;
export declare const update: (id: string, data: {
    titre?: string;
    typeBail?: string | null;
    contenu?: string;
    actif?: boolean;
    ordre?: number;
}) => Promise<{
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
//# sourceMappingURL=modeleContrat.service.d.ts.map