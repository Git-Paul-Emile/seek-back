import type { StatutContrat } from "../generated/prisma/enums.js";
export declare const create: (data: {
    bailId: string;
    modeleId?: string | null;
    titre: string;
    contenu: string;
}) => Promise<{
    modele: {
        id: string;
        titre: string;
        typeBail: string | null;
    } | null;
} & {
    statut: StatutContrat;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    titre: string;
    contenu: string;
    bailId: string;
    modeleId: string | null;
}>;
export declare const findByBailId: (bailId: string) => Promise<({
    modele: {
        id: string;
        titre: string;
        typeBail: string | null;
    } | null;
} & {
    statut: StatutContrat;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    titre: string;
    contenu: string;
    bailId: string;
    modeleId: string | null;
}) | null>;
export declare const update: (id: string, data: {
    contenu: string;
}) => Promise<{
    modele: {
        id: string;
        titre: string;
        typeBail: string | null;
    } | null;
} & {
    statut: StatutContrat;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    titre: string;
    contenu: string;
    bailId: string;
    modeleId: string | null;
}>;
export declare const updateStatut: (id: string, statut: StatutContrat) => Promise<{
    modele: {
        id: string;
        titre: string;
        typeBail: string | null;
    } | null;
} & {
    statut: StatutContrat;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    titre: string;
    contenu: string;
    bailId: string;
    modeleId: string | null;
}>;
export declare const remove: (id: string) => Promise<{
    statut: StatutContrat;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    titre: string;
    contenu: string;
    bailId: string;
    modeleId: string | null;
}>;
//# sourceMappingURL=contrat.repository.d.ts.map