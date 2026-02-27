import { StatusCodes } from "http-status-codes";
import { verifyLocataireAccessToken } from "../services/locataireAuth.service.js";
import { jsonResponse } from "../utils/responseApi.js";
export const authenticateLocataire = (req, res, next) => {
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
        req.locataire = { id: payload.sub, nom: payload.nom, prenom: payload.prenom };
        next();
    }
    catch {
        res.status(StatusCodes.UNAUTHORIZED).json(jsonResponse({ status: "unauthorized", message: "Token invalide ou expiré" }));
    }
};
//# sourceMappingURL=locataireAuth.middleware.js.map