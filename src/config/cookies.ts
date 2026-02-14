import { type CookieOptions } from "express";

/**
 * Configuration des cookies httpOnly pour l'authentification
 */
export const cookieOptions: CookieOptions = {
  httpOnly: true,
  sameSite: "strict",
  path: "/",
  secure: process.env.NODE_ENV === "production",
  maxAge: 24 * 60 * 60 * 1000, // 24 heures par défaut
};

/**
 * Options pour le cookie de refresh token
 */
export const refreshCookieOptions: CookieOptions = {
  ...cookieOptions,
  path: "/api/proprietaires/auth",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 jours
};

/**
 * Configuration du domaine des cookies
 */
export const getCookieDomain = (): string => {
  return process.env.COOKIE_DOMAIN || "localhost";
};

/**
 * Effacer les cookies d'authentification
 */
export const clearAuthCookies = (res: any): void => {
  const cookieDomain = getCookieDomain();
  const secure = process.env.NODE_ENV === "production";
  
  res.clearCookie("access_token", {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    secure,
    domain: cookieDomain,
  });
  
  res.clearCookie("refresh_token", {
    httpOnly: true,
    sameSite: "strict",
    path: "/api/proprietaires/auth",
    secure,
    domain: cookieDomain,
  });
};
