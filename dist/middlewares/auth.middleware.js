import { verifyAccessToken } from "../config/jwt.js";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";
import { proprietaireRepository } from "../repositories/ownerRepository.js";
/**
 * Middleware d'authentification - Extrait le JWT depuis le cookie
 */
export const authentifier = async (req, res, next) => {
    try {
        // Récupérer le token depuis le cookie
        const accessToken = req.cookies?.access_token;
        if (!accessToken) {
            return next(new AppError("Token d'accès manquant", StatusCodes.UNAUTHORIZED));
        }
        // Vérifier le token
        const payload = verifyAccessToken(accessToken);
        // Récupérer les infos du propriétaire depuis la DB
        const proprietaire = await proprietaireRepository.findById(payload.sub);
        if (!proprietaire) {
            return next(new AppError("Propriétaire non trouvé", StatusCodes.UNAUTHORIZED));
        }
        if (proprietaire.statut !== "ACTIF") {
            return next(new AppError("Compte suspendu ou inactif", StatusCodes.FORBIDDEN));
        }
        // Attacher les infos du propriétaire à la requête
        // Définition pour compatibilité avec les deux noms
        req.proprietaire = {
            id: proprietaire.id,
            sub: proprietaire.id,
            telephone: proprietaire.telephone,
            email: proprietaire.email || undefined,
            role: proprietaire.role,
        };
        // Ajouter aussi user pour compatibilité avec les contrôleurs
        req.user = req.proprietaire;
        next();
    }
    catch (error) {
        // Gérer les erreurs et les passer au next() au lieu de throw
        if (error instanceof AppError) {
            return next(error);
        }
        // Token expiré ou invalide
        if (error.name === "TokenExpiredError") {
            return next(new AppError("Token expiré", StatusCodes.UNAUTHORIZED));
        }
        if (error.name === "JsonWebTokenError") {
            return next(new AppError("Token invalide", StatusCodes.UNAUTHORIZED));
        }
        console.error('[Auth] Erreur inattendue:', error);
        return next(new AppError("Erreur d'authentification", StatusCodes.UNAUTHORIZED));
    }
};
/**
 * Middleware optionnel - Ne fail pas si pas de token, mais l'ajoute si présent
 */
export const authentifierOptionnel = async (req, res, next) => {
    try {
        const accessToken = req.cookies?.access_token;
        if (accessToken) {
            const payload = verifyAccessToken(accessToken);
            const proprietaire = await proprietaireRepository.findById(payload.sub);
            if (proprietaire && proprietaire.statut === "ACTIF") {
                req.proprietaire = {
                    id: proprietaire.id,
                    sub: proprietaire.id,
                    telephone: proprietaire.telephone,
                    email: proprietaire.email || undefined,
                    role: proprietaire.role,
                };
                // Ajouter aussi user pour compatibilité avec les contrôleurs
                req.user = req.proprietaire;
            }
        }
        next();
    }
    catch {
        // Ignorer les erreurs - c'est optionnel
        next();
    }
};
//# sourceMappingURL=auth.middleware.js.map