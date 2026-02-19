import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as TypeLogementService from "../services/typeLogement.service.js";
import { jsonResponse } from "../utils/responseApi.js";

// GET /api/types-logement — public
export const getAll = async (_req: Request, res: Response): Promise<void> => {
  const types = await TypeLogementService.getAll();
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Types de logement récupérés", data: types })
  );
};

// GET /api/types-logement/admin — admin (inclut inactifs)
export const getAllAdmin = async (_req: Request, res: Response): Promise<void> => {
  const types = await TypeLogementService.getAllAdmin();
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Types de logement récupérés", data: types })
  );
};

// POST /api/types-logement — admin
export const create = async (req: Request, res: Response): Promise<void> => {
  const type = await TypeLogementService.create(req.body);
  res.status(StatusCodes.CREATED).json(
    jsonResponse({ status: "success", message: "Type de logement créé", data: type })
  );
};

// PUT /api/types-logement/:id — admin
export const update = async (req: Request, res: Response): Promise<void> => {
  const type = await TypeLogementService.update(req.params.id as string, req.body);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Type de logement mis à jour", data: type })
  );
};

// DELETE /api/types-logement/:id — admin
export const remove = async (req: Request, res: Response): Promise<void> => {
  await TypeLogementService.remove(req.params.id as string);
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Type de logement supprimé" })
  );
};
