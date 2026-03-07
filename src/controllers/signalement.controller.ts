import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as SignalementService from "../services/signalement.service.js";
import { jsonResponse } from "../utils/responseApi.js";

// POST /api/signalements — public ou authentifié
export const createSignalement = async (req: Request, res: Response): Promise<void> => {
  const { type, motif, description, bienId, proprietaireSignaleId, locataireSignaleId,
          signaleParNom, signaleParEmail, signaleParTel } = req.body;

  // Déterminer qui signale
  let signaleParType = "PUBLIC";
  let signaleParId: string | undefined;

  if (req.owner?.id) {
    signaleParType = "OWNER";
    signaleParId = req.owner.id;
  }

  const signalement = await SignalementService.createSignalement({
    type,
    motif,
    description,
    bienId,
    proprietaireSignaleId,
    locataireSignaleId,
    signaleParType,
    signaleParId,
    signaleParNom,
    signaleParEmail,
    signaleParTel,
  });

  res.status(StatusCodes.CREATED).json(
    jsonResponse({ status: "success", message: "Signalement envoyé", data: signalement })
  );
};

// GET /api/signalements/admin — admin
export const listSignalements = async (req: Request, res: Response): Promise<void> => {
  const { page, limit, statut, type, search } = req.query;
  const result = await SignalementService.listSignalements({
    page: page ? parseInt(page as string) : 1,
    limit: limit ? parseInt(limit as string) : 20,
    statut: statut as string | undefined,
    type: type as string | undefined,
    search: search as string | undefined,
  });
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Signalements récupérés", data: result })
  );
};

// GET /api/signalements/admin/count — badge EN_ATTENTE
export const countEnAttente = async (_req: Request, res: Response): Promise<void> => {
  const count = await SignalementService.getCountEnAttente();
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Compteur récupéré", data: { count } })
  );
};

// GET /api/signalements/admin/:id — détail
export const getSignalementDetail = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const data = await SignalementService.getSignalementById(id);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Signalement récupéré", data })
  );
};

// PATCH /api/signalements/admin/:id/traiter — traitement admin
export const traiterSignalement = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { action, noteAdmin } = req.body;

  if (!action) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({ status: "fail", message: "Action requise" })
    );
    return;
  }

  const result = await SignalementService.traiterSignalement(id, action, noteAdmin, req.admin?.id);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Signalement traité", data: result })
  );
};
