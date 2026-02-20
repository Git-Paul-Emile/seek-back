import { z } from "zod";
export declare const createCategorieEquipementSchema: z.ZodObject<{
    nom: z.ZodString;
    actif: z.ZodOptional<z.ZodBoolean>;
    ordre: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const updateCategorieEquipementSchema: z.ZodObject<{
    nom: z.ZodOptional<z.ZodString>;
    actif: z.ZodOptional<z.ZodBoolean>;
    ordre: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type CreateCategorieEquipementInput = z.infer<typeof createCategorieEquipementSchema>;
export type UpdateCategorieEquipementInput = z.infer<typeof updateCategorieEquipementSchema>;
//# sourceMappingURL=categorieEquipement.validator.d.ts.map