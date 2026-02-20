import { StatusCodes } from "http-status-codes";
import * as EquipementService from "../services/equipement.service.js";
import { jsonResponse } from "../utils/responseApi.js";
export const getAll = async (_req, res) => {
    const items = await EquipementService.getAll();
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Équipements récupérés", data: items }));
};
export const getAllAdmin = async (_req, res) => {
    const items = await EquipementService.getAllAdmin();
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Équipements récupérés", data: items }));
};
export const createMany = async (req, res) => {
    const items = await EquipementService.createMany(req.body.items);
    res.status(StatusCodes.CREATED).json(jsonResponse({ status: "success", message: "Équipements créés", data: items }));
};
export const update = async (req, res) => {
    const item = await EquipementService.update(req.params.id, {
        nom: req.body.nom,
        categorieId: req.body.categorieId,
        actif: req.body.actif,
    });
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Équipement mis à jour", data: item }));
};
export const remove = async (req, res) => {
    await EquipementService.remove(req.params.id);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Équipement supprimé" }));
};
//# sourceMappingURL=equipement.controller.js.map