import { StatusCodes } from "http-status-codes";
import { verifyOwnerAccessToken } from "../services/owner.service.js";
import { jsonResponse } from "../utils/responseApi.js";
export const authenticateOwner = (req, res, next) => {
    let token = req.cookies?.ownerAccessToken;
    if (!token) {
        const authHeader = req.headers.authorization;
        if (authHeader?.startsWith("Bearer ")) {
            token = authHeader.slice(7);
        }
    }
    if (!token) {
        res.status(StatusCodes.UNAUTHORIZED).json(jsonResponse({ status: "unauthorized", message: "Authentification requise" }));
        return;
    }
    try {
        const payload = verifyOwnerAccessToken(token);
        req.owner = { id: payload.sub, prenom: payload.prenom, nom: payload.nom };
        next();
    }
    catch {
        res.status(StatusCodes.UNAUTHORIZED).json(jsonResponse({ status: "unauthorized", message: "Token invalide ou expiré" }));
    }
};
//# sourceMappingURL=ownerAuth.middleware.js.map