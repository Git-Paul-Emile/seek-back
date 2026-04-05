import { StatusCodes } from "http-status-codes";
import { jsonResponse } from "../utils/responseApi.js";
import * as ConfigService from "../services/configMonetisation.service.js";
// ─── Config ───────────────────────────────────────────────────────────────────
export const getConfigHandler = async (req, res) => {
    const config = await ConfigService.getConfig();
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Configuration récupérée", data: config }));
};
export const updateConfigHandler = async (req, res) => {
    const { miseEnAvantActive, commissionActive, tauxCommission } = req.body;
    const config = await ConfigService.updateConfig({
        miseEnAvantActive,
        commissionActive,
        tauxCommission,
    });
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Configuration mise à jour", data: config }));
};
//# sourceMappingURL=monetisation.controller.js.map