export interface TokenPair {
    accessToken: string;
    refreshToken: string;
    refreshTokenExpiresAt: Date;
}
interface JwtAdminPayload {
    sub: string;
    email: string;
    iat?: number;
    exp?: number;
}
export declare const login: (email: string, password: string) => Promise<{
    accessToken: string;
    refreshToken: string;
    refreshTokenExpiresAt: Date;
}>;
export declare const refresh: (oldRefreshToken: string) => Promise<{
    accessToken: string;
    refreshToken: string;
    refreshTokenExpiresAt: Date;
}>;
export declare const logout: (refreshToken: string) => Promise<void>;
export declare const verifyAccessToken: (token: string) => JwtAdminPayload;
export declare const updateProfile: (id: string, data: {
    email?: string;
    password?: string;
}) => Promise<{
    id: any;
    email: any;
}>;
export {};
//# sourceMappingURL=auth.service.d.ts.map