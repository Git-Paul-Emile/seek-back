import { StatusCodes } from "http-status-codes";
import * as BailService from "../services/bail.service.js";
import { jsonResponse } from "../utils/responseApi.js";
import { AppError } from "../utils/AppError.js";
import { createBailSchema, prolongerBailSchema, } from "../validators/bail.validator.js";
const getOwner = (req) => {
    if (!req.owner?.id)
        throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
    return req.owner.id;
};
// ─── Bail actif d'un bien ─────────────────────────────────────────────────────
export const getBailActif = async (req, res) => {
    const proprietaireId = getOwner(req);
    const bail = await BailService.getBailActif(req.params.id, proprietaireId);
    res.status(StatusCodes.OK).json(jsonResponse({
        status: "success",
        message: bail ? "Bail actif récupéré" : "Aucun bail actif",
        data: bail ?? null,
    }));
};
// ─── Créer un bail ────────────────────────────────────────────────────────────
export const creerBail = async (req, res) => {
    const proprietaireId = getOwner(req);
    const parsed = createBailSchema.safeParse(req.body);
    if (!parsed.success) {
        res.status(StatusCodes.BAD_REQUEST).json(jsonResponse({
            status: "fail",
            message: parsed.error.issues[0]?.message ?? "Données invalides",
            data: parsed.error.flatten(),
        }));
        return;
    }
    const bail = await BailService.creerBail(req.params.id, proprietaireId, parsed.data);
    res.status(StatusCodes.CREATED).json(jsonResponse({
        status: "success",
        message: "Bail créé — le bien est maintenant Loué",
        data: bail,
    }));
};
// ─── Terminer un bail ─────────────────────────────────────────────────────────
export const terminerBail = async (req, res) => {
    const proprietaireId = getOwner(req);
    const bail = await BailService.terminerBail(req.params.id, req.params.bailId, proprietaireId);
    res.status(StatusCodes.OK).json(jsonResponse({
        status: "success",
        message: "Bail terminé — le bien est maintenant Libre",
        data: bail,
    }));
};
// ─── Résilier un bail ─────────────────────────────────────────────────────────
export const resilierBail = async (req, res) => {
    const proprietaireId = getOwner(req);
    const bail = await BailService.resilierBail(req.params.id, req.params.bailId, proprietaireId);
    res.status(StatusCodes.OK).json(jsonResponse({
        status: "success",
        message: "Bail résilié — le bien est maintenant Libre",
        data: bail,
    }));
};
// ─── Prolonger un bail ────────────────────────────────────────────────────────
export const prolongerBail = async (req, res) => {
    const proprietaireId = getOwner(req);
    const parsed = prolongerBailSchema.safeParse(req.body);
    if (!parsed.success) {
        res.status(StatusCodes.BAD_REQUEST).json(jsonResponse({
            status: "fail",
            message: parsed.error.issues[0]?.message ?? "Données invalides",
            data: parsed.error.flatten(),
        }));
        return;
    }
    const bail = await BailService.prolongerBail(req.params.id, req.params.bailId, proprietaireId, parsed.data.dateFinBail);
    res.status(StatusCodes.OK).json(jsonResponse({
        status: "success",
        message: "Bail prolongé",
        data: bail,
    }));
};
//# sourceMappingURL=bail.controller.js.map