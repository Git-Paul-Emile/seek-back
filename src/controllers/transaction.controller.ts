import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as TransactionService from "../services/transaction.service.js";
import { jsonResponse } from "../utils/responseApi.js";
import { AppError } from "../utils/AppError.js";

/**
 * Récupère l'historique des transactions du propriétaire connecté
 */
export const getHistorique = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  
  // Pour les tests sans auth, on peut passer ownerId dans le header
  if (!proprietaireId) {
    const headerOwnerId = req.headers['x-owner-id'] as string;
    if (!headerOwnerId) {
      res.status(StatusCodes.UNAUTHORIZED).json(
        jsonResponse({
          status: "fail",
          message: "Authentification requise",
        })
      );
      return;
    }
  }
  
  const ownerId = proprietaireId || req.headers['x-owner-id'] as string;
  const { page, limit, type, statut, bienId, dateDebut, dateFin } = req.query;

  try {
    const result = await TransactionService.getHistoriqueTransactions(
      ownerId,
      {
        page: page ? parseInt(page as string) : undefined,
        limit: limit ? parseInt(limit as string) : undefined,
      },
      {
        type: type as string,
        statut: statut as string,
        bienId: bienId as string,
        dateDebut: dateDebut ? new Date(dateDebut as string) : undefined,
        dateFin: dateFin ? new Date(dateFin as string) : undefined,
      }
    );

    res.status(StatusCodes.OK).json(
      jsonResponse({
        status: "success",
        message: "Historique des transactions récupéré",
        data: {
          transactions: result.data,
          pagination: result.pagination,
        },
      })
    );
  } catch (error) {
    console.error("[TRANSACTION] Erreur lors de la récupération de l'historique:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
      jsonResponse({
        status: "error",
        message: "Une erreur inattendue s'est produite",
      })
    );
  }
};

/**
 * Récupère les détails d'une transaction spécifique
 */
export const getTransactionDetail = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  
  if (!proprietaireId) {
    const headerOwnerId = req.headers['x-owner-id'] as string;
    if (!headerOwnerId) {
      res.status(StatusCodes.UNAUTHORIZED).json(
        jsonResponse({
          status: "fail",
          message: "Authentification requise",
        })
      );
      return;
    }
  }

  const ownerId = proprietaireId || req.headers['x-owner-id'] as string;
  const { id } = req.params;

  try {
    const transaction = await TransactionService.getTransactionById(id as string, ownerId);

    res.status(StatusCodes.OK).json(
      jsonResponse({
        status: "success",
        message: "Transaction récupérée",
        data: transaction,
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
    console.error("[TRANSACTION] Erreur lors de la récupération de la transaction:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
      jsonResponse({
        status: "error",
        message: "Une erreur inattendue s'est produite",
      })
    );
  }
};

/**
 * Récupère les statistiques des transactions du propriétaire
 */
export const getStats = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = req.owner?.id;
  
  if (!proprietaireId) {
    const headerOwnerId = req.headers['x-owner-id'] as string;
    if (!headerOwnerId) {
      res.status(StatusCodes.UNAUTHORIZED).json(
        jsonResponse({
          status: "fail",
          message: "Authentification requise",
        })
      );
      return;
    }
  }

  const ownerId = proprietaireId || req.headers['x-owner-id'] as string;

  try {
    const stats = await TransactionService.getStatsTransactions(ownerId);

    res.status(StatusCodes.OK).json(
      jsonResponse({
        status: "success",
        message: "Statistiques des transactions récupérées",
        data: stats,
      })
    );
  } catch (error) {
    console.error("[TRANSACTION] Erreur lors de la récupération des statistiques:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
      jsonResponse({
        status: "error",
        message: "Une erreur inattendue s'est produite",
      })
    );
  }
};
