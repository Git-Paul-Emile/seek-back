import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";
import * as SignalementRepo from "../repositories/signalement.repository.js";
import { prisma } from "../config/database.js";

export const createSignalement = async (data: SignalementRepo.CreateSignalementData) => {
  // Si c'est un signalement d'annonce, vérifier que le bien existe
  if (data.type === "ANNONCE" && data.bienId) {
    const bien = await prisma.bien.findUnique({ where: { id: data.bienId }, select: { id: true, actif: true } });
    if (!bien) throw new AppError("Annonce introuvable", StatusCodes.NOT_FOUND);
  }

  const signalement = await SignalementRepo.create(data);

  // Règle auto : 5+ signalements EN_ATTENTE ou EN_COURS sur un bien → bien.actif = false
  if (data.type === "ANNONCE" && data.bienId) {
    const count = await prisma.signalement.count({
      where: {
        bienId: data.bienId,
        statut: { in: ["EN_ATTENTE", "EN_COURS"] },
      },
    });
    if (count >= 5) {
      await prisma.bien.update({ where: { id: data.bienId }, data: { actif: false } });
    }
  }

  return signalement;
};

export const listSignalements = async (params: SignalementRepo.SignalementListParams) => {
  return SignalementRepo.findAll(params);
};

export const getSignalementById = async (id: string) => {
  const s = await SignalementRepo.findById(id);
  if (!s) throw new AppError("Signalement introuvable", StatusCodes.NOT_FOUND);

  // Historique sur la même cible
  let historique: any[] = [];
  if (s.bienId) {
    historique = await SignalementRepo.findHistoriqueByBien(s.bienId, id);
  }

  return { ...s, historique };
};

export const getCountEnAttente = async () => {
  return SignalementRepo.countEnAttente();
};

export const traiterSignalement = async (
  id: string,
  action: "IGNORER" | "EN_COURS" | "AVERTIR" | "DESACTIVER_ANNONCE" | "TRAITE",
  noteAdmin?: string,
  adminId?: string
) => {
  const signalement = await SignalementRepo.findById(id);
  if (!signalement) throw new AppError("Signalement introuvable", StatusCodes.NOT_FOUND);

  let nouveauStatut: string;

  switch (action) {
    case "IGNORER":
      nouveauStatut = "REJETE";
      break;
    case "EN_COURS":
      nouveauStatut = "EN_COURS";
      break;
    case "AVERTIR":
    case "TRAITE":
      nouveauStatut = "TRAITE";
      break;
    case "DESACTIVER_ANNONCE":
      nouveauStatut = "TRAITE";
      if (signalement.bienId) {
        await prisma.bien.update({
          where: { id: signalement.bienId },
          data: { actif: false },
        });
      }
      break;
    default:
      throw new AppError("Action inconnue", StatusCodes.BAD_REQUEST);
  }

  return SignalementRepo.updateStatut(id, {
    statut: nouveauStatut,
    noteAdmin,
    traitePar: adminId,
    dateTraitement: new Date(),
  });
};
