export interface TrustScoreBreakdown {
    total: number;
    details: {
        base: number;
        identiteVerifiee: number;
        annoncesPubliees: number;
        anciennete: number;
        bailsActifs: number;
    };
    badges: ("identite_verifiee" | "anciennete_1an")[];
    nbAnnonces: number;
    nbBailsActifs: number;
    moisAnciennete: number;
}
export declare const computeScoreForProprietaire: (proprietaireId: string) => Promise<TrustScoreBreakdown>;
//# sourceMappingURL=trustScore.service.d.ts.map