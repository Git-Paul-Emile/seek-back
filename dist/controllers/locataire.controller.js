import { StatusCodes } from "http-status-codes";
import * as LocataireService from "../services/locataire.service.js";
import { jsonResponse } from "../utils/responseApi.js";
import { AppError } from "../utils/AppError.js";
import { createLocataireSchema, updateLocataireSchema, } from "../validators/locataire.validator.js";
const getOwner = (req) => {
    if (!req.owner?.id)
        throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
    return req.owner.id;
};
// ─── Liste ────────────────────────────────────────────────────────────────────
export const getLocataires = async (req, res) => {
    const proprietaireId = getOwner(req);
    const locataires = await LocataireService.getByProprietaire(proprietaireId);
    res.status(StatusCodes.OK).json(jsonResponse({
        status: "success",
        message: "Locataires récupérés",
        data: locataires,
    }));
};
// ─── Détail ───────────────────────────────────────────────────────────────────
export const getLocataireById = async (req, res) => {
    const proprietaireId = getOwner(req);
    const locataire = await LocataireService.getById(req.params.id, proprietaireId);
    res.status(StatusCodes.OK).json(jsonResponse({
        status: "success",
        message: "Locataire récupéré",
        data: locataire,
    }));
};
// ─── Création ─────────────────────────────────────────────────────────────────
export const createLocataire = async (req, res) => {
    const proprietaireId = getOwner(req);
    const parsed = createLocataireSchema.safeParse(req.body);
    if (!parsed.success) {
        res.status(StatusCodes.BAD_REQUEST).json(jsonResponse({
            status: "fail",
            message: parsed.error.issues[0]?.message ?? "Données invalides",
            data: parsed.error.flatten(),
        }));
        return;
    }
    const locataire = await LocataireService.create(proprietaireId, parsed.data);
    res.status(StatusCodes.CREATED).json(jsonResponse({
        status: "success",
        message: "Locataire créé",
        data: locataire,
    }));
};
// ─── Modification ─────────────────────────────────────────────────────────────
export const updateLocataire = async (req, res) => {
    const proprietaireId = getOwner(req);
    const parsed = updateLocataireSchema.safeParse(req.body);
    if (!parsed.success) {
        res.status(StatusCodes.BAD_REQUEST).json(jsonResponse({
            status: "fail",
            message: parsed.error.issues[0]?.message ?? "Données invalides",
            data: parsed.error.flatten(),
        }));
        return;
    }
    const locataire = await LocataireService.updateOwner(req.params.id, proprietaireId, parsed.data);
    res.status(StatusCodes.OK).json(jsonResponse({
        status: "success",
        message: "Locataire mis à jour",
        data: locataire,
    }));
};
// ─── Suppression ──────────────────────────────────────────────────────────────
export const deleteLocataire = async (req, res) => {
    const proprietaireId = getOwner(req);
    await LocataireService.remove(req.params.id, proprietaireId);
    res.status(StatusCodes.NO_CONTENT).send();
};
// ─── Lien d'activation ────────────────────────────────────────────────────────
export const getLienActivation = async (req, res) => {
    const proprietaireId = getOwner(req);
    const result = await LocataireService.getLien(req.params.id, proprietaireId);
    res.status(StatusCodes.OK).json(jsonResponse({
        status: "success",
        message: "Lien d'activation récupéré",
        data: result,
    }));
};
//# sourceMappingURL=locataire.controller.js.map