import type { JwtPayload } from "jsonwebtoken";
export interface AccessTokenPayload {
    sub: string;
    telephone: string;
    role: string;
}
export interface RefreshTokenPayload {
    sub: string;
    tokenId: string;
}
export interface TokenPair {
    accessToken: string;
    refreshToken: string;
}
export declare const ACCESS_TOKEN_EXPIRY: string;
export declare const REFRESH_TOKEN_EXPIRY: string;
/**
 * Générer un access token JWT
 */
export declare const generateAccessToken: (payload: AccessTokenPayload) => string;
/**
 * Générer un refresh token JWT
 */
export declare const generateRefreshToken: (payload: RefreshTokenPayload) => string;
/**
 * Générer une paire de tokens (access + refresh)
 */
export declare const generateTokenPair: (payload: {
    userId: string;
    telephone: string;
    role: string;
    tokenId: string;
}) => TokenPair;
/**
 * Vérifier un access token
 */
export declare const verifyAccessToken: (token: string) => AccessTokenPayload;
/**
 * Vérifier un refresh token
 */
export declare const verifyRefreshToken: (token: string) => RefreshTokenPayload;
/**
 * Décoder un token sans vérifier (utile pour debugging)
 */
export declare const decodeToken: (token: string) => JwtPayload | null;
//# sourceMappingURL=jwt.d.ts.map