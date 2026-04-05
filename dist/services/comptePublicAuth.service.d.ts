export interface TokenPair {
    accessToken: string;
    refreshToken: string;
    refreshTokenExpiresAt: Date;
}
export interface JwtPayload {
    sub: string;
    nom: string;
    prenom: string;
    iat?: number;
    exp?: number;
}
export declare const verifyAccessToken: (token: string) => JwtPayload;
export declare const register: (data: {
    nom: string;
    prenom: string;
    telephone: string;
    email?: string | null;
    password: string;
}) => Promise<{
    compte: {
        id: string;
        nom: string;
        prenom: string;
        telephone: string;
        email: string | null;
    };
    tokens: TokenPair;
}>;
export declare const login: (data: {
    telephone: string;
    password: string;
}) => Promise<{
    compte: {
        id: string;
        nom: string;
        prenom: string;
        telephone: string;
        email: string | null;
    };
    tokens: TokenPair;
}>;
export declare const refreshTokens: (rawToken: string) => Promise<{
    compte: {
        id: string;
        nom: string;
        prenom: string;
        telephone: string;
        email: string | null;
    };
    tokens: TokenPair;
}>;
export declare const logout: (rawToken: string) => Promise<void>;
export declare const getMe: (id: string) => Promise<{
    id: string;
    telephone: string;
    createdAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
}>;
export declare const updateProfile: (id: string, data: {
    nom?: string;
    prenom?: string;
    email?: string | null;
}) => Promise<{
    id: string;
    telephone: string;
    createdAt: Date;
    nom: string;
    email: string | null;
    prenom: string;
}>;
export declare const changePassword: (id: string, data: {
    currentPassword: string;
    newPassword: string;
}) => Promise<void>;
export declare const deleteAccount: (id: string, password: string) => Promise<void>;
//# sourceMappingURL=comptePublicAuth.service.d.ts.map