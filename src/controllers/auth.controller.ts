import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as AuthService from "../services/auth.service.js";
import { jsonResponse } from "../utils/responseApi.js";

// ─── Helpers cookies ──────────────────────────────────────────────────────────

const REFRESH_COOKIE = "refreshToken";
const ACCESS_COOKIE = "accessToken";

const setTokenCookies = (
  res: Response,
  accessToken: string,
  refreshToken: string,
  refreshTokenExpiresAt: Date
) => {
  const isProduction = process.env.NODE_ENV === "production";

  // Access token — HttpOnly, courte durée, toutes les routes
  res.cookie(ACCESS_COOKIE, accessToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: "strict",
    path: "/",                // Envoyé à toutes les routes de l'API
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

const clearTokenCookies = (res: Response) => {
  res.clearCookie(ACCESS_COOKIE, { path: "/" });
  res.clearCookie(REFRESH_COOKIE, { path: "/api/auth/refresh" });
};

// ─── POST /api/auth/login ─────────────────────────────────────────────────────

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body as { email: string; password: string };

  const { accessToken, refreshToken, refreshTokenExpiresAt } =
    await AuthService.login(email, password);

  setTokenCookies(res, accessToken, refreshToken, refreshTokenExpiresAt);

  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Connexion réussie" })
  );
};

// ─── POST /api/auth/refresh ───────────────────────────────────────────────────

export const refresh = async (req: Request, res: Response): Promise<void> => {
  const oldRefreshToken = req.cookies?.[REFRESH_COOKIE] as string | undefined;

  if (!oldRefreshToken) {
    res.status(StatusCodes.UNAUTHORIZED).json(
      jsonResponse({ status: "unauthorized", message: "Refresh token manquant" })
    );
    return;
  }

  const { accessToken, refreshToken, refreshTokenExpiresAt } =
    await AuthService.refresh(oldRefreshToken);

  setTokenCookies(res, accessToken, refreshToken, refreshTokenExpiresAt);

  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Token renouvelé" })
  );
};

// ─── POST /api/auth/logout ────────────────────────────────────────────────────

export const logout = async (req: Request, res: Response): Promise<void> => {
  const refreshToken = req.cookies?.[REFRESH_COOKIE] as string | undefined;

  if (refreshToken) {
    await AuthService.logout(refreshToken);
  }

  clearTokenCookies(res);

  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Déconnexion réussie" })
  );
};

// ─── GET /api/auth/me ─────────────────────────────────────────────────────────

export const me = async (req: Request, res: Response): Promise<void> => {
  // req.admin est peuplé par le middleware auth
  const admin = (req as any).admin as { id: string; email: string };

  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "Admin authentifié",
      data: { id: admin.id, email: admin.email },
    })
  );
};
