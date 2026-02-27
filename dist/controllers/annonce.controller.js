import { StatusCodes } from "http-status-codes";
import * as BienService from "../services/bien.service.js";
import { jsonResponse } from "../utils/responseApi.js";
import { validerAnnonceSchema } from "../validators/bien.validator.js";
import { AppError } from "../utils/AppError.js";
export const countPending = async (_req, res) => {
    const count = await BienService.countAnnoncesPending();
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Compteur récupéré", data: { count } }));
};
export const getCounts = async (_req, res) => {
    const counts = await BienService.getAnnoncesCounts();
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Compteurs récupérés", data: counts }));
};
export const deleteAnnonce = async (req, res) => {
    await BienService.adminDeleteBien(req.params.id);
    res.status(StatusCodes.NO_CONTENT).send();
};
export const getAnnonces = async (req, res) => {
    const statut = req.query.statut;
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 20;
    const result = await BienService.getAnnonces({ statut, page, limit });
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Annonces récupérées", data: result }));
};
export const validerAnnonce = async (req, res) => {
    const id = req.params.id;
    const parsed = validerAnnonceSchema.safeParse(req.body);
    if (!parsed.success) {
        throw new AppError(parsed.error.issues[0]?.message ?? "Données invalides", StatusCodes.BAD_REQUEST);
    }
    const bien = await BienService.validerAnnonce(id, parsed.data.action, parsed.data.note);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Annonce mise à jour", data: bien }));
};
//# sourceMappingURL=annonce.controller.js.map