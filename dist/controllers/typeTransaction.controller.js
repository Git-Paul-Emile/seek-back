import { StatusCodes } from "http-status-codes";
import * as TypeTransactionService from "../services/typeTransaction.service.js";
import { jsonResponse } from "../utils/responseApi.js";
// GET /api/types-transaction — public
export const getAll = async (_req, res) => {
    const types = await TypeTransactionService.getAll();
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Types de transaction récupérés", data: types }));
};
// GET /api/types-transaction/admin — admin (inclut inactifs)
export const getAllAdmin = async (_req, res) => {
    const types = await TypeTransactionService.getAllAdmin();
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Types de transaction récupérés", data: types }));
};
// POST /api/types-transaction — admin
export const create = async (req, res) => {
    const type = await TypeTransactionService.create({
        nom: req.body.nom,
        ordre: req.body.ordre !== undefined ? Number(req.body.ordre) : undefined,
    });
    res.status(StatusCodes.CREATED).json(jsonResponse({ status: "success", message: "Type de transaction créé", data: type }));
};
// PUT /api/types-transaction/:id — admin
export const update = async (req, res) => {
    const id = req.params.id;
    const updatePayload = {};
    if (req.body.nom !== undefined)
        updatePayload.nom = req.body.nom;
    if (req.body.actif !== undefined)
        updatePayload.actif = req.body.actif;
    if (req.body.ordre !== undefined && req.body.ordre !== "") {
        updatePayload.ordre = Number(req.body.ordre);
    }
    const type = await TypeTransactionService.update(id, updatePayload);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Type de transaction mis à jour", data: type }));
};
// DELETE /api/types-transaction/:id — admin
export const remove = async (req, res) => {
    const id = req.params.id;
    await TypeTransactionService.remove(id);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Type de transaction supprimé" }));
};
//# sourceMappingURL=typeTransaction.controller.js.map