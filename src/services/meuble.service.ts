import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import * as Repo from "../repositories/meuble.repository.js";
import type { Meuble } from "../generated/prisma/index.js";

export const getAll = (): Promise<Meuble[]> => Repo.findAll();

export const getAllAdmin = (): Promise<Meuble[]> => Repo.findAllAdmin();

export const createMany = async (
  items: { nom: string; categorie: string }[]
): Promise<Meuble[]> => {
  const checks = await Promise.all(
    items.map((item) => Repo.findByNomAndCategorie(item.nom, item.categorie))
  );
  const duplicates = items
    .filter((_, i) => checks[i] !== null)
    .map((item) => `"${item.nom}" (${item.categorie})`);
  if (duplicates.length > 0) {
    throw new AppError(
      `Déjà existant${duplicates.length > 1 ? "s" : ""} : ${duplicates.join(", ")}`,
      StatusCodes.CONFLICT
    );
  }
  return Repo.createMany(items);
};

export const update = async (
  id: string,
  data: Partial<{ nom: string; categorie: string; actif: boolean }>
): Promise<Meuble> => {
  const existing = await Repo.findById(id);
  if (!existing) throw new AppError("Meuble introuvable.", StatusCodes.NOT_FOUND);

  const nom       = data.nom       ?? existing.nom;
  const categorie = data.categorie ?? existing.categorie;
  if (nom !== existing.nom || categorie !== existing.categorie) {
    const conflict = await Repo.findByNomAndCategorie(nom, categorie);
    if (conflict && conflict.id !== id) {
      throw new AppError(`"${nom}" dans "${categorie}" existe déjà.`, StatusCodes.CONFLICT);
    }
  }

  return Repo.update(id, data);
};

export const remove = async (id: string): Promise<void> => {
  const existing = await Repo.findById(id);
  if (!existing) throw new AppError("Meuble introuvable.", StatusCodes.NOT_FOUND);
  await Repo.remove(id);
};
