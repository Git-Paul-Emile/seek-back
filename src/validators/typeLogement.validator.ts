import { z } from "zod";

export const createTypeLogementSchema = z.object({
  nom:    z.string({ required_error: "Le nom est requis" }).min(2, "Minimum 2 caractères").max(50),
  image:  z.string().url("URL d'image invalide").optional(),
  ordre:  z.number().int().min(0).optional(),
});

export const updateTypeLogementSchema = z.object({
  nom:    z.string().min(2, "Minimum 2 caractères").max(50).optional(),
  image:  z.string().url("URL d'image invalide").optional(),
  actif:  z.boolean().optional(),
  ordre:  z.number().int().min(0).optional(),
});

export type CreateTypeLogementInput = z.infer<typeof createTypeLogementSchema>;
export type UpdateTypeLogementInput = z.infer<typeof updateTypeLogementSchema>;
