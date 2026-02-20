import { z } from "zod";
export declare const createCategorieMeubleSchema: z.ZodObject<{
    nom: z.ZodString;
    actif: z.ZodOptional<z.ZodBoolean>;
    ordre: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const updateCategorieMeubleSchema: z.ZodObject<{
    nom: z.ZodOptional<z.ZodString>;
    actif: z.ZodOptional<z.ZodBoolean>;
    ordre: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type CreateCategorieMeubleInput = z.infer<typeof createCategorieMeubleSchema>;
export type UpdateCategorieMeubleInput = z.infer<typeof updateCategorieMeubleSchema>;
//# sourceMappingURL=categorieMeuble.validator.d.ts.map