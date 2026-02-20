import { prisma } from "../config/database.js";
export const findAll = () => prisma.categorieEquipement.findMany({ orderBy: [{ ordre: "asc" }, { nom: "asc" }] });
export const findActive = () => prisma.categorieEquipement.findMany({
    where: { actif: true },
    orderBy: [{ ordre: "asc" }, { nom: "asc" }],
});
export const findById = (id) => prisma.categorieEquipement.findUnique({ where: { id } });
export const findBySlug = (slug) => prisma.categorieEquipement.findUnique({ where: { slug } });
export const findByNom = (nom) => prisma.categorieEquipement.findUnique({ where: { nom } });
export const create = (data) => prisma.categorieEquipement.create({ data });
export const update = (id, data) => prisma.categorieEquipement.update({ where: { id }, data });
export const remove = (id) => prisma.categorieEquipement.delete({ where: { id } });
export const countEquipements = (id) => prisma.equipement.count({ where: { categorieId: id } });
//# sourceMappingURL=categorieEquipement.repository.js.map