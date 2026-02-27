import type { StatutAnnonce } from "../generated/prisma/enums.js";
export interface BienData {
    titre?: string | null;
    description?: string | null;
    typeLogementId?: string | null;
    typeTransactionId?: string | null;
    statutBienId?: string | null;
    proprietaireId: string;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    pointRepere?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    nbWc?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: Date | null;
    photos?: string[];
    statutAnnonce?: StatutAnnonce;
    equipementIds?: string[];
    meubles?: {
        meubleId: string;
        quantite: number;
    }[];
}
export type CreateBienData = BienData;
export interface EtablissementData {
    bienId: string;
    type: string;
    nom?: string | null;
    latitude: number;
    longitude: number;
    distance?: number | null;
}
export declare const createBien: (data: BienData) => Promise<{
    proprietaire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
    };
    typeLogement: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    typeTransaction: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    statutBien: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    meubles: ({
        meuble: {
            id: string;
            nom: string;
        };
    } & {
        bienId: string;
        meubleId: string;
        quantite: number;
    })[];
    equipements: ({
        equipement: {
            id: string;
            nom: string;
        };
    } & {
        bienId: string;
        equipementId: string;
    })[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    proprietaireId: string;
    actif: boolean;
    typeLogementId: string | null;
    statutAnnonce: StatutAnnonce;
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
export declare const updateBien: (id: string, data: Partial<BienData>) => Promise<{
    proprietaire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
    };
    typeLogement: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    typeTransaction: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    statutBien: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    meubles: ({
        meuble: {
            id: string;
            nom: string;
        };
    } & {
        bienId: string;
        meubleId: string;
        quantite: number;
    })[];
    equipements: ({
        equipement: {
            id: string;
            nom: string;
        };
    } & {
        bienId: string;
        equipementId: string;
    })[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    proprietaireId: string;
    actif: boolean;
    typeLogementId: string | null;
    statutAnnonce: StatutAnnonce;
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
export declare const deleteBienById: (id: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    proprietaireId: string;
    actif: boolean;
    typeLogementId: string | null;
    statutAnnonce: StatutAnnonce;
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
export declare const getDraftByProprietaire: (proprietaireId: string) => Promise<({
    proprietaire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
    };
    typeLogement: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    typeTransaction: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    statutBien: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    meubles: ({
        meuble: {
            id: string;
            nom: string;
        };
    } & {
        bienId: string;
        meubleId: string;
        quantite: number;
    })[];
    equipements: ({
        equipement: {
            id: string;
            nom: string;
        };
    } & {
        bienId: string;
        equipementId: string;
    })[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    proprietaireId: string;
    actif: boolean;
    typeLogementId: string | null;
    statutAnnonce: StatutAnnonce;
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
}) | null>;
export declare const updateStatutAnnonce: (id: string, statutAnnonce: StatutAnnonce, noteAdmin?: string) => Promise<{
    proprietaire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
    };
    typeLogement: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    typeTransaction: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    statutBien: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    meubles: ({
        meuble: {
            id: string;
            nom: string;
        };
    } & {
        bienId: string;
        meubleId: string;
        quantite: number;
    })[];
    equipements: ({
        equipement: {
            id: string;
            nom: string;
        };
    } & {
        bienId: string;
        equipementId: string;
    })[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    proprietaireId: string;
    actif: boolean;
    typeLogementId: string | null;
    statutAnnonce: StatutAnnonce;
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
export interface PendingRevisionData {
    titre?: string | null;
    description?: string | null;
    typeLogementId?: string | null;
    typeTransactionId?: string | null;
    statutBienId?: string | null;
    pays?: string | null;
    region?: string | null;
    ville?: string | null;
    quartier?: string | null;
    adresse?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    surface?: number | null;
    nbChambres?: number | null;
    nbSdb?: number | null;
    nbSalons?: number | null;
    nbCuisines?: number | null;
    nbWc?: number | null;
    etage?: number | null;
    nbEtages?: number | null;
    meuble?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    prix?: number | null;
    frequencePaiement?: string | null;
    chargesIncluses?: boolean;
    caution?: number | null;
    disponibleLe?: string | null;
    photos?: string[];
    equipementIds?: string[];
    meubles?: {
        meubleId: string;
        quantite: number;
    }[];
    typeLogement?: {
        nom: string;
        slug: string;
    } | null;
    typeTransaction?: {
        nom: string;
        slug: string;
    } | null;
    statutBien?: {
        nom: string;
        slug: string;
    } | null;
}
/** Saves a pending revision on a PUBLIE bien without changing the public-facing data */
export declare const soumettreRevision: (id: string, revisionData: PendingRevisionData) => Promise<{
    proprietaire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
    };
    typeLogement: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    typeTransaction: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    statutBien: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    meubles: ({
        meuble: {
            id: string;
            nom: string;
        };
    } & {
        bienId: string;
        meubleId: string;
        quantite: number;
    })[];
    equipements: ({
        equipement: {
            id: string;
            nom: string;
        };
    } & {
        bienId: string;
        equipementId: string;
    })[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    proprietaireId: string;
    actif: boolean;
    typeLogementId: string | null;
    statutAnnonce: StatutAnnonce;
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
/** Admin approves a pending revision — applies revision data to main fields */
export declare const approuverRevision: (id: string) => Promise<{
    proprietaire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
    };
    typeLogement: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    typeTransaction: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    statutBien: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    meubles: ({
        meuble: {
            id: string;
            nom: string;
        };
    } & {
        bienId: string;
        meubleId: string;
        quantite: number;
    })[];
    equipements: ({
        equipement: {
            id: string;
            nom: string;
        };
    } & {
        bienId: string;
        equipementId: string;
    })[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    proprietaireId: string;
    actif: boolean;
    typeLogementId: string | null;
    statutAnnonce: StatutAnnonce;
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
/** Admin rejects a pending revision — discards revision, keeps current PUBLIE data */
export declare const rejeterRevision: (id: string, noteAdmin?: string) => Promise<{
    proprietaire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
    };
    typeLogement: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    typeTransaction: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    statutBien: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    meubles: ({
        meuble: {
            id: string;
            nom: string;
        };
    } & {
        bienId: string;
        meubleId: string;
        quantite: number;
    })[];
    equipements: ({
        equipement: {
            id: string;
            nom: string;
        };
    } & {
        bienId: string;
        equipementId: string;
    })[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    proprietaireId: string;
    actif: boolean;
    typeLogementId: string | null;
    statutAnnonce: StatutAnnonce;
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
export declare const createEtablissements: (items: EtablissementData[]) => Promise<import("../generated/prisma/internal/prismaNamespace.js").BatchPayload | undefined>;
export declare const getBiensByProprietaire: (proprietaireId: string) => Promise<({
    proprietaire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
    };
    typeLogement: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    typeTransaction: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    statutBien: {
        id: string;
        nom: string;
        slug: string;
    } | null;
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    proprietaireId: string;
    actif: boolean;
    typeLogementId: string | null;
    statutAnnonce: StatutAnnonce;
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
})[]>;
export declare const getBienById: (id: string) => Promise<({
    proprietaire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
    };
    typeLogement: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        image: string | null;
        actif: boolean;
        ordre: number;
    } | null;
    typeTransaction: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        actif: boolean;
        ordre: number;
    } | null;
    statutBien: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        actif: boolean;
        ordre: number;
    } | null;
    meubles: ({
        meuble: {
            categorie: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                nom: string;
                slug: string;
                actif: boolean;
                ordre: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            actif: boolean;
            categorieId: string;
        };
    } & {
        bienId: string;
        meubleId: string;
        quantite: number;
    })[];
    equipements: ({
        equipement: {
            categorie: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                nom: string;
                slug: string;
                actif: boolean;
                ordre: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            actif: boolean;
            categorieId: string;
        };
    } & {
        bienId: string;
        equipementId: string;
    })[];
    etablissements: {
        id: string;
        createdAt: Date;
        type: string;
        nom: string | null;
        latitude: number;
        longitude: number;
        bienId: string;
        distance: number | null;
    }[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    proprietaireId: string;
    actif: boolean;
    typeLogementId: string | null;
    statutAnnonce: StatutAnnonce;
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
}) | null>;
export declare const countAnnoncesPending: () => Promise<number>;
export declare const getAnnoncesCounts: () => Promise<{
    EN_ATTENTE: number;
    PUBLIE: number;
    REJETE: number;
    ANNULE: number;
}>;
export declare const getAnnonces: (params: {
    statut?: StatutAnnonce;
    page?: number;
    limit?: number;
    includeAnnonule?: boolean;
    includeBrouillon?: boolean;
}) => Promise<{
    items: ({
        proprietaire: {
            id: string;
            email: string | null;
            telephone: string;
            prenom: string;
            nom: string;
        };
        typeLogement: {
            id: string;
            nom: string;
            slug: string;
        } | null;
        typeTransaction: {
            id: string;
            nom: string;
            slug: string;
        } | null;
        statutBien: {
            id: string;
            nom: string;
            slug: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        proprietaireId: string;
        actif: boolean;
        typeLogementId: string | null;
        statutAnnonce: StatutAnnonce;
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
    })[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}>;
export declare const getDernieresAnnonces: (limit?: number) => Promise<{
    isNew: boolean;
    typeLogement: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    typeTransaction: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    statutBien: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    proprietaireId: string;
    actif: boolean;
    typeLogementId: string | null;
    statutAnnonce: StatutAnnonce;
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
}[]>;
export declare const getAnnoncePublieById: (id: string) => Promise<({
    proprietaire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
    };
    typeLogement: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        image: string | null;
        actif: boolean;
        ordre: number;
    } | null;
    typeTransaction: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        actif: boolean;
        ordre: number;
    } | null;
    statutBien: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nom: string;
        slug: string;
        actif: boolean;
        ordre: number;
    } | null;
    meubles: ({
        meuble: {
            categorie: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                nom: string;
                slug: string;
                actif: boolean;
                ordre: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            actif: boolean;
            categorieId: string;
        };
    } & {
        bienId: string;
        meubleId: string;
        quantite: number;
    })[];
    equipements: ({
        equipement: {
            categorie: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                nom: string;
                slug: string;
                actif: boolean;
                ordre: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            nom: string;
            actif: boolean;
            categorieId: string;
        };
    } & {
        bienId: string;
        equipementId: string;
    })[];
    etablissements: {
        id: string;
        createdAt: Date;
        type: string;
        nom: string | null;
        latitude: number;
        longitude: number;
        bienId: string;
        distance: number | null;
    }[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    proprietaireId: string;
    actif: boolean;
    typeLogementId: string | null;
    statutAnnonce: StatutAnnonce;
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
}) | null>;
export interface BienWithRelations {
    id: string;
    titre: string | null;
    description: string | null;
    typeLogementId: string | null;
    typeTransactionId: string | null;
    statutBienId: string | null;
    proprietaireId: string;
    pays: string | null;
    region: string | null;
    ville: string | null;
    quartier: string | null;
    adresse: string | null;
    latitude: number | null;
    longitude: number | null;
    surface: number | null;
    nbChambres: number | null;
    nbSdb: number | null;
    prix: number | null;
    photos: string[];
    statutAnnonce: string;
    createdAt: Date;
    updatedAt: Date;
    typeLogement: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    typeTransaction: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    statutBien: {
        id: string;
        nom: string;
        slug: string;
    } | null;
}
export declare const getAnnoncesSimilairesWithScore: (bienId: string, limit?: number) => Promise<BienWithRelations[]>;
export declare const getAnnoncesSimilaires: (bienId: string, _typeLogementId: string | null, _typeTransactionId: string | null, _ville: string | null, limit?: number) => Promise<BienWithRelations[]>;
export interface OwnerStats {
    totalBiens: number;
    byStatut: {
        statut: string;
        count: number;
    }[];
    recentBiens: {
        id: string;
        titre: string | null;
        statutAnnonce: string;
        ville: string | null;
        prix: number | null;
        photos: string[];
        updatedAt: Date;
        hasPendingRevision: boolean;
    }[];
}
export declare const getOwnerStats: (proprietaireId: string) => Promise<OwnerStats>;
//# sourceMappingURL=bien.repository.d.ts.map