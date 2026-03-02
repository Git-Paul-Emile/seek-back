import type { Response, Request } from "express";
import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

export const getAllActifs = async (_req: Request, res: Response) => {
  const temoignages = await prisma.temoignage.findMany({
    where: { actif: true },
    orderBy: { ordre: "asc" },
    select: {
      id: true,
      nom: true,
      temoignage: true,
    },
  });

  res.json({ data: temoignages });
};
