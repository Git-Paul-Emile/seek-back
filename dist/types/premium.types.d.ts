export interface FormulePremium {
    id: string;
    nom: string;
    dureeJours: number;
    prix: number;
    accroche: string;
    description: string;
    idealPour: string[];
    populer: boolean;
}
export declare const FORMULES_PREMIUM: FormulePremium[];
export declare enum ModePaiement {
    ORANGE_MONEY = "ORANGE_MONEY",
    WAVE = "WAVE"
}
export declare const MOYENS_PAIEMENT: {
    id: ModePaiement;
    nom: string;
    logo: string;
    description: string;
    couleur: string;
}[];
export interface CreatePromotionPremiumInput {
    bienId: string;
    formuleId: string;
    modePaiement: ModePaiement;
}
export interface PaiementSimuleResult {
    success: boolean;
    transactionId: string;
    montant: number;
    modePaiement: ModePaiement;
    formule: FormulePremium;
    datePaiement: Date;
    message: string;
}
export interface ActivationPromotionResult {
    success: boolean;
    message: string;
    data: {
        bienId: string;
        titre?: string;
        estMisEnAvant: boolean;
        dateDebutPromotion: Date | null;
        dateFinPromotion: Date | null;
        positionRotation?: number;
    };
}
//# sourceMappingURL=premium.types.d.ts.map