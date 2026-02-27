import { prisma } from "../config/database.js";
export const findAllPays = () => prisma.pays.findMany({ orderBy: { nom: "asc" } });
export const findVillesByPays = (paysId) => prisma.ville.findMany({ where: { paysId }, orderBy: { nom: "asc" } });
//# sourceMappingURL=geo.repository.js.map