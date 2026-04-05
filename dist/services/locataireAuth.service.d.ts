import type { TypePieceIdentite } from "../generated/prisma/enums.js";
export interface LocataireTokenPair {
    accessToken: string;
    refreshToken: string;
    refreshTokenExpiresAt: Date;
}
export interface JwtLocatairePayload {
    sub: string;
    nom: string;
    prenom: string;
    iat?: number;
    exp?: number;
}
export declare const verifyLocataireAccessToken: (token: string) => JwtLocatairePayload;
export declare const activer: (data: {
    token: string;
    password: string;
    dateNaissance?: Date | null;
    lieuNaissance?: string | null;
    nationalite?: string | null;
    sexe?: string | null;
    numPieceIdentite?: string | null;
    typePiece?: TypePieceIdentite | null;
    dateDelivrance?: Date | null;
    dateExpirationPiece?: Date | null;
    autoriteDelivrance?: string | null;
    situationProfessionnelle?: string | null;
}) => Promise<LocataireTokenPair & {
    locataire: {
        id: string;
        nom: string;
        prenom: string;
    };
}>;
export declare const login: (data: {
    identifiant: string;
    password: string;
}) => Promise<LocataireTokenPair & {
    locataire: {
        id: string;
        nom: string;
        prenom: string;
    };
}>;
export declare const refresh: (oldRefreshToken: string) => Promise<LocataireTokenPair>;
export declare const logout: (refreshToken: string) => Promise<void>;
export declare const me: (id: string) => Promise<{
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutLocataire;
    id: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    bails: ({
        bien: {
            id: string;
            ville: string | null;
            quartier: string | null;
            titre: string | null;
            actif: boolean;
        };
        contrat: {
            statut: import("../generated/prisma/enums.js").StatutContrat;
            id: string;
        } | null;
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
    nom: string;
    email: string | null;
    prenom: string;
    sexe: string | null;
    password: string | null;
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
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
        dateTraitement: Date | null;
    } | null;
    typePiece: TypePieceIdentite | null;
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
export declare const updateProfil: (id: string, data: {
    dateNaissance?: Date | null;
    lieuNaissance?: string | null;
    nationalite?: string | null;
    sexe?: string | null;
    numPieceIdentite?: string | null;
    typePiece?: TypePieceIdentite | null;
    dateDelivrance?: Date | null;
    dateExpirationPiece?: Date | null;
    autoriteDelivrance?: string | null;
    situationProfessionnelle?: string | null;
}) => Promise<{
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
    estSuspendu: boolean;
    motifSuspension: string | null;
    dateSuspension: Date | null;
    suspenduPar: string | null;
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
        dateTraitement: Date | null;
    } | null;
    typePiece: TypePieceIdentite | null;
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
export declare const requestPasswordReset: (identifiant: string) => Promise<{
    token: string;
    email: string | null;
    telephone: string;
    prenom: string;
}>;
export declare const resetPassword: (rawToken: string, newPassword: string) => Promise<void>;
export declare const supprimerCompte: (locataireId: string) => Promise<void>;
//# sourceMappingURL=locataireAuth.service.d.ts.map