import type { Request, Response, NextFunction } from "express";
import { proprietaireService } from "../services/ownerService.js";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import type { ProprietaireInscriptionInput } from "../validators/ownerValidator.js";

/**
 * Enregistrer un nouveau propriétaire
 */
const registerProprietaire = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const data = req.body as ProprietaireInscriptionInput;
  
  const result = await proprietaireService.register(data);
  
  res.status(201).json(result);
};

/**
 * Connecter un propriétaire
 */
const loginProprietaire = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { telephone, mot_de_passe } = req.body;
  
  const result = await proprietaireService.login(telephone, mot_de_passe);
  
  res.status(200).json(result);
};

export const registerProprietaireHandler = controllerWrapper(registerProprietaire);
export const loginProprietaireHandler = controllerWrapper(loginProprietaire);
