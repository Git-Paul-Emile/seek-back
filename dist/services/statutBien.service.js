import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import * as Repo from "../repositories/statutBien.repository.js";
const toSlug = (nom) => nom
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
export const getAll = () => Repo.findAll();
export const getAllAdmin = () => Repo.findAllAdmin();
export const getById = (id) => Repo.findById(id);
export const create = async (data) => {
    const slug = toSlug(data.nom);
    const existing = await Repo.findBySlug(slug);
    if (existing) {
        throw new AppError(`Un statut avec le nom "${data.nom}" existe déjà.`, StatusCodes.CONFLICT);
    }
    return Repo.create({ ...data, slug });
};
export const update = async (id, data) => {
    const existing = await Repo.findById(id);
    if (!existing) {
        throw new AppError("Statut introuvable.", StatusCodes.NOT_FOUND);
    }
    const updateData = { ...data };
    if (data.nom && data.nom !== existing.nom) {
        const newSlug = toSlug(data.nom);
        const conflict = await Repo.findBySlug(newSlug);
        if (conflict && conflict.id !== id) {
            throw new AppError(`Un statut avec le nom "${data.nom}" existe déjà.`, StatusCodes.CONFLICT);
        }
        updateData.slug = newSlug;
    }
    if (data.ordre !== undefined && data.ordre !== existing.ordre) {
        const occupant = await Repo.findByOrdre(data.ordre);
        if (occupant && occupant.id !== id) {
            await Repo.update(occupant.id, { ordre: existing.ordre });
        }
    }
    return Repo.update(id, updateData);
};
export const remove = async (id) => {
    const existing = await Repo.findById(id);
    if (!existing) {
        throw new AppError("Statut introuvable.", StatusCodes.NOT_FOUND);
    }
    await Repo.remove(id);
};
//# sourceMappingURL=statutBien.service.js.map