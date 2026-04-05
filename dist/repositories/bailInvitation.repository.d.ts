import { StatutBailInvitation } from "../generated/prisma/enums.js";
export interface CreateInvitationData {
    bienId: string;
    locataireId: string;
    proprietaireId: string;
    typeBail?: string | null;
    dateDebutBail: Date;
    dateFinBail?: Date | null;
    montantLoyer: number;
    montantCaution?: number | null;
    cautionVersee?: boolean;
    jourLimitePaiement?: number | null;
    renouvellement?: boolean;
    frequencePaiement?: string | null;
    expiresAt: Date;
}
export declare const create: (data: CreateInvitationData) => Promise<{
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
export declare const findByToken: (token: string) => Promise<({
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
    locataire: {
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
}) | null>;
export declare const findByLocataireId: (locataireId: string) => Promise<({
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
export declare const findByProprietaireId: (proprietaireId: string) => Promise<({
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
})[]>;
export declare const findPendingByBienAndLocataire: (bienId: string, locataireId: string) => Promise<{
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
} | null>;
export declare const updateStatut: (id: string, statut: StatutBailInvitation) => Promise<{
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
export declare const expireOldInvitations: () => Promise<import("../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
//# sourceMappingURL=bailInvitation.repository.d.ts.map