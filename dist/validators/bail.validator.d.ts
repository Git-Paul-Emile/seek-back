import { z } from "zod";
export declare const createBailSchema: z.ZodObject<{
    locataireId: z.ZodString;
    typeBail: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    dateDebutBail: z.ZodCoercedDate<unknown>;
    dateFinBail: z.ZodNullable<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    renouvellement: z.ZodOptional<z.ZodBoolean>;
    montantLoyer: z.ZodNumber;
    montantCaution: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    frequencePaiement: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const prolongerBailSchema: z.ZodObject<{
    dateFinBail: z.ZodCoercedDate<unknown>;
}, z.core.$strip>;
//# sourceMappingURL=bail.validator.d.ts.map