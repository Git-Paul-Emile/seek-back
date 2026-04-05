import { StatusCodes } from "http-status-codes";
import * as EtatDesLieuxService from "../services/etat-des-lieux.service.js";
import * as CloudinaryService from "../services/cloudinary.service.js";
// -- Propriétaire --
export const uploadImage = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "Aucune image fournie" });
        }
        const result = await CloudinaryService.uploadImage(req.file.buffer, "seek/etats-des-lieux");
        res.status(StatusCodes.OK).json({ success: true, url: result.url });
    }
    catch (err) {
        next(err);
    }
};
export const create = async (req, res, next) => {
    try {
        const proprietaireId = req.owner.id;
        const result = await EtatDesLieuxService.createEtatDesLieux(proprietaireId, req.body);
        res.status(StatusCodes.CREATED).json({ success: true, data: result });
    }
    catch (err) {
        next(err);
    }
};
export const update = async (req, res, next) => {
    try {
        const proprietaireId = req.owner.id;
        const id = req.params.id;
        const result = await EtatDesLieuxService.updateEtatDesLieux(id, proprietaireId, req.body);
        res.status(StatusCodes.OK).json({ success: true, data: result });
    }
    catch (err) {
        next(err);
    }
};
export const submit = async (req, res, next) => {
    try {
        const proprietaireId = req.owner.id;
        const id = req.params.id;
        const result = await EtatDesLieuxService.submitForValidation(id, proprietaireId);
        res.status(StatusCodes.OK).json({ success: true, data: result });
    }
    catch (err) {
        next(err);
    }
};
export const deleteBrouillon = async (req, res, next) => {
    try {
        const id = req.params.id;
        await EtatDesLieuxService.deleteEtatDesLieux(id, req.owner.id);
        res.status(StatusCodes.OK).json({ success: true });
    }
    catch (err) {
        next(err);
    }
};
export const getByIdOwner = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await EtatDesLieuxService.getEtatDesLieuxById(id, req.owner.id, "PROPRIETAIRE");
        res.status(StatusCodes.OK).json({ success: true, data: result });
    }
    catch (err) {
        next(err);
    }
};
export const getByBailOwner = async (req, res, next) => {
    try {
        const bailId = req.params.bailId;
        const result = await EtatDesLieuxService.getEtatDesLieuxList(bailId, req.owner.id, "PROPRIETAIRE");
        res.status(StatusCodes.OK).json({ success: true, data: result });
    }
    catch (err) {
        next(err);
    }
};
export const compareOwner = async (req, res, next) => {
    try {
        const bailId = req.params.bailId;
        const result = await EtatDesLieuxService.getComparison(bailId, req.owner.id, "PROPRIETAIRE");
        res.status(StatusCodes.OK).json({ success: true, data: result });
    }
    catch (err) {
        next(err);
    }
};
// -- Locataire --
export const contester = async (req, res, next) => {
    try {
        const locataireId = req.locataire.id;
        const id = req.params.id;
        const { elements } = req.body;
        const result = await EtatDesLieuxService.contesterElementsLocataire(id, locataireId, elements);
        res.status(StatusCodes.OK).json({ success: true, data: result });
    }
    catch (err) {
        next(err);
    }
};
export const resoudreContestations = async (req, res, next) => {
    try {
        const proprietaireId = req.owner.id;
        const id = req.params.id;
        const { resolutions } = req.body;
        const result = await EtatDesLieuxService.resoudreContestationsProprietaire(id, proprietaireId, resolutions);
        res.status(StatusCodes.OK).json({ success: true, data: result });
    }
    catch (err) {
        next(err);
    }
};
export const validate = async (req, res, next) => {
    try {
        const locataireId = req.locataire.id;
        const id = req.params.id;
        const { documentPdf } = req.body;
        const result = await EtatDesLieuxService.validerEtatDesLieux(id, locataireId, documentPdf);
        res.status(StatusCodes.OK).json({ success: true, data: result });
    }
    catch (err) {
        next(err);
    }
};
export const getByIdLocataire = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await EtatDesLieuxService.getEtatDesLieuxById(id, req.locataire.id, "LOCATAIRE");
        res.status(StatusCodes.OK).json({ success: true, data: result });
    }
    catch (err) {
        next(err);
    }
};
export const getByBailLocataire = async (req, res, next) => {
    try {
        const bailId = req.params.bailId;
        const result = await EtatDesLieuxService.getEtatDesLieuxList(bailId, req.locataire.id, "LOCATAIRE");
        res.status(StatusCodes.OK).json({ success: true, data: result });
    }
    catch (err) {
        next(err);
    }
};
export const getAllByLocataire = async (req, res, next) => {
    try {
        const locataireId = req.locataire.id;
        const result = await EtatDesLieuxService.getAllEtatsDesLieuxLocataire(locataireId);
        res.status(StatusCodes.OK).json({ success: true, data: result });
    }
    catch (err) {
        next(err);
    }
};
export const compareLocataire = async (req, res, next) => {
    try {
        const bailId = req.params.bailId;
        const result = await EtatDesLieuxService.getComparison(bailId, req.locataire.id, "LOCATAIRE");
        res.status(StatusCodes.OK).json({ success: true, data: result });
    }
    catch (err) {
        next(err);
    }
};
//# sourceMappingURL=etat-des-lieux.controller.js.map