import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getSiteStats, getAdminStats } from "../repositories/stats.repository.js";
import { jsonResponse } from "../utils/responseApi.js";

// GET /api/stats — public
export const getStats = async (_req: Request, res: Response): Promise<void> => {
  const stats = await getSiteStats();
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Statistiques récupérées", data: stats })
  );
};

// GET /api/stats/admin — admin auth requis
export const getAdminStatsController = async (_req: Request, res: Response): Promise<void> => {
  const stats = await getAdminStats();
  res.status(StatusCodes.OK).json(
    jsonResponse({ status: "success", message: "Statistiques admin récupérées", data: stats })
  );
};
