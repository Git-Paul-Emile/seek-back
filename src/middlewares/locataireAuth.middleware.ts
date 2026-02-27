import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { verifyLocataireAccessToken } from "../services/locataireAuth.service.js";
import { jsonResponse } from "../utils/responseApi.js";

declare global {
  namespace Express {
    interface Request {
      locataire?: { id: string; nom: string; prenom: string };
    }
  }
}

export const authenticateLocataire = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const cookieToken = req.cookies?.locataireAccessToken as string | undefined;
  const headerToken = req.headers.authorization?.startsWith("Bearer ")
    ? req.headers.authorization.slice(7)
    : undefined;

  const token = cookieToken ?? headerToken;

  if (!token) {
    res.status(StatusCodes.UNAUTHORIZED).json(
      jsonResponse({ status: "unauthorized", message: "Token manquant" })
    );
    return;
  }

  try {
    const payload = verifyLocataireAccessToken(token);
    req.locataire = { id: payload.sub, nom: payload.nom, prenom: payload.prenom };
    next();
  } catch {
    res.status(StatusCodes.UNAUTHORIZED).json(
      jsonResponse({ status: "unauthorized", message: "Token invalide ou expiré" })
    );
  }
};
