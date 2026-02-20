import { StatusCodes } from "http-status-codes";
import * as OwnerService from "../services/owner.service.js";
import { jsonResponse } from "../utils/responseApi.js";
const REFRESH_COOKIE = "ownerRefreshToken";
const ACCESS_COOKIE = "ownerAccessToken";
const setTokenCookies = (res, accessToken, refreshToken, refreshTokenExpiresAt) => {
    const isProduction = process.env.NODE_ENV === "production";
    res.cookie(ACCESS_COOKIE, accessToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: "strict",
        path: "/",
        maxAge: 15 * 60 * 1000,
    });
    res.cookie(REFRESH_COOKIE, refreshToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: "strict",
        path: "/api/owner/auth/refresh",
        expires: refreshTokenExpiresAt,
    });
};
const clearTokenCookies = (res) => {
    res.clearCookie(ACCESS_COOKIE, { path: "/" });
    res.clearCookie(REFRESH_COOKIE, { path: "/api/owner/auth/refresh" });
};
// ─── POST /api/owner/auth/register ───────────────────────────────────────────
export const register = async (req, res) => {
    const { accessToken, refreshToken, refreshTokenExpiresAt, proprietaire } = await OwnerService.register(req.body);
    setTokenCookies(res, accessToken, refreshToken, refreshTokenExpiresAt);
    res.status(StatusCodes.CREATED).json(jsonResponse({
        status: "success",
        message: "Compte créé avec succès. Bienvenue sur SEEK !",
        data: proprietaire,
    }));
};
// ─── POST /api/owner/auth/login ──────────────────────────────────────────────
export const login = async (req, res) => {
    const { accessToken, refreshToken, refreshTokenExpiresAt, proprietaire } = await OwnerService.login(req.body);
    setTokenCookies(res, accessToken, refreshToken, refreshTokenExpiresAt);
    res.status(StatusCodes.OK).json(jsonResponse({
        status: "success",
        message: "Connexion réussie. Bienvenue sur SEEK !",
        data: proprietaire,
    }));
};
// ─── POST /api/owner/auth/refresh ─────────────────────────────────────────────
export const refresh = async (req, res) => {
    const oldRefreshToken = req.cookies?.[REFRESH_COOKIE];
    if (!oldRefreshToken) {
        res.status(StatusCodes.UNAUTHORIZED).json(jsonResponse({ status: "unauthorized", message: "Refresh token manquant" }));
        return;
    }
    const { accessToken, refreshToken, refreshTokenExpiresAt } = await OwnerService.refresh(oldRefreshToken);
    setTokenCookies(res, accessToken, refreshToken, refreshTokenExpiresAt);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Token renouvelé" }));
};
// ─── POST /api/owner/auth/logout ──────────────────────────────────────────────
export const logout = async (req, res) => {
    const refreshToken = req.cookies?.[REFRESH_COOKIE];
    if (refreshToken)
        await OwnerService.logout(refreshToken);
    clearTokenCookies(res);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Déconnexion réussie" }));
};
// ─── GET /api/owner/auth/me ───────────────────────────────────────────────────
export const me = async (req, res) => {
    const owner = req.owner;
    const proprietaire = await OwnerService.me(owner.id);
    res.status(StatusCodes.OK).json(jsonResponse({
        status: "success",
        message: "Propriétaire authentifié",
        data: proprietaire,
    }));
};
//# sourceMappingURL=owner.controller.js.map