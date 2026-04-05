import { StatutBail } from "../generated/prisma/enums.js";
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
    cautionVersee?: boolean;
    jourLimitePaiement?: number | null;
    delaiGrace?: number;
    frequencePaiement?: string | null;
}
export declare const create: (data: CreateBailData) => Promise<{
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    proprietaireId: string;
    statut: StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}>;
export declare const findById: (id: string) => Promise<({
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    proprietaireId: string;
    statut: StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}) | null>;
export declare const findActifByBien: (bienId: string) => Promise<({
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    proprietaireId: string;
    statut: StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}) | null>;
export declare const findAArchiverByBien: (bienId: string) => Promise<({
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    proprietaireId: string;
    statut: StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}) | null>;
export declare const findByBien: (bienId: string) => Promise<({
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    proprietaireId: string;
    statut: StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
})[]>;
export declare const updateStatut: (id: string, statut: StatutBail) => Promise<{
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    proprietaireId: string;
    statut: StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}>;
export declare const prolonger: (id: string, dateFinBail: Date) => Promise<{
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    proprietaireId: string;
    statut: StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}>;
export declare const remove: (id: string) => Promise<{
    proprietaireId: string;
    statut: StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}>;
export declare const getStatutBienBySlug: (slug: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    actif: boolean;
    nom: string;
    slug: string;
    ordre: number;
} | null>;
export declare const updateBienStatut: (bienId: string, statutBienId: string) => Promise<{
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
    statutAnnonce: import("../generated/prisma/enums.js").StatutAnnonce;
    noteAdmin: string | null;
    publishedAt: Date | null;
    estPremium: boolean;
    estMisEnAvant: boolean;
    dateDebutPromotion: Date | null;
    dateFinPromotion: Date | null;
    positionRotation: number;
    dernierAffichage: Date | null;
}>;
//# sourceMappingURL=bail.repository.d.ts.map