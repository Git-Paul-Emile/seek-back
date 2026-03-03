import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as PromotionService from "../services/promotion.service.js";
import { jsonResponse } from "../utils/responseApi.js";
import { AppError } from "../utils/AppError.js";

// ─── Activation de la mise en avant ─────────────────────────────────────────────

export const activatePromotion = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  if (!proprietaireId) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }

  const bienId = req.params.id as string;
  const { dureeJours } = req.body;

  // Durée par défaut : 7 jours si non spécifiée
  const duree = dureeJours ? parseInt(dureeJours as string) : 7;

  if (isNaN(duree) || duree < 1 || duree > 90) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({
        status: "fail",
        message: "La durée de promotion doit être comprise entre 1 et 90 jours",
      })
    );
    return;
  }

  const result = await PromotionService.activatePromotion(bienId, proprietaireId, duree);

  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: result.message,
      data: result.data,
    })
  );
};

// ─── Désactivation de la mise en avant ───────────────────────────────────────

export const deactivatePromotion = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  if (!proprietaireId) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }

  const bienId = req.params.id as string;

  const result = await PromotionService.deactivatePromotion(bienId, proprietaireId);

  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: result.message,
      data: result.data,
    })
  );
};

// ─── Récupérer le statut de mise en avant d'une annonce ───────────────────────

export const getPromotionStatus = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  if (!proprietaireId) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }

  const bienId = req.params.id as string;

  const status = await PromotionService.getPromotionStatus(bienId, proprietaireId);

  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "Statut de promotion récupéré",
      data: status,
    })
  );
};

// ─── Récupérer les statistiques de promotion du propriétaire ─────────────────

export const getPromotionStats = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  if (!proprietaireId) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }

  const stats = await PromotionService.getPromotionStats(proprietaireId);

  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "Statistiques de promotion récupérées",
      data: stats,
    })
  );
};

// ─── Prolonger la mise en avant ───────────────────────────────────────────────

export const extendPromotion = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  if (!proprietaireId) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }

  const bienId = req.params.id as string;
  const { joursSupplementaires } = req.body;

  const jours = joursSupplementaires ? parseInt(joursSupplementaires as string) : 7;

  if (isNaN(jours) || jours < 1 || jours > 90) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({
        status: "fail",
        message: "Le nombre de jours supplémentaires doit être compris entre 1 et 90",
      })
    );
    return;
  }

  const result = await PromotionService.extendPromotion(bienId, proprietaireId, jours);

  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: result.message,
      data: result.data,
    })
  );
};

// ─── Récupérer les annonces mises en avant (public - pour page d'accueil) ────

export const getAnnoncesMiseEnAvant = async (req: Request, res: Response): Promise<void> => {
  const limit = parseInt(req.query.limit as string) || 4;

  const result = await PromotionService.getAnnoncesMiseEnAvant(limit);

  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: result.message,
      data: {
        annonces: result.annonces,
        total: result.total,
        rotation: result.rotation,
      },
    })
  );
};
