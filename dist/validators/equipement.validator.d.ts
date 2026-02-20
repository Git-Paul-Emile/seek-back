import { z } from "zod";
export declare const createEquipementsSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        nom: z.ZodString;
        categorieId: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const updateEquipementSchema: z.ZodObject<{
    nom: z.ZodOptional<z.ZodString>;
    categorieId: z.ZodOptional<z.ZodString>;
    actif: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateEquipementsInput = z.infer<typeof createEquipementsSchema>;
export type UpdateEquipementInput = z.infer<typeof updateEquipementSchema>;
//# sourceMappingURL=equipement.validator.d.ts.map