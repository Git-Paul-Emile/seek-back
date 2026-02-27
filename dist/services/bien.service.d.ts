import type { BienWithRelations } from "../repositories/bien.repository.js";
import type { SaveDraftInput } from "../validators/bien.validator.js";
import type { StatutAnnonce } from "../generated/prisma/enums.js";
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
export declare const saveDraft: (input: SaveDraftInput, proprietaireId: string, files: Express.Multer.File[]) => Promise<{
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
export declare const soumettreAnnonce: (bienId: string, proprietaireId: string) => Promise<{
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
export declare const deleteBien: (bienId: string, proprietaireId: string) => Promise<{
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
export declare const retourBrouillon: (bienId: string, proprietaireId: string) => Promise<{
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
export declare const soumettreRevision: (bienId: string, proprietaireId: string, input: SaveDraftInput, files: Express.Multer.File[]) => Promise<{
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
export declare const annulerAnnonce: (bienId: string, proprietaireId: string) => Promise<{
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
export declare const validerAnnonce: (bienId: string, action: "APPROUVER" | "REJETER" | "REVISION", note?: string) => Promise<{
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
export declare const adminDeleteBien: (bienId: string) => Promise<{
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
export declare const getAnnoncePublieById: (id: string) => Promise<{
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
}>;
export declare const signalerAnnonce: (bienId: string, motif: string, description?: string) => Promise<{
    success: boolean;
    message: string;
}>;
export declare const getAnnoncesSimilaires: (bienId: string, limit?: number) => Promise<BienWithRelations[]>;
//# sourceMappingURL=bien.service.d.ts.map