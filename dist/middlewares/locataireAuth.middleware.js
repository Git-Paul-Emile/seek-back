import { StatusCodes } from "http-status-codes";
import { verifyLocataireAccessToken } from "../services/locataireAuth.service.js";
import { jsonResponse } from "../utils/responseApi.js";
import * as LocataireRepo from "../repositories/locataire.repository.js";
export const authenticateLocataire = async (req, res, next) => {
    const cookieToken = req.cookies?.locataireAccessToken;
    const headerToken = req.headers.authorization?.startsWith("Bearer ")
        ? req.headers.authorization.slice(7)
        : undefined;
    const token = cookieToken ?? headerToken;
    if (!token) {
        res.status(StatusCodes.UNAUTHORIZED).json(jsonResponse({ status: "unauthorized", message: "Token manquant" }));
        return;
    }
    try {
        const payload = verifyLocataireAccessToken(token);
        // Vérifier si le compte n'est pas suspendu
        const locataire = await LocataireRepo.findById(payload.sub);
        if (!locataire) {
            res.status(StatusCodes.UNAUTHORIZED).json(jsonResponse({ status: "unauthorized", message: "Compte introuvable" }));
            return;
        }
        if (locataire.estSuspendu) {
            res.status(StatusCodes.FORBIDDEN).json(jsonResponse({
                status: "error",
                message: "Votre compte a été suspendu",
                data: {
                    suspendu: true,
                    motif: locataire.motifSuspension,
                    dateSuspension: locataire.dateSuspension,
                },
            }));
            return;
        }
        req.locataire = { id: payload.sub, nom: payload.nom, prenom: payload.prenom };
        next();
    }
    catch {
        res.status(StatusCodes.UNAUTHORIZED).json(jsonResponse({ status: "unauthorized", message: "Token invalide ou expiré" }));
    }
};
//# sourceMappingURL=locataireAuth.middleware.js.map