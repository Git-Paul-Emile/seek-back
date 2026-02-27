export declare const getBailActif: (bienId: string, proprietaireId: string) => Promise<({
    bien: {
        id: string;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        ville: string | null;
        quartier: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
}) | null>;
export declare const getHistoriqueBails: (bienId: string, proprietaireId: string) => Promise<({
    bien: {
        id: string;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        ville: string | null;
        quartier: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
})[]>;
export declare const creerBail: (bienId: string, proprietaireId: string, data: {
    locataireId: string;
    typeBail?: string | null;
    dateDebutBail: Date;
    dateFinBail?: Date | null;
    renouvellement?: boolean;
    montantLoyer: number;
    montantCaution?: number | null;
    frequencePaiement?: string | null;
}) => Promise<{
    bien: {
        id: string;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        ville: string | null;
        quartier: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
}>;
export declare const terminerBail: (bienId: string, bailId: string, proprietaireId: string) => Promise<{
    bien: {
        id: string;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        ville: string | null;
        quartier: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
}>;
export declare const resilierBail: (bienId: string, bailId: string, proprietaireId: string) => Promise<{
    bien: {
        id: string;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        ville: string | null;
        quartier: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
}>;
export declare const prolongerBail: (bienId: string, bailId: string, proprietaireId: string, dateFinBail: Date) => Promise<{
    bien: {
        id: string;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        ville: string | null;
        quartier: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        id: string;
        email: string | null;
        telephone: string;
        prenom: string;
        nom: string;
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
}>;
//# sourceMappingURL=bail.service.d.ts.map