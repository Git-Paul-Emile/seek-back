import { prisma } from "../config/database.js";

export interface CreateSignalementData {
  type: "ANNONCE" | "PROPRIETAIRE" | "LOCATAIRE";
  motif: string;
  description?: string;
  signaleParType?: string;
  signaleParId?: string;
  signaleParNom?: string;
  signaleParEmail?: string;
  signaleParTel?: string;
  bienId?: string;
  proprietaireSignaleId?: string;
  locataireSignaleId?: string;
}

export interface SignalementListParams {
  page?: number;
  limit?: number;
  statut?: string;
  type?: string;
  search?: string;
}

export const create = async (data: CreateSignalementData) => {
  return prisma.signalement.create({ data });
};

export const findAll = async (params: SignalementListParams = {}) => {
  const page = params.page ?? 1;
  const limit = params.limit ?? 20;
  const skip = (page - 1) * limit;

  const where: any = {};
  if (params.statut) where.statut = params.statut;
  if (params.type) where.type = params.type;
  if (params.search) {
    where.OR = [
      { motif: { contains: params.search, mode: "insensitive" } },
      { signaleParNom: { contains: params.search, mode: "insensitive" } },
      { signaleParEmail: { contains: params.search, mode: "insensitive" } },
    ];
  }

  const [total, items] = await Promise.all([
    prisma.signalement.count({ where }),
    prisma.signalement.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        bien: {
          select: { id: true, titre: true, ville: true, photos: true },
        },
      },
    }),
  ]);

  return {
    items,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};

export const findById = async (id: string) => {
  return prisma.signalement.findUnique({
    where: { id },
    include: {
      bien: {
        select: { id: true, titre: true, ville: true, photos: true, proprietaireId: true },
      },
    },
  });
};

export const countEnAttente = async () => {
  return prisma.signalement.count({ where: { statut: "EN_ATTENTE" } });
};

export const updateStatut = async (
  id: string,
  data: { statut: string; noteAdmin?: string; traitePar?: string; dateTraitement?: Date }
) => {
  return prisma.signalement.update({ where: { id }, data });
};

export const findHistoriqueByBien = async (bienId: string, excludeId?: string) => {
  return prisma.signalement.findMany({
    where: {
      bienId,
      ...(excludeId ? { id: { not: excludeId } } : {}),
    },
    orderBy: { createdAt: "desc" },
    take: 10,
  });
};
