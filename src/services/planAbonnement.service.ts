import { prisma } from "../config/database.js";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";

export const listPlans = async () => {
  return prisma.planAbonnement.findMany({ orderBy: { ordre: "asc" } });
};

export const listPlansActifs = async () => {
  return prisma.planAbonnement.findMany({
    where: { actif: true },
    orderBy: { ordre: "asc" },
  });
};

export const createPlan = async (data: {
  nom: string;
  prix: number;
  maxAnnonces?: number | null;
  actif?: boolean;
  ordre?: number;
  description?: string | null;
}) => {
  return prisma.planAbonnement.create({ data });
};

export const updatePlan = async (
  id: string,
  data: {
    nom?: string;
    prix?: number;
    maxAnnonces?: number | null;
    actif?: boolean;
    ordre?: number;
    description?: string | null;
  }
) => {
  const plan = await prisma.planAbonnement.findUnique({ where: { id } });
  if (!plan) throw new AppError("Plan introuvable", StatusCodes.NOT_FOUND);
  return prisma.planAbonnement.update({ where: { id }, data });
};

export const deletePlan = async (id: string) => {
  const plan = await prisma.planAbonnement.findUnique({ where: { id } });
  if (!plan) throw new AppError("Plan introuvable", StatusCodes.NOT_FOUND);
  const hasAbonnements = await prisma.abonnementProprietaire.count({
    where: { planId: id },
  });
  if (hasAbonnements > 0)
    throw new AppError(
      "Ce plan a des abonnements liés, impossible de le supprimer",
      StatusCodes.CONFLICT
    );
  return prisma.planAbonnement.delete({ where: { id } });
};
