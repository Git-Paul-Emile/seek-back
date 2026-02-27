import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import * as LocataireAuthService from "../services/locataireAuth.service.js";
import { jsonResponse } from "../utils/responseApi.js";
import { AppError } from "../utils/AppError.js";

// ─── Cookie helpers ───────────────────────────────────────────────────────────

const IS_PROD = process.env.NODE_ENV === "production";

const setAuthCookies = (
  res: Response,
  accessToken: string,
  refreshToken: string,
  refreshTokenExpiresAt: Date
) => {
  res.cookie("locataireAccessToken", accessToken, {
    httpOnly: true,
    secure: IS_PROD,
    sameSite: "strict",
    maxAge: 15 * 60 * 1000, // 15 min
  });
  res.cookie("locataireRefreshToken", refreshToken, {
    httpOnly: true,
    secure: IS_PROD,
    sameSite: "strict",
    expires: refreshTokenExpiresAt,
    path: "/api/locataire/auth",
  });
};

const clearAuthCookies = (res: Response) => {
  res.clearCookie("locataireAccessToken");
  res.clearCookie("locataireRefreshToken", { path: "/api/locataire/auth" });
};

// ─── Activation ───────────────────────────────────────────────────────────────

const activerSchema = z.object({
  token: z.string().min(1, "Token requis"),
  password: z.string().min(6, "Mot de passe requis (min 6 caractères)"),
  dateNaissance: z.coerce.date().optional().nullable(),
  lieuNaissance: z.string().optional().nullable(),
  nationalite: z.string().optional().nullable(),
  sexe: z.string().optional().nullable(),
  numPieceIdentite: z.string().optional().nullable(),
  typePiece: z.enum(["CNI", "PASSEPORT", "CARTE_CONSULAIRE", "AUTRE"]).optional().nullable(),
  dateDelivrance: z.coerce.date().optional().nullable(),
  dateExpiration: z.coerce.date().optional().nullable(),
  autoriteDelivrance: z.string().optional().nullable(),
  situationProfessionnelle: z.string().optional().nullable(),
});

export const activer = async (req: Request, res: Response): Promise<void> => {
  const parsed = activerSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({
        status: "fail",
        message: parsed.error.issues[0]?.message ?? "Données invalides",
        data: parsed.error.flatten(),
      })
    );
    return;
  }

  const result = await LocataireAuthService.activer(parsed.data);
  setAuthCookies(
    res,
    result.accessToken,
    result.refreshToken,
    result.refreshTokenExpiresAt
  );
  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "Compte activé avec succès",
      data: { locataire: result.locataire },
    })
  );
};

// ─── Connexion ────────────────────────────────────────────────────────────────

const loginSchema = z.object({
  identifiant: z.string().min(1, "Identifiant requis"),
  password: z.string().min(1, "Mot de passe requis"),
});

export const login = async (req: Request, res: Response): Promise<void> => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({
        status: "fail",
        message: parsed.error.issues[0]?.message ?? "Données invalides",
        data: parsed.error.flatten(),
      })
    );
    return;
  }

  const result = await LocataireAuthService.login(parsed.data);
  setAuthCookies(
    res,
    result.accessToken,
    result.refreshToken,
    result.refreshTokenExpiresAt
  );
  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "Connexion réussie",
      data: { locataire: result.locataire },
    })
  );
};

// ─── Refresh ──────────────────────────────────────────────────────────────────

export const refreshToken = async (
  req: Request,
  res: Response
): Promise<void> => {
  const token = req.cookies?.locataireRefreshToken as string | undefined;
  if (!token) {
    throw new AppError("Refresh token manquant", StatusCodes.UNAUTHORIZED);
  }

  const tokens = await LocataireAuthService.refresh(token);
  setAuthCookies(
    res,
    tokens.accessToken,
    tokens.refreshToken,
    tokens.refreshTokenExpiresAt
  );
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Token renouvelé", data: null })
  );
};

// ─── Logout ───────────────────────────────────────────────────────────────────

export const logout = async (req: Request, res: Response): Promise<void> => {
  const token = req.cookies?.locataireRefreshToken as string | undefined;
  if (token) {
    await LocataireAuthService.logout(token);
  }
  clearAuthCookies(res);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Déconnexion réussie", data: null })
  );
};

// ─── Me ───────────────────────────────────────────────────────────────────────

export const me = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }
  const locataire = await LocataireAuthService.me(req.locataire.id);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Profil récupéré", data: locataire })
  );
};

// ─── Mise à jour du profil ────────────────────────────────────────────────────

const updateProfilSchema = z.object({
  dateNaissance: z.coerce.date().optional().nullable(),
  lieuNaissance: z.string().optional().nullable(),
  nationalite: z.string().optional().nullable(),
  sexe: z.string().optional().nullable(),
  numPieceIdentite: z.string().optional().nullable(),
  typePiece: z.enum(["CNI", "PASSEPORT", "CARTE_CONSULAIRE", "AUTRE"]).optional().nullable(),
  dateDelivrance: z.coerce.date().optional().nullable(),
  dateExpiration: z.coerce.date().optional().nullable(),
  autoriteDelivrance: z.string().optional().nullable(),
  situationProfessionnelle: z.string().optional().nullable(),
});

export const updateProfil = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (!req.locataire?.id) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }
  const parsed = updateProfilSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({
        status: "fail",
        message: parsed.error.issues[0]?.message ?? "Données invalides",
        data: parsed.error.flatten(),
      })
    );
    return;
  }
  const updated = await LocataireAuthService.updateProfil(
    req.locataire.id,
    parsed.data
  );
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Profil mis à jour", data: updated })
  );
};
