import { StatusCodes } from "http-status-codes";
import { prisma } from "../config/database.js";
import { AppError } from "../utils/AppError.js";
import { uploadImage, extractPublicId, deleteImage } from "./cloudinary.service.js";

const etatInclude = {
  items: {
    orderBy: [{ ordre: "asc" as const }, { createdAt: "asc" as const }],
    include: { photos: { orderBy: { createdAt: "asc" as const } } },
  },
};

const assertBailOwner = async (bienId: string, bailId: string, proprietaireId: string) => {
  const bail = await prisma.bailLocation.findFirst({
    where: { id: bailId, bienId, proprietaireId },
    select: { id: true, bienId: true, proprietaireId: true, locataireId: true },
  });
  if (!bail) throw new AppError("Bail introuvable ou non autorisé", StatusCodes.NOT_FOUND);
  return bail;
};

const assertEtatEditable = (etat: {
  statut: string;
  signeParProprioAt: Date | null;
  signeParLocataireAt: Date | null;
}) => {
  if (etat.statut === "VALIDE") {
    throw new AppError("État des lieux déjà validé", StatusCodes.BAD_REQUEST);
  }
  if (etat.signeParProprioAt || etat.signeParLocataireAt) {
    throw new AppError("État des lieux déjà signé, modification impossible", StatusCodes.BAD_REQUEST);
  }
};

export const getEtatsDesLieuxOwner = async (bienId: string, bailId: string, proprietaireId: string) => {
  await assertBailOwner(bienId, bailId, proprietaireId);
  return prisma.etatDesLieux.findMany({
    where: { bailId },
    include: etatInclude,
    orderBy: [{ type: "asc" }, { createdAt: "desc" }],
  });
};

export const createOrGetEtatDesLieux = async (
  bienId: string,
  bailId: string,
  proprietaireId: string,
  payload: { type: "ENTREE" | "SORTIE"; dateEtat?: Date; commentaireGlobal?: string | null }
) => {
  const bail = await assertBailOwner(bienId, bailId, proprietaireId);
  const existing = await prisma.etatDesLieux.findFirst({
    where: { bailId, type: payload.type },
    include: etatInclude,
  });
  if (existing) return existing;

  return prisma.etatDesLieux.create({
    data: {
      bailId: bail.id,
      bienId: bail.bienId,
      proprietaireId: bail.proprietaireId,
      locataireId: bail.locataireId,
      type: payload.type,
      dateEtat: payload.dateEtat ?? new Date(),
      commentaireGlobal: payload.commentaireGlobal ?? null,
    },
    include: etatInclude,
  });
};

export const updateEtatDesLieuxOwner = async (
  bienId: string,
  bailId: string,
  etatId: string,
  proprietaireId: string,
  payload: { dateEtat?: Date; commentaireGlobal?: string | null; statut?: "BROUILLON" | "VALIDE" }
) => {
  await assertBailOwner(bienId, bailId, proprietaireId);
  const etat = await prisma.etatDesLieux.findFirst({
    where: { id: etatId, bailId, proprietaireId },
    include: { items: { select: { id: true } } },
  });
  if (!etat) throw new AppError("État des lieux introuvable", StatusCodes.NOT_FOUND);

  if (payload.statut === "VALIDE" && etat.items.length === 0) {
    throw new AppError("Ajoutez au moins un élément avant validation", StatusCodes.BAD_REQUEST);
  }
  if (payload.statut !== "VALIDE") {
    assertEtatEditable(etat);
  }

  return prisma.etatDesLieux.update({
    where: { id: etatId },
    data: {
      dateEtat: payload.dateEtat,
      commentaireGlobal:
        payload.commentaireGlobal === undefined ? undefined : payload.commentaireGlobal,
      statut: payload.statut,
    },
    include: etatInclude,
  });
};

export const signerEtatDesLieuxOwner = async (
  bienId: string,
  bailId: string,
  etatId: string,
  proprietaireId: string
) => {
  await assertBailOwner(bienId, bailId, proprietaireId);
  const etat = await prisma.etatDesLieux.findFirst({
    where: { id: etatId, bailId, proprietaireId },
    select: { id: true, statut: true, signeParProprioAt: true },
  });
  if (!etat) throw new AppError("État des lieux introuvable", StatusCodes.NOT_FOUND);
  if (etat.statut !== "VALIDE")
    throw new AppError("Validez d'abord l'état des lieux", StatusCodes.BAD_REQUEST);
  if (etat.signeParProprioAt)
    throw new AppError("Déjà signé par le propriétaire", StatusCodes.BAD_REQUEST);

  return prisma.etatDesLieux.update({
    where: { id: etatId },
    data: { signeParProprioAt: new Date() },
    include: etatInclude,
  });
};

export const signerEtatDesLieuxLocataire = async (etatId: string, locataireId: string) => {
  const etat = await prisma.etatDesLieux.findFirst({
    where: { id: etatId, locataireId },
    include: {
      bail: { select: { statut: true } },
    },
  });
  if (!etat) throw new AppError("État des lieux introuvable", StatusCodes.NOT_FOUND);
  if (etat.statut !== "VALIDE")
    throw new AppError("L'état des lieux doit être validé avant signature", StatusCodes.BAD_REQUEST);
  if (!["ACTIF", "EN_PREAVIS", "EN_RENOUVELLEMENT", "TERMINE", "RESILIE", "ARCHIVE"].includes(etat.bail.statut)) {
    throw new AppError("Bail incompatible avec la signature", StatusCodes.BAD_REQUEST);
  }
  if (etat.signeParLocataireAt)
    throw new AppError("Déjà signé par le locataire", StatusCodes.BAD_REQUEST);

  return prisma.etatDesLieux.update({
    where: { id: etatId },
    data: { signeParLocataireAt: new Date() },
    include: etatInclude,
  });
};

export const addItemOwner = async (
  bienId: string,
  bailId: string,
  etatId: string,
  proprietaireId: string,
  payload: {
    piece: string;
    element: string;
    etat: "NEUF" | "BON" | "MOYEN" | "MAUVAIS" | "HS";
    commentaire?: string | null;
    ordre?: number;
  }
) => {
  await assertBailOwner(bienId, bailId, proprietaireId);
  const etat = await prisma.etatDesLieux.findFirst({
    where: { id: etatId, bailId, proprietaireId },
    select: { id: true, statut: true, signeParProprioAt: true, signeParLocataireAt: true },
  });
  if (!etat) throw new AppError("État des lieux introuvable", StatusCodes.NOT_FOUND);
  assertEtatEditable(etat);

  const item = await prisma.etatDesLieuxItem.create({
    data: {
      etatDesLieuxId: etatId,
      piece: payload.piece,
      element: payload.element,
      etat: payload.etat,
      commentaire: payload.commentaire ?? null,
      ordre: payload.ordre ?? 0,
    },
    include: { photos: { orderBy: { createdAt: "asc" } } },
  });
  return item;
};

export const updateItemOwner = async (
  bienId: string,
  bailId: string,
  etatId: string,
  itemId: string,
  proprietaireId: string,
  payload: {
    piece?: string;
    element?: string;
    etat?: "NEUF" | "BON" | "MOYEN" | "MAUVAIS" | "HS";
    commentaire?: string | null;
    ordre?: number;
  }
) => {
  await assertBailOwner(bienId, bailId, proprietaireId);
  const etat = await prisma.etatDesLieux.findFirst({
    where: { id: etatId, bailId, proprietaireId },
    select: { id: true, statut: true, signeParProprioAt: true, signeParLocataireAt: true },
  });
  if (!etat) throw new AppError("État des lieux introuvable", StatusCodes.NOT_FOUND);
  assertEtatEditable(etat);

  const item = await prisma.etatDesLieuxItem.findFirst({
    where: { id: itemId, etatDesLieuxId: etatId },
    select: { id: true },
  });
  if (!item) throw new AppError("Élément introuvable", StatusCodes.NOT_FOUND);

  return prisma.etatDesLieuxItem.update({
    where: { id: itemId },
    data: {
      piece: payload.piece,
      element: payload.element,
      etat: payload.etat,
      commentaire: payload.commentaire === undefined ? undefined : payload.commentaire,
      ordre: payload.ordre,
    },
    include: { photos: { orderBy: { createdAt: "asc" } } },
  });
};

export const deleteItemOwner = async (
  bienId: string,
  bailId: string,
  etatId: string,
  itemId: string,
  proprietaireId: string
) => {
  await assertBailOwner(bienId, bailId, proprietaireId);
  const etat = await prisma.etatDesLieux.findFirst({
    where: { id: etatId, bailId, proprietaireId },
    include: { items: { where: { id: itemId }, include: { photos: true } } },
  });
  if (!etat) throw new AppError("État des lieux introuvable", StatusCodes.NOT_FOUND);
  assertEtatEditable(etat);

  const item = etat.items[0];
  if (!item) throw new AppError("Élément introuvable", StatusCodes.NOT_FOUND);

  for (const photo of item.photos) {
    const publicId = extractPublicId(photo.url);
    if (!publicId) continue;
    try {
      await deleteImage(publicId);
    } catch {
      // ignore cloudinary deletion errors
    }
  }

  await prisma.etatDesLieuxItem.delete({ where: { id: itemId } });
};

export const addPhotoToItemOwner = async (
  bienId: string,
  bailId: string,
  etatId: string,
  itemId: string,
  proprietaireId: string,
  file: Express.Multer.File
) => {
  await assertBailOwner(bienId, bailId, proprietaireId);
  const etat = await prisma.etatDesLieux.findFirst({
    where: { id: etatId, bailId, proprietaireId },
    select: { id: true, statut: true, signeParProprioAt: true, signeParLocataireAt: true },
  });
  if (!etat) throw new AppError("État des lieux introuvable", StatusCodes.NOT_FOUND);
  assertEtatEditable(etat);

  const item = await prisma.etatDesLieuxItem.findFirst({
    where: { id: itemId, etatDesLieuxId: etatId },
    select: { id: true },
  });
  if (!item) throw new AppError("Élément introuvable", StatusCodes.NOT_FOUND);

  const uploaded = await uploadImage(file.buffer, `seek/etat-des-lieux/${etatId}`, {
    maxDimension: 1800,
    quality: 82,
  });
  return prisma.etatDesLieuxPhoto.create({
    data: {
      itemId,
      url: uploaded.url,
      nom: file.originalname,
      taille: file.size,
      uploadedBy: "PROPRIETAIRE",
    },
  });
};

export const deletePhotoFromItemOwner = async (
  bienId: string,
  bailId: string,
  etatId: string,
  itemId: string,
  photoId: string,
  proprietaireId: string
) => {
  await assertBailOwner(bienId, bailId, proprietaireId);
  const etat = await prisma.etatDesLieux.findFirst({
    where: { id: etatId, bailId, proprietaireId },
    select: { id: true, statut: true, signeParProprioAt: true, signeParLocataireAt: true },
  });
  if (!etat) throw new AppError("État des lieux introuvable", StatusCodes.NOT_FOUND);
  assertEtatEditable(etat);

  const photo = await prisma.etatDesLieuxPhoto.findFirst({
    where: { id: photoId, itemId },
    include: { item: { select: { etatDesLieuxId: true } } },
  });
  if (!photo || photo.item.etatDesLieuxId !== etatId) {
    throw new AppError("Photo introuvable", StatusCodes.NOT_FOUND);
  }

  const publicId = extractPublicId(photo.url);
  if (publicId) {
    try {
      await deleteImage(publicId);
    } catch {
      // ignore cloudinary deletion errors
    }
  }
  await prisma.etatDesLieuxPhoto.delete({ where: { id: photoId } });
};

export const getEtatsDesLieuxLocataire = async (locataireId: string) => {
  return prisma.etatDesLieux.findMany({
    where: { locataireId },
    include: {
      items: {
        orderBy: [{ ordre: "asc" }, { createdAt: "asc" }],
        include: { photos: { orderBy: { createdAt: "asc" } } },
      },
      bail: {
        select: {
          id: true,
          statut: true,
          bien: {
            select: {
              id: true,
              titre: true,
              ville: true,
              quartier: true,
              photos: true,
            },
          },
        },
      },
    },
    orderBy: [{ createdAt: "desc" }],
  });
};
