export interface OwnerTokenPair {
    accessToken: string;
    refreshToken: string;
    refreshTokenExpiresAt: Date;
}
export interface JwtOwnerPayload {
    sub: string;
    prenom: string;
    nom: string;
    iat?: number;
    exp?: number;
}
export declare const verifyOwnerAccessToken: (token: string) => JwtOwnerPayload;
export declare const register: (data: {
    prenom: string;
    nom: string;
    sexe?: string;
    telephone: string;
    email?: string;
    password: string;
}) => Promise<{
    proprietaire: {
        id: string;
        prenom: string;
        nom: string;
        telephone: string;
        email?: string;
        telephoneVerifie: boolean;
    };
}>;
export declare const login: (data: {
    identifiant: string;
    password: string;
}) => Promise<OwnerTokenPair & {
    proprietaire: {
        id: string;
        prenom: string;
        nom: string;
        telephone: string;
        email?: string;
        telephoneVerifie: boolean;
    };
}>;
export declare const refresh: (oldRefreshToken: string) => Promise<OwnerTokenPair & {
    proprietaireId: string;
}>;
export declare const logout: (refreshToken: string) => Promise<string | null>;
export declare const me: (id: string) => Promise<{
    id: any;
    prenom: any;
    nom: any;
    telephone: any;
    email: any;
    sexe: any;
    telephoneVerifie: any;
    statutVerification: any;
    verifiedAt: any;
    nbAvertissements: any;
    estRestreint: any;
    estSuspendu: any;
    estBanni: any;
    dateFinRestriction: any;
    dateFinSuspension: any;
    dateBannissement: any;
}>;
export declare const updateProfile: (id: string, data: {
    prenom?: string;
    nom?: string;
    sexe?: string;
    telephone?: string;
    email?: string | null;
    password?: string;
}) => Promise<{
    id: string;
    prenom: string;
    nom: string;
    telephone: string;
    email: string | undefined;
    sexe: string | undefined;
}>;
export declare const deleteProfile: (id: string) => Promise<void>;
export declare const requestPasswordReset: (identifiant: string) => Promise<{
    token: string;
    email: string | null;
    telephone: string;
    prenom: string;
    proprietaireId: string;
}>;
export declare const resetPassword: (rawToken: string, newPassword: string) => Promise<void>;
export declare const sendOtpTelephone: (proprietaireId: string) => Promise<string>;
export declare const verifyOtpTelephone: (proprietaireId: string, otp: string) => Promise<OwnerTokenPair & {
    proprietaire: {
        id: string;
        prenom: string;
        nom: string;
        telephone: string;
        email?: string;
        telephoneVerifie: boolean;
    };
}>;
//# sourceMappingURL=owner.service.d.ts.map