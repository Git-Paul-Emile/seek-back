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
    dateExpiration?: Date | null;
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
    id: string;
    email: string | null;
    password: string | null;
    createdAt: Date;
    updatedAt: Date;
    telephone: string;
    prenom: string;
    nom: string;
    sexe: string | null;
    bails: ({
        bien: {
            id: string;
            titre: string | null;
            ville: string | null;
            quartier: string | null;
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
    })[];
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutLocataire;
    nbOccupants: number;
    presenceEnfants: boolean;
    dateNaissance: Date | null;
    lieuNaissance: string | null;
    nationalite: string | null;
    numPieceIdentite: string | null;
    typePiece: TypePieceIdentite | null;
    dateDelivrance: Date | null;
    dateExpiration: Date | null;
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
    dateExpiration?: Date | null;
    autoriteDelivrance?: string | null;
    situationProfessionnelle?: string | null;
}) => Promise<{
    id: string;
    email: string | null;
    createdAt: Date;
    updatedAt: Date;
    telephone: string;
    prenom: string;
    nom: string;
    sexe: string | null;
    proprietaireId: string;
    statut: import("../generated/prisma/enums.js").StatutLocataire;
    nbOccupants: number;
    presenceEnfants: boolean;
    dateNaissance: Date | null;
    lieuNaissance: string | null;
    nationalite: string | null;
    numPieceIdentite: string | null;
    typePiece: TypePieceIdentite | null;
    dateDelivrance: Date | null;
    dateExpiration: Date | null;
    autoriteDelivrance: string | null;
    situationProfessionnelle: string | null;
    activationToken: string | null;
    tokenExpiresAt: Date | null;
}>;
//# sourceMappingURL=locataireAuth.service.d.ts.map