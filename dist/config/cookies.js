import {} from "express";
/**
 * Configuration des cookies httpOnly pour l'authentification
 */
export const cookieOptions = {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 24 * 60 * 60 * 1000, // 24 heures par défaut
};
/**
 * Options pour le cookie de refresh token
 */
export const refreshCookieOptions = {
    ...cookieOptions,
    path: "/api/proprietaires/auth",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 jours
};
/**
 * Configuration du domaine des cookies
 */
export const getCookieDomain = () => {
    // En production, définir le domaine
    // En développement, ne pas définir de domaine (laisser le navigateur utiliser l'hôte actuel)
    if (process.env.NODE_ENV === "production") {
        return process.env.COOKIE_DOMAIN;
    }
    return undefined;
};
/**
 * Effacer les cookies d'authentification
 */
export const clearAuthCookies = (res) => {
    const cookieDomain = getCookieDomain();
    const secure = process.env.NODE_ENV === "production";
    const sameSite = process.env.NODE_ENV === "production" ? "strict" : "lax";
    res.clearCookie("access_token", {
        httpOnly: true,
        sameSite,
        path: "/",
        secure,
        domain: cookieDomain,
    });
    res.clearCookie("refresh_token", {
        httpOnly: true,
        sameSite,
        path: "/api/proprietaires/auth",
        secure,
        domain: cookieDomain,
    });
};
//# sourceMappingURL=cookies.js.map