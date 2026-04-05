import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();
export const getAllActifs = async (_req, res) => {
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
//# sourceMappingURL=temoignage.controller.js.map