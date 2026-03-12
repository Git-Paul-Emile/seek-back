import type { Request, Response, CookieOptions } from "express";
import { StatusCodes } from "http-status-codes";
import { jsonResponse } from "../utils/responseApi.js";
import * as AuthService from "../services/comptePublicAuth.service.js";

const ACCESS_COOKIE = "comptePublicAccessToken";
const REFRESH_COOKIE = "comptePublicRefreshToken";

const cookieOpts = (maxAge: number): CookieOptions => {
  const isProduction = process.env.NODE_ENV === "production";
  const sameSite: CookieOptions["sameSite"] = isProduction ? "none" : "lax";
  return {
    httpOnly: true,
    secure: isProduction,
    sameSite,
    path: "/",
    maxAge,
  };
};

// POST /api/public/auth/register
export const register = async (req: Request, res: Response) => {
  const { nom, prenom, telephone, email, password } = req.body;

  if (!nom || !prenom || !telephone || !password) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({ status: "fail", message: "nom, prenom, telephone et password sont requis" })
    );
    return;
  }

  const { compte, tokens } = await AuthService.register({ nom, prenom, telephone, email, password });

  res.cookie(ACCESS_COOKIE, tokens.accessToken, cookieOpts(15 * 60 * 1000));
  res.cookie(REFRESH_COOKIE, tokens.refreshToken, cookieOpts(30 * 24 * 3600 * 1000));

  res.status(StatusCodes.CREATED).json(
    jsonResponse({ status: "success", message: "Compte créé avec succès", data: compte })
  );
};

// POST /api/public/auth/login
export const login = async (req: Request, res: Response) => {
  const { telephone, password } = req.body;

  if (!telephone || !password) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({ status: "fail", message: "telephone et password sont requis" })
    );
    return;
  }

  const { compte, tokens } = await AuthService.login({ telephone, password });

  res.cookie(ACCESS_COOKIE, tokens.accessToken, cookieOpts(15 * 60 * 1000));
  res.cookie(REFRESH_COOKIE, tokens.refreshToken, cookieOpts(30 * 24 * 3600 * 1000));

  res.json(jsonResponse({ status: "success", message: "Connexion réussie", data: compte }));
};

// POST /api/public/auth/refresh
export const refresh = async (req: Request, res: Response) => {
  const rawToken = req.cookies?.[REFRESH_COOKIE] as string | undefined;

  if (!rawToken) {
    res.status(StatusCodes.UNAUTHORIZED).json(
      jsonResponse({ status: "unauthorized", message: "Refresh token manquant" })
    );
    return;
  }

  const { compte, tokens } = await AuthService.refreshTokens(rawToken);

  res.cookie(ACCESS_COOKIE, tokens.accessToken, cookieOpts(15 * 60 * 1000));
  res.cookie(REFRESH_COOKIE, tokens.refreshToken, cookieOpts(30 * 24 * 3600 * 1000));

  res.json(jsonResponse({ status: "success", message: "Token rafraîchi", data: compte }));
};

// POST /api/public/auth/logout
export const logout = async (req: Request, res: Response) => {
  const rawToken = req.cookies?.[REFRESH_COOKIE] as string | undefined;

  if (rawToken) await AuthService.logout(rawToken);

  res.clearCookie(ACCESS_COOKIE);
  res.clearCookie(REFRESH_COOKIE);

  res.json(jsonResponse({ status: "success", message: "Déconnexion réussie", data: null }));
};

// GET /api/public/auth/me
export const me = async (req: Request, res: Response) => {
  const compte = await AuthService.getMe(req.comptePublic!.id);
  res.json(jsonResponse({ status: "success", message: "Profil", data: compte }));
};
