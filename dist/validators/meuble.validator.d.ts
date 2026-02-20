import { z } from "zod";
export declare const createMeublesSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        nom: z.ZodString;
        categorieId: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const updateMeubleSchema: z.ZodObject<{
    nom: z.ZodOptional<z.ZodString>;
    categorieId: z.ZodOptional<z.ZodString>;
    actif: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateMeublesInput = z.infer<typeof createMeublesSchema>;
export type UpdateMeubleInput = z.infer<typeof updateMeubleSchema>;
//# sourceMappingURL=meuble.validator.d.ts.map