import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as BienService from "../services/bien.service.js";
import { jsonResponse } from "../utils/responseApi.js";
import { validerAnnonceSchema } from "../validators/bien.validator.js";
import { AppError } from "../utils/AppError.js";
import type { StatutAnnonce } from "../generated/prisma/enums.js";

export const countPending = async (_req: Request, res: Response): Promise<void> => {
  const count = await BienService.countAnnoncesPending();
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Compteur récupéré", data: { count } })
  );
};

export const getCounts = async (_req: Request, res: Response): Promise<void> => {
  const counts = await BienService.getAnnoncesCounts();
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Compteurs récupérés", data: counts })
  );
};

export const deleteAnnonce = async (req: Request, res: Response): Promise<void> => {
  await BienService.adminDeleteBien(req.params.id as string);
  res.status(StatusCodes.NO_CONTENT).send();
};

export const getAnnonces = async (req: Request, res: Response): Promise<void> => {
  const statut = req.query.statut as StatutAnnonce | undefined;
  const page = req.query.page ? parseInt(req.query.page as string) : 1;
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 20;

  const result = await BienService.getAnnonces({ statut, page, limit });
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Annonces récupérées", data: result })
  );
};

export const validerAnnonce = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id as string;

  const parsed = validerAnnonceSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new AppError(
      parsed.error.issues[0]?.message ?? "Données invalides",
      StatusCodes.BAD_REQUEST
    );
  }

  const bien = await BienService.validerAnnonce(id, parsed.data.action, parsed.data.note);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Annonce mise à jour", data: bien })
  );
};
