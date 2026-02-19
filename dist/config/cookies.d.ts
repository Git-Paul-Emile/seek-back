import { type CookieOptions } from "express";
/**
 * Configuration des cookies httpOnly pour l'authentification
 */
export declare const cookieOptions: CookieOptions;
/**
 * Options pour le cookie de refresh token
 */
export declare const refreshCookieOptions: CookieOptions;
/**
 * Configuration du domaine des cookies
 */
export declare const getCookieDomain: () => string | undefined;
/**
 * Effacer les cookies d'authentification
 */
export declare const clearAuthCookies: (res: any) => void;
//# sourceMappingURL=cookies.d.ts.map