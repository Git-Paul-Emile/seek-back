import { prisma } from "../config/database.js";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";

// Nombre maximum d'annonces pouvant être mises en avant simultanément
export const MAX_PLACES_MISE_EN_AVANT = 5;

/**
 * Récupère l'état des places de mise en avant disponibles.
 * Si toutes les places sont occupées, indique la date de la prochaine libération
 * (fin de la mise en avant qui se termine le plus tôt).
 */
export const getPlacesDisponibles = async (excludeBienId?: string) => {
  const now = new Date();

  const actives = await prisma.bien.findMany({
    where: {
      estMisEnAvant: true,
      dateFinPromotion: { gte: now },
      ...(excludeBienId ? { id: { not: excludeBienId } } : {}),
    },
    select: { dateFinPromotion: true },
    orderBy: { dateFinPromotion: "asc" },
  });

  const placesUtilisees = actives.length;
  const placesDisponibles = Math.max(0, MAX_PLACES_MISE_EN_AVANT - placesUtilisees);
  const prochaineLiberation = placesDisponibles === 0 ? actives[0]?.dateFinPromotion ?? null : null;

  return {
    placesMax: MAX_PLACES_MISE_EN_AVANT,
    placesUtilisees,
    placesDisponibles,
    prochaineLiberation,
  };
};

/**
 * Vérifie qu'une place de mise en avant est disponible pour ce bien, sinon lève une
 * erreur explicite (avec la date de la prochaine libération) et notifie le propriétaire.
 * `bienId` est exclu du décompte s'il est déjà activement mis en avant (renouvellement).
 */
export const assertPlaceDisponible = async (bienId: string, proprietaireId: string) => {
  const { placesDisponibles, prochaineLiberation } = await getPlacesDisponibles(bienId);

  if (placesDisponibles > 0) return;

  const dateLisible = prochaineLiberation
    ? new Date(prochaineLiberation).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })
    : "prochainement";

  const message = `Toutes les places de mise en avant sont occupées (${MAX_PLACES_MISE_EN_AVANT}/${MAX_PLACES_MISE_EN_AVANT}). Prochaine place disponible le ${dateLisible}.`;

  try {
    const { envoyerNotification } = await import("./notification.service.js");
    const proprietaire = await prisma.proprietaire.findUnique({
      where: { id: proprietaireId },
      select: { telephone: true, email: true },
    });
    if (proprietaire) {
      await envoyerNotification({
        type: "ALERTE",
        target: "owner",
        telephone: proprietaire.telephone,
        email: proprietaire.email,
        sujet: "Mise en avant indisponible",
        contenu: message,
        proprietaireId,
      });
    }
  } catch {
    // notification non bloquante
  }

  throw new AppError(message, StatusCodes.CONFLICT);
};

/**
 * Active la mise en avant d'une annonce
 * Sans intégration de paiement - mode démonstration
 */
export const activatePromotion = async (
  bienId: string,
  proprietaireId: string,
  dureeJours: number = 7
) => {
  // Vérifier que le bien existe et appartient au propriétaire
  const bien = await prisma.bien.findFirst({
    where: {
      id: bienId,
      proprietaireId,
    },
  });

  if (!bien) {
    throw new AppError("Bien introuvable ou non autorisé", StatusCodes.NOT_FOUND);
  }

  if (bien.statutAnnonce !== "PUBLIE") {
    throw new AppError(
      "Seules les annonces publiées peuvent être mises en avant",
      StatusCodes.BAD_REQUEST
    );
  }

  await assertPlaceDisponible(bienId, proprietaireId);

  const now = new Date();
  const dateFin = new Date(now);
  dateFin.setDate(dateFin.getDate() + dureeJours);

  // Mettre à jour le bien avec les informations de promotion
  const updated = await prisma.bien.update({
    where: { id: bienId },
    data: {
      estMisEnAvant: true,
      dateDebutPromotion: now,
      dateFinPromotion: dateFin,
      positionRotation: 0,
      dernierAffichage: null,
    },
  });

  return {
    success: true,
    message: "Annonce mise en avant avec succès",
    data: {
      bienId: updated.id,
      titre: bien.titre,
      estMisEnAvant: updated.estMisEnAvant,
      dateDebutPromotion: updated.dateDebutPromotion,
      dateFinPromotion: updated.dateFinPromotion,
      positionRotation: updated.positionRotation,
    },
  };
};

/**
 * Désactive la mise en avant d'une annonce
 */
export const deactivatePromotion = async (
  bienId: string,
  proprietaireId: string
) => {
  // Vérifier que le bien existe et appartient au propriétaire
  const bien = await prisma.bien.findFirst({
    where: {
      id: bienId,
      proprietaireId,
    },
  });

  if (!bien) {
    throw new AppError("Bien introuvable ou non autorisé", StatusCodes.NOT_FOUND);
  }

  if (!bien.estMisEnAvant) {
    throw new AppError("Cette annonce n'est pas actuellement mise en avant", StatusCodes.BAD_REQUEST);
  }

  const updated = await prisma.bien.update({
    where: { id: bienId },
    data: {
      estMisEnAvant: false,
      dateDebutPromotion: null,
      dateFinPromotion: null,
      positionRotation: 0,
      dernierAffichage: null,
    },
  });

  return {
    success: true,
    message: "Mise en avant désactivée",
    data: {
      bienId: updated.id,
      estMisEnAvant: updated.estMisEnAvant,
    },
  };
};

/**
 * Admin : arrête manuellement une promotion active et notifie le propriétaire
 */
export const adminArreterPromotion = async (promotionId: string, motif?: string) => {
  const promotion = await prisma.promotionHistory.findUnique({
    where: { id: promotionId },
    include: {
      bien: { select: { id: true, titre: true, dateDebutPromotion: true } },
      proprietaire: { select: { id: true, prenom: true, nom: true, telephone: true, email: true } },
    },
  });

  if (!promotion) throw new AppError("Promotion introuvable", StatusCodes.NOT_FOUND);
  if (promotion.statut !== "ACTIVE") throw new AppError("Seules les promotions actives peuvent être arrêtées", StatusCodes.BAD_REQUEST);

  const now = new Date();
  const motifFinal = motif ?? "Arrêtée par l'administrateur";

  await prisma.promotionHistory.update({
    where: { id: promotionId },
    data: { statut: "ARRETEE", dateFinReelle: now, motifArret: motifFinal },
  });

  // Désactiver le boost sur le bien si c'est bien ce cycle actif
  if (promotion.bien) {
    const bien = await prisma.bien.findUnique({
      where: { id: promotion.bien.id },
      select: { estMisEnAvant: true, dateDebutPromotion: true },
    });
    const memeDebut =
      bien?.dateDebutPromotion &&
      Math.abs(new Date(bien.dateDebutPromotion).getTime() - new Date(promotion.dateDebut).getTime()) < 60_000;

    if (bien?.estMisEnAvant && memeDebut) {
      await prisma.bien.update({
        where: { id: promotion.bien.id },
        data: { estMisEnAvant: false, dateDebutPromotion: null, dateFinPromotion: null, positionRotation: 0, dernierAffichage: null },
      });
    }
  }

  // Notification propriétaire
  if (promotion.proprietaire) {
    try {
      const { envoyerNotification } = await import("./notification.service.js");
      await envoyerNotification({
        type: "ALERTE",
        telephone: promotion.proprietaire.telephone,
        email: promotion.proprietaire.email,
        sujet: "Mise en avant arrêtée par l'administrateur",
        contenu: `Bonjour ${promotion.proprietaire.prenom},\n\nVotre mise en avant pour "${promotion.bien?.titre ?? "votre bien"}" a été arrêtée par l'administrateur.\nMotif : ${motifFinal}.\n\nPour toute question, contactez le support.`,
        proprietaireId: promotion.proprietaireId,
        bienId: promotion.bienId ?? undefined,
      });
    } catch {
      // notification non bloquante
    }
  }

  return { success: true, message: "Promotion arrêtée et propriétaire notifié" };
};

/**
 * Détecte les promotions expirées, les marque EXPIREE et notifie les propriétaires
 */
export const traiterPromotionsExpirees = async () => {
  const now = new Date();

  const actives = await prisma.promotionHistory.findMany({
    where: { statut: "ACTIVE", dateFin: { lt: now } },
    include: {
      bien: { select: { id: true, titre: true, estMisEnAvant: true, dateDebutPromotion: true } },
      proprietaire: { select: { id: true, prenom: true, nom: true, telephone: true, email: true } },
    },
  });

  for (const p of actives) {
    await prisma.promotionHistory.update({
      where: { id: p.id },
      data: { statut: "EXPIREE", dateFinReelle: now },
    });

    if (p.bien?.estMisEnAvant) {
      await prisma.bien.update({
        where: { id: p.bien.id },
        data: { estMisEnAvant: false, dateDebutPromotion: null, dateFinPromotion: null, positionRotation: 0, dernierAffichage: null },
      });
    }

    if (p.proprietaire) {
      try {
        const { envoyerNotification } = await import("./notification.service.js");
        await envoyerNotification({
          type: "ALERTE",
          telephone: p.proprietaire.telephone,
          email: p.proprietaire.email,
          sujet: "Votre mise en avant a expiré",
          contenu: `Bonjour ${p.proprietaire.prenom},\n\nVotre mise en avant pour "${p.bien?.titre ?? "votre bien"}" a expiré. Pour continuer à booster votre annonce, activez une nouvelle promotion depuis votre tableau de bord.`,
          proprietaireId: p.proprietaireId,
          bienId: p.bienId ?? undefined,
        });
      } catch {}
    }
  }

  return { traite: actives.length };
};

/**
 * Récupère les annonces actuellement mises en avant pour la page d'accueil.
 * Le nombre de places étant plafonné (MAX_PLACES_MISE_EN_AVANT), toutes les
 * annonces actives sont affichées simultanément, sans rotation.
 */
export const getAnnoncesMiseEnAvant = async (limit: number = MAX_PLACES_MISE_EN_AVANT) => {
  const now = new Date();

  const annonces = await prisma.bien.findMany({
    where: {
      estMisEnAvant: true,
      dateFinPromotion: { gte: now },
      statutAnnonce: "PUBLIE",
      actif: true,
    },
    orderBy: { dateDebutPromotion: "asc" },
    take: limit,
    include: {
      typeLogement: true,
      typeTransaction: true,
      statutBien: true,
      proprietaire: {
        select: {
          id: true,
          prenom: true,
          nom: true,
          telephone: true,
          statutVerification: true,
        },
      },
    },
  });

  return {
    annonces,
    total: annonces.length,
    placesDisponibles: Math.max(0, MAX_PLACES_MISE_EN_AVANT - annonces.length),
    message: annonces.length > 0
      ? `Affichage de ${annonces.length} annonce(s) mise(s) en avant`
      : "Aucune annonce mise en avant actuellement",
  };
};

/**
 * Récupère le statut de mise en avant d'une annonce
 */
export const getPromotionStatus = async (bienId: string, proprietaireId: string) => {
  const bien = await prisma.bien.findFirst({
    where: {
      id: bienId,
      proprietaireId,
    },
  });

  if (!bien) {
    throw new AppError("Bien introuvable ou non autorisé", StatusCodes.NOT_FOUND);
  }

  const now = new Date();
  const isActive =
    bien.estMisEnAvant &&
    bien.dateFinPromotion !== null &&
    new Date(bien.dateFinPromotion) >= now;

  return {
    bienId: bien.id,
    estMisEnAvant: isActive,
    dateDebutPromotion: bien.dateDebutPromotion,
    dateFinPromotion: bien.dateFinPromotion,
    positionRotation: bien.positionRotation,
    dernierAffichage: bien.dernierAffichage,
    joursRestants: isActive && bien.dateFinPromotion
      ? Math.ceil(
          (new Date(bien.dateFinPromotion).getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
        )
      : 0,
  };
};

/**
 * Récupère les statistiques de promotion pour le tableau de bord propriétaire
 */
export const getPromotionStats = async (proprietaireId: string) => {
  const now = new Date();

  // Toutes les annonces du propriétaire
  const totalAnnonces = await prisma.bien.count({
    where: {
      proprietaireId,
      statutAnnonce: "PUBLIE",
    },
  });

  // Annonces actuellement mises en avant
  const annoncesActives = await prisma.bien.count({
    where: {
      proprietaireId,
      estMisEnAvant: true,
      dateFinPromotion: { gte: now },
    },
  });

  // Historique des promotions (total cumulé)
  const historiquePromotions = await prisma.bien.count({
    where: {
      proprietaireId,
      estMisEnAvant: true,
    },
  });

  return {
    totalAnnoncesPubliees: totalAnnonces,
    annoncesActuellementMiseEnAvant: annoncesActives,
    historiquePromotions,
    configuration: {
      placesMax: MAX_PLACES_MISE_EN_AVANT,
    },
  };
};

/**
 * Prolonge la durée de mise en avant d'une annonce
 */
export const extendPromotion = async (
  bienId: string,
  proprietaireId: string,
  joursSupplementaires: number = 7
) => {
  const bien = await prisma.bien.findFirst({
    where: {
      id: bienId,
      proprietaireId,
    },
  });

  if (!bien) {
    throw new AppError("Bien introuvable ou non autorisé", StatusCodes.NOT_FOUND);
  }

  if (!bien.estMisEnAvant) {
    throw new AppError("Cette annonce n'est pas actuellement mise en avant", StatusCodes.BAD_REQUEST);
  }

  const nouvelleFin = bien.dateFinPromotion
    ? new Date(bien.dateFinPromotion)
    : new Date();
  nouvelleFin.setDate(nouvelleFin.getDate() + joursSupplementaires);

  const updated = await prisma.bien.update({
    where: { id: bienId },
    data: {
      dateFinPromotion: nouvelleFin,
    },
  });

  return {
    success: true,
    message: `Promotion prolongée de ${joursSupplementaires} jours`,
    data: {
      nouvelleDateFin: updated.dateFinPromotion,
    },
  };
};
