/**
 * Interface pour les options de pagination
 */
interface PaginationOptions {
    page?: number;
    limit?: number;
}
/**
 * Interface pour le résultat paginé
 */
interface PaginatedResult<T> {
    data: T[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}
/**
 * Récupère l'historique des transactions d'un propriétaire
 */
export declare const getHistoriqueTransactions: (proprietaireId: string, options?: PaginationOptions, filters?: {
    type?: string;
    statut?: string;
    bienId?: string;
    dateDebut?: Date;
    dateFin?: Date;
}) => Promise<PaginatedResult<any>>;
/**
 * Récupère une transaction par son ID
 */
export declare const getTransactionById: (transactionId: string, proprietaireId: string) => Promise<{
    bien: {
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
        estPremium: boolean;
        estMisEnAvant: boolean;
        dateDebutPromotion: Date | null;
        dateFinPromotion: Date | null;
        positionRotation: number;
        dernierAffichage: Date | null;
        publishedAt: Date | null;
    } | null;
    locataire: {
        id: string;
        telephone: string;
        nom: string;
        prenom: string;
    } | null;
    bail: ({
        bien: {
            id: string;
            titre: string | null;
        };
        locataire: {
            id: string;
            telephone: string;
            nom: string;
            prenom: string;
        };
    } & {
        proprietaireId: string;
        statut: import("../generated/prisma/enums.js").StatutBail;
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
    }) | null;
    echeance: {
        proprietaireId: string;
        statut: import("../generated/prisma/enums.js").StatutPaiement;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        bailId: string;
        bienId: string;
        locataireId: string;
        dateEcheance: Date;
        montant: number;
        datePaiement: Date | null;
        modePaiement: string | null;
        reference: string | null;
        note: string | null;
        sourceEnregistrement: string | null;
        commissionTaux: number | null;
        commissionMontant: number | null;
        montantNet: number | null;
        confirmeParProprietaire: boolean;
        dateConfirmation: Date | null;
        confirmeParLocataire: boolean;
        dateConfirmationLocataire: Date | null;
    } | null;
} & {
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutTransaction;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    type: import("../generated/prisma/enums.js").TypePaiement;
    echeanceId: string | null;
    bailId: string | null;
    bienId: string | null;
    locataireId: string | null;
    dateEcheance: Date | null;
    montant: number;
    modePaiement: string;
    reference: string | null;
    note: string | null;
    dateConfirmation: Date | null;
    metadata: import("@prisma/client/runtime/library").JsonValue | null;
    devise: string;
    provider: string | null;
    transactionId: string | null;
    dateInitiation: Date;
    instructions: string | null;
}>;
export declare const getAdminHistoriqueTransactions: (options?: PaginationOptions, filters?: {
    type?: string;
    statut?: string;
    proprietaireId?: string;
    dateDebut?: Date;
    dateFin?: Date;
}) => Promise<PaginatedResult<any>>;
export declare const getAdminStatsTransactions: () => Promise<{
    totalConfirme: number;
    montantTotal: number;
    montantMois: number;
    montantAnnee: number;
    parType: {
        type: import("../generated/prisma/enums.js").TypePaiement;
        nombre: number;
        montant: number;
    }[];
}>;
/**
 * Récupère les statistiques des transactions d'un propriétaire
 */
export declare const getStatsTransactions: (proprietaireId: string) => Promise<{
    global: {
        totalTransactions: number;
        totalMontant: number;
    };
    mois: {
        transactions: number;
        montant: number;
    };
    annee: {
        transactions: number;
        montant: number;
    };
    repartitionParType: {
        type: import("../generated/prisma/enums.js").TypePaiement;
        nombre: number;
        montant: number;
    }[];
    repartitionParMode: {
        mode: string;
        nombre: number;
        montant: number;
    }[];
}>;
export {};
//# sourceMappingURL=transaction.service.d.ts.map