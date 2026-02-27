export interface SiteStats {
    annoncesActives: number;
    proprietaires: number;
    villesCouvertes: number;
}
export declare const getSiteStats: () => Promise<SiteStats>;
export interface AdminStats {
    annoncesByStatut: {
        statut: string;
        count: number;
    }[];
    annoncesByTypeLogement: {
        nom: string;
        count: number;
    }[];
    annoncesByTypeTransaction: {
        nom: string;
        count: number;
    }[];
    topVilles: {
        ville: string;
        count: number;
    }[];
    totalProprietaires: number;
    totalBiens: number;
    recentEnAttente: {
        id: string;
        titre: string | null;
        ville: string | null;
        proprietaire: {
            prenom: string | null;
            nom: string | null;
        } | null;
        createdAt: Date;
        hasPendingRevision: boolean;
    }[];
}
export declare const getAdminStats: () => Promise<AdminStats>;
//# sourceMappingURL=stats.repository.d.ts.map