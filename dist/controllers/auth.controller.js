import { StatusCodes } from "http-status-codes";
import * as AuthService from "../services/auth.service.js";
import { jsonResponse } from "../utils/responseApi.js";
// ─── Helpers cookies ──────────────────────────────────────────────────────────
const REFRESH_COOKIE = "refreshToken";
const ACCESS_COOKIE = "accessToken";
const setTokenCookies = (res, accessToken, refreshToken, refreshTokenExpiresAt) => {
    const isProduction = process.env.NODE_ENV === "production";
    // Access token — HttpOnly, courte durée, toutes les routes
    res.cookie(ACCESS_COOKIE, accessToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: "strict",
        path: "/", // Envoyé à toutes les routes de l'API
        maxAge: 15 * 60 * 1000, // 15 min
    });
    // Refresh token — HttpOnly, path restreint à /api/auth/refresh uniquement
    res.cookie(REFRESH_COOKIE, refreshToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: "strict",
        path: "/api/auth/refresh",
        expires: refreshTokenExpiresAt,
    });
};
const clearTokenCookies = (res) => {
    res.clearCookie(ACCESS_COOKIE, { path: "/" });
    res.clearCookie(REFRESH_COOKIE, { path: "/api/auth/refresh" });
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
//# sourceMappingURL=auth.controller.js.map