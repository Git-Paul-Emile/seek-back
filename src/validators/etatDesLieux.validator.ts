import { z } from "zod";

export const typeEtatDesLieuxSchema = z.enum(["ENTREE", "SORTIE"]);
export const statutEtatDesLieuxSchema = z.enum(["BROUILLON", "VALIDE"]);
export const etatElementSchema = z.enum(["NEUF", "BON", "MOYEN", "MAUVAIS", "HS"]);

export const createEtatDesLieuxSchema = z.object({
  type: typeEtatDesLieuxSchema,
  dateEtat: z.coerce.date().optional(),
  commentaireGlobal: z.string().trim().max(5000).optional().nullable(),
});

export const updateEtatDesLieuxSchema = z.object({
  dateEtat: z.coerce.date().optional(),
  commentaireGlobal: z.string().trim().max(5000).optional().nullable(),
  statut: statutEtatDesLieuxSchema.optional(),
});

export const createEtatDesLieuxItemSchema = z.object({
  piece: z.string().trim().min(1, "La pièce est requise").max(120),
  element: z.string().trim().min(1, "L'élément est requis").max(180),
  etat: etatElementSchema,
  commentaire: z.string().trim().max(3000).optional().nullable(),
  ordre: z.number().int().min(0).max(5000).optional(),
});

export const updateEtatDesLieuxItemSchema = createEtatDesLieuxItemSchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  "Aucune donnée à mettre à jour"
);
