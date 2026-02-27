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
}) => Promise<OwnerTokenPair & {
    proprietaire: {
        id: string;
        prenom: string;
        nom: string;
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
    };
}>;
export declare const refresh: (oldRefreshToken: string) => Promise<OwnerTokenPair>;
export declare const logout: (refreshToken: string) => Promise<void>;
export declare const me: (id: string) => Promise<{
    id: string;
    prenom: string;
    nom: string;
    telephone: string;
    email: string | undefined;
    sexe: string | undefined;
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
//# sourceMappingURL=owner.service.d.ts.map