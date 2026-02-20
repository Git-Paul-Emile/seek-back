import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import * as Repo from "../repositories/typeLogement.repository.js";
// ─── Helpers ──────────────────────────────────────────────────────────────────
const toSlug = (nom) => nom
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
// ─── Lecture (publique) ───────────────────────────────────────────────────────
export const getAll = () => Repo.findAll();
export const getAllAdmin = () => Repo.findAllAdmin();
export const getById = (id) => Repo.findById(id);
// ─── Création ─────────────────────────────────────────────────────────────────
export const create = async (data) => {
    const slug = toSlug(data.nom);
    const existing = await Repo.findBySlug(slug);
    if (existing) {
        throw new AppError(`Un type de logement avec le nom "${data.nom}" existe déjà.`, StatusCodes.CONFLICT);
    }
    return Repo.create({ ...data, slug });
};
// ─── Mise à jour ──────────────────────────────────────────────────────────────
export const update = async (id, data) => {
    const existing = await Repo.findById(id);
    if (!existing) {
        throw new AppError("Type de logement introuvable.", StatusCodes.NOT_FOUND);
    }
    const updateData = { ...data };
    // Recalculer le slug si le nom change
    if (data.nom && data.nom !== existing.nom) {
        const newSlug = toSlug(data.nom);
        const conflict = await Repo.findBySlug(newSlug);
        if (conflict && conflict.id !== id) {
            throw new AppError(`Un type de logement avec le nom "${data.nom}" existe déjà.`, StatusCodes.CONFLICT);
        }
        updateData.slug = newSlug;
    }
    // Échanger les ordres si l'ordre change et qu'un autre type occupe déjà la cible
    if (data.ordre !== undefined && data.ordre !== existing.ordre) {
        const occupant = await Repo.findByOrdre(data.ordre);
        if (occupant && occupant.id !== id) {
            await Repo.update(occupant.id, { ordre: existing.ordre });
        }
    }
    return Repo.update(id, updateData);
};
// ─── Suppression ─────────────────────────────────────────────────────────────
export const remove = async (id) => {
    const existing = await Repo.findById(id);
    if (!existing) {
        throw new AppError("Type de logement introuvable.", StatusCodes.NOT_FOUND);
    }
    await Repo.remove(id);
};
//# sourceMappingURL=typeLogement.service.js.map