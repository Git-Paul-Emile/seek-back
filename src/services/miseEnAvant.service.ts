import { prisma } from "../config/database.js";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";

// ─── Lister les demandes admin ─────────────────────────────────────────────────

export const getAllMisesEnAvant = async (params: {
  page?: number;
  limit?: number;
  statut?: string;
}) => {
  const page = params.page ?? 1;
  const limit = params.limit ?? 20;
  const skip = (page - 1) * limit;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = params.statut ? { statut: params.statut } : {};

  const [items, total] = await Promise.all([
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (prisma.promotionHistory as any).findMany({
      where,
      include: {
        bien: { select: { id: true, titre: true, ville: true } },
        proprietaire: {
          select: { id: true, nom: true, prenom: true, email: true },
        },
      },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.promotionHistory.count({ where }),
  ]);

  return { items, total, page, limit, totalPages: Math.ceil(total / limit) };
};

// ─── Demander une mise en avant (owner) ───────────────────────────────────────

export const demanderMiseEnAvant = async (
  bienId: string,
  proprietaireId: string,
  data: {
    formuleId: string;
    modePaiement: string;
    reference: string;
    note?: string;
  }
) => {
  // Vérifier que le bien appartient à l'owner
  const bien = await prisma.bien.findUnique({
    where: { id: bienId },
    select: { proprietaireId: true },
  });
  if (!bien) throw new AppError("Bien introuvable", StatusCodes.NOT_FOUND);
  if (bien.proprietaireId !== proprietaireId)
    throw new AppError("Accès refusé", StatusCodes.FORBIDDEN);

  // Vérifier qu'il n'y a pas déjà une mise en avant active ou en attente
  const existing = await prisma.promotionHistory.findFirst({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    where: { bienId, statut: { in: ["EN_ATTENTE", "ACTIVE"] as any[] } },
  });
  if (existing)
    throw new AppError(
      "Ce bien a déjà une mise en avant active ou en attente",
      StatusCodes.CONFLICT
    );

  // Récupérer la formule
  const formule = await prisma.formulePremium.findUnique({
    where: { id: data.formuleId },
  });
  if (!formule) throw new AppError("Formule introuvable", StatusCodes.NOT_FOUND);
  if (!formule.actif)
    throw new AppError(
      "Cette formule n'est plus disponible",
      StatusCodes.BAD_REQUEST
    );

  const dateDebut = new Date();
  const dateFin = new Date();
  dateFin.setDate(dateFin.getDate() + formule.dureeJours);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const promotion = await (prisma.promotionHistory as any).create({
    data: {
      bienId,
      proprietaireId,
      formuleId: formule.id,
      formuleNom: formule.nom,
      dureeJours: formule.dureeJours,
      montant: formule.prix,
      dateDebut,
      dateFin,
      statut: "EN_ATTENTE",
      modePaiement: data.modePaiement,
      reference: data.reference,
      note: data.note ?? null,
      confirmeParAdmin: false,
    },
  });

  // Créer la transaction
  await prisma.transaction.create({
    data: {
      proprietaireId,
      bienId,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: "MISE_EN_AVANT" as any,
      statut: "EN_ATTENTE",
      montant: formule.prix,
      modePaiement: data.modePaiement,
      reference: data.reference,
      note: data.note ?? null,
      metadata: { promotionId: promotion.id, formuleNom: formule.nom },
    },
  });

  return promotion;
};

// ─── Admin : confirmer une mise en avant ──────────────────────────────────────

export const confirmerMiseEnAvant = async (promotionId: string) => {
  const promotion = await prisma.promotionHistory.findUnique({
    where: { id: promotionId },
  });
  if (!promotion)
    throw new AppError("Mise en avant introuvable", StatusCodes.NOT_FOUND);
  if ((promotion.statut as string) !== "EN_ATTENTE")
    throw new AppError(
      "Cette mise en avant n'est pas en attente de confirmation",
      StatusCodes.BAD_REQUEST
    );

  const now = new Date();
  const dateFin = new Date();
  dateFin.setDate(dateFin.getDate() + promotion.dureeJours);

  // Activer la promotion
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (prisma.promotionHistory as any).update({
    where: { id: promotionId },
    data: {
      statut: "ACTIVE",
      dateDebut: now,
      dateFin,
      confirmeParAdmin: true,
      dateConfirmation: now,
    },
  });

  // Mettre à jour le bien
  await prisma.bien.update({
    where: { id: promotion.bienId },
    data: {
      estMisEnAvant: true,
      dateDebutPromotion: now,
      dateFinPromotion: dateFin,
    },
  });

  // Mettre à jour la transaction associée
  const transactions = await prisma.transaction.findMany({
    where: {
      proprietaireId: promotion.proprietaireId,
      bienId: promotion.bienId,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: "MISE_EN_AVANT" as any,
      statut: "EN_ATTENTE",
    },
    orderBy: { createdAt: "desc" },
    take: 1,
  });
  if (transactions.length > 0) {
    await prisma.transaction.update({
      where: { id: transactions[0].id },
      data: { statut: "CONFIRME", dateConfirmation: now },
    });
  }

  return prisma.promotionHistory.findUnique({ where: { id: promotionId } });
};

// ─── Lister les mises en avant d'un owner ─────────────────────────────────────

export const getMisesEnAvantOwner = async (proprietaireId: string) => {
  return prisma.promotionHistory.findMany({
    where: { proprietaireId },
    include: { bien: { select: { id: true, titre: true, ville: true } } },
    orderBy: { createdAt: "desc" },
  });
};
