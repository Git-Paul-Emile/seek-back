export declare const getFavoris: (comptePublicId: string) => Promise<{
    id: string;
    bienId: string;
    createdAt: Date;
    prixSnapshot: number | null;
    statutSnapshot: string | null;
    actifSnapshot: boolean;
    bien: {
        id: string;
        quartier: string | null;
        typeLogement: {
            nom: string;
        } | null;
        typeTransaction: {
            nom: string;
            slug: string;
        } | null;
        titre: string | null;
        pays: string | null;
        region: string | null;
        surface: number | null;
        nbChambres: number | null;
        nbSdb: number | null;
        parking: boolean;
        prix: number | null;
        prixAncien: number | null;
        dateDerniereModificationPrix: Date | null;
        photos: string[];
        actif: boolean;
        statutAnnonce: import("../generated/prisma/enums.js").StatutAnnonce;
        estMisEnAvant: boolean;
        statutBien: {
            nom: string;
            slug: string;
        } | null;
        proprietaire: {
            id: string;
            telephone: string;
            nom: string;
            email: string | null;
            prenom: string;
            statutVerification: import("../generated/prisma/enums.js").StatutVerification;
        };
    };
    changements: {
        prixChange: boolean;
        nouveauPrix: number | null;
        prixAncienSnapshot: number | null;
        statutChange: boolean;
        nouveauStatut: string | null | undefined;
        bienSuppr: boolean;
    };
}[]>;
export declare const addFavori: (comptePublicId: string, bienId: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    bienId: string;
    comptePublicId: string;
    prixSnapshot: number | null;
    statutSnapshot: string | null;
    actifSnapshot: boolean;
} | undefined>;
export declare const toggleFavori: (comptePublicId: string, bienId: string) => Promise<{
    action: "removed";
} | {
    action: "added";
}>;
export declare const removeFavori: (comptePublicId: string, bienId: string) => Promise<void>;
export declare const updateSnapshot: (comptePublicId: string, bienId: string) => Promise<void>;
export declare const getFavoriIds: (comptePublicId: string) => Promise<string[]>;
//# sourceMappingURL=favori.service.d.ts.map