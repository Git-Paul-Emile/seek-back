import { z } from "zod";
export declare const createBailSchema: z.ZodObject<{
    locataireId: z.ZodString;
    typeBail: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    dateDebutBail: z.ZodCoercedDate<unknown>;
    dateFinBail: z.ZodNullable<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    renouvellement: z.ZodOptional<z.ZodBoolean>;
    montantLoyer: z.ZodNumber;
    montantCaution: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    cautionVersee: z.ZodOptional<z.ZodBoolean>;
    jourLimitePaiement: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    delaiGrace: z.ZodOptional<z.ZodNumber>;
    frequencePaiement: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const prolongerBailSchema: z.ZodObject<{
    duree: z.ZodUnion<readonly [z.ZodLiteral<6>, z.ZodLiteral<12>]>;
}, z.core.$strip>;
export declare const resilierBailSchema: z.ZodObject<{
    motif: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=bail.validator.d.ts.map