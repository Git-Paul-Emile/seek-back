import { z } from "zod";

const nomSchema      = z.string().trim().min(2, "Minimum 2 caractères").max(100);
const categorieSchema = z.string().trim().min(2, "Catégorie requise").max(100);

export const createMeublesSchema = z.object({
  items: z
    .array(z.object({ nom: nomSchema, categorie: categorieSchema }))
    .min(1, "Au moins un élément requis"),
});

export const updateMeubleSchema = z.object({
  nom:      nomSchema.optional(),
  categorie: categorieSchema.optional(),
  actif:    z.boolean().optional(),
});

export type CreateMeublesInput = z.infer<typeof createMeublesSchema>;
export type UpdateMeubleInput  = z.infer<typeof updateMeubleSchema>;
