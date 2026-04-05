/**
 * Active la mise en avant d'une annonce
 * Sans intégration de paiement - mode démonstration
 */
export declare const activatePromotion: (bienId: string, proprietaireId: string, dureeJours?: number) => Promise<{
    success: boolean;
    message: string;
    data: {
        bienId: string;
        titre: string | null;
        estMisEnAvant: boolean;
        dateDebutPromotion: Date | null;
        dateFinPromotion: Date | null;
        positionRotation: number;
    };
}>;
/**
 * Désactive la mise en avant d'une annonce
 */
export declare const deactivatePromotion: (bienId: string, proprietaireId: string) => Promise<{
    success: boolean;
    message: string;
    data: {
        bienId: string;
        estMisEnAvant: boolean;
    };
}>;
/**
 * Récupère les annonces actuellement mises en avant pour la page d'accueil
 * Utilise la rotation intelligente pour assurer une distribution équitable
 */
export declare const getAnnoncesMiseEnAvant: (limit?: number) => Promise<{
    annonces: never[];
    total: number;
    message: string;
    rotation?: undefined;
} | {
    annonces: ({
        typeLogement: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            actif: boolean;
            nom: string;
            slug: string;
            ordre: number;
            image: string | null;
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
        statutAnnonce: import("../generated/prisma/enums.js").StatutAnnonce;
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
    rotation: {
        intervalleMinutes: number;
        prochaineRotationPossible: boolean;
    };
    message: string;
}>;
/**
 * Récupère le statut de mise en avant d'une annonce
 */
export declare const getPromotionStatus: (bienId: string, proprietaireId: string) => Promise<{
    bienId: string;
    estMisEnAvant: boolean;
    dateDebutPromotion: Date | null;
    dateFinPromotion: Date | null;
    positionRotation: number;
    dernierAffichage: Date | null;
    joursRestants: number;
}>;
/**
 * Récupère les statistiques de promotion pour le tableau de bord propriétaire
 */
export declare const getPromotionStats: (proprietaireId: string) => Promise<{
    totalAnnoncesPubliees: number;
    annoncesActuellementMiseEnAvant: number;
    historiquePromotions: number;
    configuration: {
        nbAnnoncesParPage: number;
        intervalleRotationMinutes: number;
    };
}>;
/**
 * Prolonge la durée de mise en avant d'une annonce
 */
export declare const extendPromotion: (bienId: string, proprietaireId: string, joursSupplementaires?: number) => Promise<{
    success: boolean;
    message: string;
    data: {
        nouvelleDateFin: Date | null;
    };
}>;
//# sourceMappingURL=promotion.service.d.ts.map