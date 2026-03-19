import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as SignalementService from "../services/signalement.service.js";
import { jsonResponse } from "../utils/responseApi.js";
import { AppError } from "../utils/AppError.js";

// ─── POST /api/signalements/annonce/:bienId — public ────────────────────────

export const createSignalement = async (req: Request, res: Response): Promise<void> => {
  const { bienId } = req.params;
  const { motif, justification, preuve, signaleParNom, signaleParTel, signaleParEmail } = req.body;

  if (!motif) throw new AppError("Le motif est requis", StatusCodes.BAD_REQUEST);
  if (!signaleParTel) throw new AppError("Le numéro de téléphone est requis", StatusCodes.BAD_REQUEST);

  const result = await SignalementService.createSignalement({
    bienId: bienId as string,
    motif,
    justification,
    preuve,
    signaleParNom,
    signaleParTel,
    signaleParEmail,
  });

  res.status(StatusCodes.CREATED).json(
    jsonResponse({ status: "success", message: "Signalement enregistré. Merci pour votre vigilance.", data: result })
  );
};

// ─── GET /api/signalements/admin/count ───────────────────────────────────────

export const countBiensSignales = async (_req: Request, res: Response): Promise<void> => {
  const count = await SignalementService.getCountBiensSignales();
  res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "OK", data: { count } }));
};

// ─── GET /api/signalements/admin ─────────────────────────────────────────────

export const listBiensSignales = async (req: Request, res: Response): Promise<void> => {
  const { page, limit, priorite } = req.query;
  const result = await SignalementService.listBiensSignales({
    page:     page     ? Number(page)  : 1,
    limit:    limit    ? Number(limit) : 20,
    priorite: priorite as "HAUTE" | "BASSE" | undefined,
  });
  res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "OK", data: result }));
};

// ─── GET /api/signalements/admin/:bienId ─────────────────────────────────────

export const getSignalementDetail = async (req: Request, res: Response): Promise<void> => {
  const { bienId } = req.params;
  const detail = await SignalementService.getDetailByBien(bienId as string);
  res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "OK", data: detail }));
};

// ─── POST /api/signalements/admin/:bienId/rejeter ────────────────────────────

export const rejeterSignalements = async (req: Request, res: Response): Promise<void> => {
  const { bienId } = req.params;
  const adminId = (req as any).admin?.id;
  const result = await SignalementService.rejeterSignalements(bienId as string, adminId);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Signalements rejetés, compteur remis à zéro.", data: result })
  );
};

// ─── POST /api/signalements/admin/:bienId/avertir ────────────────────────────

export const avertirProprietaire = async (req: Request, res: Response): Promise<void> => {
  const { bienId } = req.params;
  const { message } = req.body;
  const adminId = (req as any).admin?.id;
  const result = await SignalementService.avertirProprietaire(bienId as string, message, adminId);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Avertissement envoyé au propriétaire.", data: result })
  );
};

// ─── POST /api/signalements/admin/:bienId/sanctionner ────────────────────────

export const sanctionnerAnnonce = async (req: Request, res: Response): Promise<void> => {
  const { bienId } = req.params;
  const adminId = (req as any).admin?.id;
  const result = await SignalementService.sanctionnerAnnonce(bienId as string, adminId);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Annonce supprimée définitivement.", data: result })
  );
};
