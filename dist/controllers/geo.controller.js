import { StatusCodes } from "http-status-codes";
import * as GeoRepository from "../repositories/geo.repository.js";
import { jsonResponse } from "../utils/responseApi.js";
export const getPays = async (_req, res) => {
    const pays = await GeoRepository.findAllPays();
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Pays récupérés", data: pays }));
};
export const getVilles = async (req, res) => {
    const villes = await GeoRepository.findVillesByPays(req.params.paysId);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Villes récupérées", data: villes }));
};
//# sourceMappingURL=geo.controller.js.map