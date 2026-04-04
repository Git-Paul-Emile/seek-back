import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import * as EtatDesLieuxRepo from "../repositories/etat-des-lieux.repository.js";
import { prisma } from "../config/database.js";
import * as SmsService from "./sms.service.js";

const FRONTEND_URL =
  process.env.NODE_ENV === "production"
    ? (process.env.FRONT_URL_PROD ?? "https://seek-front-plum.vercel.app")
    : (process.env.FRONT_URL ?? "http://localhost:5173");

export const createEtatDesLieux = async (proprietaireId: string, data: any) => {
  const bail = await prisma.bailLocation.findUnique({
    where: { id: data.bailId },
  });

  if (!bail) {
    throw new AppError("Bail introuvable", StatusCodes.NOT_FOUND);
  }

  if (bail.proprietaireId !== proprietaireId) {
    throw new AppError("Vous n'êtes pas le propriétaire de ce bail", StatusCodes.FORBIDDEN);
  }

  // Vérifier si un état des lieux de ce type existe déjà pour ce bail
  const existingId = await EtatDesLieuxRepo.findByBailAndType(data.bailId, data.type);
  if (existingId) {
    throw new AppError(`Un état des lieux ${data.type} existe déjà pour ce bail`, StatusCodes.CONFLICT);
  }

  const payload = {
    ...data,
    bienId: bail.bienId,
    proprietaireId: bail.proprietaireId,
    locataireId: bail.locataireId,
  };

  return EtatDesLieuxRepo.create(payload);
};

export const updateEtatDesLieux = async (id: string, proprietaireId: string, data: any) => {
  const edl = await EtatDesLieuxRepo.findById(id);
  if (!edl) throw new AppError("État des lieux introuvable", StatusCodes.NOT_FOUND);
  if (edl.proprietaireId !== proprietaireId) throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
  if (edl.statut !== "BROUILLON" && edl.statut !== "CONTESTE") {
    throw new AppError("Vous ne pouvez modifier que les états des lieux en brouillon ou contestés", StatusCodes.BAD_REQUEST);
  }

  return EtatDesLieuxRepo.updateBrouillon(id, data);
};

export const getEtatDesLieuxList = async (bailId: string, userId: string, role: "PROPRIETAIRE" | "LOCATAIRE") => {
  const bail = await prisma.bailLocation.findUnique({ where: { id: bailId } });
  if (!bail) throw new AppError("Bail introuvable", StatusCodes.NOT_FOUND);

  if (role === "PROPRIETAIRE" && bail.proprietaireId !== userId) throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
  if (role === "LOCATAIRE" && bail.locataireId !== userId) throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);

  return EtatDesLieuxRepo.findAllByBail(bailId);
};

export const getEtatDesLieuxById = async (id: string, userId: string, role: "PROPRIETAIRE" | "LOCATAIRE") => {
  const edl = await EtatDesLieuxRepo.findById(id);
  if (!edl) throw new AppError("État des lieux introuvable", StatusCodes.NOT_FOUND);

  if (role === "PROPRIETAIRE" && edl.proprietaireId !== userId) throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
  if (role === "LOCATAIRE" && edl.locataireId !== userId) throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);

  return edl;
};

export const submitForValidation = async (id: string, proprietaireId: string) => {
  const edl = await EtatDesLieuxRepo.findById(id);
  if (!edl) throw new AppError("État des lieux introuvable", StatusCodes.NOT_FOUND);
  if (edl.proprietaireId !== proprietaireId) throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
  
  if (edl.statut !== "BROUILLON" && edl.statut !== "CONTESTE") {
    throw new AppError("L'état des lieux doit être en brouillon ou contesté", StatusCodes.BAD_REQUEST);
  }

  const updated = await EtatDesLieuxRepo.updateStatus(id, "EN_ATTENTE_VALIDATION");

  // Notifier le locataire
  if (edl.locataire?.telephone) {
    const lien = `${FRONTEND_URL}/locataire/etats-des-lieux/${updated.id}`;
    const msg = `Bonjour ${edl.locataire.prenom}, votre état des lieux d'${edl.type.toLowerCase()} est prêt. Consultez et validez-le ici : ${lien}`;
    await SmsService.sendSms(edl.locataire.telephone, msg).catch(e => console.error("Erreur SMS", e));
  }

  return updated;
};

export const deleteEtatDesLieux = async (id: string, proprietaireId: string) => {
  const edl = await EtatDesLieuxRepo.findById(id);
  if (!edl) throw new AppError("État des lieux introuvable", StatusCodes.NOT_FOUND);
  if (edl.proprietaireId !== proprietaireId) throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
  if (edl.statut !== "BROUILLON") {
    throw new AppError("Seul un brouillon peut être supprimé", StatusCodes.BAD_REQUEST);
  }
  await EtatDesLieuxRepo.deleteById(id);
};

export const contesterElementsLocataire = async (
  id: string,
  locataireId: string,
  elements: { elementId: string; motifContestation: string; photoContestation: string }[]
) => {
  const edl = await EtatDesLieuxRepo.findById(id);
  if (!edl) throw new AppError("État des lieux introuvable", StatusCodes.NOT_FOUND);
  if (edl.locataireId !== locataireId) throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);

  if (edl.statut !== "EN_ATTENTE_VALIDATION") {
    throw new AppError("L'état des lieux n'est pas en attente de validation", StatusCodes.BAD_REQUEST);
  }

  const updated = await EtatDesLieuxRepo.contesterElements(id, elements);

  if (edl.proprietaire?.telephone) {
    const lien = `${FRONTEND_URL}/owner/etats-des-lieux/${updated.id}`;
    const msg = `Bonjour ${edl.proprietaire.prenom}, votre locataire a contesté certains éléments de l'état des lieux d'${edl.type.toLowerCase()}. Résolvez-les ici : ${lien}`;
    await SmsService.sendSms(edl.proprietaire.telephone, msg).catch((e) => console.error("Erreur SMS", e));
  }

  return updated;
};

export const resoudreContestationsProprietaire = async (
  id: string,
  proprietaireId: string,
  resolutions: {
    elementId: string;
    decision: "RECTIFIER" | "ACCEPTER_RESERVE" | "REFUSER";
    etat?: "NEUF" | "BON" | "USAGE" | "MAUVAIS" | "DEGRADE";
    commentaire?: string;
    photos?: string[];
  }[]
) => {
  const edl = await EtatDesLieuxRepo.findById(id);
  if (!edl) throw new AppError("État des lieux introuvable", StatusCodes.NOT_FOUND);
  if (edl.proprietaireId !== proprietaireId) throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);

  if (edl.statut !== "CONTESTE") {
    throw new AppError("L'état des lieux n'est pas en cours de contestation", StatusCodes.BAD_REQUEST);
  }

  const updated = await EtatDesLieuxRepo.resoudreContestations(id, resolutions);

  if (edl.locataire?.telephone) {
    const lien = `${FRONTEND_URL}/locataire/etats-des-lieux/${updated.id}`;
    let msg = "";
    if ((updated.statut as string) === "EN_LITIGE") {
      msg = `Bonjour ${edl.locataire.prenom}, le propriétaire a refusé certaines contestations. L'état des lieux est en litige. Voir : ${lien}`;
    } else {
      msg = `Bonjour ${edl.locataire.prenom}, le propriétaire a répondu à vos contestations. Vous pouvez valider l'état des lieux : ${lien}`;
    }
    await SmsService.sendSms(edl.locataire.telephone, msg).catch((e) => console.error("Erreur SMS", e));
  }

  return updated;
};

export const validerEtatDesLieux = async (id: string, locataireId: string, documentPdfUrl?: string) => {
  const edl = await EtatDesLieuxRepo.findById(id);
  if (!edl) throw new AppError("État des lieux introuvable", StatusCodes.NOT_FOUND);
  if (edl.locataireId !== locataireId) throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);

  if (edl.statut !== "EN_ATTENTE_VALIDATION") {
    throw new AppError("L'état des lieux n'est pas en attente de validation", StatusCodes.BAD_REQUEST);
  }

  const updated = await EtatDesLieuxRepo.updateStatus(id, "VALIDE", documentPdfUrl);

  // Notifier le propriétaire
  if (edl.proprietaire?.telephone) {
    const lien = `${FRONTEND_URL}/owner/etats-des-lieux/${updated.id}`;
    const msg = `Bonjour ${edl.proprietaire.prenom}, l'état des lieux d'${edl.type.toLowerCase()} a été validé par votre locataire. PDF disponible : ${lien}`;
    await SmsService.sendSms(edl.proprietaire.telephone, msg).catch(e => console.error("Erreur SMS", e));
  }

  return updated;
};

export const getAllEtatsDesLieuxLocataire = async (locataireId: string) => {
  return EtatDesLieuxRepo.findAllByLocataire(locataireId);
};

export const getComparison = async (bailId: string, userId: string, role: "PROPRIETAIRE" | "LOCATAIRE") => {
  const bail = await prisma.bailLocation.findUnique({ where: { id: bailId } });
  if (!bail) throw new AppError("Bail introuvable", StatusCodes.NOT_FOUND);

  if (role === "PROPRIETAIRE" && bail.proprietaireId !== userId) throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);
  if (role === "LOCATAIRE" && bail.locataireId !== userId) throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);

  const entree = await EtatDesLieuxRepo.findByBailAndType(bailId, "ENTREE");
  const sortie = await EtatDesLieuxRepo.findByBailAndType(bailId, "SORTIE");

  return { entree, sortie };
};
