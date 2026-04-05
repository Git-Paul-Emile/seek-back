export interface GetProprietairesFilter {
    estSuspendu?: boolean;
    search?: string;
}
export declare const getProprietaires: (filter?: GetProprietairesFilter) => Promise<{
    id: string;
    telephone: string;
    createdAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
}[]>;
export declare const getProprietaireById: (id: string) => Promise<{
    id: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
} | null>;
export interface GetLocatairesFilter {
    estSuspendu?: boolean;
    search?: string;
}
export declare const getLocataires: (filter?: GetLocatairesFilter) => Promise<{
    id: string;
    telephone: string;
    createdAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
}[]>;
export declare const getLocataireById: (id: string) => Promise<{
    id: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
} | null>;
export declare const supprimerProprietaire: (id: string) => Promise<{
    id: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
    sexe: string | null;
    password: string;
    statutVerification: import("../generated/prisma/enums.js").StatutVerification;
    verifiedAt: Date | null;
    telephoneVerifie: boolean;
    telephoneOtp: string | null;
    telephoneOtpExpiresAt: Date | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    nbAvertissements: number;
    nbSignalementsValides: number;
    estRestreint: boolean;
    dateFinRestriction: Date | null;
    dateFinSuspension: Date | null;
    estBanni: boolean;
    dateBannissement: Date | null;
}>;
export declare const supprimerLocataire: (id: string) => Promise<{
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutLocataire;
    id: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
    sexe: string | null;
    password: string | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    typePiece: import("../generated/prisma/enums.js").TypePieceIdentite | null;
    nbOccupants: number;
    presenceEnfants: boolean;
    dateNaissance: Date | null;
    lieuNaissance: string | null;
    nationalite: string | null;
    numPieceIdentite: string | null;
    dateDelivrance: Date | null;
    dateExpirationPiece: Date | null;
    autoriteDelivrance: string | null;
    situationProfessionnelle: string | null;
    activationToken: string | null;
    tokenExpiresAt: Date | null;
}>;
export declare const getProprietaireWithBiens: (id: string) => Promise<{
    id: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    biens: {
        id: string;
        ville: string | null;
        quartier: string | null;
        typeLogement: {
            nom: string;
        } | null;
        typeTransaction: {
            nom: string;
        } | null;
        titre: string | null;
        pays: string | null;
        region: string | null;
        adresse: string | null;
        surface: number | null;
        nbChambres: number | null;
        nbSdb: number | null;
        nbPieces: number | null;
        prix: number | null;
        actif: boolean;
        statutAnnonce: import("../generated/prisma/enums.js").StatutAnnonce;
        statutBien: {
            nom: string;
        } | null;
    }[];
    email: string | null;
    prenom: string;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
} | null>;
export declare const getLocataireWithBails: (id: string) => Promise<{
    id: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    proprietaire: {
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
    };
    bails: {
        statut: import("../generated/prisma/enums.js").StatutBail;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        frequencePaiement: string | null;
        proprietaire: {
            id: string;
            telephone: string;
            nom: string;
            email: string | null;
            prenom: string;
        };
        bien: {
            description: string | null;
            id: string;
            ville: string | null;
            quartier: string | null;
            typeLogement: {
                id: string;
                nom: string;
            } | null;
            typeTransaction: {
                id: string;
                nom: string;
            } | null;
            titre: string | null;
            pays: string | null;
            region: string | null;
            adresse: string | null;
            surface: number | null;
            nbChambres: number | null;
            nbSdb: number | null;
            etage: number | null;
            nbPieces: number | null;
            actif: boolean;
            statutBien: {
                id: string;
                nom: string;
            } | null;
            quartierRel: {
                id: string;
                ville: {
                    id: string;
                    pays: {
                        id: string;
                        nom: string;
                        code: string;
                    };
                    nom: string;
                };
                nom: string;
            } | null;
        };
        typeBail: string | null;
        dateDebutBail: Date;
        dateFinBail: Date | null;
        montantLoyer: number;
        montantCaution: number | null;
        cautionVersee: boolean;
        contrat: {
            statut: import("../generated/prisma/enums.js").StatutContrat;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            titre: string;
            contenu: string;
            modele: {
                id: string;
                titre: string;
            } | null;
        } | null;
    }[];
    nom: string;
    email: string | null;
    prenom: string;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
} | null>;
export declare const getLocataireAvecDocuments: (id: string) => Promise<({
    proprietaire: {
        id: string;
        telephone: string;
        nom: string;
        email: string | null;
        prenom: string;
    };
    bails: ({
        bien: {
            id: string;
            ville: string | null;
            titre: string | null;
            adresse: string | null;
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
    })[];
    verification: {
        statut: import("../generated/prisma/enums.js").StatutVerificationLocataire;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        typePiece: string;
        pieceIdentiteRecto: string | null;
        pieceIdentiteVerso: string | null;
        selfie: string | null;
        conditionsAcceptees: boolean;
        motifRejet: string | null;
        traitePar: string | null;
        dateTraitement: Date | null;
        locataireId: string;
    } | null;
} & {
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutLocataire;
    id: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
    sexe: string | null;
    password: string | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    typePiece: import("../generated/prisma/enums.js").TypePieceIdentite | null;
    nbOccupants: number;
    presenceEnfants: boolean;
    dateNaissance: Date | null;
    lieuNaissance: string | null;
    nationalite: string | null;
    numPieceIdentite: string | null;
    dateDelivrance: Date | null;
    dateExpirationPiece: Date | null;
    autoriteDelivrance: string | null;
    situationProfessionnelle: string | null;
    activationToken: string | null;
    tokenExpiresAt: Date | null;
}) | null>;
export declare const suspendreProprietaire: (id: string, motif: string, suspenduPar: string) => Promise<{
    id: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
    sexe: string | null;
    password: string;
    statutVerification: import("../generated/prisma/enums.js").StatutVerification;
    verifiedAt: Date | null;
    telephoneVerifie: boolean;
    telephoneOtp: string | null;
    telephoneOtpExpiresAt: Date | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    nbAvertissements: number;
    nbSignalementsValides: number;
    estRestreint: boolean;
    dateFinRestriction: Date | null;
    dateFinSuspension: Date | null;
    estBanni: boolean;
    dateBannissement: Date | null;
}>;
export declare const reactiverProprietaire: (id: string) => Promise<{
    id: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
    sexe: string | null;
    password: string;
    statutVerification: import("../generated/prisma/enums.js").StatutVerification;
    verifiedAt: Date | null;
    telephoneVerifie: boolean;
    telephoneOtp: string | null;
    telephoneOtpExpiresAt: Date | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    nbAvertissements: number;
    nbSignalementsValides: number;
    estRestreint: boolean;
    dateFinRestriction: Date | null;
    dateFinSuspension: Date | null;
    estBanni: boolean;
    dateBannissement: Date | null;
}>;
export declare const getProprietaireSuspendu: (id: string) => Promise<{
    id: string;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
} | null>;
export declare const suspendreLocataire: (id: string, motif: string, suspenduPar: string) => Promise<{
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutLocataire;
    id: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
    sexe: string | null;
    password: string | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    typePiece: import("../generated/prisma/enums.js").TypePieceIdentite | null;
    nbOccupants: number;
    presenceEnfants: boolean;
    dateNaissance: Date | null;
    lieuNaissance: string | null;
    nationalite: string | null;
    numPieceIdentite: string | null;
    dateDelivrance: Date | null;
    dateExpirationPiece: Date | null;
    autoriteDelivrance: string | null;
    situationProfessionnelle: string | null;
    activationToken: string | null;
    tokenExpiresAt: Date | null;
}>;
export declare const reactiverLocataire: (id: string) => Promise<{
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutLocataire;
    id: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
    sexe: string | null;
    password: string | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
    typePiece: import("../generated/prisma/enums.js").TypePieceIdentite | null;
    nbOccupants: number;
    presenceEnfants: boolean;
    dateNaissance: Date | null;
    lieuNaissance: string | null;
    nationalite: string | null;
    numPieceIdentite: string | null;
    dateDelivrance: Date | null;
    dateExpirationPiece: Date | null;
    autoriteDelivrance: string | null;
    situationProfessionnelle: string | null;
    activationToken: string | null;
    tokenExpiresAt: Date | null;
}>;
export declare const getLocataireSuspendu: (id: string) => Promise<{
    id: string;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
} | null>;
export declare const masquerAnnoncesProprietaire: (proprietaireId: string) => Promise<import("../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
export declare const afficherAnnoncesProprietaire: (proprietaireId: string) => Promise<import("../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
/**
 * Vérifie si le propriétaire a des biens actifs (annonces en ligne)
 */
export declare const hasBiensActifs: (proprietaireId: string) => Promise<boolean>;
/**
 * Vérifie si le propriétaire a des baux actifs (locataires associés)
 */
export declare const hasBauxActifs: (proprietaireId: string) => Promise<boolean>;
/**
 * Vérifie si le propriétaire a des transactions de mise en avant (promotions)
 */
export declare const hasPaiementsPromotion: (proprietaireId: string) => Promise<boolean>;
//# sourceMappingURL=suspension.repository.d.ts.map