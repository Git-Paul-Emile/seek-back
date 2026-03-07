import { prisma } from "../config/database.js";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";
import {
  FORMULES_PREMIUM,
  type FormulePremium,
  type ModePaiement,
  type PaiementSimuleResult,
  type ActivationPromotionResult,
} from "../types/premium.types.js";
import { activatePromotion } from "./promotion.service.js";

/**
 * Génère un ID de transaction simulé
 */
const generateTransactionId = (): string => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 10).toUpperCase();
  return `SIM-${timestamp}-${random}`;
};

/**
 * Simule un paiement et active la mise en avant
 * 
 * NOTE: Cette fonction est une SIMULATION uniquement.
 * Une fois l'API de paiement réelle intégrée (Orange Money, Wave, etc.),
 * cette fonction devra être remplacée par le vrai processus de paiement.
 */
export const simulerPaiementEtActiverPromotion = async (
  bienId: string,
  proprietaireId: string,
  formuleId: string,
  modePaiement: ModePaiement
): Promise<{
  paiement: PaiementSimuleResult;
  promotion: ActivationPromotionResult;
}> => {
  // 1. Vérifier que le bien existe et appartient au propriétaire
  const bien = await prisma.bien.findFirst({
    where: {
      id: bienId,
      proprietaireId,
    },
  });

  if (!bien) {
    throw new AppError("Bien introuvable ou non autorisé", StatusCodes.NOT_FOUND);
  }

  // 2. Vérifier que l'annonce est publiée
  if (bien.statutAnnonce !== "PUBLIE") {
    throw new AppError(
      "Seules les annonces publiées peuvent être mises en avant",
      StatusCodes.BAD_REQUEST
    );
  }

  // 3. Vérifier que la formule existe (DB d'abord, puis fallback hardcoded)
  let formule: FormulePremium | undefined;
  const dbFormule = await prisma.formulePremium.findFirst({ where: { code: formuleId, actif: true } });
  if (dbFormule) {
    formule = {
      id: dbFormule.code,
      nom: dbFormule.nom,
      dureeJours: dbFormule.dureeJours,
      prix: dbFormule.prix,
      accroche: dbFormule.accroche,
      description: dbFormule.description,
      idealPour: dbFormule.idealPour,
      populer: dbFormule.populer,
    };
  } else {
    formule = FORMULES_PREMIUM.find((f) => f.id === formuleId);
  }
  if (!formule) {
    throw new AppError("Formule premium introuvable", StatusCodes.NOT_FOUND);
  }

  // 4. SIMULATION DU PAIEMENT
  // En production, ici on appellera l'API de paiement (Orange Money, Wave, etc.)
  const paiementResult: PaiementSimuleResult = {
    success: true,
    transactionId: generateTransactionId(),
    montant: formule.prix,
    modePaiement,
    formule,
    datePaiement: new Date(),
    message: "Paiement effectué avec succès (simulation)",
  };

  // 4b. Enregistrer la transaction dans l'historique
  await prisma.transaction.create({
    data: {
      proprietaireId,
      type: "PAIEMENT_PREMIUM",
      statut: "CONFIRME",
      montant: formule.prix,
      devise: "XOF",
      modePaiement,
      provider: modePaiement,
      transactionId: paiementResult.transactionId,
      bienId,
      dateConfirmation: new Date(),
      instructions: "Paiement simulation - Mise en avant d'annonce",
      metadata: {
        formuleId: formule.id,
        formuleNom: formule.nom,
        dureeJours: formule.dureeJours,
      },
    },
  });

  // 5. Activer directement la mise en avant (sans passer par le service de promotion existant)
  const now = new Date();
  const dateFin = new Date(now);
  dateFin.setDate(dateFin.getDate() + formule.dureeJours);

  // Calculer la position dans la rotation
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

  const promotionResult: ActivationPromotionResult = {
    success: true,
    message: "Annonce mise en avant avec succès",
    data: {
      bienId: updated.id,
      titre: bien.titre ?? undefined,
      estMisEnAvant: updated.estMisEnAvant,
      dateDebutPromotion: updated.dateDebutPromotion,
      dateFinPromotion: updated.dateFinPromotion,
      positionRotation: updated.positionRotation,
    },
  };

  // 6. Enregistrer dans l'historique des promotions
  // Note: Cette fonctionnalité sera activée après la génération du client Prisma
  // await savePromotionToHistory(
  //   bienId,
  //   proprietaireId,
  //   paiementResult.transactionId,
  //   formule,
  //   now,
  //   dateFin
  // );

  console.log(`[PROMOTION] Transaction ${paiementResult.transactionId} - Bien ${bienId} - Formule: ${formule.nom} - Montant: ${formule.prix} - Mode: ${modePaiement}`);

  return {
    paiement: paiementResult,
    promotion: promotionResult,
  };
};

/**
 * Récupère les formules premium disponibles (DB d'abord, fallback hardcoded)
 */
export const getFormulesPremium = async (): Promise<FormulePremium[]> => {
  const dbFormules = await prisma.formulePremium.findMany({ where: { actif: true }, orderBy: { ordre: "asc" } });
  if (dbFormules.length > 0) {
    return dbFormules.map((f) => ({
      id: f.code,
      nom: f.nom,
      dureeJours: f.dureeJours,
      prix: f.prix,
      accroche: f.accroche,
      description: f.description,
      idealPour: f.idealPour,
      populer: f.populer,
    }));
  }
  return FORMULES_PREMIUM;
};

/**
 * Récupère une formule par son ID
 */
export const getFormuleById = (formuleId: string): FormulePremium | undefined => {
  return FORMULES_PREMIUM.find((f) => f.id === formuleId);
};

// ─── Admin CRUD FormulePremium ────────────────────────────────────────────────

export const adminGetAllFormules = async () => {
  return prisma.formulePremium.findMany({ orderBy: { ordre: "asc" } });
};

export const adminCreateFormule = async (data: {
  code: string; nom: string; dureeJours: number; prix: number;
  accroche: string; description: string; idealPour: string[]; populer?: boolean;
  actif?: boolean; ordre?: number;
}) => {
  return prisma.formulePremium.create({ data });
};

export const adminUpdateFormule = async (id: string, data: Partial<{
  code: string; nom: string; dureeJours: number; prix: number;
  accroche: string; description: string; idealPour: string[]; populer: boolean;
  actif: boolean; ordre: number;
}>) => {
  return prisma.formulePremium.update({ where: { id }, data });
};

export const adminDeleteFormule = async (id: string) => {
  return prisma.formulePremium.delete({ where: { id } });
};

/**
 * Récupère les détails d'une transaction simulée (pour affichage)
 * Dans une vraie implémentation, cela permettrait de consulter l'historique
 */
export const getDetailsTransaction = async (
  bienId: string,
  proprietaireId: string
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

  // Retourne les informations de promotion actuelles
  const now = new Date();
  const isActive =
    bien.estMisEnAvant &&
    bien.dateFinPromotion !== null &&
    new Date(bien.dateFinPromotion) >= now;

  return {
    bienId: bien.id,
    titre: bien.titre,
    estMisEnAvant: isActive,
    dateDebutPromotion: bien.dateDebutPromotion,
    dateFinPromotion: bien.dateFinPromotion,
    joursRestants: isActive && bien.dateFinPromotion
      ? Math.ceil(
          (new Date(bien.dateFinPromotion).getTime() - now.getTime()) /
            (1000 * 60 * 60 * 24)
        )
      : 0,
  };
};

/**
 * Enregistre la mise en avant dans l'historique
 * NOTE: À activer après génération du client Prisma
 */
const savePromotionToHistory = async (
  bienId: string,
  proprietaireId: string,
  transactionId: string,
  formule: FormulePremium,
  dateDebut: Date,
  dateFin: Date
): Promise<any> => {
  try {
    return await prisma.promotionHistory.create({
      data: {
        bienId,
        proprietaireId,
        transactionId,
        formuleId: formule.id,
        formuleNom: formule.nom,
        dureeJours: formule.dureeJours,
        montant: formule.prix,
        dateDebut,
        dateFin,
        statut: "ACTIVE",
      },
    });
  } catch (error) {
    // Si le modèle n'existe pas encore, on ignore
    console.warn("[PROMOTION] PromotionHistory model not available yet:", error);
    return null;
  }
};

/**
 * Arrête la mise en avant d'un bien avant la fin prévue
 * Le propriétaire perd les jours restants
 */
export const arreterMiseEnAvant = async (
  bienId: string,
  proprietaireId: string
): Promise<{
  success: boolean;
  message: string;
  historique?: any;
}> => {
  // 1. Vérifier que le bien existe et appartient au propriétaire
  const bien = await prisma.bien.findFirst({
    where: {
      id: bienId,
      proprietaireId,
    },
  });

  if (!bien) {
    throw new AppError("Bien introuvable ou non autorisé", StatusCodes.NOT_FOUND);
  }

  // 2. Vérifier que le bien est actuellement en mise en avant
  if (!bien.estMisEnAvant || !bien.dateFinPromotion || !bien.dateDebutPromotion) {
    throw new AppError(
      "Ce bien n'est pas actuellement en mise en avant",
      StatusCodes.BAD_REQUEST
    );
  }

  const now = new Date();
  const dateFinPrevue = new Date(bien.dateFinPromotion);

  // Vérifier si la promotion est déjà terminée
  if (dateFinPrevue <= now) {
    throw new AppError(
      "Cette mise en avant est déjà terminée",
      StatusCodes.BAD_REQUEST
    );
  }

  // Calculer les jours restants
  const joursRestants = Math.ceil(
    (dateFinPrevue.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  // 3. Mettre à jour le bien pour désactiver la mise en avant
  await prisma.bien.update({
    where: { id: bienId },
    data: {
      estMisEnAvant: false,
      dateFinPromotion: now, // Terminer immédiatement
      positionRotation: 0,
    },
  });

  // 4. Mettre à jour l'historique pour marquer comme arrêté (si le modèle existe)
  let historique = null;
  try {
    historique = await prisma.promotionHistory.updateMany({
      where: {
        bienId,
        statut: "ACTIVE",
      },
      data: {
        statut: "ARRETEE",
        dateFinReelle: now,
        joursRestants,
      },
    });
  } catch (error) {
    console.warn("[PROMOTION] Could not update promotion history:", error);
  }

  return {
    success: true,
    message: `Mise en avant arrêtée. Vous avez perdu les ${joursRestants} jour(s) restant(s).`,
    historique,
  };
};

/**
 * Récupère l'historique des mises en avant d'un bien
 */
export const getHistoriqueMisesEnAvant = async (
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

  // Récupérer tout l'historique des promotions pour ce bien (si le modèle existe)
  try {
    const historique = await prisma.promotionHistory.findMany({
      where: {
        bienId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return historique;
  } catch (error) {
    console.warn("[PROMOTION] Could not get promotion history:", error);
    return [];
  }
};

/**
 * Récupère l'historique des mises en avant d'un propriétaire (tous ses biens)
 */
export const getHistoriqueMisesEnAvantProprietaire = async (
  proprietaireId: string,
  options: { page?: number; limit?: number } = {}
) => {
  const page = Math.max(1, options.page || 1);
  const limit = Math.min(50, Math.max(1, options.limit || 10));
  const skip = (page - 1) * limit;

  try {
    const [historique, total] = await Promise.all([
      prisma.promotionHistory.findMany({
        where: {
          proprietaireId,
        },
        orderBy: {
          createdAt: "desc",
        },
        skip,
        take: limit,
        include: {
          bien: {
            select: {
              id: true,
              titre: true,
              photos: true,
              ville: true,
              quartier: true,
            },
          },
        },
      }),
      prisma.promotionHistory.count({
        where: {
          proprietaireId,
        },
      }),
    ]);

    return {
      data: historique,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (error) {
    console.warn("[PROMOTION] Could not get promotion history:", error);
    return {
      data: [],
      pagination: {
        page,
        limit,
        total: 0,
        totalPages: 0,
      },
    };
  }
};
