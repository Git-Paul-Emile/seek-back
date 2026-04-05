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
    prixAncien?: number | null;
    dateDerniereModificationPrix?: Date | null;
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
    proprietaire: {
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        statutVerification: import("../generated/prisma/enums.js").StatutVerification;
    };
    statutBien: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    equipements: ({
        equipement: {
            id: string;
            nom: string;
        };
    } & {
        bienId: string;
        equipementId: string;
    })[];
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
    etablissements: {
        id: string;
    }[];
} & {
    description: string | null;
    proprietaireId: string;
    id: string;
    ville: string | null;
    quartier: string | null;
    createdAt: Date;
    updatedAt: Date;
    titre: string | null;
    typeLogementId: string | null;
    typeTransactionId: string | null;
    statutBienId: string | null;
    pays: string | null;
    region: string | null;
    quartierId: string | null;
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
    meuble: boolean;
    fumeurs: boolean;
    animaux: boolean;
    parking: boolean;
    ascenseur: boolean;
    prix: number | null;
    prixAncien: number | null;
    dateDerniereModificationPrix: Date | null;
    frequencePaiement: string | null;
    chargesIncluses: boolean;
    caution: number | null;
    disponibleLe: Date | null;
    photos: string[];
    nbVues: number;
    nbFavoris: number;
    actif: boolean;
    statutAnnonce: StatutAnnonce;
    noteAdmin: string | null;
    estPremium: boolean;
    estMisEnAvant: boolean;
    dateDebutPromotion: Date | null;
    dateFinPromotion: Date | null;
    positionRotation: number;
    dernierAffichage: Date | null;
    publishedAt: Date | null;
}>;
export declare const updateBien: (id: string, data: Partial<BienData>) => Promise<{
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
    proprietaire: {
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        statutVerification: import("../generated/prisma/enums.js").StatutVerification;
    };
    statutBien: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    equipements: ({
        equipement: {
            id: string;
            nom: string;
        };
    } & {
        bienId: string;
        equipementId: string;
    })[];
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
    etablissements: {
        id: string;
    }[];
} & {
    description: string | null;
    proprietaireId: string;
    id: string;
    ville: string | null;
    quartier: string | null;
    createdAt: Date;
    updatedAt: Date;
    titre: string | null;
    typeLogementId: string | null;
    typeTransactionId: string | null;
    statutBienId: string | null;
    pays: string | null;
    region: string | null;
    quartierId: string | null;
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
    meuble: boolean;
    fumeurs: boolean;
    animaux: boolean;
    parking: boolean;
    ascenseur: boolean;
    prix: number | null;
    prixAncien: number | null;
    dateDerniereModificationPrix: Date | null;
    frequencePaiement: string | null;
    chargesIncluses: boolean;
    caution: number | null;
    disponibleLe: Date | null;
    photos: string[];
    nbVues: number;
    nbFavoris: number;
    actif: boolean;
    statutAnnonce: StatutAnnonce;
    noteAdmin: string | null;
    estPremium: boolean;
    estMisEnAvant: boolean;
    dateDebutPromotion: Date | null;
    dateFinPromotion: Date | null;
    positionRotation: number;
    dernierAffichage: Date | null;
    publishedAt: Date | null;
}>;
export declare const deleteBienById: (id: string) => Promise<{
    description: string | null;
    proprietaireId: string;
    id: string;
    ville: string | null;
    quartier: string | null;
    createdAt: Date;
    updatedAt: Date;
    titre: string | null;
    typeLogementId: string | null;
    typeTransactionId: string | null;
    statutBienId: string | null;
    pays: string | null;
    region: string | null;
    quartierId: string | null;
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
    meuble: boolean;
    fumeurs: boolean;
    animaux: boolean;
    parking: boolean;
    ascenseur: boolean;
    prix: number | null;
    prixAncien: number | null;
    dateDerniereModificationPrix: Date | null;
    frequencePaiement: string | null;
    chargesIncluses: boolean;
    caution: number | null;
    disponibleLe: Date | null;
    photos: string[];
    nbVues: number;
    nbFavoris: number;
    actif: boolean;
    statutAnnonce: StatutAnnonce;
    noteAdmin: string | null;
    estPremium: boolean;
    estMisEnAvant: boolean;
    dateDebutPromotion: Date | null;
    dateFinPromotion: Date | null;
    positionRotation: number;
    dernierAffichage: Date | null;
    publishedAt: Date | null;
}>;
export declare const getDraftByProprietaire: (proprietaireId: string) => Promise<({
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
    proprietaire: {
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        statutVerification: import("../generated/prisma/enums.js").StatutVerification;
    };
    statutBien: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    equipements: ({
        equipement: {
            id: string;
            nom: string;
        };
    } & {
        bienId: string;
        equipementId: string;
    })[];
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
    etablissements: {
        id: string;
    }[];
} & {
    description: string | null;
    proprietaireId: string;
    id: string;
    ville: string | null;
    quartier: string | null;
    createdAt: Date;
    updatedAt: Date;
    titre: string | null;
    typeLogementId: string | null;
    typeTransactionId: string | null;
    statutBienId: string | null;
    pays: string | null;
    region: string | null;
    quartierId: string | null;
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
    meuble: boolean;
    fumeurs: boolean;
    animaux: boolean;
    parking: boolean;
    ascenseur: boolean;
    prix: number | null;
    prixAncien: number | null;
    dateDerniereModificationPrix: Date | null;
    frequencePaiement: string | null;
    chargesIncluses: boolean;
    caution: number | null;
    disponibleLe: Date | null;
    photos: string[];
    nbVues: number;
    nbFavoris: number;
    actif: boolean;
    statutAnnonce: StatutAnnonce;
    noteAdmin: string | null;
    estPremium: boolean;
    estMisEnAvant: boolean;
    dateDebutPromotion: Date | null;
    dateFinPromotion: Date | null;
    positionRotation: number;
    dernierAffichage: Date | null;
    publishedAt: Date | null;
}) | null>;
export declare const updateStatutAnnonce: (id: string, statutAnnonce: StatutAnnonce, noteAdmin?: string) => Promise<{
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
    proprietaire: {
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        statutVerification: import("../generated/prisma/enums.js").StatutVerification;
    };
    statutBien: {
        id: string;
        nom: string;
        slug: string;
    } | null;
    equipements: ({
        equipement: {
            id: string;
            nom: string;
        };
    } & {
        bienId: string;
        equipementId: string;
    })[];
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
    etablissements: {
        id: string;
    }[];
} & {
    description: string | null;
    proprietaireId: string;
    id: string;
    ville: string | null;
    quartier: string | null;
    createdAt: Date;
    updatedAt: Date;
    titre: string | null;
    typeLogementId: string | null;
    typeTransactionId: string | null;
    statutBienId: string | null;
    pays: string | null;
    region: string | null;
    quartierId: string | null;
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
    meuble: boolean;
    fumeurs: boolean;
    animaux: boolean;
    parking: boolean;
    ascenseur: boolean;
    prix: number | null;
    prixAncien: number | null;
    dateDerniereModificationPrix: Date | null;
    frequencePaiement: string | null;
    chargesIncluses: boolean;
    caution: number | null;
    disponibleLe: Date | null;
    photos: string[];
    nbVues: number;
    nbFavoris: number;
    actif: boolean;
    statutAnnonce: StatutAnnonce;
    noteAdmin: string | null;
    estPremium: boolean;
    estMisEnAvant: boolean;
    dateDebutPromotion: Date | null;
    dateFinPromotion: Date | null;
    positionRotation: number;
    dernierAffichage: Date | null;
    publishedAt: Date | null;
}>;
export declare const createEtablissements: (items: EtablissementData[]) => Promise<import("../generated/prisma/internal/prismaNamespace.js").BatchPayload | undefined>;
export declare const getBiensByProprietaire: (proprietaireId: string) => Promise<({
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
    bails: {
        id: string;
    }[];
    proprietaire: {
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        statutVerification: import("../generated/prisma/enums.js").StatutVerification;
    };
    statutBien: {
        id: string;
        nom: string;
        slug: string;
    } | null;
} & {
    description: string | null;
    proprietaireId: string;
    id: string;
    ville: string | null;
    quartier: string | null;
    createdAt: Date;
    updatedAt: Date;
    titre: string | null;
    typeLogementId: string | null;
    typeTransactionId: string | null;
    statutBienId: string | null;
    pays: string | null;
    region: string | null;
    quartierId: string | null;
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
    meuble: boolean;
    fumeurs: boolean;
    animaux: boolean;
    parking: boolean;
    ascenseur: boolean;
    prix: number | null;
    prixAncien: number | null;
    dateDerniereModificationPrix: Date | null;
    frequencePaiement: string | null;
    chargesIncluses: boolean;
    caution: number | null;
    disponibleLe: Date | null;
    photos: string[];
    nbVues: number;
    nbFavoris: number;
    actif: boolean;
    statutAnnonce: StatutAnnonce;
    noteAdmin: string | null;
    estPremium: boolean;
    estMisEnAvant: boolean;
    dateDebutPromotion: Date | null;
    dateFinPromotion: Date | null;
    positionRotation: number;
    dernierAffichage: Date | null;
    publishedAt: Date | null;
})[]>;
export declare const getBienById: (id: string) => Promise<({
    typeLogement: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        actif: boolean;
        nom: string;
        slug: string;
        image: string | null;
        ordre: number;
    } | null;
    typeTransaction: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        actif: boolean;
        nom: string;
        slug: string;
        ordre: number;
    } | null;
    proprietaire: {
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        statutVerification: import("../generated/prisma/enums.js").StatutVerification;
    };
    statutBien: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        actif: boolean;
        nom: string;
        slug: string;
        ordre: number;
    } | null;
    equipements: ({
        equipement: {
            categorie: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                actif: boolean;
                nom: string;
                slug: string;
                ordre: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            actif: boolean;
            nom: string;
            categorieId: string;
        };
    } & {
        bienId: string;
        equipementId: string;
    })[];
    meubles: ({
        meuble: {
            categorie: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                actif: boolean;
                nom: string;
                slug: string;
                ordre: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            actif: boolean;
            nom: string;
            categorieId: string;
        };
    } & {
        bienId: string;
        meubleId: string;
        quantite: number;
    })[];
    etablissements: {
        id: string;
        createdAt: Date;
        latitude: number;
        longitude: number;
        nom: string | null;
        type: string;
        bienId: string;
        distance: number | null;
    }[];
} & {
    description: string | null;
    proprietaireId: string;
    id: string;
    ville: string | null;
    quartier: string | null;
    createdAt: Date;
    updatedAt: Date;
    titre: string | null;
    typeLogementId: string | null;
    typeTransactionId: string | null;
    statutBienId: string | null;
    pays: string | null;
    region: string | null;
    quartierId: string | null;
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
    meuble: boolean;
    fumeurs: boolean;
    animaux: boolean;
    parking: boolean;
    ascenseur: boolean;
    prix: number | null;
    prixAncien: number | null;
    dateDerniereModificationPrix: Date | null;
    frequencePaiement: string | null;
    chargesIncluses: boolean;
    caution: number | null;
    disponibleLe: Date | null;
    photos: string[];
    nbVues: number;
    nbFavoris: number;
    actif: boolean;
    statutAnnonce: StatutAnnonce;
    noteAdmin: string | null;
    estPremium: boolean;
    estMisEnAvant: boolean;
    dateDebutPromotion: Date | null;
    dateFinPromotion: Date | null;
    positionRotation: number;
    dernierAffichage: Date | null;
    publishedAt: Date | null;
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
        proprietaire: {
            id: string;
            telephone: string;
            nom: string;
            email: string | null;
            prenom: string;
            statutVerification: import("../generated/prisma/enums.js").StatutVerification;
        };
        statutBien: {
            id: string;
            nom: string;
            slug: string;
        } | null;
    } & {
        description: string | null;
        proprietaireId: string;
        id: string;
        ville: string | null;
        quartier: string | null;
        createdAt: Date;
        updatedAt: Date;
        titre: string | null;
        typeLogementId: string | null;
        typeTransactionId: string | null;
        statutBienId: string | null;
        pays: string | null;
        region: string | null;
        quartierId: string | null;
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
        meuble: boolean;
        fumeurs: boolean;
        animaux: boolean;
        parking: boolean;
        ascenseur: boolean;
        prix: number | null;
        prixAncien: number | null;
        dateDerniereModificationPrix: Date | null;
        frequencePaiement: string | null;
        chargesIncluses: boolean;
        caution: number | null;
        disponibleLe: Date | null;
        photos: string[];
        nbVues: number;
        nbFavoris: number;
        actif: boolean;
        statutAnnonce: StatutAnnonce;
        noteAdmin: string | null;
        estPremium: boolean;
        estMisEnAvant: boolean;
        dateDebutPromotion: Date | null;
        dateFinPromotion: Date | null;
        positionRotation: number;
        dernierAffichage: Date | null;
        publishedAt: Date | null;
    })[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}>;
export declare const getDernieresAnnonces: (limit?: number) => Promise<any[]>;
export declare const getAnnoncePublieById: (id: string) => Promise<{
    nombreAnnoncesProprietaire: number;
    typeLogement: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        actif: boolean;
        nom: string;
        slug: string;
        image: string | null;
        ordre: number;
    } | null;
    typeTransaction: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        actif: boolean;
        nom: string;
        slug: string;
        ordre: number;
    } | null;
    proprietaire: {
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        statutVerification: import("../generated/prisma/enums.js").StatutVerification;
    };
    statutBien: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        actif: boolean;
        nom: string;
        slug: string;
        ordre: number;
    } | null;
    equipements: ({
        equipement: {
            categorie: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                actif: boolean;
                nom: string;
                slug: string;
                ordre: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            actif: boolean;
            nom: string;
            categorieId: string;
        };
    } & {
        bienId: string;
        equipementId: string;
    })[];
    meubles: ({
        meuble: {
            categorie: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                actif: boolean;
                nom: string;
                slug: string;
                ordre: number;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            actif: boolean;
            nom: string;
            categorieId: string;
        };
    } & {
        bienId: string;
        meubleId: string;
        quantite: number;
    })[];
    etablissements: {
        id: string;
        createdAt: Date;
        latitude: number;
        longitude: number;
        nom: string | null;
        type: string;
        bienId: string;
        distance: number | null;
    }[];
    description: string | null;
    proprietaireId: string;
    id: string;
    ville: string | null;
    quartier: string | null;
    createdAt: Date;
    updatedAt: Date;
    titre: string | null;
    typeLogementId: string | null;
    typeTransactionId: string | null;
    statutBienId: string | null;
    pays: string | null;
    region: string | null;
    quartierId: string | null;
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
    meuble: boolean;
    fumeurs: boolean;
    animaux: boolean;
    parking: boolean;
    ascenseur: boolean;
    prix: number | null;
    prixAncien: number | null;
    dateDerniereModificationPrix: Date | null;
    frequencePaiement: string | null;
    chargesIncluses: boolean;
    caution: number | null;
    disponibleLe: Date | null;
    photos: string[];
    nbVues: number;
    nbFavoris: number;
    actif: boolean;
    statutAnnonce: StatutAnnonce;
    noteAdmin: string | null;
    estPremium: boolean;
    estMisEnAvant: boolean;
    dateDebutPromotion: Date | null;
    dateFinPromotion: Date | null;
    positionRotation: number;
    dernierAffichage: Date | null;
    publishedAt: Date | null;
} | null>;
export declare const getDistinctLieux: () => Promise<{
    quartiers: string[];
    villes: string[];
}>;
export declare const searchAnnoncePubliques: (params: {
    ville?: string;
    quartier?: string;
    typeLogementSlug?: string;
    typeTransactionSlug?: string;
    prixMin?: number;
    prixMax?: number;
    nbChambresMin?: number;
    surfaceMin?: number;
    surfaceMax?: number;
    meuble?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
    fumeurs?: boolean;
    animaux?: boolean;
    equipementIds?: string[];
    sortBy?: "prix" | "createdAt";
    sortOrder?: "asc" | "desc";
    page?: number;
    limit?: number;
    lat?: number;
    lng?: number;
    radius?: number;
}) => Promise<{
    items: any[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}>;
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
    }[];
    nbLocatairesActifs: number;
    nbBailsActifs: number;
    montantMensuelLoyers: number;
    nbEcheancesEnRetard: number;
}
export declare const getOwnerStats: (proprietaireId: string) => Promise<OwnerStats>;
export interface StatsVuesBien {
    vuesTotales: number;
    vuesAujourdhui: number;
    vuesCetteSemaine: number;
    evolution: {
        date: string;
        count: number;
    }[];
}
export declare const getStatsVuesBien: (bienId: string, proprietaireId: string) => Promise<StatsVuesBien>;
export interface StatsVuesOwner {
    vuesTotales: number;
    vuesAujourdhui: number;
    vuesCetteSemaine: number;
    topAnnonces: {
        id: string;
        titre: string | null;
        ville: string | null;
        nbVues: number;
        vuesAujourdhui: number;
        vuesCetteSemaine: number;
    }[];
}
export declare const getStatsVuesOwner: (proprietaireId: string) => Promise<StatsVuesOwner>;
export interface AdminStatsVues {
    totalVuesPlateforme: number;
    vuesAujourdhui: number;
    vuesCetteSemaine: number;
    topAnnonces: {
        id: string;
        titre: string | null;
        ville: string | null;
        nbVues: number;
    }[];
    vuesParVille: {
        ville: string;
        count: number;
    }[];
    vuesParTypeLogement: {
        typeLogement: string;
        count: number;
    }[];
}
export declare const getAdminStatsVues: () => Promise<AdminStatsVues>;
export interface StatsFavorisOwner {
    favorisTotaux: number;
    topAnnonces: {
        id: string;
        titre: string | null;
        ville: string | null;
        nbFavoris: number;
    }[];
}
export declare const getStatsFavorisOwner: (proprietaireId: string) => Promise<StatsFavorisOwner>;
export interface StatsFavorisBien {
    favorisTotaux: number;
}
export declare const getStatsFavorisBien: (bienId: string, proprietaireId: string) => Promise<StatsFavorisBien>;
//# sourceMappingURL=bien.repository.d.ts.map