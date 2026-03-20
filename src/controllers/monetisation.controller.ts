import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { jsonResponse } from "../utils/responseApi.js";
import * as ConfigService from "../services/configMonetisation.service.js";
import * as MiseEnAvantService from "../services/miseEnAvant.service.js";

// ─── Config ───────────────────────────────────────────────────────────────────

export const getConfigHandler = async (req: Request, res: Response) => {
  const config = await ConfigService.getConfig();
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Configuration récupérée", data: config })
  );
};

export const updateConfigHandler = async (req: Request, res: Response) => {
  const { miseEnAvantActive, commissionActive, tauxCommission } = req.body;
  const config = await ConfigService.updateConfig({
    miseEnAvantActive,
    commissionActive,
    tauxCommission,
  });
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Configuration mise à jour", data: config })
  );
};

// ─── Mises en avant admin ─────────────────────────────────────────────────────

export const listMisesEnAvantAdminHandler = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 20;
  const statut = req.query.statut as string | undefined;
  const result = await MiseEnAvantService.getAllMisesEnAvant({ page, limit, statut });
  res.status(StatusCodes.OK).json({
    ...jsonResponse({ status: "success", message: "Mises en avant récupérées", data: result.items }),
    meta: {
      page: result.page,
      limit: result.limit,
      total: result.total,
      totalPages: result.totalPages,
    },
  });
};

export const confirmerMiseEnAvantHandler = async (req: Request, res: Response) => {
  const promotion = await MiseEnAvantService.confirmerMiseEnAvant(req.params.id as string);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Mise en avant confirmée", data: promotion })
  );
};

// ─── Mises en avant owner ─────────────────────────────────────────────────────

export const getMisesEnAvantOwnerHandler = async (req: Request, res: Response) => {
  const proprietaireId = (req as any).proprietaire?.id;
  const misesEnAvant = await MiseEnAvantService.getMisesEnAvantOwner(proprietaireId);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Mises en avant récupérées", data: misesEnAvant })
  );
};

export const demanderMiseEnAvantHandler = async (req: Request, res: Response) => {
  const proprietaireId = (req as any).proprietaire?.id;
  const bienId = req.params.bienId as string;
  const { formuleId, modePaiement, reference, note } = req.body;
  const promotion = await MiseEnAvantService.demanderMiseEnAvant(bienId, proprietaireId, {
    formuleId,
    modePaiement,
    reference,
    note,
  });
  res.status(StatusCodes.CREATED).json(
    jsonResponse({ status: "success", message: "Demande de mise en avant soumise", data: promotion })
  );
};
