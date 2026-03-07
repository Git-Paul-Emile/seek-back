import { prisma } from "../config/database.js";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";

// Configuration de la rotation intelligente
const CONFIG = {
  // Nombre d'annonces boostées affichées en page d'accueil
  NB_ANNOACES_AFFICHAGES: 4,
  // Intervalle de rotation en minutes (après ce délai, les annonces sont remplacées)
  INTERVALLE_ROTATION_MINUTES: 30,
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

  const now = new Date();
  const dateFin = new Date(now);
  dateFin.setDate(dateFin.getDate() + dureeJours);

  // Calculer la position dans la rotation
  // On place la nouvelle annonce à la fin du groupe actuellement actif
  const lastPromoted = await prisma.bien.findFirst({
    where: {
      estMisEnAvant: true,
      dateFinPromotion: { gte: now },
    },
    orderBy: { positionRotation: "desc" },
    select: { positionRotation: true },
  });

  const newPosition = (lastPromoted?.positionRotation ?? 0) + 1;

  // Mettre à jour le bien avec les informations de promotion
  const updated = await prisma.bien.update({
    where: { id: bienId },
    data: {
      estMisEnAvant: true,
      dateDebutPromotion: now,
      dateFinPromotion: dateFin,
      positionRotation: newPosition,
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
 * Récupère les annonces actuellement mises en avant pour la page d'accueil
 * Utilise la rotation intelligente pour assurer une distribution équitable
 */
export const getAnnoncesMiseEnAvant = async (limit: number = CONFIG.NB_ANNOACES_AFFICHAGES) => {
  const now = new Date();

  // Récupérer toutes les annonces boostées actives
  const promotedAnnonces = await prisma.bien.findMany({
    where: {
      estMisEnAvant: true,
      dateFinPromotion: { gte: now },
      statutAnnonce: "PUBLIE",
      actif: true,
    },
    orderBy: { positionRotation: "asc" },
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

  if (promotedAnnonces.length === 0) {
    return {
      annonces: [],
      total: 0,
      message: "Aucune annonce mise en avant actuellement",
    };
  }

  // Vérifier si une rotation est nécessaire basée sur le temps
  const shouldRotate = promotedAnnonces.some((annonce) => {
    if (!annonce.dernierAffichage) return true;
    const diffMinutes =
      (now.getTime() - new Date(annonce.dernierAffichage).getTime()) / (1000 * 60);
    return diffMinutes >= CONFIG.INTERVALLE_ROTATION_MINUTES;
  });

  let rotatedAnnonces = promotedAnnonces;

  // Effectuer la rotation si nécessaire
  if (shouldRotate && promotedAnnonces.length > limit) {
    // Trier par dernier affichage (les plus anciennes en premier)
    const sortedByDisplay = [...promotedAnnonces].sort((a, b) => {
      if (!a.dernierAffichage) return -1;
      if (!b.dernierAffichage) return 1;
      return (
        new Date(a.dernierAffichage).getTime() - new Date(b.dernierAffichage).getTime()
      );
    });

    // Prendre les premières pour l'affichage
    rotatedAnnonces = sortedByDisplay.slice(0, limit);

    // Mettre à jour le dernier affichage pour les annonces sélectionnées
    await Promise.all(
      rotatedAnnonces.map((annonce) =>
        prisma.bien.update({
          where: { id: annonce.id },
          data: { dernierAffichage: now },
        })
      )
    );
  } else if (promotedAnnonces.length <= limit) {
    // Si moins d'annonces que le nombre à afficher, toutes s'affichent
    // Mettre à jour le dernier affichage
    await Promise.all(
      rotatedAnnonces.map((annonce) =>
        prisma.bien.update({
          where: { id: annonce.id },
          data: { dernierAffichage: now },
        })
      )
    );
  } else {
    // Rotation standard : afficher les annonces dans l'ordre de rotation
    // et faire avancer la position de rotation
    rotatedAnnonces = promotedAnnonces.slice(0, limit);

    // Marquer ces annonces comme affichées
    await Promise.all(
      rotatedAnnonces.map((annonce) =>
        prisma.bien.update({
          where: { id: annonce.id },
          data: { dernierAffichage: now },
        })
      )
    );

    // Faire avancer la rotation (déplacer les premières à la fin)
    const newRotation = promotedAnnonces.map((annonce, index) => {
      if (index < limit) {
        return {
          id: annonce.id,
          newPosition: annonce.positionRotation + limit,
        };
      }
      return null;
    }).filter(Boolean);

    await Promise.all(
      newRotation.map((rotation) =>
        rotation
          ? prisma.bien.update({
              where: { id: rotation.id },
              data: { positionRotation: rotation.newPosition },
            })
          : Promise.resolve()
      )
    );
  }

  return {
    annonces: rotatedAnnonces,
    total: promotedAnnonces.length,
    rotation: {
      intervalleMinutes: CONFIG.INTERVALLE_ROTATION_MINUTES,
      prochaineRotationPossible: shouldRotate,
    },
    message: `Affichage de ${rotatedAnnonces.length} annonces mises en avant sur ${promotedAnnonces.length} disponibles`,
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
      nbAnnoncesParPage: CONFIG.NB_ANNOACES_AFFICHAGES,
      intervalleRotationMinutes: CONFIG.INTERVALLE_ROTATION_MINUTES,
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
