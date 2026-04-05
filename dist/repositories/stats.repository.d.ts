export interface SiteStats {
    annoncesActives: number;
    proprietaires: number;
    villesCouvertes: number;
}
export declare const getSiteStats: () => Promise<SiteStats>;
export interface RevenusStats {
    totalRevenus: number;
    revenusMois: number;
    revenus12Mois: {
        mois: string;
        montant: number;
    }[];
    revenusPremium: number;
    revenus12MoisPremium: {
        mois: string;
        montant: number;
    }[];
    topProprietairesLoyer: {
        id: string;
        nom: string;
        prenom: string;
        telephone: string;
        montant: number;
    }[];
}
export declare const getRevenusStats: () => Promise<RevenusStats>;
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
    }[];
}
export interface ProprietaireStats {
    total: number;
    byStatutVerification: {
        statut: string;
        count: number;
    }[];
    byVille: {
        ville: string;
        count: number;
    }[];
    topProprietaires: {
        id: string;
        nom: string;
        prenom: string;
        telephone: string;
        email: string | null;
        totalBiens: number;
        biensActifs: number;
        totalLocataires: number;
    }[];
    recentProprietaires: {
        id: string;
        nom: string;
        prenom: string;
        telephone: string;
        email: string | null;
        statutVerification: string;
        createdAt: Date;
    }[];
}
export declare const getProprietairesStats: () => Promise<ProprietaireStats>;
export interface ProprietaireDetail {
    id: string;
    prenom: string;
    nom: string;
    telephone: string;
    email: string | null;
    statutVerification: string;
    verifiedAt: Date | null;
    createdAt: Date;
    totalBiens: number;
    biens: {
        id: string;
        titre: string | null;
        ville: string | null;
        statutAnnonce: string;
        prix: number | null;
        createdAt: Date;
    }[];
    totalLocataires: number;
    totalBails: number;
    bailsActifs: number;
}
export declare const getProprietaireDetail: (id: string) => Promise<ProprietaireDetail | null>;
export declare const getAdminStats: () => Promise<AdminStats>;
//# sourceMappingURL=stats.repository.d.ts.map