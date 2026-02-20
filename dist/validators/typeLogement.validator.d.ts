import { z } from "zod";
export declare const createTypeLogementSchema: z.ZodObject<{
    nom: z.ZodString;
    ordre: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const updateTypeLogementSchema: z.ZodObject<{
    nom: z.ZodOptional<z.ZodString>;
    actif: z.ZodOptional<z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodBoolean>>;
    ordre: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type CreateTypeLogementInput = z.infer<typeof createTypeLogementSchema>;
export type UpdateTypeLogementInput = z.infer<typeof updateTypeLogementSchema>;
//# sourceMappingURL=typeLogement.validator.d.ts.map