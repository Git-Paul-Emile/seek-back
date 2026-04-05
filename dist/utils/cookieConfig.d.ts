import type { CookieOptions } from "express";
/**
 * Retourne true si les cookies doivent être sécurisés (SameSite=None; Secure=true).
 * Priorité : COOKIE_SECURE=true > NODE_ENV=production
 * En local, ne pas définir ces vars → cookies Lax/non-secure pour localhost.
 */
export declare const isSecureCookie: () => boolean;
/**
 * Options de base pour un cookie HttpOnly.
 */
export declare const cookieOptions: (overrides?: CookieOptions) => CookieOptions;
//# sourceMappingURL=cookieConfig.d.ts.map