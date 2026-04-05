import { StatusCodes } from "http-status-codes";
import { verifyAccessToken } from "../services/comptePublicAuth.service.js";
import { jsonResponse } from "../utils/responseApi.js";
export const authenticateComptePublic = async (req, res, next) => {
    const cookieToken = req.cookies?.comptePublicAccessToken;
    const headerToken = req.headers.authorization?.startsWith("Bearer ")
        ? req.headers.authorization.slice(7)
        : undefined;
    const token = cookieToken ?? headerToken;
    if (!token) {
        res.status(StatusCodes.UNAUTHORIZED).json(jsonResponse({ status: "unauthorized", message: "Token manquant" }));
        return;
    }
    try {
        const payload = verifyAccessToken(token);
        req.comptePublic = { id: payload.sub, nom: payload.nom, prenom: payload.prenom };
        next();
    }
    catch {
        res.status(StatusCodes.UNAUTHORIZED).json(jsonResponse({ status: "unauthorized", message: "Token invalide ou expiré" }));
    }
};
//# sourceMappingURL=comptePublicAuth.middleware.js.map