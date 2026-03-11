import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { jsonResponse } from "../utils/responseApi.js";
import * as ConfigService from "../services/configMonetisation.service.js";
import * as PlanService from "../services/planAbonnement.service.js";
import * as AbonnementService from "../services/abonnement.service.js";
import * as MiseEnAvantService from "../services/miseEnAvant.service.js";

// ─── Config ───────────────────────────────────────────────────────────────────

export const getConfigHandler = async (req: Request, res: Response) => {
  const config = await ConfigService.getConfig();
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Configuration récupérée", data: config })
  );
};

export const updateConfigHandler = async (req: Request, res: Response) => {
  const { miseEnAvantActive, commissionActive, abonnementActive, tauxCommission } = req.body;
  const config = await ConfigService.updateConfig({
    miseEnAvantActive,
    commissionActive,
    abonnementActive,
    tauxCommission,
  });
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Configuration mise à jour", data: config })
  );
};

// ─── Plans ────────────────────────────────────────────────────────────────────

export const listPlansHandler = async (req: Request, res: Response) => {
  const plans = await PlanService.listPlans();
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Plans récupérés", data: plans })
  );
};

export const listPlansActifsHandler = async (req: Request, res: Response) => {
  const plans = await PlanService.listPlansActifs();
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Plans actifs récupérés", data: plans })
  );
};

export const createPlanHandler = async (req: Request, res: Response) => {
  const { nom, prix, maxAnnonces, actif, ordre, description } = req.body;
  const plan = await PlanService.createPlan({ nom, prix, maxAnnonces, actif, ordre, description });
  res.status(StatusCodes.CREATED).json(
    jsonResponse({ status: "success", message: "Plan créé", data: plan })
  );
};

export const updatePlanHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nom, prix, maxAnnonces, actif, ordre, description } = req.body;
  const plan = await PlanService.updatePlan(id as string, { nom, prix, maxAnnonces, actif, ordre, description });
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Plan mis à jour", data: plan })
  );
};

export const deletePlanHandler = async (req: Request, res: Response) => {
  await PlanService.deletePlan(req.params.id as string);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Plan supprimé" })
  );
};

// ─── Abonnements admin ────────────────────────────────────────────────────────

export const listAbonnementsAdminHandler = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 20;
  const statut = req.query.statut as string | undefined;
  const result = await AbonnementService.getAllAbonnements({ page, limit, statut });
  res.status(StatusCodes.OK).json({
    ...jsonResponse({ status: "success", message: "Abonnements récupérés", data: result.items }),
    meta: {
      page: result.page,
      limit: result.limit,
      total: result.total,
      totalPages: result.totalPages,
    },
  });
};

export const confirmerAbonnementHandler = async (req: Request, res: Response) => {
  const abonnement = await AbonnementService.confirmerAbonnement(req.params.id as string);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Abonnement confirmé", data: abonnement })
  );
};

export const resilierAbonnementHandler = async (req: Request, res: Response) => {
  const abonnement = await AbonnementService.resilierAbonnement(req.params.id as string);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Abonnement résilié", data: abonnement })
  );
};

// ─── Abonnements owner ────────────────────────────────────────────────────────

export const souscrireAbonnementHandler = async (req: Request, res: Response) => {
  const proprietaireId = (req as any).proprietaire?.id;
  const { planId, modePaiement, reference, note } = req.body;
  const abonnement = await AbonnementService.souscrireAbonnement(proprietaireId, {
    planId,
    modePaiement,
    reference,
    note,
  });
  res.status(StatusCodes.CREATED).json(
    jsonResponse({ status: "success", message: "Demande d'abonnement soumise", data: abonnement })
  );
};

export const getAbonnementsOwnerHandler = async (req: Request, res: Response) => {
  const proprietaireId = (req as any).proprietaire?.id;
  const abonnements = await AbonnementService.getAbonnementsOwner(proprietaireId);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Abonnements récupérés", data: abonnements })
  );
};

export const getAbonnementActifOwnerHandler = async (req: Request, res: Response) => {
  const proprietaireId = (req as any).proprietaire?.id;
  const abonnement = await AbonnementService.getAbonnementActif(proprietaireId);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Abonnement actif récupéré", data: abonnement })
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
