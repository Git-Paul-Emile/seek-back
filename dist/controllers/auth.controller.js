import { StatusCodes } from "http-status-codes";
import * as AuthService from "../services/auth.service.js";
import { jsonResponse } from "../utils/responseApi.js";
import { cookieOptions } from "../utils/cookieConfig.js";
// ─── Helpers cookies ──────────────────────────────────────────────────────────
const REFRESH_COOKIE = "refreshToken";
const ACCESS_COOKIE = "accessToken";
const setTokenCookies = (res, accessToken, refreshToken, refreshTokenExpiresAt) => {
    res.cookie(ACCESS_COOKIE, accessToken, cookieOptions({ maxAge: 15 * 60 * 1000 }));
    res.cookie(REFRESH_COOKIE, refreshToken, cookieOptions({ path: "/api/auth/refresh", expires: refreshTokenExpiresAt }));
};
const clearTokenCookies = (res) => {
    const cookieDomain = process.env.COOKIE_DOMAIN;
    const base = cookieOptions({ ...(cookieDomain && { domain: cookieDomain }) });
    res.clearCookie(ACCESS_COOKIE, base);
    res.clearCookie(REFRESH_COOKIE, { ...base, path: "/api/auth/refresh" });
};
// ─── POST /api/auth/login ─────────────────────────────────────────────────────
export const login = async (req, res) => {
    const { email, password } = req.body;
    const { accessToken, refreshToken, refreshTokenExpiresAt } = await AuthService.login(email, password);
    setTokenCookies(res, accessToken, refreshToken, refreshTokenExpiresAt);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Connexion réussie" }));
};
// ─── POST /api/auth/refresh ───────────────────────────────────────────────────
export const refresh = async (req, res) => {
    const oldRefreshToken = req.cookies?.[REFRESH_COOKIE];
    if (!oldRefreshToken) {
        res.status(StatusCodes.UNAUTHORIZED).json(jsonResponse({ status: "unauthorized", message: "Refresh token manquant" }));
        return;
    }
    const { accessToken, refreshToken, refreshTokenExpiresAt } = await AuthService.refresh(oldRefreshToken);
    setTokenCookies(res, accessToken, refreshToken, refreshTokenExpiresAt);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Token renouvelé" }));
};
// ─── POST /api/auth/logout ────────────────────────────────────────────────────
export const logout = async (req, res) => {
    const refreshToken = req.cookies?.[REFRESH_COOKIE];
    if (refreshToken) {
        await AuthService.logout(refreshToken);
    }
    clearTokenCookies(res);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Déconnexion réussie" }));
};
// ─── GET /api/auth/me ─────────────────────────────────────────────────────────
export const me = async (req, res) => {
    // req.admin est peuplé par le middleware auth
    const admin = req.admin;
    res.status(StatusCodes.OK).json(jsonResponse({
        status: "success",
        message: "Admin authentifié",
        data: { id: admin.id, email: admin.email },
    }));
};
// ─── PUT /api/auth/profile ─────────────────────────────────────────────────
export const updateProfile = async (req, res) => {
    const admin = req.admin;
    const updated = await AuthService.updateProfile(admin.id, req.body);
    res.status(StatusCodes.OK).json(jsonResponse({
        status: "success",
        message: "Profil mis à jour avec succès",
        data: updated,
    }));
};
// ─── PUT /api/auth/change-password ───────────────────────────────────────────
export const changePassword = async (req, res) => {
    const admin = req.admin;
    const { currentPassword, newPassword } = req.body;
    const result = await AuthService.changePassword(admin.id, currentPassword, newPassword);
    // Révoquer les cookies
    clearTokenCookies(res);
    res.status(StatusCodes.OK).json(jsonResponse({
        status: "success",
        message: result.message,
    }));
};
//# sourceMappingURL=auth.controller.js.map