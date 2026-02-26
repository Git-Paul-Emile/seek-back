import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as BienService from "../services/bien.service.js";
import { getOwnerStats } from "../repositories/bien.repository.js";
import { jsonResponse } from "../utils/responseApi.js";
import { saveDraftSchema } from "../validators/bien.validator.js";
import { AppError } from "../utils/AppError.js";

// ─── Brouillon ────────────────────────────────────────────────────────────────

export const saveDraft = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  if (!proprietaireId) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }

  const files = (req.files as Express.Multer.File[]) ?? [];

  let body: Record<string, unknown> = {};
  try {
    body = req.body.data ? JSON.parse(req.body.data as string) : req.body;
  } catch {
    body = req.body;
  }

  const parsed = saveDraftSchema.safeParse(body);
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

  const bien = await BienService.saveDraft(parsed.data, proprietaireId, files);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Brouillon enregistré", data: bien })
  );
};

export const getDraft = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  if (!proprietaireId) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }

  const draft = await BienService.getDraftByProprietaire(proprietaireId);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Brouillon récupéré", data: draft ?? null })
  );
};

export const soumettreAnnonce = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  if (!proprietaireId) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }

  const id = req.params.id as string;
  const bien = await BienService.soumettreAnnonce(id, proprietaireId);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Annonce soumise pour validation", data: bien })
  );
};

// ─── Liste des biens du propriétaire ─────────────────────────────────────────

export const getBiens = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  if (!proprietaireId) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }
  const biens = await BienService.getBiensByProprietaire(proprietaireId);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Biens récupérés", data: biens })
  );
};

export const deleteBien = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  if (!proprietaireId) throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  await BienService.deleteBien(req.params.id as string, proprietaireId);
  res.status(StatusCodes.NO_CONTENT).send();
};

export const retourBrouillon = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  if (!proprietaireId) throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  const bien = await BienService.retourBrouillon(req.params.id as string, proprietaireId);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Annonce remise en brouillon", data: bien })
  );
};

export const annulerAnnonce = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  if (!proprietaireId) throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  const bien = await BienService.annulerAnnonce(req.params.id as string, proprietaireId);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Annonce annulée", data: bien })
  );
};

export const soumettreRevision = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  if (!proprietaireId) throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);

  const files = (req.files as Express.Multer.File[]) ?? [];
  let body: Record<string, unknown> = {};
  try {
    body = req.body.data ? JSON.parse(req.body.data as string) : req.body;
  } catch {
    body = req.body;
  }

  const { saveDraftSchema } = await import("../validators/bien.validator.js");
  const parsed = saveDraftSchema.safeParse(body);
  if (!parsed.success) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({ status: "fail", message: parsed.error.issues[0]?.message ?? "Données invalides", data: parsed.error.flatten() })
    );
    return;
  }

  const bien = await BienService.soumettreRevision(req.params.id as string, proprietaireId, parsed.data, files);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Révision soumise pour validation", data: bien })
  );
};

export const getBienById = async (req: Request, res: Response): Promise<void> => {
  const bien = await BienService.getBienById(req.params.id as string);
  if (!bien) {
    throw new AppError("Bien introuvable", StatusCodes.NOT_FOUND);
  }
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Bien récupéré", data: bien })
  );
};

// ─── Public — dernières annonces (pour page d'accueil) ─────────────────────────

export const getDernieresAnnonces = async (req: Request, res: Response): Promise<void> => {
  const limit = parseInt(req.query.limit as string) || 8;
  const annonces = await BienService.getDernieresAnnonces(limit);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Dernières annonces récupérées", data: annonces })
  );
};

// ─── Public — annonce publiée par ID ─────────────────────────────────────────────

export const getAnnoncePublie = async (req: Request, res: Response): Promise<void> => {
  const bien = await BienService.getAnnoncePublieById(req.params.id as string);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Annonce récupérée", data: bien })
  );
};

// ─── Signalement d'annonce ──────────────────────────────────────────────────────

export const signalerAnnonce = async (req: Request, res: Response): Promise<void> => {
  const { motif, description } = req.body;
  if (!motif) {
    throw new AppError("Le motif du signalement est requis", StatusCodes.BAD_REQUEST);
  }
  const result = await BienService.signalerAnnonce(req.params.id as string, motif, description);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: result.message, data: result })
  );
};

// ─── Stats propriétaire ───────────────────────────────────────────────────────

export const getOwnerStatsController = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  if (!proprietaireId) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }
  const stats = await getOwnerStats(proprietaireId);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Statistiques récupérées", data: stats })
  );
};

// ─── Public — annonces similaires ────────────────────────────────────────────

export const getAnnoncesSimilaires = async (req: Request, res: Response): Promise<void> => {
  const bienId = req.params.id as string;
  const bien = await BienService.getAnnoncePublieById(bienId);

  if (!bien) {
    throw new AppError("Annonce introuvable ou non publiée", StatusCodes.NOT_FOUND);
  }

  // Paramètre limit optionnel: défaut 4, max 6 ( Desktop UX)
  let limit = parseInt(req.query.limit as string) || 4;
  limit = Math.min(Math.max(limit, 3), 6); // Entre 3 et 6

  const similaires = await BienService.getAnnoncesSimilaires(bienId, limit);
  
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Annonces similaires récupérées", data: similaires })
  );
};
