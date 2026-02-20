import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import * as Repo from "../repositories/categorieMeuble.repository.js";
function slugify(nom) {
    return nom
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}
export const getAll = () => Repo.findAll();
export const getActive = () => Repo.findActive();
export const create = async (data) => {
    const existing = await Repo.findByNom(data.nom);
    if (existing)
        throw new AppError(`La catégorie "${data.nom}" existe déjà.`, StatusCodes.CONFLICT);
    const slug = slugify(data.nom);
    const slugExists = await Repo.findBySlug(slug);
    if (slugExists)
        throw new AppError(`Slug "${slug}" déjà utilisé.`, StatusCodes.CONFLICT);
    const all = await Repo.findAll();
    const maxOrdre = all.reduce((m, c) => Math.max(m, c.ordre), 0);
    return Repo.create({ nom: data.nom, slug, actif: data.actif ?? true, ordre: data.ordre ?? maxOrdre + 1 });
};
export const update = async (id, data) => {
    const existing = await Repo.findById(id);
    if (!existing)
        throw new AppError("Catégorie introuvable.", StatusCodes.NOT_FOUND);
    const updateData = { ...data };
    if (data.nom && data.nom !== existing.nom) {
        const conflict = await Repo.findByNom(data.nom);
        if (conflict)
            throw new AppError(`La catégorie "${data.nom}" existe déjà.`, StatusCodes.CONFLICT);
        updateData.slug = slugify(data.nom);
    }
    return Repo.update(id, updateData);
};
export const remove = async (id) => {
    const existing = await Repo.findById(id);
    if (!existing)
        throw new AppError("Catégorie introuvable.", StatusCodes.NOT_FOUND);
    const count = await Repo.countMeubles(id);
    if (count > 0) {
        throw new AppError(`Impossible de supprimer : ${count} meuble${count > 1 ? "s" : ""} utilise${count > 1 ? "nt" : ""} cette catégorie.`, StatusCodes.CONFLICT);
    }
    await Repo.remove(id);
};
//# sourceMappingURL=categorieMeuble.service.js.map