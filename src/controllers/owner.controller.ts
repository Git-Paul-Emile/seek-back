import type { Request, Response, CookieOptions } from "express";
import { StatusCodes } from "http-status-codes";
import * as OwnerService from "../services/owner.service.js";
import { jsonResponse } from "../utils/responseApi.js";
import { prisma } from "../config/database.js";
import {
  envoyerResetPasswordProprietaire,
  envoyerOtpTelephone,
} from "../services/notification.service.js";

const REFRESH_COOKIE = "ownerRefreshToken";
const ACCESS_COOKIE = "ownerAccessToken";

const setTokenCookies = (
  res: Response,
  accessToken: string,
  refreshToken: string,
  refreshTokenExpiresAt: Date
) => {
  const isProduction = process.env.NODE_ENV === "production";

  res.cookie(ACCESS_COOKIE, accessToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    path: "/",
    maxAge: 15 * 60 * 1000,
  });

  res.cookie(REFRESH_COOKIE, refreshToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    path: "/api/owner/auth/refresh",
    expires: refreshTokenExpiresAt,
  });
};

const clearTokenCookies = (res: Response) => {
  const isProduction = process.env.NODE_ENV === "production";
  const cookieDomain = process.env.COOKIE_DOMAIN;
  const sameSite: CookieOptions["sameSite"] = isProduction ? "none" : "lax";
  
  const baseOptions: CookieOptions = {
    path: "/",
    httpOnly: true,
    secure: isProduction,
    sameSite,
    ...(cookieDomain && { domain: cookieDomain }),
  };
  
  res.clearCookie(ACCESS_COOKIE, baseOptions);
  res.clearCookie(REFRESH_COOKIE, { ...baseOptions, path: "/api/owner/auth/refresh" });
};

// ─── POST /api/owner/auth/register ───────────────────────────────────────────

export const register = async (req: Request, res: Response): Promise<void> => {
  const { proprietaire } = await OwnerService.register(req.body);

  // Envoi de l'OTP de vérification téléphone en arrière-plan
  try {
    const otp = await OwnerService.sendOtpTelephone(proprietaire.id);
    envoyerOtpTelephone({
      telephone:      req.body.telephone as string,
      prenom:         proprietaire.prenom,
      otp,
      proprietaireId: proprietaire.id,
    }).catch((err) => console.error("[Owner] Erreur envoi OTP inscription :", err));
  } catch (err) {
    console.error("[Owner] Impossible de générer l'OTP :", err);
  }

  res.status(StatusCodes.CREATED).json(
    jsonResponse({
      status: "success",
      message: "Compte créé avec succès. Vérifiez votre téléphone pour confirmer votre numéro.",
      data: { ...proprietaire, telephoneVerifie: false },
    })
  );
};

// ─── POST /api/owner/auth/login ──────────────────────────────────────────────

export const login = async (req: Request, res: Response): Promise<void> => {
  const { accessToken, refreshToken, refreshTokenExpiresAt, proprietaire } =
    await OwnerService.login(req.body);

  setTokenCookies(res, accessToken, refreshToken, refreshTokenExpiresAt);

  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "Connexion réussie. Bienvenue sur SEEK !",
      data: proprietaire,
    })
  );
};

// ─── POST /api/owner/auth/refresh ─────────────────────────────────────────────

export const refresh = async (req: Request, res: Response): Promise<void> => {
  const oldRefreshToken = req.cookies?.[REFRESH_COOKIE] as string | undefined;

  if (!oldRefreshToken) {
    res.status(StatusCodes.UNAUTHORIZED).json(
      jsonResponse({ status: "unauthorized", message: "Refresh token manquant" })
    );
    return;
  }

  const { accessToken, refreshToken, refreshTokenExpiresAt } =
    await OwnerService.refresh(oldRefreshToken);

  setTokenCookies(res, accessToken, refreshToken, refreshTokenExpiresAt);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Token renouvelé" })
  );
};

// ─── POST /api/owner/auth/logout ──────────────────────────────────────────────

export const logout = async (req: Request, res: Response): Promise<void> => {
  const refreshToken = req.cookies?.[REFRESH_COOKIE] as string | undefined;
  if (refreshToken) await OwnerService.logout(refreshToken);
  clearTokenCookies(res);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Déconnexion réussie" })
  );
};

// ─── GET /api/owner/auth/me ───────────────────────────────────────────────────

export const me = async (req: Request, res: Response): Promise<void> => {
  const owner = req.owner!;
  const proprietaire = await OwnerService.me(owner.id);
  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "Propriétaire authentifié",
      data: proprietaire,
    })
  );
};

// ─── PUT /api/owner/profile ─────────────────────────────────────────────────

export const updateProfile = async (req: Request, res: Response): Promise<void> => {
  const owner = req.owner!;
  const updated = await OwnerService.updateProfile(owner.id, req.body);
  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "Profil mis à jour avec succès",
      data: updated,
    })
  );
};

// ─── DELETE /api/owner/profile ───────────────────────────────────────────────

export const deleteProfile = async (req: Request, res: Response): Promise<void> => {
  const owner = req.owner!;
  await OwnerService.deleteProfile(owner.id);
  clearTokenCookies(res);
  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "Compte supprimé avec succès. Toutes vos annonces ont également été supprimées.",
    })
  );
};

// ─── POST /api/owner/auth/forgot-password ────────────────────────────────────

export const forgotPassword = async (req: Request, res: Response): Promise<void> => {
  const { identifiant } = req.body;
  if (!identifiant) {
    res.status(StatusCodes.BAD_REQUEST).json(jsonResponse({ status: "fail", message: "Identifiant requis" }));
    return;
  }

  try {
    const { token, email, telephone, prenom, proprietaireId } =
      await OwnerService.requestPasswordReset(identifiant);

    const frontUrl = process.env.FRONTEND_URL ?? "http://localhost:5173";
    const lien = `${frontUrl}/owner/reset-password?token=${token}`;

    // Envoi SMS + email (email si disponible) en arrière-plan
    envoyerResetPasswordProprietaire({
      telephone,
      email,
      prenom,
      lien,
      proprietaireId,
    }).catch((err) => console.error("[Owner] Erreur envoi reset password :", err));
  } catch (e: any) {
    if (e.statusCode === StatusCodes.OK) {
      // Compte non trouvé, on répond OK quand même (ne pas révéler)
    } else {
      throw e;
    }
  }

  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Si ce compte existe, un lien de réinitialisation a été envoyé." })
  );
};

// ─── POST /api/owner/auth/reset-password ─────────────────────────────────────

export const resetPassword = async (req: Request, res: Response): Promise<void> => {
  const { token, password } = req.body;
  if (!token || !password) {
    res.status(StatusCodes.BAD_REQUEST).json(jsonResponse({ status: "fail", message: "Token et nouveau mot de passe requis" }));
    return;
  }
  if (password.length < 8) {
    res.status(StatusCodes.BAD_REQUEST).json(jsonResponse({ status: "fail", message: "Le mot de passe doit contenir au moins 8 caractères" }));
    return;
  }
  await OwnerService.resetPassword(token, password);
  res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Mot de passe réinitialisé avec succès" }));
};

// ─── GET /api/owner/messages ──────────────────────────────────────────────────

export const getMessagesInternes = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  if (!proprietaireId) { res.status(StatusCodes.UNAUTHORIZED).json(jsonResponse({ status: "fail", message: "Non authentifié" })); return; }
  const data = await prisma.messageInterne.findMany({
    where:   { proprietaireId },
    orderBy: { createdAt: "desc" },
    take:    50,
  });
  res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Messages récupérés", data }));
};

// ─── POST /api/owner/messages/lus ────────────────────────────────────────────

export const marquerMessagesLus = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  if (!proprietaireId) { res.status(StatusCodes.UNAUTHORIZED).json(jsonResponse({ status: "fail", message: "Non authentifié" })); return; }
  await prisma.messageInterne.updateMany({
    where: { proprietaireId, lu: false },
    data:  { lu: true },
  });
  res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Messages marqués comme lus" }));
};

// ─── POST /api/owner/auth/verifier-telephone ─────────────────────────────────

export const verifierTelephone = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  if (!proprietaireId) {
    res.status(StatusCodes.UNAUTHORIZED).json(jsonResponse({ status: "fail", message: "Non authentifié" }));
    return;
  }
  const { otp } = req.body;
  if (!otp) {
    res.status(StatusCodes.BAD_REQUEST).json(jsonResponse({ status: "fail", message: "Code OTP requis" }));
    return;
  }
  const { accessToken, refreshToken, refreshTokenExpiresAt, proprietaire } = await OwnerService.verifyOtpTelephone(proprietaireId, String(otp));
  
  // Définir les cookies après vérification réussie
  setTokenCookies(res, accessToken, refreshToken, refreshTokenExpiresAt);
  
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Numéro de téléphone vérifié avec succès.", data: proprietaire })
  );
};

// ─── POST /api/owner/auth/renvoyer-otp ───────────────────────────────────────

export const renvoyerOtp = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  if (!proprietaireId) {
    res.status(StatusCodes.UNAUTHORIZED).json(jsonResponse({ status: "fail", message: "Non authentifié" }));
    return;
  }
  // Récupérer les infos du propriétaire
  const proprietaire = await prisma.proprietaire.findUnique({
    where: { id: proprietaireId },
    select: { prenom: true, telephone: true },
  });
  if (!proprietaire) {
    res.status(StatusCodes.NOT_FOUND).json(jsonResponse({ status: "fail", message: "Compte introuvable" }));
    return;
  }

  const otp = await OwnerService.sendOtpTelephone(proprietaireId);
  envoyerOtpTelephone({
    telephone:      proprietaire.telephone,
    prenom:         proprietaire.prenom,
    otp,
    proprietaireId,
  }).catch((err) => console.error("[Owner] Erreur renvoi OTP :", err));

  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Code OTP renvoyé sur votre téléphone." })
  );
};

// ─── POST /api/owner/auth/verifier-telephone-public ─────────────────────────

export const verifierTelephonePublic = async (req: Request, res: Response): Promise<void> => {
  const { proprietaireId, otp } = req.body;
  if (!proprietaireId || !otp) {
    res.status(StatusCodes.BAD_REQUEST).json(jsonResponse({ status: "fail", message: "ID propriétaire et code OTP requis" }));
    return;
  }
  const { accessToken, refreshToken, refreshTokenExpiresAt, proprietaire } = await OwnerService.verifyOtpTelephone(proprietaireId, String(otp));
  
  // Définir les cookies après vérification réussie
  setTokenCookies(res, accessToken, refreshToken, refreshTokenExpiresAt);
  
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Numéro de téléphone vérifié avec succès.", data: proprietaire })
  );
};

// ─── POST /api/owner/auth/renvoyer-otp-public ───────────────────────────────

export const renvoyerOtpPublic = async (req: Request, res: Response): Promise<void> => {
  const { proprietaireId } = req.body;
  if (!proprietaireId) {
    res.status(StatusCodes.BAD_REQUEST).json(jsonResponse({ status: "fail", message: "ID propriétaire requis" }));
    return;
  }
  
  // Récupérer les infos du propriétaire
  const proprietaire = await prisma.proprietaire.findUnique({
    where: { id: proprietaireId },
    select: { prenom: true, telephone: true },
  });
  if (!proprietaire) {
    res.status(StatusCodes.NOT_FOUND).json(jsonResponse({ status: "fail", message: "Compte introuvable" }));
    return;
  }

  const otp = await OwnerService.sendOtpTelephone(proprietaireId);
  envoyerOtpTelephone({
    telephone:      proprietaire.telephone,
    prenom:         proprietaire.prenom,
    otp,
    proprietaireId,
  }).catch((err) => console.error("[Owner] Erreur renvoi OTP :", err));

  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Code OTP renvoyé sur votre téléphone." })
  );
};

