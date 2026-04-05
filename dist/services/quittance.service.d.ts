export declare const getQuittance: (bienId: string, bailId: string, echeanceId: string, proprietaireId: string) => Promise<{
    proprietaireId: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    echeanceId: string;
    bailId: string;
    bienId: string;
    locataireId: string;
    numero: string;
    dateGeneration: Date;
} | null>;
export declare const genererQuittance: (bienId: string, bailId: string, echeanceId: string, proprietaireId: string) => Promise<{
    proprietaireId: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    echeanceId: string;
    bailId: string;
    bienId: string;
    locataireId: string;
    numero: string;
    dateGeneration: Date;
}>;
export declare const getQuittancesBail: (bienId: string, bailId: string, proprietaireId: string) => Promise<({
    echeance: {
        statut: import("../generated/prisma/enums.js").StatutPaiement;
        dateEcheance: Date;
        montant: number;
        datePaiement: Date | null;
        modePaiement: string | null;
        reference: string | null;
    };
} & {
    proprietaireId: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    echeanceId: string;
    bailId: string;
    bienId: string;
    locataireId: string;
    numero: string;
    dateGeneration: Date;
})[]>;
/**
 * Génère (ou récupère si déjà existante) la quittance d'une échéance payée.
 * Usage interne uniquement - ne vérifie pas les droits propriétaire.
 */
export declare const genererQuittanceInterne: (echeanceId: string) => Promise<void>;
export declare const getQuittancesLocataire: (locataireId: string) => Promise<({
    echeance: {
        statut: import("../generated/prisma/enums.js").StatutPaiement;
        dateEcheance: Date;
        montant: number;
        datePaiement: Date | null;
        modePaiement: string | null;
        reference: string | null;
    };
} & {
    proprietaireId: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    echeanceId: string;
    bailId: string;
    bienId: string;
    locataireId: string;
    numero: string;
    dateGeneration: Date;
})[]>;
//# sourceMappingURL=quittance.service.d.ts.map