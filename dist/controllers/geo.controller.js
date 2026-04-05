import { StatusCodes } from "http-status-codes";
import * as GeoRepository from "../repositories/geo.repository.js";
import { jsonResponse } from "../utils/responseApi.js";
import { AppError } from "../utils/AppError.js";
// ─── Pays (public) ────────────────────────────────────────────────────────────
export const getPays = async (_req, res) => {
    const pays = await GeoRepository.findAllPays();
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Pays récupérés", data: pays }));
};
// ─── Pays (admin) ─────────────────────────────────────────────────────────────
export const getAllPaysAdmin = async (_req, res) => {
    const pays = await GeoRepository.findAllPaysAdmin();
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Pays récupérés", data: pays }));
};
export const createPays = async (req, res) => {
    const { nom, code } = req.body;
    if (!nom?.trim() || !code?.trim())
        throw new AppError("nom et code sont requis", StatusCodes.BAD_REQUEST);
    const pays = await GeoRepository.createPays({ nom: nom.trim(), code: code.trim().toUpperCase() });
    res.status(StatusCodes.CREATED).json(jsonResponse({ status: "success", message: "Pays créé", data: pays }));
};
export const updatePays = async (req, res) => {
    const { id } = req.params;
    const { nom, code } = req.body;
    const data = {};
    if (nom?.trim())
        data.nom = nom.trim();
    if (code?.trim())
        data.code = code.trim().toUpperCase();
    const pays = await GeoRepository.updatePays(req.params.id, data);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Pays mis à jour", data: pays }));
};
export const deletePays = async (req, res) => {
    await GeoRepository.deletePays(req.params.id);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Pays supprimé", data: null }));
};
// ─── Villes (public) ─────────────────────────────────────────────────────────
export const getVilles = async (req, res) => {
    const villes = await GeoRepository.findVillesByPays(req.params.paysId);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Villes récupérées", data: villes }));
};
// ─── Villes (admin) ───────────────────────────────────────────────────────────
export const getAllVillesAdmin = async (req, res) => {
    const paysId = req.query.paysId;
    const villes = await GeoRepository.findAllVillesAdmin(paysId);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Villes récupérées", data: villes }));
};
export const createVille = async (req, res) => {
    const { nom, paysId } = req.body;
    if (!nom?.trim() || !paysId)
        throw new AppError("nom et paysId sont requis", StatusCodes.BAD_REQUEST);
    const ville = await GeoRepository.createVille({ nom: nom.trim(), paysId });
    res.status(StatusCodes.CREATED).json(jsonResponse({ status: "success", message: "Ville créée", data: ville }));
};
export const updateVille = async (req, res) => {
    const { id } = req.params;
    const { nom, paysId } = req.body;
    const data = {};
    if (nom?.trim())
        data.nom = nom.trim();
    if (paysId)
        data.paysId = paysId;
    const ville = await GeoRepository.updateVille(req.params.id, data);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Ville mise à jour", data: ville }));
};
export const deleteVille = async (req, res) => {
    await GeoRepository.deleteVille(req.params.id);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Ville supprimée", data: null }));
};
// ─── Quartiers (public) ───────────────────────────────────────────────────────
export const getQuartiersByVille = async (req, res) => {
    const quartiers = await GeoRepository.findQuartiersByVille(req.params.villeId);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Quartiers récupérés", data: quartiers }));
};
// ─── Quartiers (admin) ────────────────────────────────────────────────────────
export const getAllQuartiersAdmin = async (req, res) => {
    const villeId = req.query.villeId;
    const quartiers = await GeoRepository.findAllQuartiersAdmin(villeId);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Quartiers récupérés", data: quartiers }));
};
export const createQuartier = async (req, res) => {
    const { nom, villeId, latitude, longitude } = req.body;
    if (!nom?.trim() || !villeId)
        throw new AppError("nom et villeId sont requis", StatusCodes.BAD_REQUEST);
    if (latitude == null || longitude == null)
        throw new AppError("latitude et longitude sont requis", StatusCodes.BAD_REQUEST);
    const quartier = await GeoRepository.createQuartier({
        nom: nom.trim(),
        villeId,
        latitude: Number(latitude),
        longitude: Number(longitude),
    });
    res.status(StatusCodes.CREATED).json(jsonResponse({ status: "success", message: "Quartier créé", data: quartier }));
};
export const updateQuartier = async (req, res) => {
    const { id } = req.params;
    const { nom, villeId, latitude, longitude } = req.body;
    const data = {};
    if (nom?.trim())
        data.nom = nom.trim();
    if (villeId)
        data.villeId = villeId;
    if (latitude != null)
        data.latitude = Number(latitude);
    if (longitude != null)
        data.longitude = Number(longitude);
    const quartier = await GeoRepository.updateQuartier(req.params.id, data);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Quartier mis à jour", data: quartier }));
};
export const deleteQuartier = async (req, res) => {
    await GeoRepository.deleteQuartier(req.params.id);
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Quartier supprimé", data: null }));
};
//# sourceMappingURL=geo.controller.js.map