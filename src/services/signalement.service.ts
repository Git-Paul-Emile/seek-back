import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";
import * as SignalementRepo from "../repositories/signalement.repository.js";
import { prisma } from "../config/database.js";

// ─── Seuils ───────────────────────────────────────────────────────────────────

const SEUIL_NOTIF_OWNER   = 2;  // à partir du 2ème → notif au propriétaire
const SEUIL_SHADOW_BAN    = 3;  // à partir du 3ème (ou motif urgent) → shadow ban

// Motifs considérés comme "urgents" → shadow ban immédiat dès le 1er
const MOTIFS_URGENTS = ["ARNAQUE_SUSPECTEE"];

// ─── Créer un signalement (point d'entrée public) ────────────────────────────

export const createSignalement = async (data: SignalementRepo.CreateSignalementData) => {
  const bien = await prisma.bien.findUnique({
    where:  { id: data.bienId },
    select: { id: true, actif: true, proprietaireId: true, reportCount: true, titre: true, statutAnnonce: true },
  });
  if (!bien) throw new AppError("Annonce introuvable", StatusCodes.NOT_FOUND);

  // Anti-spam : 1 signalement par numéro de téléphone par annonce
  const dejaSignale = await SignalementRepo.existsByTel(data.bienId, data.signaleParTel);
  if (dejaSignale) {
    throw new AppError("Vous avez déjà signalé cette annonce.", StatusCodes.CONFLICT);
  }

  // Créer le signalement
  const signalement = await SignalementRepo.create(data);

  const newCount = bien.reportCount + 1;
  const estUrgent = MOTIFS_URGENTS.includes(data.motif);
  const doitShadowBan = newCount >= SEUIL_SHADOW_BAN || estUrgent;

  const bienUpdate: Record<string, unknown> = { reportCount: newCount };

  if (doitShadowBan && bien.statutAnnonce !== "SUSPENDU_SIGNALEMENT") {
    bienUpdate.statutAnnonce = "SUSPENDU_SIGNALEMENT";
    bienUpdate.actif         = false;
  }

  await prisma.bien.update({ where: { id: data.bienId }, data: bienUpdate as any });

  // ── Notifications ─────────────────────────────────────────────────────────

  // N=1 : aucune notification au propriétaire (flag silencieux)
  // N>=2 ou motif urgent : message au propriétaire
  if (newCount >= SEUIL_NOTIF_OWNER || estUrgent) {
    const bienTitre = bien.titre ? `"${bien.titre}"` : "votre annonce";
    const titreMsg = doitShadowBan
      ? `Annonce masquée temporairement — ${newCount} signalement${newCount > 1 ? "s" : ""}`
      : `Signalements sur ${bienTitre} (${newCount})`;
    const corpsMsg = doitShadowBan
      ? `${bienTitre} a été temporairement masquée des résultats de recherche suite à ${newCount} signalement${newCount > 1 ? "s" : ""}.\n\nMotif : ${data.motif}\n\nL'équipe SEEK examinera votre annonce. Vous serez notifié de la décision.`
      : `${bienTitre} a reçu plusieurs signalements (${newCount}) de la part d'utilisateurs différents.\n\nMotif : ${data.motif}\n\nMerci de vérifier la conformité de votre annonce aux règles SEEK.`;

    await prisma.messageInterne.create({
      data: {
        proprietaireId: bien.proprietaireId,
        titre:          titreMsg,
        corps:          corpsMsg,
        type:           doitShadowBan ? "AVERTISSEMENT" : "INFO",
      },
    });
  }

  return signalement;
};

// ─── Lister les biens signalés (admin) ───────────────────────────────────────

export const listBiensSignales = async (params: {
  page?: number;
  limit?: number;
  priorite?: "HAUTE" | "BASSE";
}) => {
  return SignalementRepo.findBiensSignales(params);
};

// ─── Détail d'un bien signalé (admin) ────────────────────────────────────────

export const getDetailByBien = async (bienId: string) => {
  const detail = await SignalementRepo.findDetailByBien(bienId);
  if (!detail) throw new AppError("Annonce introuvable", StatusCodes.NOT_FOUND);
  return detail;
};

// ─── Badge count (admin sidebar) ─────────────────────────────────────────────

export const getCountBiensSignales = async () => {
  return SignalementRepo.countBiensSignales();
};

// ─── Rejeter : signalements abusifs, remettre le compteur à zéro ─────────────

export const rejeterSignalements = async (bienId: string, adminId?: string) => {
  const bien = await prisma.bien.findUnique({
    where:  { id: bienId },
    select: { statutAnnonce: true, proprietaireId: true, titre: true },
  });
  if (!bien) throw new AppError("Annonce introuvable", StatusCodes.NOT_FOUND);

  // Marquer tous les signalements actifs comme traités
  await SignalementRepo.traiterAllByBien(bienId);

  // Remettre le compteur à zéro et restaurer l'annonce si elle était suspendue
  const wasOk = bien.statutAnnonce === "PUBLIE";
  await prisma.bien.update({
    where: { id: bienId },
    data:  {
      reportCount:   0,
      ...(bien.statutAnnonce === "SUSPENDU_SIGNALEMENT"
        ? { statutAnnonce: "PUBLIE" as any, actif: true }
        : {}),
    },
  });

  // Informer le propriétaire si l'annonce était suspendue
  if (bien.statutAnnonce === "SUSPENDU_SIGNALEMENT") {
    const bienTitre = bien.titre ? `"${bien.titre}"` : "votre annonce";
    await prisma.messageInterne.create({
      data: {
        proprietaireId: bien.proprietaireId,
        titre:          "Signalements rejetés — annonce réactivée",
        corps:          `Les signalements reçus sur ${bienTitre} ont été examinés et jugés non conformes.\n\nVotre annonce est à nouveau visible dans les résultats de recherche.`,
        type:           "LEVEE",
      },
    });
  }

  return { success: true };
};

// ─── Avertir : envoyer un message officiel au propriétaire ───────────────────

export const avertirProprietaire = async (
  bienId: string,
  message: string,
  adminId?: string
) => {
  const bien = await prisma.bien.findUnique({
    where:  { id: bienId },
    select: { proprietaireId: true, titre: true },
  });
  if (!bien) throw new AppError("Annonce introuvable", StatusCodes.NOT_FOUND);
  if (!message?.trim()) throw new AppError("Le message est requis", StatusCodes.BAD_REQUEST);

  // Créer un enregistrement AdminAvertissement (historique)
  await prisma.adminAvertissement.create({
    data: {
      proprietaireId: bien.proprietaireId,
      bienId,
      message:        message.trim(),
    },
  });

  // Incrémenter le compteur d'avertissements du propriétaire
  await prisma.proprietaire.update({
    where: { id: bien.proprietaireId },
    data:  { nbAvertissements: { increment: 1 } },
  });

  // Envoyer un message interne au propriétaire
  const bienTitre = bien.titre ? `"${bien.titre}"` : "votre annonce";
  await prisma.messageInterne.create({
    data: {
      proprietaireId: bien.proprietaireId,
      titre:          `Avertissement officiel concernant ${bienTitre}`,
      corps:          message.trim(),
      type:           "AVERTISSEMENT",
    },
  });

  return { success: true };
};

// ─── Sanctionner : suppression définitive de l'annonce ───────────────────────

export const sanctionnerAnnonce = async (bienId: string, adminId?: string) => {
  const bien = await prisma.bien.findUnique({
    where:  { id: bienId },
    select: { proprietaireId: true, titre: true },
  });
  if (!bien) throw new AppError("Annonce introuvable", StatusCodes.NOT_FOUND);

  // Désactiver définitivement l'annonce
  await prisma.bien.update({
    where: { id: bienId },
    data:  { actif: false, statutAnnonce: "SUSPENDU_SIGNALEMENT" as any },
  });

  // Marquer tous les signalements comme traités
  await SignalementRepo.traiterAllByBien(bienId);

  // Notifier le propriétaire
  const bienTitre = bien.titre ? `"${bien.titre}"` : "Votre annonce";
  await prisma.messageInterne.create({
    data: {
      proprietaireId: bien.proprietaireId,
      titre:          "Annonce supprimée définitivement",
      corps:          `${bienTitre} a été supprimée définitivement de la plateforme SEEK suite à des signalements confirmés.\n\nContactez le support si vous souhaitez contester cette décision.`,
      type:           "SANCTION",
    },
  });

  return { success: true };
};
