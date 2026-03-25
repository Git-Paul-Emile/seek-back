import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import * as EtatDesLieuxService from "../services/etat-des-lieux.service.js";

// -- Propriétaire --

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const proprietaireId = req.owner!.id;
    const result = await EtatDesLieuxService.createEtatDesLieux(proprietaireId, req.body);
    res.status(StatusCodes.CREATED).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const proprietaireId = req.owner!.id;
    const id = req.params.id as string;
    const result = await EtatDesLieuxService.updateEtatDesLieux(id, proprietaireId, req.body);
    res.status(StatusCodes.OK).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const submit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const proprietaireId = req.owner!.id;
    const id = req.params.id as string;
    const result = await EtatDesLieuxService.submitForValidation(id, proprietaireId);
    res.status(StatusCodes.OK).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const getByIdOwner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const result = await EtatDesLieuxService.getEtatDesLieuxById(id, req.owner!.id, "PROPRIETAIRE");
    res.status(StatusCodes.OK).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const getByBailOwner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bailId = req.params.bailId as string;
    const result = await EtatDesLieuxService.getEtatDesLieuxList(bailId, req.owner!.id, "PROPRIETAIRE");
    res.status(StatusCodes.OK).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const compareOwner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bailId = req.params.bailId as string;
    const result = await EtatDesLieuxService.getComparison(bailId, req.owner!.id, "PROPRIETAIRE");
    res.status(StatusCodes.OK).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

// -- Locataire --

export const comment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const locataireId = req.locataire!.id;
    const id = req.params.id as string;
    const { commentaire } = req.body;
    const result = await EtatDesLieuxService.addCommentLocataire(id, locataireId, commentaire);
    res.status(StatusCodes.OK).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const validate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const locataireId = req.locataire!.id;
    const id = req.params.id as string;
    const { documentPdf } = req.body;
    const result = await EtatDesLieuxService.validerEtatDesLieux(id, locataireId, documentPdf);
    res.status(StatusCodes.OK).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const getByIdLocataire = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const result = await EtatDesLieuxService.getEtatDesLieuxById(id, req.locataire!.id, "LOCATAIRE");
    res.status(StatusCodes.OK).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const getByBailLocataire = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bailId = req.params.bailId as string;
    const result = await EtatDesLieuxService.getEtatDesLieuxList(bailId, req.locataire!.id, "LOCATAIRE");
    res.status(StatusCodes.OK).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const compareLocataire = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bailId = req.params.bailId as string;
    const result = await EtatDesLieuxService.getComparison(bailId, req.locataire!.id, "LOCATAIRE");
    res.status(StatusCodes.OK).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};
