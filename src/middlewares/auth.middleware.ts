import type { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../config/jwt.js";
import type { AccessTokenPayload } from "../config/jwt.js";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";
import { proprietaireRepository } from "../repositories/ownerRepository.js";

// Extension de Request pour inclure le propriétaire
declare global {
  namespace Express {
    interface Request {
      proprietaire?: AccessTokenPayload & {
        id: string;
        email?: string;
        telephone: string;
      };
    }
  }
}

/**
 * Middleware d'authentification - Extrait le JWT depuis le cookie
 */
export const authentifier = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Récupérer le token depuis le cookie
    const accessToken = req.cookies?.access_token;

    if (!accessToken) {
      throw new AppError("Token d'accès manquant", StatusCodes.UNAUTHORIZED);
    }

    // Vérifier le token
    const payload = verifyAccessToken(accessToken);

    // Récupérer les infos du propriétaire depuis la DB
    const proprietaire = await proprietaireRepository.findById(payload.sub);

    if (!proprietaire) {
      throw new AppError("Propriétaire non trouvé", StatusCodes.UNAUTHORIZED);
    }

    if (proprietaire.statut !== "ACTIF") {
      throw new AppError("Compte suspendu ou inactif", StatusCodes.FORBIDDEN);
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
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    
    // Token expiré ou invalide
    if ((error as Error).name === "TokenExpiredError") {
      throw new AppError("Token expiré", StatusCodes.UNAUTHORIZED);
    }
    if ((error as Error).name === "JsonWebTokenError") {
      throw new AppError("Token invalide", StatusCodes.UNAUTHORIZED);
    }
    
    throw new AppError("Erreur d'authentification", StatusCodes.UNAUTHORIZED);
  }
};

/**
 * Middleware optionnel - Ne fail pas si pas de token, mais l'ajoute si présent
 */
export const authentifierOptionnel = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
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
  } catch {
    // Ignorer les erreurs - c'est optionnel
    next();
  }
};
