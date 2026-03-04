import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as PremiumService from "../services/premium.service.js";
import { jsonResponse } from "../utils/responseApi.js";
import { AppError } from "../utils/AppError.js";
import { ModePaiement, MOYENS_PAIEMENT } from "../types/premium.types.js";

// ─── Récupérer les formules premium disponibles ─────────────────────────────────

export const getFormulesPremium = async (req: Request, res: Response): Promise<void> => {
  const formules = PremiumService.getFormulesPremium();

  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "Formules premium récupérées",
      data: {
        formules,
        moyenPaiement: MOYENS_PAIEMENT,
      },
    })
  );
};

// ─── Initier le paiement et activer la mise en avant (simulation) ─────────────

export const payerEtActiverPremium = async (req: Request, res: Response): Promise<void> => {
  // Pour l'instant, on utilise un owner ID de test ou depuis le header
  // TODO: Remettre authenticateOwner et utiliser req.owner?.id en production
  let proprietaireId = req.owner?.id;
  
  // Pour les tests sans auth, on peut passer ownerId dans le header
  if (!proprietaireId) {
    proprietaireId = req.headers['x-owner-id'] as string;
  }
  
  if (!proprietaireId) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }

  const bienId = req.params.id as string;
  const { formuleId, modePaiement } = req.body;

  // Validation des champs obligatoires
  if (!formuleId) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({
        status: "fail",
        message: "L'ID de la formule est requis",
      })
    );
    return;
  }

  if (!modePaiement) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({
        status: "fail",
        message: "Le mode de paiement est requis",
      })
    );
    return;
  }

  // Validation du mode de paiement
  const modesValides = Object.values(ModePaiement);
  if (!modesValides.includes(modePaiement)) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({
        status: "fail",
        message: `Mode de paiement invalide. Modes disponibles: ${modesValides.join(", ")}`,
      })
    );
    return;
  }

  try {
    const result = await PremiumService.simulerPaiementEtActiverPromotion(
      bienId,
      proprietaireId,
      formuleId,
      modePaiement
    );

    res.status(StatusCodes.OK).json(
      jsonResponse({
        status: "success",
        message: "Paiement effectué avec succès. Votre annonce est maintenant mise en avant !",
        data: {
          paiement: {
            transactionId: result.paiement.transactionId,
            montant: result.paiement.montant,
            modePaiement: result.paiement.modePaiement,
            datePaiement: result.paiement.datePaiement,
          },
          promotion: result.promotion.data,
        },
      })
    );
  } catch (error) {
    // Gestion des erreurs du service
    if (error instanceof AppError) {
      res.status(error.statusCode).json(
        jsonResponse({
          status: "fail",
          message: error.message,
        })
      );
      return;
    }

    // Erreur inattendue
    console.error("[PREMIUM] Erreur lors du paiement:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
      jsonResponse({
        status: "error",
        message: "Une erreur inattendue s'est produite",
      })
    );
  }
};

// ─── Récupérer les moyens de paiement disponibles ───────────────────────────────

export const getMoyensPaiement = async (req: Request, res: Response): Promise<void> => {
  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "Moyens de paiement disponibles",
      data: MOYENS_PAIEMENT,
    })
  );
};

// ─── Arrêter la mise en avant d'un bien ─────────────────────────────────────────

export const arreterPremium = async (req: Request, res: Response): Promise<void> => {
  let proprietaireId = req.owner?.id;
  
  if (!proprietaireId) {
    proprietaireId = req.headers['x-owner-id'] as string;
  }
  
  if (!proprietaireId) {
    res.status(StatusCodes.UNAUTHORIZED).json(
      jsonResponse({
        status: "fail",
        message: "Authentification requise",
      })
    );
    return;
  }

  const bienId = req.params.id as string;

  try {
    const result = await PremiumService.arreterMiseEnAvant(
      bienId,
      proprietaireId
    );

    res.status(StatusCodes.OK).json(
      jsonResponse({
        status: "success",
        message: result.message,
        data: result,
      })
    );
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json(
        jsonResponse({
          status: "fail",
          message: error.message,
        })
      );
      return;
    }

    console.error("[PREMIUM] Erreur lors de l'arrêt de la mise en avant:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
      jsonResponse({
        status: "error",
        message: "Une erreur inattendue s'est produite",
      })
    );
  }
};

// ─── Récupérer l'historique des mises en avant d'un bien ───────────────────────

export const getHistoriqueBien = async (req: Request, res: Response): Promise<void> => {
  let proprietaireId = req.owner?.id;
  
  if (!proprietaireId) {
    proprietaireId = req.headers['x-owner-id'] as string;
  }
  
  if (!proprietaireId) {
    res.status(StatusCodes.UNAUTHORIZED).json(
      jsonResponse({
        status: "fail",
        message: "Authentification requise",
      })
    );
    return;
  }

  const bienId = req.params.id as string;

  try {
    const historique = await PremiumService.getHistoriqueMisesEnAvant(
      bienId,
      proprietaireId
    );

    res.status(StatusCodes.OK).json(
      jsonResponse({
        status: "success",
        message: "Historique des mises en avant récupéré",
        data: historique,
      })
    );
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json(
        jsonResponse({
          status: "fail",
          message: error.message,
        })
      );
      return;
    }

    console.error("[PREMIUM] Erreur lors de la récupération de l'historique:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
      jsonResponse({
        status: "error",
        message: "Une erreur inattendue s'est produite",
      })
    );
  }
};

// ─── Récupérer l'historique de tous les paiements premium du propriétaire ────────

export const getHistoriquePaiements = async (req: Request, res: Response): Promise<void> => {
  let proprietaireId = req.owner?.id;
  
  if (!proprietaireId) {
    proprietaireId = req.headers['x-owner-id'] as string;
  }
  
  if (!proprietaireId) {
    res.status(StatusCodes.UNAUTHORIZED).json(
      jsonResponse({
        status: "fail",
        message: "Authentification requise",
      })
    );
    return;
  }

  const { page, limit } = req.query;

  try {
    const result = await PremiumService.getHistoriqueMisesEnAvantProprietaire(
      proprietaireId,
      {
        page: page ? parseInt(page as string) : undefined,
        limit: limit ? parseInt(limit as string) : undefined,
      }
    );

    res.status(StatusCodes.OK).json(
      jsonResponse({
        status: "success",
        message: "Historique des paiements premium récupéré",
        data: result,
      })
    );
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json(
        jsonResponse({
          status: "fail",
          message: error.message,
        })
      );
      return;
    }

    console.error("[PREMIUM] Erreur lors de la récupération de l'historique:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
      jsonResponse({
        status: "error",
        message: "Une erreur inattendue s'est produite",
      })
    );
  }
};
