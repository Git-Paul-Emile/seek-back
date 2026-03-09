import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { jsonResponse } from "../utils/responseApi.js";
import { AppError } from "../utils/AppError.js";
import * as EtatDesLieuxService from "../services/etatDesLieux.service.js";
import {
  createEtatDesLieuxSchema,
  updateEtatDesLieuxSchema,
  createEtatDesLieuxItemSchema,
  updateEtatDesLieuxItemSchema,
} from "../validators/etatDesLieux.validator.js";

const getOwner = (req: Request) => {
  if (!req.owner?.id) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }
  return req.owner.id;
};

export const getEtatsDesLieux = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = getOwner(req);
  const data = await EtatDesLieuxService.getEtatsDesLieuxOwner(
    req.params.id as string,
    req.params.bailId as string,
    proprietaireId
  );
  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "États des lieux récupérés",
      data,
    })
  );
};

export const createEtatDesLieux = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = getOwner(req);
  const parsed = createEtatDesLieuxSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({
        status: "fail",
        message: parsed.error.issues[0]?.message ?? "Données invalides",
        data: parsed.error.flatten(),
      })
    );
    return;
  }

  const data = await EtatDesLieuxService.createOrGetEtatDesLieux(
    req.params.id as string,
    req.params.bailId as string,
    proprietaireId,
    parsed.data
  );

  res.status(StatusCodes.CREATED).json(
    jsonResponse({
      status: "success",
      message: "État des lieux créé",
      data,
    })
  );
};

export const updateEtatDesLieux = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = getOwner(req);
  const parsed = updateEtatDesLieuxSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({
        status: "fail",
        message: parsed.error.issues[0]?.message ?? "Données invalides",
        data: parsed.error.flatten(),
      })
    );
    return;
  }

  const data = await EtatDesLieuxService.updateEtatDesLieuxOwner(
    req.params.id as string,
    req.params.bailId as string,
    req.params.etatDesLieuxId as string,
    proprietaireId,
    parsed.data
  );
  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "État des lieux mis à jour",
      data,
    })
  );
};

export const signerEtatDesLieuxOwner = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = getOwner(req);
  const data = await EtatDesLieuxService.signerEtatDesLieuxOwner(
    req.params.id as string,
    req.params.bailId as string,
    req.params.etatDesLieuxId as string,
    proprietaireId
  );
  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "État des lieux signé par le propriétaire",
      data,
    })
  );
};

export const addItem = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = getOwner(req);
  const parsed = createEtatDesLieuxItemSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({
        status: "fail",
        message: parsed.error.issues[0]?.message ?? "Données invalides",
        data: parsed.error.flatten(),
      })
    );
    return;
  }
  const data = await EtatDesLieuxService.addItemOwner(
    req.params.id as string,
    req.params.bailId as string,
    req.params.etatDesLieuxId as string,
    proprietaireId,
    parsed.data
  );
  res.status(StatusCodes.CREATED).json(
    jsonResponse({
      status: "success",
      message: "Élément ajouté",
      data,
    })
  );
};

export const updateItem = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = getOwner(req);
  const parsed = updateEtatDesLieuxItemSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({
        status: "fail",
        message: parsed.error.issues[0]?.message ?? "Données invalides",
        data: parsed.error.flatten(),
      })
    );
    return;
  }

  const data = await EtatDesLieuxService.updateItemOwner(
    req.params.id as string,
    req.params.bailId as string,
    req.params.etatDesLieuxId as string,
    req.params.itemId as string,
    proprietaireId,
    parsed.data
  );
  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "Élément mis à jour",
      data,
    })
  );
};

export const deleteItem = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = getOwner(req);
  await EtatDesLieuxService.deleteItemOwner(
    req.params.id as string,
    req.params.bailId as string,
    req.params.etatDesLieuxId as string,
    req.params.itemId as string,
    proprietaireId
  );
  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "Élément supprimé",
    })
  );
};

export const addPhoto = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = getOwner(req);
  if (!req.file) {
    res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({ status: "fail", message: "Photo requise" })
    );
    return;
  }
  const data = await EtatDesLieuxService.addPhotoToItemOwner(
    req.params.id as string,
    req.params.bailId as string,
    req.params.etatDesLieuxId as string,
    req.params.itemId as string,
    proprietaireId,
    req.file
  );
  res.status(StatusCodes.CREATED).json(
    jsonResponse({
      status: "success",
      message: "Photo ajoutée",
      data,
    })
  );
};

export const deletePhoto = async (req: Request, res: Response): Promise<void> => {
  const proprietaireId = getOwner(req);
  await EtatDesLieuxService.deletePhotoFromItemOwner(
    req.params.id as string,
    req.params.bailId as string,
    req.params.etatDesLieuxId as string,
    req.params.itemId as string,
    req.params.photoId as string,
    proprietaireId
  );
  res.status(StatusCodes.OK).json(
    jsonResponse({
      status: "success",
      message: "Photo supprimée",
    })
  );
};
