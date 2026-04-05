export interface VerificationStatus {
    proprietaireId: string;
    statut: "NOT_VERIFIED" | "PENDING" | "VERIFIED" | "REJECTED";
    verifiedAt: Date | null;
    documents?: {
        typePiece: string;
        pieceIdentiteRecto: string | null;
        pieceIdentiteVerso: string | null;
        selfie: string | null;
        conditionsAcceptees: boolean;
        motifRejet?: string | null;
        traitePar?: string | null;
        dateTraitement?: Date | null;
    };
}
export interface ProprietaireWithVerification {
    id: string;
    prenom: string;
    nom: string;
    telephone: string;
    email: string | null;
    statutVerification: "NOT_VERIFIED" | "PENDING" | "VERIFIED" | "REJECTED";
    verifiedAt: Date | null;
    createdAt: Date;
    verification: {
        id: string;
        typePiece: string;
        pieceIdentiteRecto: string | null;
        pieceIdentiteVerso: string | null;
        selfie: string | null;
        conditionsAcceptees: boolean;
        motifRejet: string | null;
        traitePar: string | null;
        dateTraitement: Date | null;
        createdAt: Date;
    } | null;
}
export declare const verificationService: {
    /**
     * Récupère le statut de vérification d'un propriétaire
     */
    getStatus(proprietaireId: string): Promise<VerificationStatus>;
    /**
     * Récupère toutes les demandes en attente (pour l'admin)
     */
    getPendingVerifications(): Promise<ProprietaireWithVerification[]>;
    /**
     * Soumet une demande de vérification d'identité
     */
    submitVerification(proprietaireId: string, data: {
        typePiece: string;
        pieceIdentiteRecto: string;
        pieceIdentiteVerso?: string;
        selfie: string;
        conditionsAcceptees: boolean;
    }): Promise<VerificationStatus>;
    /**
     * Approuve la vérification d'un propriétaire (admin)
     */
    approve(proprietaireId: string, adminId: string): Promise<VerificationStatus>;
    /**
     * Rejette la vérification d'un propriétaire (admin)
     */
    reject(proprietaireId: string, adminId: string, motif: string): Promise<VerificationStatus>;
    /**
     * Annule la demande de vérification (propriétaire)
     */
    cancel(proprietaireId: string): Promise<VerificationStatus>;
};
//# sourceMappingURL=verification.service.d.ts.map