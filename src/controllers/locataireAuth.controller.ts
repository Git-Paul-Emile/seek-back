import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import * as LocataireAuthService from "../services/locataireAuth.service.js";
import * as BailService from "../services/bail.service.js";
import * as MobileMoneyService from "../services/mobileMoney.service.js";
import * as QuittanceService from "../services/quittance.service.js";
import * as NotificationService from "../services/notification.service.js";
import { prisma } from "../config/database.js";
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

// ─── Échéancier du bail actif ─────────────────────────────────────────────────

export const getEcheancier = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }
  const echeancier = await BailService.getEcheancierForLocataire(req.locataire.id);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Échéancier récupéré", data: echeancier })
  );
};

// ─── Contrat du bail actif ────────────────────────────────────────────────────

export const getContrat = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }
  const contrat = await BailService.getContratForLocataire(req.locataire.id);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: contrat ? "Contrat récupéré" : "Aucun contrat trouvé", data: contrat })
  );
};

// ─── Initier un paiement Mobile Money (locataire) ─────────────────────────────

const initierPaiementSchema = z.object({
  echeanceId: z.string().min(1),
  provider: z.string().min(1),
});

export const initierPaiement = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);

  const parsed = initierPaiementSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({ status: "fail", message: parsed.error.issues[0]?.message ?? "Données invalides", data: null })
    );
    return;
  }

  const { echeanceId, provider } = parsed.data;
  const locataireId = req.locataire.id;

  // Récupérer l'échéance + bail + bien + propriétaire
  const echeance = await prisma.echeancierLoyer.findUnique({
    where: { id: echeanceId },
    include: {
      bail: {
        include: {
          bien: { select: { id: true, titre: true } },
          proprietaire: { select: { id: true, telephone: true } },
        },
      },
    },
  });
  if (!echeance) throw new AppError("Échéance introuvable", StatusCodes.NOT_FOUND);
  if (echeance.locataireId !== locataireId) throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
  if (echeance.statut === "PAYE" || echeance.statut === "ANNULE")
    throw new AppError("Cette échéance est déjà soldée ou annulée", StatusCodes.BAD_REQUEST);

  // Récupérer le téléphone du locataire (non présent dans le JWT)
  const locataireDb = await prisma.locataire.findUnique({
    where: { id: locataireId },
    select: { telephone: true },
  });

  const montant = echeance.montant;
  const reference = `LOYER-${echeance.id.slice(0, 8).toUpperCase()}`;

  const result = await MobileMoneyService.initierPaiementMobileMoney({
    provider,
    montant,
    telephonePayeur: locataireDb?.telephone ?? "",
    telephoneBeneficiaire: echeance.bail.proprietaire.telephone,
    reference,
    echeanceId,
    bailId: echeance.bailId,
    bienId: echeance.bienId,
    locataireId,
    proprietaireId: echeance.proprietaireId,
  });

  // Notifier le propriétaire
  await NotificationService.envoyerInitiationPaiement({
    proprietaireTelephone: echeance.bail.proprietaire.telephone,
    locataireNom: `${req.locataire.prenom} ${req.locataire.nom}`,
    montant,
    dateEcheance: echeance.dateEcheance.toISOString(),
    provider,
    bienTitre: echeance.bail.bien.titre,
    echeanceId,
    bailId: echeance.bailId,
    bienId: echeance.bienId,
    proprietaireId: echeance.proprietaireId,
    locataireId,
  });

  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: result.message, data: result })
  );
};

// ─── Quittances du locataire ──────────────────────────────────────────────────

export const getQuittances = async (req: Request, res: Response): Promise<void> => {
  if (!req.locataire?.id) throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  const quittances = await QuittanceService.getQuittancesLocataire(req.locataire.id);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Quittances récupérées", data: quittances })
  );
};
