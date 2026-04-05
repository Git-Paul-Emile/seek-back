import { StatutBailInvitation } from "../generated/prisma/enums.js";
export declare const creerInvitation: (proprietaireId: string, data: {
    bienId: string;
    locataireId: string;
    typeBail?: string | null;
    dateDebutBail: string;
    dateFinBail?: string | null;
    montantLoyer: number;
    montantCaution?: number | null;
    cautionVersee?: boolean;
    jourLimitePaiement?: number | null;
    renouvellement?: boolean;
    frequencePaiement?: string | null;
}) => Promise<{
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        titre: string | null;
        adresse: string | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
    };
} & {
    proprietaireId: string;
    statut: StatutBailInvitation;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    expiresAt: Date;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    token: string;
}>;
export declare const getInvitationsByLocataire: (locataireId: string) => Promise<({
    proprietaire: {
        id: string;
        telephone: string;
        nom: string;
        prenom: string;
    };
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        titre: string | null;
        adresse: string | null;
    };
} & {
    proprietaireId: string;
    statut: StatutBailInvitation;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    expiresAt: Date;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    token: string;
})[]>;
export declare const accepterInvitation: (token: string, locataireId: string) => Promise<{
    etatsDesLieux: {
        statut: import("../generated/prisma/enums.js").StatutEtatDesLieux;
        id: string;
        type: import("../generated/prisma/enums.js").TypeEtatDesLieux;
    }[];
    bien: {
        id: string;
        ville: string | null;
        quartier: string | null;
        typeTransaction: {
            slug: string;
        } | null;
        titre: string | null;
        prix: number | null;
        frequencePaiement: string | null;
        caution: number | null;
    };
    locataire: {
        statut: import("../generated/prisma/enums.js").StatutLocataire;
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
        nbOccupants: number;
        presenceEnfants: boolean;
    };
} & {
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutBail;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    frequencePaiement: string | null;
    bienId: string;
    locataireId: string;
    typeBail: string | null;
    dateDebutBail: Date;
    dateFinBail: Date | null;
    renouvellement: boolean;
    montantLoyer: number;
    montantCaution: number | null;
    cautionVersee: boolean;
    jourLimitePaiement: number | null;
    delaiGrace: number;
    motifResiliation: string | null;
    initiePar: string | null;
}>;
export declare const refuserInvitation: (token: string, locataireId: string) => Promise<{
    message: string;
}>;
//# sourceMappingURL=bailInvitation.service.d.ts.map