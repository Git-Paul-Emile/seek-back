import { prisma } from "../config/database.js";
const include = { categorie: { select: { id: true, nom: true, slug: true } } };
export const findAll = () => prisma.meuble.findMany({
    where: { actif: true },
    include,
    orderBy: [{ categorie: { nom: "asc" } }, { nom: "asc" }],
});
export const findAllAdmin = () => prisma.meuble.findMany({
    include,
    orderBy: [{ categorie: { nom: "asc" } }, { nom: "asc" }],
});
export const findById = (id) => prisma.meuble.findUnique({ where: { id }, include });
export const findByNomAndCategorie = (nom, categorieId) => prisma.meuble.findUnique({ where: { nom_categorieId: { nom, categorieId } }, include });
export const createMany = (items) => prisma.$transaction(items.map((item) => prisma.meuble.create({ data: item, include })));
export const update = (id, data) => prisma.meuble.update({ where: { id }, data, include });
export const remove = (id) => prisma.meuble.delete({ where: { id } });
//# sourceMappingURL=meuble.repository.js.map