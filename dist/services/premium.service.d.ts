import { type FormulePremium, type ModePaiement, type PaiementSimuleResult, type ActivationPromotionResult } from "../types/premium.types.js";
/**
 * Simule un paiement et active la mise en avant
 *
 * NOTE: Cette fonction est une SIMULATION uniquement.
 * Une fois l'API de paiement réelle intégrée (Orange Money, Wave, etc.),
 * cette fonction devra être remplacée par le vrai processus de paiement.
 */
export declare const simulerPaiementEtActiverPromotion: (bienId: string, proprietaireId: string, formuleId: string, modePaiement: ModePaiement) => Promise<{
    paiement: PaiementSimuleResult;
    promotion: ActivationPromotionResult;
}>;
/**
 * Récupère les formules premium disponibles (DB d'abord, fallback hardcoded)
 */
export declare const getFormulesPremium: () => Promise<FormulePremium[]>;
/**
 * Récupère une formule par son ID
 */
export declare const getFormuleById: (formuleId: string) => FormulePremium | undefined;
export declare const adminGetAllFormules: () => Promise<{
    description: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    prix: number;
    actif: boolean;
    nom: string;
    ordre: number;
    code: string;
    dureeJours: number;
    accroche: string;
    idealPour: string[];
    populer: boolean;
}[]>;
export declare const adminCreateFormule: (data: {
    code: string;
    nom: string;
    dureeJours: number;
    prix: number;
    accroche: string;
    description: string;
    idealPour: string[];
    populer?: boolean;
    actif?: boolean;
    ordre?: number;
}) => Promise<{
    description: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    prix: number;
    actif: boolean;
    nom: string;
    ordre: number;
    code: string;
    dureeJours: number;
    accroche: string;
    idealPour: string[];
    populer: boolean;
}>;
export declare const adminUpdateFormule: (id: string, data: Partial<{
    code: string;
    nom: string;
    dureeJours: number;
    prix: number;
    accroche: string;
    description: string;
    idealPour: string[];
    populer: boolean;
    actif: boolean;
    ordre: number;
}>) => Promise<{
    description: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    prix: number;
    actif: boolean;
    nom: string;
    ordre: number;
    code: string;
    dureeJours: number;
    accroche: string;
    idealPour: string[];
    populer: boolean;
}>;
export declare const adminDeleteFormule: (id: string) => Promise<{
    description: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    prix: number;
    actif: boolean;
    nom: string;
    ordre: number;
    code: string;
    dureeJours: number;
    accroche: string;
    idealPour: string[];
    populer: boolean;
}>;
/**
 * Récupère les détails d'une transaction simulée (pour affichage)
 * Dans une vraie implémentation, cela permettrait de consulter l'historique
 */
export declare const getDetailsTransaction: (bienId: string, proprietaireId: string) => Promise<{
    bienId: string;
    titre: string | null;
    estMisEnAvant: boolean;
    dateDebutPromotion: Date | null;
    dateFinPromotion: Date | null;
    joursRestants: number;
}>;
/**
 * Arrête la mise en avant d'un bien avant la fin prévue
 * Le propriétaire perd les jours restants
 */
export declare const arreterMiseEnAvant: (bienId: string, proprietaireId: string) => Promise<{
    success: boolean;
    message: string;
    historique?: any;
}>;
/**
 * Récupère l'historique des mises en avant d'un bien
 */
export declare const getHistoriqueMisesEnAvant: (bienId: string, proprietaireId: string) => Promise<{
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutPromotion;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    bienId: string;
    montant: number;
    modePaiement: string | null;
    reference: string | null;
    note: string | null;
    dateConfirmation: Date | null;
    transactionId: string | null;
    formuleId: string;
    formuleNom: string;
    dureeJours: number;
    dateDebut: Date;
    dateFin: Date;
    dateFinReelle: Date | null;
    confirmeParAdmin: boolean;
    motifArret: string | null;
    joursRestants: number | null;
}[]>;
/**
 * Récupère l'historique des mises en avant d'un propriétaire (tous ses biens)
 */
export declare const getHistoriqueMisesEnAvantProprietaire: (proprietaireId: string, options?: {
    page?: number;
    limit?: number;
}) => Promise<{
    data: ({
        bien: {
            id: string;
            ville: string | null;
            quartier: string | null;
            titre: string | null;
            photos: string[];
        };
    } & {
        proprietaireId: string;
        statut: import("../generated/prisma/enums.js").StatutPromotion;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        bienId: string;
        montant: number;
        modePaiement: string | null;
        reference: string | null;
        note: string | null;
        dateConfirmation: Date | null;
        transactionId: string | null;
        formuleId: string;
        formuleNom: string;
        dureeJours: number;
        dateDebut: Date;
        dateFin: Date;
        dateFinReelle: Date | null;
        confirmeParAdmin: boolean;
        motifArret: string | null;
        joursRestants: number | null;
    })[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}>;
//# sourceMappingURL=premium.service.d.ts.map