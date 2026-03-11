import { prisma } from "../config/database.js";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";
import { getConfig } from "./configMonetisation.service.js";

// ─── Plan actif d'un propriétaire ─────────────────────────────────────────────

export const getAbonnementActif = async (proprietaireId: string) => {
  const now = new Date();
  return prisma.abonnementProprietaire.findFirst({
    where: {
      proprietaireId,
      statut: "ACTIF",
      dateFin: { gte: now },
    },
    include: { plan: true },
    orderBy: { dateFin: "desc" },
  });
};

export const getPlanEffectif = async (proprietaireId: string) => {
  const abonnement = await getAbonnementActif(proprietaireId);
  if (abonnement) return abonnement.plan;
  return null; // null = Basic
};

// ─── Vérification limite annonces ─────────────────────────────────────────────

export const verifierLimiteAnnonces = async (proprietaireId: string) => {
  const config = await getConfig();
  if (!config.abonnementActive) return;

  const plan = await getPlanEffectif(proprietaireId);
  const maxAnnonces = plan?.maxAnnonces ?? 1; // Basic = 1 annonce par défaut

  if (maxAnnonces === null) return; // illimité

  const nbAnnonces = await prisma.bien.count({
    where: { proprietaireId, actif: true },
  });

  if (nbAnnonces >= maxAnnonces) {
    const planNom = plan?.nom ?? "Basic";
    throw new AppError(
      `Votre plan ${planNom} est limité à ${maxAnnonces} annonce(s) active(s). Passez à un plan supérieur.`,
      StatusCodes.FORBIDDEN
    );
  }
};

// ─── Souscrire un abonnement ───────────────────────────────────────────────────

export const souscrireAbonnement = async (
  proprietaireId: string,
  data: {
    planId: string;
    modePaiement: string;
    reference: string;
    note?: string;
  }
) => {
  const plan = await prisma.planAbonnement.findUnique({
    where: { id: data.planId },
  });
  if (!plan) throw new AppError("Plan introuvable", StatusCodes.NOT_FOUND);
  if (!plan.actif)
    throw new AppError("Ce plan n'est plus disponible", StatusCodes.BAD_REQUEST);

  const dateDebut = new Date();
  const dateFin = new Date();
  dateFin.setDate(dateFin.getDate() + 30);

  const abonnement = await prisma.abonnementProprietaire.create({
    data: {
      proprietaireId,
      planId: data.planId,
      statut: "EN_ATTENTE",
      dateDebut,
      dateFin,
      montant: plan.prix,
      modePaiement: data.modePaiement,
      reference: data.reference,
      note: data.note,
    },
    include: { plan: true },
  });

  // Créer la transaction
  await prisma.transaction.create({
    data: {
      proprietaireId,
      type: "ABONNEMENT",
      statut: "EN_ATTENTE",
      montant: plan.prix,
      modePaiement: data.modePaiement,
      reference: data.reference,
      note: data.note ?? null,
      metadata: { abonnementId: abonnement.id, planNom: plan.nom },
    },
  });

  return abonnement;
};

// ─── Admin : confirmer un abonnement ──────────────────────────────────────────

export const confirmerAbonnement = async (abonnementId: string) => {
  const abonnement = await prisma.abonnementProprietaire.findUnique({
    where: { id: abonnementId },
  });
  if (!abonnement)
    throw new AppError("Abonnement introuvable", StatusCodes.NOT_FOUND);
  if (abonnement.statut !== "EN_ATTENTE")
    throw new AppError("Abonnement déjà traité", StatusCodes.BAD_REQUEST);

  // Expirer l'abonnement actif précédent s'il existe
  await prisma.abonnementProprietaire.updateMany({
    where: { proprietaireId: abonnement.proprietaireId, statut: "ACTIF" },
    data: { statut: "EXPIRE" },
  });

  const dateDebut = new Date();
  const dateFin = new Date();
  dateFin.setDate(dateFin.getDate() + 30);

  const updated = await prisma.abonnementProprietaire.update({
    where: { id: abonnementId },
    data: { statut: "ACTIF", dateDebut, dateFin },
    include: { plan: true },
  });

  // Mettre à jour la transaction associée
  const transactions = await prisma.transaction.findMany({
    where: { proprietaireId: abonnement.proprietaireId, type: "ABONNEMENT", statut: "EN_ATTENTE" },
    orderBy: { createdAt: "desc" },
    take: 1,
  });
  if (transactions.length > 0) {
    const transaction = transactions[0];
    if (transaction) {
      await prisma.transaction.update({
        where: { id: transaction.id },
        data: { statut: "CONFIRME", dateConfirmation: new Date() },
      });
    }
  }

  return updated;
};

// ─── Admin : résilier un abonnement ───────────────────────────────────────────

export const resilierAbonnement = async (abonnementId: string) => {
  const abonnement = await prisma.abonnementProprietaire.findUnique({
    where: { id: abonnementId },
  });
  if (!abonnement)
    throw new AppError("Abonnement introuvable", StatusCodes.NOT_FOUND);
  return prisma.abonnementProprietaire.update({
    where: { id: abonnementId },
    data: { statut: "RESILIE" },
    include: { plan: true },
  });
};

// ─── Lister les abonnements d'un owner ────────────────────────────────────────

export const getAbonnementsOwner = async (proprietaireId: string) => {
  return prisma.abonnementProprietaire.findMany({
    where: { proprietaireId },
    include: { plan: true },
    orderBy: { createdAt: "desc" },
  });
};

// ─── Lister tous les abonnements (admin) ──────────────────────────────────────

export const getAllAbonnements = async (params: {
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
    prisma.abonnementProprietaire.findMany({
      where,
      include: {
        plan: true,
        proprietaire: {
          select: {
            id: true,
            nom: true,
            prenom: true,
            email: true,
            telephone: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.abonnementProprietaire.count({ where }),
  ]);

  return { items, total, page, limit, totalPages: Math.ceil(total / limit) };
};
