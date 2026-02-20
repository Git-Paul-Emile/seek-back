import { prisma } from "../config/database.js";
const include = { categorie: { select: { id: true, nom: true, slug: true } } };
export const findAll = () => prisma.equipement.findMany({
    where: { actif: true },
    include,
    orderBy: [{ categorie: { nom: "asc" } }, { nom: "asc" }],
});
export const findAllAdmin = () => prisma.equipement.findMany({
    include,
    orderBy: [{ categorie: { nom: "asc" } }, { nom: "asc" }],
});
export const findById = (id) => prisma.equipement.findUnique({ where: { id }, include });
export const findByNomAndCategorie = (nom, categorieId) => prisma.equipement.findUnique({ where: { nom_categorieId: { nom, categorieId } }, include });
export const createMany = (items) => prisma.$transaction(items.map((item) => prisma.equipement.create({ data: item, include })));
export const update = (id, data) => prisma.equipement.update({ where: { id }, data, include });
export const remove = (id) => prisma.equipement.delete({ where: { id } });
//# sourceMappingURL=equipement.repository.js.map