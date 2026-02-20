import { StatusCodes } from "http-status-codes";
import * as MeubleService from "../services/meuble.service.js";
import { jsonResponse } from "../utils/responseApi.js";
export const getAll = async (_req, res) => {
    const items = await MeubleService.getAll();
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Meubles récupérés", data: items }));
};
export const getAllAdmin = async (_req, res) => {
    const items = await MeubleService.getAllAdmin();
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Meubles récupérés", data: items }));
};
export const createMany = async (req, res) => {
    const items = await MeubleService.createMany(req.body.items);
    res.status(StatusCodes.CREATED).json(jsonResponse({ status: "success", message: "Meubles créés", data: items }));
};
export const update = async (req, res) => {
    const item = await MeubleService.update(req.params.id, {
        nom: req.body.nom,
        categorieId: req.body.categorieId,
        actif: req.body.actif,
    });
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Meuble mis à jour", data: item }));
};
export const remove = async (req, res) => {
    await MeubleService.remove(req.params.id);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Meuble supprimé" }));
};
//# sourceMappingURL=meuble.controller.js.map