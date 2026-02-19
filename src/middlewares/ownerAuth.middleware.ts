import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { verifyOwnerAccessToken } from "../services/owner.service.js";
import { jsonResponse } from "../utils/responseApi.js";

declare global {
  namespace Express {
    interface Request {
      owner?: { id: string; prenom: string; nom: string };
    }
  }
}

export const authenticateOwner = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let token: string | undefined = req.cookies?.ownerAccessToken;

  if (!token) {
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith("Bearer ")) {
      token = authHeader.slice(7);
    }
  }

  if (!token) {
    res.status(StatusCodes.UNAUTHORIZED).json(
      jsonResponse({ status: "unauthorized", message: "Authentification requise" })
    );
    return;
  }

  try {
    const payload = verifyOwnerAccessToken(token);
    req.owner = { id: payload.sub, prenom: payload.prenom, nom: payload.nom };
    next();
  } catch {
    res.status(StatusCodes.UNAUTHORIZED).json(
      jsonResponse({ status: "unauthorized", message: "Token invalide ou expiré" })
    );
  }
};
