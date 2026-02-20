import { StatusCodes } from "http-status-codes";
import { getSiteStats } from "../repositories/stats.repository.js";
import { jsonResponse } from "../utils/responseApi.js";
// GET /api/stats — public
export const getStats = async (_req, res) => {
    const stats = await getSiteStats();
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Statistiques récupérées", data: stats }));
};
//# sourceMappingURL=stats.controller.js.map