export interface InitierPaiementParams {
    provider: string;
    montant: number;
    telephonePayeur: string;
    telephoneBeneficiaire: string;
    reference: string;
    echeanceId: string;
    bailId: string;
    bienId: string;
    locataireId: string;
    proprietaireId: string;
}
export interface StatutPaiementMM {
    transactionId?: string;
    statut: "INITIE" | "EN_COURS" | "CONFIRME" | "ECHEC";
    message: string;
    stub: true;
}
export declare const initierPaiementMobileMoney: (params: InitierPaiementParams) => Promise<StatutPaiementMM & {
    instructions: string;
}>;
export declare const verifierStatutPaiement: (_transactionId: string, _provider: string) => Promise<StatutPaiementMM>;
//# sourceMappingURL=mobileMoney.service.d.ts.map