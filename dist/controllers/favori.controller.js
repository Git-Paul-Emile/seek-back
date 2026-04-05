import { StatusCodes } from "http-status-codes";
import { jsonResponse } from "../utils/responseApi.js";
import * as FavoriService from "../services/favori.service.js";
// GET /api/public/favoris
export const list = async (req, res) => {
    const comptePublicId = req.comptePublic.id;
    const favoris = await FavoriService.getFavoris(comptePublicId);
    res.json(jsonResponse({ status: "success", message: "Favoris", data: favoris }));
};
// GET /api/public/favoris/ids
export const ids = async (req, res) => {
    const comptePublicId = req.comptePublic.id;
    const bienIds = await FavoriService.getFavoriIds(comptePublicId);
    res.json(jsonResponse({ status: "success", message: "IDs favoris", data: bienIds }));
};
// POST /api/public/favoris/:bienId/toggle
export const toggle = async (req, res) => {
    const comptePublicId = req.comptePublic.id;
    const bienId = req.params["bienId"];
    const result = await FavoriService.toggleFavori(comptePublicId, bienId);
    res.json(jsonResponse({
        status: "success",
        message: result.action === "added" ? "Ajouté aux favoris" : "Retiré des favoris",
        data: result,
    }));
};
// DELETE /api/public/favoris/:bienId
export const remove = async (req, res) => {
    const comptePublicId = req.comptePublic.id;
    const bienId = req.params["bienId"];
    await FavoriService.removeFavori(comptePublicId, bienId);
    res.status(StatusCodes.NO_CONTENT).end();
};
// PATCH /api/public/favoris/:bienId/snapshot
export const syncSnapshot = async (req, res) => {
    const comptePublicId = req.comptePublic.id;
    const bienId = req.params["bienId"];
    await FavoriService.updateSnapshot(comptePublicId, bienId);
    res.json(jsonResponse({ status: "success", message: "Snapshot mis à jour", data: null }));
};
//# sourceMappingURL=favori.controller.js.map