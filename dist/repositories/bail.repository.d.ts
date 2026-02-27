import type { StatutBail } from "../generated/prisma/enums.js";
export interface CreateBailData {
    bienId: string;
    locataireId: string;
    proprietaireId: string;
    typeBail?: string | null;
    dateDebutBail: Date;
    dateFinBail?: Date | null;
    renouvellement?: boolean;
    montantLoyer: number;
    montantCaution?: number | null;
    frequencePaiement?: string | null;
}
export declare const create: (data: CreateBailData) => Promise<{
    bien: {
        id: string;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        ville: string | null;
        quartier: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    proprietaireId: string;
    statut: StatutBail;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
}>;
export declare const findById: (id: string) => Promise<({
    bien: {
        id: string;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        ville: string | null;
        quartier: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    proprietaireId: string;
    statut: StatutBail;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
}) | null>;
export declare const findActifByBien: (bienId: string) => Promise<({
    bien: {
        id: string;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        ville: string | null;
        quartier: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    proprietaireId: string;
    statut: StatutBail;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
}) | null>;
export declare const findByBien: (bienId: string) => Promise<({
    bien: {
        id: string;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        ville: string | null;
        quartier: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    proprietaireId: string;
    statut: StatutBail;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
})[]>;
export declare const updateStatut: (id: string, statut: StatutBail) => Promise<{
    bien: {
        id: string;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        ville: string | null;
        quartier: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    proprietaireId: string;
    statut: StatutBail;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
}>;
export declare const prolonger: (id: string, dateFinBail: Date) => Promise<{
    bien: {
        id: string;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        ville: string | null;
        quartier: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    proprietaireId: string;
    statut: StatutBail;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
}>;
export declare const getStatutBienBySlug: (slug: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    slug: string;
    actif: boolean;
    ordre: number;
} | null>;
export declare const updateBienStatut: (bienId: string, statutBienId: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    proprietaireId: string;
    actif: boolean;
    typeLogementId: string | null;
    statutAnnonce: import("../generated/prisma/enums.js").StatutAnnonce;
    meuble: boolean;
    titre: string | null;
    typeTransactionId: string | null;
    statutBienId: string | null;
    pays: string | null;
    region: string | null;
    ville: string | null;
    quartier: string | null;
    adresse: string | null;
    pointRepere: string | null;
    latitude: number | null;
    longitude: number | null;
    surface: number | null;
    surfaceParcelle: number | null;
    nbChambres: number | null;
    nbSdb: number | null;
    nbSalons: number | null;
    nbCuisines: number | null;
    etage: number | null;
    nbEtages: number | null;
    nbAppartements: number | null;
    nbPieces: number | null;
    nbWc: number | null;
    typeTerrain: string | null;
    cloture: boolean;
    typeBureau: string | null;
    rideauMetallique: boolean;
    fumeurs: boolean;
    animaux: boolean;
    parking: boolean;
    ascenseur: boolean;
    prix: number | null;
    frequencePaiement: string | null;
    chargesIncluses: boolean;
    caution: number | null;
    disponibleLe: Date | null;
    photos: string[];
    noteAdmin: string | null;
    hasPendingRevision: boolean;
    pendingRevision: import("@prisma/client/runtime/library").JsonValue | null;
}>;
//# sourceMappingURL=bail.repository.d.ts.map