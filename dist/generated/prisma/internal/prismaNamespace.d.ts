import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
 * Metrics
 */
export type Metrics = runtime.Metrics;
export type Metric<T> = runtime.Metric<T>;
export type MetricHistogram = runtime.MetricHistogram;
export type MetricHistogramBucket = runtime.MetricHistogramBucket;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 6.19.2
 * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Pays: "Pays";
    readonly Ville: "Ville";
    readonly Quartier: "Quartier";
    readonly TypeLogement: "TypeLogement";
    readonly TypeTransaction: "TypeTransaction";
    readonly StatutBien: "StatutBien";
    readonly CategorieMeuble: "CategorieMeuble";
    readonly CategorieEquipement: "CategorieEquipement";
    readonly Meuble: "Meuble";
    readonly Equipement: "Equipement";
    readonly FormulePremium: "FormulePremium";
    readonly Bien: "Bien";
    readonly ComptePublic: "ComptePublic";
    readonly ComptePublicRefreshToken: "ComptePublicRefreshToken";
    readonly Favori: "Favori";
    readonly VueBien: "VueBien";
    readonly BienEquipement: "BienEquipement";
    readonly BienMeuble: "BienMeuble";
    readonly DocumentBien: "DocumentBien";
    readonly Etablissement: "Etablissement";
    readonly Locataire: "Locataire";
    readonly LocataireVerification: "LocataireVerification";
    readonly BailLocation: "BailLocation";
    readonly EcheancierLoyer: "EcheancierLoyer";
    readonly Quittance: "Quittance";
    readonly Notification: "Notification";
    readonly DepotCaution: "DepotCaution";
    readonly ModeleContrat: "ModeleContrat";
    readonly Contrat: "Contrat";
    readonly LocataireRefreshToken: "LocataireRefreshToken";
    readonly LocatairePasswordResetToken: "LocatairePasswordResetToken";
    readonly VerificationDocuments: "VerificationDocuments";
    readonly Proprietaire: "Proprietaire";
    readonly MessageInterne: "MessageInterne";
    readonly MessageInterneLocataire: "MessageInterneLocataire";
    readonly ProprietaireRefreshToken: "ProprietaireRefreshToken";
    readonly PasswordResetToken: "PasswordResetToken";
    readonly Admin: "Admin";
    readonly RefreshToken: "RefreshToken";
    readonly Alerte: "Alerte";
    readonly Transaction: "Transaction";
    readonly Temoignage: "Temoignage";
    readonly PromotionHistory: "PromotionHistory";
    readonly ConfigMonetisation: "ConfigMonetisation";
    readonly ConfigSite: "ConfigSite";
    readonly BailInvitation: "BailInvitation";
    readonly Signalement: "Signalement";
    readonly EtatDesLieux: "EtatDesLieux";
    readonly PieceEtatDesLieux: "PieceEtatDesLieux";
    readonly ElementEtatDesLieux: "ElementEtatDesLieux";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "pays" | "ville" | "quartier" | "typeLogement" | "typeTransaction" | "statutBien" | "categorieMeuble" | "categorieEquipement" | "meuble" | "equipement" | "formulePremium" | "bien" | "comptePublic" | "comptePublicRefreshToken" | "favori" | "vueBien" | "bienEquipement" | "bienMeuble" | "documentBien" | "etablissement" | "locataire" | "locataireVerification" | "bailLocation" | "echeancierLoyer" | "quittance" | "notification" | "depotCaution" | "modeleContrat" | "contrat" | "locataireRefreshToken" | "locatairePasswordResetToken" | "verificationDocuments" | "proprietaire" | "messageInterne" | "messageInterneLocataire" | "proprietaireRefreshToken" | "passwordResetToken" | "admin" | "refreshToken" | "alerte" | "transaction" | "temoignage" | "promotionHistory" | "configMonetisation" | "configSite" | "bailInvitation" | "signalement" | "etatDesLieux" | "pieceEtatDesLieux" | "elementEtatDesLieux";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Pays: {
            payload: Prisma.$PaysPayload<ExtArgs>;
            fields: Prisma.PaysFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PaysFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaysPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PaysFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaysPayload>;
                };
                findFirst: {
                    args: Prisma.PaysFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaysPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PaysFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaysPayload>;
                };
                findMany: {
                    args: Prisma.PaysFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaysPayload>[];
                };
                create: {
                    args: Prisma.PaysCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaysPayload>;
                };
                createMany: {
                    args: Prisma.PaysCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PaysCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaysPayload>[];
                };
                delete: {
                    args: Prisma.PaysDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaysPayload>;
                };
                update: {
                    args: Prisma.PaysUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaysPayload>;
                };
                deleteMany: {
                    args: Prisma.PaysDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PaysUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PaysUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaysPayload>[];
                };
                upsert: {
                    args: Prisma.PaysUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaysPayload>;
                };
                aggregate: {
                    args: Prisma.PaysAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePays>;
                };
                groupBy: {
                    args: Prisma.PaysGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaysGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PaysCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaysCountAggregateOutputType> | number;
                };
            };
        };
        Ville: {
            payload: Prisma.$VillePayload<ExtArgs>;
            fields: Prisma.VilleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VilleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VillePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VilleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VillePayload>;
                };
                findFirst: {
                    args: Prisma.VilleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VillePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VilleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VillePayload>;
                };
                findMany: {
                    args: Prisma.VilleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VillePayload>[];
                };
                create: {
                    args: Prisma.VilleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VillePayload>;
                };
                createMany: {
                    args: Prisma.VilleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VilleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VillePayload>[];
                };
                delete: {
                    args: Prisma.VilleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VillePayload>;
                };
                update: {
                    args: Prisma.VilleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VillePayload>;
                };
                deleteMany: {
                    args: Prisma.VilleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VilleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VilleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VillePayload>[];
                };
                upsert: {
                    args: Prisma.VilleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VillePayload>;
                };
                aggregate: {
                    args: Prisma.VilleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVille>;
                };
                groupBy: {
                    args: Prisma.VilleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VilleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VilleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VilleCountAggregateOutputType> | number;
                };
            };
        };
        Quartier: {
            payload: Prisma.$QuartierPayload<ExtArgs>;
            fields: Prisma.QuartierFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QuartierFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuartierPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QuartierFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuartierPayload>;
                };
                findFirst: {
                    args: Prisma.QuartierFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuartierPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QuartierFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuartierPayload>;
                };
                findMany: {
                    args: Prisma.QuartierFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuartierPayload>[];
                };
                create: {
                    args: Prisma.QuartierCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuartierPayload>;
                };
                createMany: {
                    args: Prisma.QuartierCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QuartierCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuartierPayload>[];
                };
                delete: {
                    args: Prisma.QuartierDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuartierPayload>;
                };
                update: {
                    args: Prisma.QuartierUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuartierPayload>;
                };
                deleteMany: {
                    args: Prisma.QuartierDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QuartierUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QuartierUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuartierPayload>[];
                };
                upsert: {
                    args: Prisma.QuartierUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuartierPayload>;
                };
                aggregate: {
                    args: Prisma.QuartierAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuartier>;
                };
                groupBy: {
                    args: Prisma.QuartierGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuartierGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QuartierCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuartierCountAggregateOutputType> | number;
                };
            };
        };
        TypeLogement: {
            payload: Prisma.$TypeLogementPayload<ExtArgs>;
            fields: Prisma.TypeLogementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TypeLogementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeLogementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TypeLogementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeLogementPayload>;
                };
                findFirst: {
                    args: Prisma.TypeLogementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeLogementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TypeLogementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeLogementPayload>;
                };
                findMany: {
                    args: Prisma.TypeLogementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeLogementPayload>[];
                };
                create: {
                    args: Prisma.TypeLogementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeLogementPayload>;
                };
                createMany: {
                    args: Prisma.TypeLogementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TypeLogementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeLogementPayload>[];
                };
                delete: {
                    args: Prisma.TypeLogementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeLogementPayload>;
                };
                update: {
                    args: Prisma.TypeLogementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeLogementPayload>;
                };
                deleteMany: {
                    args: Prisma.TypeLogementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TypeLogementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TypeLogementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeLogementPayload>[];
                };
                upsert: {
                    args: Prisma.TypeLogementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeLogementPayload>;
                };
                aggregate: {
                    args: Prisma.TypeLogementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTypeLogement>;
                };
                groupBy: {
                    args: Prisma.TypeLogementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TypeLogementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TypeLogementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TypeLogementCountAggregateOutputType> | number;
                };
            };
        };
        TypeTransaction: {
            payload: Prisma.$TypeTransactionPayload<ExtArgs>;
            fields: Prisma.TypeTransactionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TypeTransactionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeTransactionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TypeTransactionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeTransactionPayload>;
                };
                findFirst: {
                    args: Prisma.TypeTransactionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeTransactionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TypeTransactionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeTransactionPayload>;
                };
                findMany: {
                    args: Prisma.TypeTransactionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeTransactionPayload>[];
                };
                create: {
                    args: Prisma.TypeTransactionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeTransactionPayload>;
                };
                createMany: {
                    args: Prisma.TypeTransactionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TypeTransactionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeTransactionPayload>[];
                };
                delete: {
                    args: Prisma.TypeTransactionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeTransactionPayload>;
                };
                update: {
                    args: Prisma.TypeTransactionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeTransactionPayload>;
                };
                deleteMany: {
                    args: Prisma.TypeTransactionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TypeTransactionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TypeTransactionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeTransactionPayload>[];
                };
                upsert: {
                    args: Prisma.TypeTransactionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeTransactionPayload>;
                };
                aggregate: {
                    args: Prisma.TypeTransactionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTypeTransaction>;
                };
                groupBy: {
                    args: Prisma.TypeTransactionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TypeTransactionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TypeTransactionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TypeTransactionCountAggregateOutputType> | number;
                };
            };
        };
        StatutBien: {
            payload: Prisma.$StatutBienPayload<ExtArgs>;
            fields: Prisma.StatutBienFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StatutBienFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatutBienPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StatutBienFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatutBienPayload>;
                };
                findFirst: {
                    args: Prisma.StatutBienFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatutBienPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StatutBienFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatutBienPayload>;
                };
                findMany: {
                    args: Prisma.StatutBienFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatutBienPayload>[];
                };
                create: {
                    args: Prisma.StatutBienCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatutBienPayload>;
                };
                createMany: {
                    args: Prisma.StatutBienCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StatutBienCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatutBienPayload>[];
                };
                delete: {
                    args: Prisma.StatutBienDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatutBienPayload>;
                };
                update: {
                    args: Prisma.StatutBienUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatutBienPayload>;
                };
                deleteMany: {
                    args: Prisma.StatutBienDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StatutBienUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StatutBienUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatutBienPayload>[];
                };
                upsert: {
                    args: Prisma.StatutBienUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatutBienPayload>;
                };
                aggregate: {
                    args: Prisma.StatutBienAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStatutBien>;
                };
                groupBy: {
                    args: Prisma.StatutBienGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StatutBienGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StatutBienCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StatutBienCountAggregateOutputType> | number;
                };
            };
        };
        CategorieMeuble: {
            payload: Prisma.$CategorieMeublePayload<ExtArgs>;
            fields: Prisma.CategorieMeubleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CategorieMeubleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieMeublePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CategorieMeubleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieMeublePayload>;
                };
                findFirst: {
                    args: Prisma.CategorieMeubleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieMeublePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CategorieMeubleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieMeublePayload>;
                };
                findMany: {
                    args: Prisma.CategorieMeubleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieMeublePayload>[];
                };
                create: {
                    args: Prisma.CategorieMeubleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieMeublePayload>;
                };
                createMany: {
                    args: Prisma.CategorieMeubleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CategorieMeubleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieMeublePayload>[];
                };
                delete: {
                    args: Prisma.CategorieMeubleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieMeublePayload>;
                };
                update: {
                    args: Prisma.CategorieMeubleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieMeublePayload>;
                };
                deleteMany: {
                    args: Prisma.CategorieMeubleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CategorieMeubleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CategorieMeubleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieMeublePayload>[];
                };
                upsert: {
                    args: Prisma.CategorieMeubleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieMeublePayload>;
                };
                aggregate: {
                    args: Prisma.CategorieMeubleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategorieMeuble>;
                };
                groupBy: {
                    args: Prisma.CategorieMeubleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategorieMeubleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CategorieMeubleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategorieMeubleCountAggregateOutputType> | number;
                };
            };
        };
        CategorieEquipement: {
            payload: Prisma.$CategorieEquipementPayload<ExtArgs>;
            fields: Prisma.CategorieEquipementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CategorieEquipementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieEquipementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CategorieEquipementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieEquipementPayload>;
                };
                findFirst: {
                    args: Prisma.CategorieEquipementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieEquipementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CategorieEquipementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieEquipementPayload>;
                };
                findMany: {
                    args: Prisma.CategorieEquipementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieEquipementPayload>[];
                };
                create: {
                    args: Prisma.CategorieEquipementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieEquipementPayload>;
                };
                createMany: {
                    args: Prisma.CategorieEquipementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CategorieEquipementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieEquipementPayload>[];
                };
                delete: {
                    args: Prisma.CategorieEquipementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieEquipementPayload>;
                };
                update: {
                    args: Prisma.CategorieEquipementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieEquipementPayload>;
                };
                deleteMany: {
                    args: Prisma.CategorieEquipementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CategorieEquipementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CategorieEquipementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieEquipementPayload>[];
                };
                upsert: {
                    args: Prisma.CategorieEquipementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategorieEquipementPayload>;
                };
                aggregate: {
                    args: Prisma.CategorieEquipementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategorieEquipement>;
                };
                groupBy: {
                    args: Prisma.CategorieEquipementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategorieEquipementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CategorieEquipementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategorieEquipementCountAggregateOutputType> | number;
                };
            };
        };
        Meuble: {
            payload: Prisma.$MeublePayload<ExtArgs>;
            fields: Prisma.MeubleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MeubleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeublePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MeubleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeublePayload>;
                };
                findFirst: {
                    args: Prisma.MeubleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeublePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MeubleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeublePayload>;
                };
                findMany: {
                    args: Prisma.MeubleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeublePayload>[];
                };
                create: {
                    args: Prisma.MeubleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeublePayload>;
                };
                createMany: {
                    args: Prisma.MeubleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MeubleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeublePayload>[];
                };
                delete: {
                    args: Prisma.MeubleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeublePayload>;
                };
                update: {
                    args: Prisma.MeubleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeublePayload>;
                };
                deleteMany: {
                    args: Prisma.MeubleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MeubleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MeubleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeublePayload>[];
                };
                upsert: {
                    args: Prisma.MeubleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MeublePayload>;
                };
                aggregate: {
                    args: Prisma.MeubleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMeuble>;
                };
                groupBy: {
                    args: Prisma.MeubleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MeubleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MeubleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MeubleCountAggregateOutputType> | number;
                };
            };
        };
        Equipement: {
            payload: Prisma.$EquipementPayload<ExtArgs>;
            fields: Prisma.EquipementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EquipementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquipementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EquipementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquipementPayload>;
                };
                findFirst: {
                    args: Prisma.EquipementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquipementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EquipementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquipementPayload>;
                };
                findMany: {
                    args: Prisma.EquipementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquipementPayload>[];
                };
                create: {
                    args: Prisma.EquipementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquipementPayload>;
                };
                createMany: {
                    args: Prisma.EquipementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EquipementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquipementPayload>[];
                };
                delete: {
                    args: Prisma.EquipementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquipementPayload>;
                };
                update: {
                    args: Prisma.EquipementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquipementPayload>;
                };
                deleteMany: {
                    args: Prisma.EquipementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EquipementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EquipementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquipementPayload>[];
                };
                upsert: {
                    args: Prisma.EquipementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EquipementPayload>;
                };
                aggregate: {
                    args: Prisma.EquipementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEquipement>;
                };
                groupBy: {
                    args: Prisma.EquipementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EquipementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EquipementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EquipementCountAggregateOutputType> | number;
                };
            };
        };
        FormulePremium: {
            payload: Prisma.$FormulePremiumPayload<ExtArgs>;
            fields: Prisma.FormulePremiumFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FormulePremiumFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormulePremiumPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FormulePremiumFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormulePremiumPayload>;
                };
                findFirst: {
                    args: Prisma.FormulePremiumFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormulePremiumPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FormulePremiumFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormulePremiumPayload>;
                };
                findMany: {
                    args: Prisma.FormulePremiumFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormulePremiumPayload>[];
                };
                create: {
                    args: Prisma.FormulePremiumCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormulePremiumPayload>;
                };
                createMany: {
                    args: Prisma.FormulePremiumCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FormulePremiumCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormulePremiumPayload>[];
                };
                delete: {
                    args: Prisma.FormulePremiumDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormulePremiumPayload>;
                };
                update: {
                    args: Prisma.FormulePremiumUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormulePremiumPayload>;
                };
                deleteMany: {
                    args: Prisma.FormulePremiumDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FormulePremiumUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FormulePremiumUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormulePremiumPayload>[];
                };
                upsert: {
                    args: Prisma.FormulePremiumUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormulePremiumPayload>;
                };
                aggregate: {
                    args: Prisma.FormulePremiumAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFormulePremium>;
                };
                groupBy: {
                    args: Prisma.FormulePremiumGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FormulePremiumGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FormulePremiumCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FormulePremiumCountAggregateOutputType> | number;
                };
            };
        };
        Bien: {
            payload: Prisma.$BienPayload<ExtArgs>;
            fields: Prisma.BienFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BienFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BienFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienPayload>;
                };
                findFirst: {
                    args: Prisma.BienFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BienFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienPayload>;
                };
                findMany: {
                    args: Prisma.BienFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienPayload>[];
                };
                create: {
                    args: Prisma.BienCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienPayload>;
                };
                createMany: {
                    args: Prisma.BienCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BienCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienPayload>[];
                };
                delete: {
                    args: Prisma.BienDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienPayload>;
                };
                update: {
                    args: Prisma.BienUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienPayload>;
                };
                deleteMany: {
                    args: Prisma.BienDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BienUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BienUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienPayload>[];
                };
                upsert: {
                    args: Prisma.BienUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienPayload>;
                };
                aggregate: {
                    args: Prisma.BienAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBien>;
                };
                groupBy: {
                    args: Prisma.BienGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BienGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BienCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BienCountAggregateOutputType> | number;
                };
            };
        };
        ComptePublic: {
            payload: Prisma.$ComptePublicPayload<ExtArgs>;
            fields: Prisma.ComptePublicFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ComptePublicFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ComptePublicFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicPayload>;
                };
                findFirst: {
                    args: Prisma.ComptePublicFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ComptePublicFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicPayload>;
                };
                findMany: {
                    args: Prisma.ComptePublicFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicPayload>[];
                };
                create: {
                    args: Prisma.ComptePublicCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicPayload>;
                };
                createMany: {
                    args: Prisma.ComptePublicCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ComptePublicCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicPayload>[];
                };
                delete: {
                    args: Prisma.ComptePublicDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicPayload>;
                };
                update: {
                    args: Prisma.ComptePublicUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicPayload>;
                };
                deleteMany: {
                    args: Prisma.ComptePublicDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ComptePublicUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ComptePublicUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicPayload>[];
                };
                upsert: {
                    args: Prisma.ComptePublicUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicPayload>;
                };
                aggregate: {
                    args: Prisma.ComptePublicAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateComptePublic>;
                };
                groupBy: {
                    args: Prisma.ComptePublicGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ComptePublicGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ComptePublicCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ComptePublicCountAggregateOutputType> | number;
                };
            };
        };
        ComptePublicRefreshToken: {
            payload: Prisma.$ComptePublicRefreshTokenPayload<ExtArgs>;
            fields: Prisma.ComptePublicRefreshTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ComptePublicRefreshTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicRefreshTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ComptePublicRefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicRefreshTokenPayload>;
                };
                findFirst: {
                    args: Prisma.ComptePublicRefreshTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicRefreshTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ComptePublicRefreshTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicRefreshTokenPayload>;
                };
                findMany: {
                    args: Prisma.ComptePublicRefreshTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicRefreshTokenPayload>[];
                };
                create: {
                    args: Prisma.ComptePublicRefreshTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicRefreshTokenPayload>;
                };
                createMany: {
                    args: Prisma.ComptePublicRefreshTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ComptePublicRefreshTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicRefreshTokenPayload>[];
                };
                delete: {
                    args: Prisma.ComptePublicRefreshTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicRefreshTokenPayload>;
                };
                update: {
                    args: Prisma.ComptePublicRefreshTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicRefreshTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.ComptePublicRefreshTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ComptePublicRefreshTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ComptePublicRefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicRefreshTokenPayload>[];
                };
                upsert: {
                    args: Prisma.ComptePublicRefreshTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComptePublicRefreshTokenPayload>;
                };
                aggregate: {
                    args: Prisma.ComptePublicRefreshTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateComptePublicRefreshToken>;
                };
                groupBy: {
                    args: Prisma.ComptePublicRefreshTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ComptePublicRefreshTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ComptePublicRefreshTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ComptePublicRefreshTokenCountAggregateOutputType> | number;
                };
            };
        };
        Favori: {
            payload: Prisma.$FavoriPayload<ExtArgs>;
            fields: Prisma.FavoriFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FavoriFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FavoriFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriPayload>;
                };
                findFirst: {
                    args: Prisma.FavoriFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FavoriFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriPayload>;
                };
                findMany: {
                    args: Prisma.FavoriFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriPayload>[];
                };
                create: {
                    args: Prisma.FavoriCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriPayload>;
                };
                createMany: {
                    args: Prisma.FavoriCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FavoriCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriPayload>[];
                };
                delete: {
                    args: Prisma.FavoriDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriPayload>;
                };
                update: {
                    args: Prisma.FavoriUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriPayload>;
                };
                deleteMany: {
                    args: Prisma.FavoriDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FavoriUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FavoriUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriPayload>[];
                };
                upsert: {
                    args: Prisma.FavoriUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoriPayload>;
                };
                aggregate: {
                    args: Prisma.FavoriAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFavori>;
                };
                groupBy: {
                    args: Prisma.FavoriGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FavoriGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FavoriCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FavoriCountAggregateOutputType> | number;
                };
            };
        };
        VueBien: {
            payload: Prisma.$VueBienPayload<ExtArgs>;
            fields: Prisma.VueBienFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VueBienFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VueBienPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VueBienFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VueBienPayload>;
                };
                findFirst: {
                    args: Prisma.VueBienFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VueBienPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VueBienFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VueBienPayload>;
                };
                findMany: {
                    args: Prisma.VueBienFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VueBienPayload>[];
                };
                create: {
                    args: Prisma.VueBienCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VueBienPayload>;
                };
                createMany: {
                    args: Prisma.VueBienCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VueBienCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VueBienPayload>[];
                };
                delete: {
                    args: Prisma.VueBienDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VueBienPayload>;
                };
                update: {
                    args: Prisma.VueBienUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VueBienPayload>;
                };
                deleteMany: {
                    args: Prisma.VueBienDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VueBienUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VueBienUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VueBienPayload>[];
                };
                upsert: {
                    args: Prisma.VueBienUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VueBienPayload>;
                };
                aggregate: {
                    args: Prisma.VueBienAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVueBien>;
                };
                groupBy: {
                    args: Prisma.VueBienGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VueBienGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VueBienCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VueBienCountAggregateOutputType> | number;
                };
            };
        };
        BienEquipement: {
            payload: Prisma.$BienEquipementPayload<ExtArgs>;
            fields: Prisma.BienEquipementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BienEquipementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienEquipementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BienEquipementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienEquipementPayload>;
                };
                findFirst: {
                    args: Prisma.BienEquipementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienEquipementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BienEquipementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienEquipementPayload>;
                };
                findMany: {
                    args: Prisma.BienEquipementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienEquipementPayload>[];
                };
                create: {
                    args: Prisma.BienEquipementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienEquipementPayload>;
                };
                createMany: {
                    args: Prisma.BienEquipementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BienEquipementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienEquipementPayload>[];
                };
                delete: {
                    args: Prisma.BienEquipementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienEquipementPayload>;
                };
                update: {
                    args: Prisma.BienEquipementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienEquipementPayload>;
                };
                deleteMany: {
                    args: Prisma.BienEquipementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BienEquipementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BienEquipementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienEquipementPayload>[];
                };
                upsert: {
                    args: Prisma.BienEquipementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienEquipementPayload>;
                };
                aggregate: {
                    args: Prisma.BienEquipementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBienEquipement>;
                };
                groupBy: {
                    args: Prisma.BienEquipementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BienEquipementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BienEquipementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BienEquipementCountAggregateOutputType> | number;
                };
            };
        };
        BienMeuble: {
            payload: Prisma.$BienMeublePayload<ExtArgs>;
            fields: Prisma.BienMeubleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BienMeubleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienMeublePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BienMeubleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienMeublePayload>;
                };
                findFirst: {
                    args: Prisma.BienMeubleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienMeublePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BienMeubleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienMeublePayload>;
                };
                findMany: {
                    args: Prisma.BienMeubleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienMeublePayload>[];
                };
                create: {
                    args: Prisma.BienMeubleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienMeublePayload>;
                };
                createMany: {
                    args: Prisma.BienMeubleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BienMeubleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienMeublePayload>[];
                };
                delete: {
                    args: Prisma.BienMeubleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienMeublePayload>;
                };
                update: {
                    args: Prisma.BienMeubleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienMeublePayload>;
                };
                deleteMany: {
                    args: Prisma.BienMeubleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BienMeubleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BienMeubleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienMeublePayload>[];
                };
                upsert: {
                    args: Prisma.BienMeubleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BienMeublePayload>;
                };
                aggregate: {
                    args: Prisma.BienMeubleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBienMeuble>;
                };
                groupBy: {
                    args: Prisma.BienMeubleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BienMeubleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BienMeubleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BienMeubleCountAggregateOutputType> | number;
                };
            };
        };
        DocumentBien: {
            payload: Prisma.$DocumentBienPayload<ExtArgs>;
            fields: Prisma.DocumentBienFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DocumentBienFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentBienPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DocumentBienFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentBienPayload>;
                };
                findFirst: {
                    args: Prisma.DocumentBienFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentBienPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DocumentBienFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentBienPayload>;
                };
                findMany: {
                    args: Prisma.DocumentBienFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentBienPayload>[];
                };
                create: {
                    args: Prisma.DocumentBienCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentBienPayload>;
                };
                createMany: {
                    args: Prisma.DocumentBienCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DocumentBienCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentBienPayload>[];
                };
                delete: {
                    args: Prisma.DocumentBienDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentBienPayload>;
                };
                update: {
                    args: Prisma.DocumentBienUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentBienPayload>;
                };
                deleteMany: {
                    args: Prisma.DocumentBienDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DocumentBienUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DocumentBienUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentBienPayload>[];
                };
                upsert: {
                    args: Prisma.DocumentBienUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentBienPayload>;
                };
                aggregate: {
                    args: Prisma.DocumentBienAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDocumentBien>;
                };
                groupBy: {
                    args: Prisma.DocumentBienGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DocumentBienGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DocumentBienCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DocumentBienCountAggregateOutputType> | number;
                };
            };
        };
        Etablissement: {
            payload: Prisma.$EtablissementPayload<ExtArgs>;
            fields: Prisma.EtablissementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EtablissementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EtablissementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementPayload>;
                };
                findFirst: {
                    args: Prisma.EtablissementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EtablissementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementPayload>;
                };
                findMany: {
                    args: Prisma.EtablissementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementPayload>[];
                };
                create: {
                    args: Prisma.EtablissementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementPayload>;
                };
                createMany: {
                    args: Prisma.EtablissementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EtablissementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementPayload>[];
                };
                delete: {
                    args: Prisma.EtablissementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementPayload>;
                };
                update: {
                    args: Prisma.EtablissementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementPayload>;
                };
                deleteMany: {
                    args: Prisma.EtablissementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EtablissementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EtablissementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementPayload>[];
                };
                upsert: {
                    args: Prisma.EtablissementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementPayload>;
                };
                aggregate: {
                    args: Prisma.EtablissementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEtablissement>;
                };
                groupBy: {
                    args: Prisma.EtablissementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EtablissementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EtablissementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EtablissementCountAggregateOutputType> | number;
                };
            };
        };
        Locataire: {
            payload: Prisma.$LocatairePayload<ExtArgs>;
            fields: Prisma.LocataireFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LocataireFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LocataireFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePayload>;
                };
                findFirst: {
                    args: Prisma.LocataireFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LocataireFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePayload>;
                };
                findMany: {
                    args: Prisma.LocataireFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePayload>[];
                };
                create: {
                    args: Prisma.LocataireCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePayload>;
                };
                createMany: {
                    args: Prisma.LocataireCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LocataireCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePayload>[];
                };
                delete: {
                    args: Prisma.LocataireDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePayload>;
                };
                update: {
                    args: Prisma.LocataireUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePayload>;
                };
                deleteMany: {
                    args: Prisma.LocataireDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LocataireUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LocataireUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePayload>[];
                };
                upsert: {
                    args: Prisma.LocataireUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePayload>;
                };
                aggregate: {
                    args: Prisma.LocataireAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLocataire>;
                };
                groupBy: {
                    args: Prisma.LocataireGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LocataireGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LocataireCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LocataireCountAggregateOutputType> | number;
                };
            };
        };
        LocataireVerification: {
            payload: Prisma.$LocataireVerificationPayload<ExtArgs>;
            fields: Prisma.LocataireVerificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LocataireVerificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireVerificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LocataireVerificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireVerificationPayload>;
                };
                findFirst: {
                    args: Prisma.LocataireVerificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireVerificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LocataireVerificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireVerificationPayload>;
                };
                findMany: {
                    args: Prisma.LocataireVerificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireVerificationPayload>[];
                };
                create: {
                    args: Prisma.LocataireVerificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireVerificationPayload>;
                };
                createMany: {
                    args: Prisma.LocataireVerificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LocataireVerificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireVerificationPayload>[];
                };
                delete: {
                    args: Prisma.LocataireVerificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireVerificationPayload>;
                };
                update: {
                    args: Prisma.LocataireVerificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireVerificationPayload>;
                };
                deleteMany: {
                    args: Prisma.LocataireVerificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LocataireVerificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LocataireVerificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireVerificationPayload>[];
                };
                upsert: {
                    args: Prisma.LocataireVerificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireVerificationPayload>;
                };
                aggregate: {
                    args: Prisma.LocataireVerificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLocataireVerification>;
                };
                groupBy: {
                    args: Prisma.LocataireVerificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LocataireVerificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LocataireVerificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LocataireVerificationCountAggregateOutputType> | number;
                };
            };
        };
        BailLocation: {
            payload: Prisma.$BailLocationPayload<ExtArgs>;
            fields: Prisma.BailLocationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BailLocationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailLocationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BailLocationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailLocationPayload>;
                };
                findFirst: {
                    args: Prisma.BailLocationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailLocationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BailLocationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailLocationPayload>;
                };
                findMany: {
                    args: Prisma.BailLocationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailLocationPayload>[];
                };
                create: {
                    args: Prisma.BailLocationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailLocationPayload>;
                };
                createMany: {
                    args: Prisma.BailLocationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BailLocationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailLocationPayload>[];
                };
                delete: {
                    args: Prisma.BailLocationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailLocationPayload>;
                };
                update: {
                    args: Prisma.BailLocationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailLocationPayload>;
                };
                deleteMany: {
                    args: Prisma.BailLocationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BailLocationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BailLocationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailLocationPayload>[];
                };
                upsert: {
                    args: Prisma.BailLocationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailLocationPayload>;
                };
                aggregate: {
                    args: Prisma.BailLocationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBailLocation>;
                };
                groupBy: {
                    args: Prisma.BailLocationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BailLocationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BailLocationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BailLocationCountAggregateOutputType> | number;
                };
            };
        };
        EcheancierLoyer: {
            payload: Prisma.$EcheancierLoyerPayload<ExtArgs>;
            fields: Prisma.EcheancierLoyerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EcheancierLoyerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EcheancierLoyerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EcheancierLoyerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EcheancierLoyerPayload>;
                };
                findFirst: {
                    args: Prisma.EcheancierLoyerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EcheancierLoyerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EcheancierLoyerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EcheancierLoyerPayload>;
                };
                findMany: {
                    args: Prisma.EcheancierLoyerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EcheancierLoyerPayload>[];
                };
                create: {
                    args: Prisma.EcheancierLoyerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EcheancierLoyerPayload>;
                };
                createMany: {
                    args: Prisma.EcheancierLoyerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EcheancierLoyerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EcheancierLoyerPayload>[];
                };
                delete: {
                    args: Prisma.EcheancierLoyerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EcheancierLoyerPayload>;
                };
                update: {
                    args: Prisma.EcheancierLoyerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EcheancierLoyerPayload>;
                };
                deleteMany: {
                    args: Prisma.EcheancierLoyerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EcheancierLoyerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EcheancierLoyerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EcheancierLoyerPayload>[];
                };
                upsert: {
                    args: Prisma.EcheancierLoyerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EcheancierLoyerPayload>;
                };
                aggregate: {
                    args: Prisma.EcheancierLoyerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEcheancierLoyer>;
                };
                groupBy: {
                    args: Prisma.EcheancierLoyerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EcheancierLoyerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EcheancierLoyerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EcheancierLoyerCountAggregateOutputType> | number;
                };
            };
        };
        Quittance: {
            payload: Prisma.$QuittancePayload<ExtArgs>;
            fields: Prisma.QuittanceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QuittanceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuittancePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QuittanceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuittancePayload>;
                };
                findFirst: {
                    args: Prisma.QuittanceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuittancePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QuittanceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuittancePayload>;
                };
                findMany: {
                    args: Prisma.QuittanceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuittancePayload>[];
                };
                create: {
                    args: Prisma.QuittanceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuittancePayload>;
                };
                createMany: {
                    args: Prisma.QuittanceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QuittanceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuittancePayload>[];
                };
                delete: {
                    args: Prisma.QuittanceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuittancePayload>;
                };
                update: {
                    args: Prisma.QuittanceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuittancePayload>;
                };
                deleteMany: {
                    args: Prisma.QuittanceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QuittanceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QuittanceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuittancePayload>[];
                };
                upsert: {
                    args: Prisma.QuittanceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuittancePayload>;
                };
                aggregate: {
                    args: Prisma.QuittanceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuittance>;
                };
                groupBy: {
                    args: Prisma.QuittanceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuittanceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QuittanceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuittanceCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
        DepotCaution: {
            payload: Prisma.$DepotCautionPayload<ExtArgs>;
            fields: Prisma.DepotCautionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DepotCautionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepotCautionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DepotCautionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepotCautionPayload>;
                };
                findFirst: {
                    args: Prisma.DepotCautionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepotCautionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DepotCautionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepotCautionPayload>;
                };
                findMany: {
                    args: Prisma.DepotCautionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepotCautionPayload>[];
                };
                create: {
                    args: Prisma.DepotCautionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepotCautionPayload>;
                };
                createMany: {
                    args: Prisma.DepotCautionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DepotCautionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepotCautionPayload>[];
                };
                delete: {
                    args: Prisma.DepotCautionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepotCautionPayload>;
                };
                update: {
                    args: Prisma.DepotCautionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepotCautionPayload>;
                };
                deleteMany: {
                    args: Prisma.DepotCautionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DepotCautionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DepotCautionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepotCautionPayload>[];
                };
                upsert: {
                    args: Prisma.DepotCautionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepotCautionPayload>;
                };
                aggregate: {
                    args: Prisma.DepotCautionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDepotCaution>;
                };
                groupBy: {
                    args: Prisma.DepotCautionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DepotCautionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DepotCautionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DepotCautionCountAggregateOutputType> | number;
                };
            };
        };
        ModeleContrat: {
            payload: Prisma.$ModeleContratPayload<ExtArgs>;
            fields: Prisma.ModeleContratFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ModeleContratFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeleContratPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ModeleContratFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeleContratPayload>;
                };
                findFirst: {
                    args: Prisma.ModeleContratFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeleContratPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ModeleContratFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeleContratPayload>;
                };
                findMany: {
                    args: Prisma.ModeleContratFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeleContratPayload>[];
                };
                create: {
                    args: Prisma.ModeleContratCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeleContratPayload>;
                };
                createMany: {
                    args: Prisma.ModeleContratCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ModeleContratCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeleContratPayload>[];
                };
                delete: {
                    args: Prisma.ModeleContratDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeleContratPayload>;
                };
                update: {
                    args: Prisma.ModeleContratUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeleContratPayload>;
                };
                deleteMany: {
                    args: Prisma.ModeleContratDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ModeleContratUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ModeleContratUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeleContratPayload>[];
                };
                upsert: {
                    args: Prisma.ModeleContratUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModeleContratPayload>;
                };
                aggregate: {
                    args: Prisma.ModeleContratAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateModeleContrat>;
                };
                groupBy: {
                    args: Prisma.ModeleContratGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModeleContratGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ModeleContratCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModeleContratCountAggregateOutputType> | number;
                };
            };
        };
        Contrat: {
            payload: Prisma.$ContratPayload<ExtArgs>;
            fields: Prisma.ContratFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ContratFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContratPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ContratFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContratPayload>;
                };
                findFirst: {
                    args: Prisma.ContratFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContratPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ContratFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContratPayload>;
                };
                findMany: {
                    args: Prisma.ContratFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContratPayload>[];
                };
                create: {
                    args: Prisma.ContratCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContratPayload>;
                };
                createMany: {
                    args: Prisma.ContratCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ContratCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContratPayload>[];
                };
                delete: {
                    args: Prisma.ContratDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContratPayload>;
                };
                update: {
                    args: Prisma.ContratUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContratPayload>;
                };
                deleteMany: {
                    args: Prisma.ContratDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ContratUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ContratUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContratPayload>[];
                };
                upsert: {
                    args: Prisma.ContratUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContratPayload>;
                };
                aggregate: {
                    args: Prisma.ContratAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContrat>;
                };
                groupBy: {
                    args: Prisma.ContratGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContratGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ContratCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContratCountAggregateOutputType> | number;
                };
            };
        };
        LocataireRefreshToken: {
            payload: Prisma.$LocataireRefreshTokenPayload<ExtArgs>;
            fields: Prisma.LocataireRefreshTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LocataireRefreshTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireRefreshTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LocataireRefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireRefreshTokenPayload>;
                };
                findFirst: {
                    args: Prisma.LocataireRefreshTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireRefreshTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LocataireRefreshTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireRefreshTokenPayload>;
                };
                findMany: {
                    args: Prisma.LocataireRefreshTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireRefreshTokenPayload>[];
                };
                create: {
                    args: Prisma.LocataireRefreshTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireRefreshTokenPayload>;
                };
                createMany: {
                    args: Prisma.LocataireRefreshTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LocataireRefreshTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireRefreshTokenPayload>[];
                };
                delete: {
                    args: Prisma.LocataireRefreshTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireRefreshTokenPayload>;
                };
                update: {
                    args: Prisma.LocataireRefreshTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireRefreshTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.LocataireRefreshTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LocataireRefreshTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LocataireRefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireRefreshTokenPayload>[];
                };
                upsert: {
                    args: Prisma.LocataireRefreshTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocataireRefreshTokenPayload>;
                };
                aggregate: {
                    args: Prisma.LocataireRefreshTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLocataireRefreshToken>;
                };
                groupBy: {
                    args: Prisma.LocataireRefreshTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LocataireRefreshTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LocataireRefreshTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LocataireRefreshTokenCountAggregateOutputType> | number;
                };
            };
        };
        LocatairePasswordResetToken: {
            payload: Prisma.$LocatairePasswordResetTokenPayload<ExtArgs>;
            fields: Prisma.LocatairePasswordResetTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LocatairePasswordResetTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePasswordResetTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LocatairePasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePasswordResetTokenPayload>;
                };
                findFirst: {
                    args: Prisma.LocatairePasswordResetTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePasswordResetTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LocatairePasswordResetTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePasswordResetTokenPayload>;
                };
                findMany: {
                    args: Prisma.LocatairePasswordResetTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePasswordResetTokenPayload>[];
                };
                create: {
                    args: Prisma.LocatairePasswordResetTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePasswordResetTokenPayload>;
                };
                createMany: {
                    args: Prisma.LocatairePasswordResetTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LocatairePasswordResetTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePasswordResetTokenPayload>[];
                };
                delete: {
                    args: Prisma.LocatairePasswordResetTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePasswordResetTokenPayload>;
                };
                update: {
                    args: Prisma.LocatairePasswordResetTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePasswordResetTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.LocatairePasswordResetTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LocatairePasswordResetTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LocatairePasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePasswordResetTokenPayload>[];
                };
                upsert: {
                    args: Prisma.LocatairePasswordResetTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocatairePasswordResetTokenPayload>;
                };
                aggregate: {
                    args: Prisma.LocatairePasswordResetTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLocatairePasswordResetToken>;
                };
                groupBy: {
                    args: Prisma.LocatairePasswordResetTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LocatairePasswordResetTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LocatairePasswordResetTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LocatairePasswordResetTokenCountAggregateOutputType> | number;
                };
            };
        };
        VerificationDocuments: {
            payload: Prisma.$VerificationDocumentsPayload<ExtArgs>;
            fields: Prisma.VerificationDocumentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VerificationDocumentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationDocumentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VerificationDocumentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationDocumentsPayload>;
                };
                findFirst: {
                    args: Prisma.VerificationDocumentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationDocumentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VerificationDocumentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationDocumentsPayload>;
                };
                findMany: {
                    args: Prisma.VerificationDocumentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationDocumentsPayload>[];
                };
                create: {
                    args: Prisma.VerificationDocumentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationDocumentsPayload>;
                };
                createMany: {
                    args: Prisma.VerificationDocumentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VerificationDocumentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationDocumentsPayload>[];
                };
                delete: {
                    args: Prisma.VerificationDocumentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationDocumentsPayload>;
                };
                update: {
                    args: Prisma.VerificationDocumentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationDocumentsPayload>;
                };
                deleteMany: {
                    args: Prisma.VerificationDocumentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VerificationDocumentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VerificationDocumentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationDocumentsPayload>[];
                };
                upsert: {
                    args: Prisma.VerificationDocumentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationDocumentsPayload>;
                };
                aggregate: {
                    args: Prisma.VerificationDocumentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVerificationDocuments>;
                };
                groupBy: {
                    args: Prisma.VerificationDocumentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VerificationDocumentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VerificationDocumentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VerificationDocumentsCountAggregateOutputType> | number;
                };
            };
        };
        Proprietaire: {
            payload: Prisma.$ProprietairePayload<ExtArgs>;
            fields: Prisma.ProprietaireFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProprietaireFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietairePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProprietaireFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietairePayload>;
                };
                findFirst: {
                    args: Prisma.ProprietaireFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietairePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProprietaireFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietairePayload>;
                };
                findMany: {
                    args: Prisma.ProprietaireFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietairePayload>[];
                };
                create: {
                    args: Prisma.ProprietaireCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietairePayload>;
                };
                createMany: {
                    args: Prisma.ProprietaireCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProprietaireCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietairePayload>[];
                };
                delete: {
                    args: Prisma.ProprietaireDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietairePayload>;
                };
                update: {
                    args: Prisma.ProprietaireUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietairePayload>;
                };
                deleteMany: {
                    args: Prisma.ProprietaireDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProprietaireUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProprietaireUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietairePayload>[];
                };
                upsert: {
                    args: Prisma.ProprietaireUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietairePayload>;
                };
                aggregate: {
                    args: Prisma.ProprietaireAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProprietaire>;
                };
                groupBy: {
                    args: Prisma.ProprietaireGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProprietaireGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProprietaireCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProprietaireCountAggregateOutputType> | number;
                };
            };
        };
        MessageInterne: {
            payload: Prisma.$MessageInternePayload<ExtArgs>;
            fields: Prisma.MessageInterneFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MessageInterneFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInternePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MessageInterneFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInternePayload>;
                };
                findFirst: {
                    args: Prisma.MessageInterneFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInternePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MessageInterneFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInternePayload>;
                };
                findMany: {
                    args: Prisma.MessageInterneFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInternePayload>[];
                };
                create: {
                    args: Prisma.MessageInterneCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInternePayload>;
                };
                createMany: {
                    args: Prisma.MessageInterneCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MessageInterneCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInternePayload>[];
                };
                delete: {
                    args: Prisma.MessageInterneDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInternePayload>;
                };
                update: {
                    args: Prisma.MessageInterneUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInternePayload>;
                };
                deleteMany: {
                    args: Prisma.MessageInterneDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MessageInterneUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MessageInterneUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInternePayload>[];
                };
                upsert: {
                    args: Prisma.MessageInterneUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInternePayload>;
                };
                aggregate: {
                    args: Prisma.MessageInterneAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMessageInterne>;
                };
                groupBy: {
                    args: Prisma.MessageInterneGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageInterneGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MessageInterneCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageInterneCountAggregateOutputType> | number;
                };
            };
        };
        MessageInterneLocataire: {
            payload: Prisma.$MessageInterneLocatairePayload<ExtArgs>;
            fields: Prisma.MessageInterneLocataireFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MessageInterneLocataireFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInterneLocatairePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MessageInterneLocataireFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInterneLocatairePayload>;
                };
                findFirst: {
                    args: Prisma.MessageInterneLocataireFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInterneLocatairePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MessageInterneLocataireFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInterneLocatairePayload>;
                };
                findMany: {
                    args: Prisma.MessageInterneLocataireFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInterneLocatairePayload>[];
                };
                create: {
                    args: Prisma.MessageInterneLocataireCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInterneLocatairePayload>;
                };
                createMany: {
                    args: Prisma.MessageInterneLocataireCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MessageInterneLocataireCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInterneLocatairePayload>[];
                };
                delete: {
                    args: Prisma.MessageInterneLocataireDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInterneLocatairePayload>;
                };
                update: {
                    args: Prisma.MessageInterneLocataireUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInterneLocatairePayload>;
                };
                deleteMany: {
                    args: Prisma.MessageInterneLocataireDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MessageInterneLocataireUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MessageInterneLocataireUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInterneLocatairePayload>[];
                };
                upsert: {
                    args: Prisma.MessageInterneLocataireUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageInterneLocatairePayload>;
                };
                aggregate: {
                    args: Prisma.MessageInterneLocataireAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMessageInterneLocataire>;
                };
                groupBy: {
                    args: Prisma.MessageInterneLocataireGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageInterneLocataireGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MessageInterneLocataireCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageInterneLocataireCountAggregateOutputType> | number;
                };
            };
        };
        ProprietaireRefreshToken: {
            payload: Prisma.$ProprietaireRefreshTokenPayload<ExtArgs>;
            fields: Prisma.ProprietaireRefreshTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProprietaireRefreshTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietaireRefreshTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProprietaireRefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietaireRefreshTokenPayload>;
                };
                findFirst: {
                    args: Prisma.ProprietaireRefreshTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietaireRefreshTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProprietaireRefreshTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietaireRefreshTokenPayload>;
                };
                findMany: {
                    args: Prisma.ProprietaireRefreshTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietaireRefreshTokenPayload>[];
                };
                create: {
                    args: Prisma.ProprietaireRefreshTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietaireRefreshTokenPayload>;
                };
                createMany: {
                    args: Prisma.ProprietaireRefreshTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProprietaireRefreshTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietaireRefreshTokenPayload>[];
                };
                delete: {
                    args: Prisma.ProprietaireRefreshTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietaireRefreshTokenPayload>;
                };
                update: {
                    args: Prisma.ProprietaireRefreshTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietaireRefreshTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.ProprietaireRefreshTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProprietaireRefreshTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProprietaireRefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietaireRefreshTokenPayload>[];
                };
                upsert: {
                    args: Prisma.ProprietaireRefreshTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProprietaireRefreshTokenPayload>;
                };
                aggregate: {
                    args: Prisma.ProprietaireRefreshTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProprietaireRefreshToken>;
                };
                groupBy: {
                    args: Prisma.ProprietaireRefreshTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProprietaireRefreshTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProprietaireRefreshTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProprietaireRefreshTokenCountAggregateOutputType> | number;
                };
            };
        };
        PasswordResetToken: {
            payload: Prisma.$PasswordResetTokenPayload<ExtArgs>;
            fields: Prisma.PasswordResetTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                findFirst: {
                    args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                findMany: {
                    args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                create: {
                    args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                createMany: {
                    args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                delete: {
                    args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                update: {
                    args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                upsert: {
                    args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                aggregate: {
                    args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePasswordResetToken>;
                };
                groupBy: {
                    args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordResetTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PasswordResetTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordResetTokenCountAggregateOutputType> | number;
                };
            };
        };
        Admin: {
            payload: Prisma.$AdminPayload<ExtArgs>;
            fields: Prisma.AdminFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdminFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>;
                };
                findFirst: {
                    args: Prisma.AdminFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>;
                };
                findMany: {
                    args: Prisma.AdminFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>[];
                };
                create: {
                    args: Prisma.AdminCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>;
                };
                createMany: {
                    args: Prisma.AdminCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>[];
                };
                delete: {
                    args: Prisma.AdminDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>;
                };
                update: {
                    args: Prisma.AdminUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>;
                };
                deleteMany: {
                    args: Prisma.AdminDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdminUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>[];
                };
                upsert: {
                    args: Prisma.AdminUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPayload>;
                };
                aggregate: {
                    args: Prisma.AdminAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdmin>;
                };
                groupBy: {
                    args: Prisma.AdminGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdminCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminCountAggregateOutputType> | number;
                };
            };
        };
        RefreshToken: {
            payload: Prisma.$RefreshTokenPayload<ExtArgs>;
            fields: Prisma.RefreshTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findFirst: {
                    args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findMany: {
                    args: Prisma.RefreshTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                create: {
                    args: Prisma.RefreshTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                createMany: {
                    args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                delete: {
                    args: Prisma.RefreshTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                update: {
                    args: Prisma.RefreshTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                upsert: {
                    args: Prisma.RefreshTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                aggregate: {
                    args: Prisma.RefreshTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefreshToken>;
                };
                groupBy: {
                    args: Prisma.RefreshTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RefreshTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenCountAggregateOutputType> | number;
                };
            };
        };
        Alerte: {
            payload: Prisma.$AlertePayload<ExtArgs>;
            fields: Prisma.AlerteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AlerteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AlerteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload>;
                };
                findFirst: {
                    args: Prisma.AlerteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AlerteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload>;
                };
                findMany: {
                    args: Prisma.AlerteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload>[];
                };
                create: {
                    args: Prisma.AlerteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload>;
                };
                createMany: {
                    args: Prisma.AlerteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AlerteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload>[];
                };
                delete: {
                    args: Prisma.AlerteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload>;
                };
                update: {
                    args: Prisma.AlerteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload>;
                };
                deleteMany: {
                    args: Prisma.AlerteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AlerteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AlerteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload>[];
                };
                upsert: {
                    args: Prisma.AlerteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload>;
                };
                aggregate: {
                    args: Prisma.AlerteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAlerte>;
                };
                groupBy: {
                    args: Prisma.AlerteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlerteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AlerteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlerteCountAggregateOutputType> | number;
                };
            };
        };
        Transaction: {
            payload: Prisma.$TransactionPayload<ExtArgs>;
            fields: Prisma.TransactionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TransactionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                findFirst: {
                    args: Prisma.TransactionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                findMany: {
                    args: Prisma.TransactionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>[];
                };
                create: {
                    args: Prisma.TransactionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                createMany: {
                    args: Prisma.TransactionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>[];
                };
                delete: {
                    args: Prisma.TransactionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                update: {
                    args: Prisma.TransactionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                deleteMany: {
                    args: Prisma.TransactionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TransactionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>[];
                };
                upsert: {
                    args: Prisma.TransactionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                aggregate: {
                    args: Prisma.TransactionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTransaction>;
                };
                groupBy: {
                    args: Prisma.TransactionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TransactionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TransactionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TransactionCountAggregateOutputType> | number;
                };
            };
        };
        Temoignage: {
            payload: Prisma.$TemoignagePayload<ExtArgs>;
            fields: Prisma.TemoignageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TemoignageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemoignagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TemoignageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemoignagePayload>;
                };
                findFirst: {
                    args: Prisma.TemoignageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemoignagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TemoignageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemoignagePayload>;
                };
                findMany: {
                    args: Prisma.TemoignageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemoignagePayload>[];
                };
                create: {
                    args: Prisma.TemoignageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemoignagePayload>;
                };
                createMany: {
                    args: Prisma.TemoignageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TemoignageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemoignagePayload>[];
                };
                delete: {
                    args: Prisma.TemoignageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemoignagePayload>;
                };
                update: {
                    args: Prisma.TemoignageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemoignagePayload>;
                };
                deleteMany: {
                    args: Prisma.TemoignageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TemoignageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TemoignageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemoignagePayload>[];
                };
                upsert: {
                    args: Prisma.TemoignageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemoignagePayload>;
                };
                aggregate: {
                    args: Prisma.TemoignageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTemoignage>;
                };
                groupBy: {
                    args: Prisma.TemoignageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TemoignageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TemoignageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TemoignageCountAggregateOutputType> | number;
                };
            };
        };
        PromotionHistory: {
            payload: Prisma.$PromotionHistoryPayload<ExtArgs>;
            fields: Prisma.PromotionHistoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PromotionHistoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionHistoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PromotionHistoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionHistoryPayload>;
                };
                findFirst: {
                    args: Prisma.PromotionHistoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionHistoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PromotionHistoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionHistoryPayload>;
                };
                findMany: {
                    args: Prisma.PromotionHistoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionHistoryPayload>[];
                };
                create: {
                    args: Prisma.PromotionHistoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionHistoryPayload>;
                };
                createMany: {
                    args: Prisma.PromotionHistoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PromotionHistoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionHistoryPayload>[];
                };
                delete: {
                    args: Prisma.PromotionHistoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionHistoryPayload>;
                };
                update: {
                    args: Prisma.PromotionHistoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionHistoryPayload>;
                };
                deleteMany: {
                    args: Prisma.PromotionHistoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PromotionHistoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PromotionHistoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionHistoryPayload>[];
                };
                upsert: {
                    args: Prisma.PromotionHistoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionHistoryPayload>;
                };
                aggregate: {
                    args: Prisma.PromotionHistoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePromotionHistory>;
                };
                groupBy: {
                    args: Prisma.PromotionHistoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PromotionHistoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PromotionHistoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PromotionHistoryCountAggregateOutputType> | number;
                };
            };
        };
        ConfigMonetisation: {
            payload: Prisma.$ConfigMonetisationPayload<ExtArgs>;
            fields: Prisma.ConfigMonetisationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConfigMonetisationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigMonetisationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConfigMonetisationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigMonetisationPayload>;
                };
                findFirst: {
                    args: Prisma.ConfigMonetisationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigMonetisationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConfigMonetisationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigMonetisationPayload>;
                };
                findMany: {
                    args: Prisma.ConfigMonetisationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigMonetisationPayload>[];
                };
                create: {
                    args: Prisma.ConfigMonetisationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigMonetisationPayload>;
                };
                createMany: {
                    args: Prisma.ConfigMonetisationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConfigMonetisationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigMonetisationPayload>[];
                };
                delete: {
                    args: Prisma.ConfigMonetisationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigMonetisationPayload>;
                };
                update: {
                    args: Prisma.ConfigMonetisationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigMonetisationPayload>;
                };
                deleteMany: {
                    args: Prisma.ConfigMonetisationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConfigMonetisationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConfigMonetisationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigMonetisationPayload>[];
                };
                upsert: {
                    args: Prisma.ConfigMonetisationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigMonetisationPayload>;
                };
                aggregate: {
                    args: Prisma.ConfigMonetisationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConfigMonetisation>;
                };
                groupBy: {
                    args: Prisma.ConfigMonetisationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConfigMonetisationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConfigMonetisationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConfigMonetisationCountAggregateOutputType> | number;
                };
            };
        };
        ConfigSite: {
            payload: Prisma.$ConfigSitePayload<ExtArgs>;
            fields: Prisma.ConfigSiteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConfigSiteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigSitePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConfigSiteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigSitePayload>;
                };
                findFirst: {
                    args: Prisma.ConfigSiteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigSitePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConfigSiteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigSitePayload>;
                };
                findMany: {
                    args: Prisma.ConfigSiteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigSitePayload>[];
                };
                create: {
                    args: Prisma.ConfigSiteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigSitePayload>;
                };
                createMany: {
                    args: Prisma.ConfigSiteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConfigSiteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigSitePayload>[];
                };
                delete: {
                    args: Prisma.ConfigSiteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigSitePayload>;
                };
                update: {
                    args: Prisma.ConfigSiteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigSitePayload>;
                };
                deleteMany: {
                    args: Prisma.ConfigSiteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConfigSiteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConfigSiteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigSitePayload>[];
                };
                upsert: {
                    args: Prisma.ConfigSiteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConfigSitePayload>;
                };
                aggregate: {
                    args: Prisma.ConfigSiteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConfigSite>;
                };
                groupBy: {
                    args: Prisma.ConfigSiteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConfigSiteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConfigSiteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConfigSiteCountAggregateOutputType> | number;
                };
            };
        };
        BailInvitation: {
            payload: Prisma.$BailInvitationPayload<ExtArgs>;
            fields: Prisma.BailInvitationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BailInvitationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailInvitationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BailInvitationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailInvitationPayload>;
                };
                findFirst: {
                    args: Prisma.BailInvitationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailInvitationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BailInvitationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailInvitationPayload>;
                };
                findMany: {
                    args: Prisma.BailInvitationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailInvitationPayload>[];
                };
                create: {
                    args: Prisma.BailInvitationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailInvitationPayload>;
                };
                createMany: {
                    args: Prisma.BailInvitationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BailInvitationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailInvitationPayload>[];
                };
                delete: {
                    args: Prisma.BailInvitationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailInvitationPayload>;
                };
                update: {
                    args: Prisma.BailInvitationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailInvitationPayload>;
                };
                deleteMany: {
                    args: Prisma.BailInvitationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BailInvitationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BailInvitationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailInvitationPayload>[];
                };
                upsert: {
                    args: Prisma.BailInvitationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BailInvitationPayload>;
                };
                aggregate: {
                    args: Prisma.BailInvitationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBailInvitation>;
                };
                groupBy: {
                    args: Prisma.BailInvitationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BailInvitationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BailInvitationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BailInvitationCountAggregateOutputType> | number;
                };
            };
        };
        Signalement: {
            payload: Prisma.$SignalementPayload<ExtArgs>;
            fields: Prisma.SignalementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SignalementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SignalementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SignalementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SignalementPayload>;
                };
                findFirst: {
                    args: Prisma.SignalementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SignalementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SignalementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SignalementPayload>;
                };
                findMany: {
                    args: Prisma.SignalementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SignalementPayload>[];
                };
                create: {
                    args: Prisma.SignalementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SignalementPayload>;
                };
                createMany: {
                    args: Prisma.SignalementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SignalementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SignalementPayload>[];
                };
                delete: {
                    args: Prisma.SignalementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SignalementPayload>;
                };
                update: {
                    args: Prisma.SignalementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SignalementPayload>;
                };
                deleteMany: {
                    args: Prisma.SignalementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SignalementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SignalementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SignalementPayload>[];
                };
                upsert: {
                    args: Prisma.SignalementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SignalementPayload>;
                };
                aggregate: {
                    args: Prisma.SignalementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSignalement>;
                };
                groupBy: {
                    args: Prisma.SignalementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SignalementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SignalementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SignalementCountAggregateOutputType> | number;
                };
            };
        };
        EtatDesLieux: {
            payload: Prisma.$EtatDesLieuxPayload<ExtArgs>;
            fields: Prisma.EtatDesLieuxFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EtatDesLieuxFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtatDesLieuxPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EtatDesLieuxFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtatDesLieuxPayload>;
                };
                findFirst: {
                    args: Prisma.EtatDesLieuxFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtatDesLieuxPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EtatDesLieuxFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtatDesLieuxPayload>;
                };
                findMany: {
                    args: Prisma.EtatDesLieuxFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtatDesLieuxPayload>[];
                };
                create: {
                    args: Prisma.EtatDesLieuxCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtatDesLieuxPayload>;
                };
                createMany: {
                    args: Prisma.EtatDesLieuxCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EtatDesLieuxCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtatDesLieuxPayload>[];
                };
                delete: {
                    args: Prisma.EtatDesLieuxDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtatDesLieuxPayload>;
                };
                update: {
                    args: Prisma.EtatDesLieuxUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtatDesLieuxPayload>;
                };
                deleteMany: {
                    args: Prisma.EtatDesLieuxDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EtatDesLieuxUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EtatDesLieuxUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtatDesLieuxPayload>[];
                };
                upsert: {
                    args: Prisma.EtatDesLieuxUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtatDesLieuxPayload>;
                };
                aggregate: {
                    args: Prisma.EtatDesLieuxAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEtatDesLieux>;
                };
                groupBy: {
                    args: Prisma.EtatDesLieuxGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EtatDesLieuxGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EtatDesLieuxCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EtatDesLieuxCountAggregateOutputType> | number;
                };
            };
        };
        PieceEtatDesLieux: {
            payload: Prisma.$PieceEtatDesLieuxPayload<ExtArgs>;
            fields: Prisma.PieceEtatDesLieuxFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PieceEtatDesLieuxFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceEtatDesLieuxPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PieceEtatDesLieuxFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceEtatDesLieuxPayload>;
                };
                findFirst: {
                    args: Prisma.PieceEtatDesLieuxFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceEtatDesLieuxPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PieceEtatDesLieuxFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceEtatDesLieuxPayload>;
                };
                findMany: {
                    args: Prisma.PieceEtatDesLieuxFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceEtatDesLieuxPayload>[];
                };
                create: {
                    args: Prisma.PieceEtatDesLieuxCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceEtatDesLieuxPayload>;
                };
                createMany: {
                    args: Prisma.PieceEtatDesLieuxCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PieceEtatDesLieuxCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceEtatDesLieuxPayload>[];
                };
                delete: {
                    args: Prisma.PieceEtatDesLieuxDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceEtatDesLieuxPayload>;
                };
                update: {
                    args: Prisma.PieceEtatDesLieuxUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceEtatDesLieuxPayload>;
                };
                deleteMany: {
                    args: Prisma.PieceEtatDesLieuxDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PieceEtatDesLieuxUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PieceEtatDesLieuxUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceEtatDesLieuxPayload>[];
                };
                upsert: {
                    args: Prisma.PieceEtatDesLieuxUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceEtatDesLieuxPayload>;
                };
                aggregate: {
                    args: Prisma.PieceEtatDesLieuxAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePieceEtatDesLieux>;
                };
                groupBy: {
                    args: Prisma.PieceEtatDesLieuxGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PieceEtatDesLieuxGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PieceEtatDesLieuxCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PieceEtatDesLieuxCountAggregateOutputType> | number;
                };
            };
        };
        ElementEtatDesLieux: {
            payload: Prisma.$ElementEtatDesLieuxPayload<ExtArgs>;
            fields: Prisma.ElementEtatDesLieuxFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ElementEtatDesLieuxFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementEtatDesLieuxPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ElementEtatDesLieuxFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementEtatDesLieuxPayload>;
                };
                findFirst: {
                    args: Prisma.ElementEtatDesLieuxFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementEtatDesLieuxPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ElementEtatDesLieuxFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementEtatDesLieuxPayload>;
                };
                findMany: {
                    args: Prisma.ElementEtatDesLieuxFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementEtatDesLieuxPayload>[];
                };
                create: {
                    args: Prisma.ElementEtatDesLieuxCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementEtatDesLieuxPayload>;
                };
                createMany: {
                    args: Prisma.ElementEtatDesLieuxCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ElementEtatDesLieuxCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementEtatDesLieuxPayload>[];
                };
                delete: {
                    args: Prisma.ElementEtatDesLieuxDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementEtatDesLieuxPayload>;
                };
                update: {
                    args: Prisma.ElementEtatDesLieuxUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementEtatDesLieuxPayload>;
                };
                deleteMany: {
                    args: Prisma.ElementEtatDesLieuxDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ElementEtatDesLieuxUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ElementEtatDesLieuxUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementEtatDesLieuxPayload>[];
                };
                upsert: {
                    args: Prisma.ElementEtatDesLieuxUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementEtatDesLieuxPayload>;
                };
                aggregate: {
                    args: Prisma.ElementEtatDesLieuxAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateElementEtatDesLieux>;
                };
                groupBy: {
                    args: Prisma.ElementEtatDesLieuxGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ElementEtatDesLieuxGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ElementEtatDesLieuxCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ElementEtatDesLieuxCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const PaysScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly code: "code";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PaysScalarFieldEnum = (typeof PaysScalarFieldEnum)[keyof typeof PaysScalarFieldEnum];
export declare const VilleScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly paysId: "paysId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VilleScalarFieldEnum = (typeof VilleScalarFieldEnum)[keyof typeof VilleScalarFieldEnum];
export declare const QuartierScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly villeId: "villeId";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type QuartierScalarFieldEnum = (typeof QuartierScalarFieldEnum)[keyof typeof QuartierScalarFieldEnum];
export declare const TypeLogementScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly slug: "slug";
    readonly image: "image";
    readonly actif: "actif";
    readonly ordre: "ordre";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TypeLogementScalarFieldEnum = (typeof TypeLogementScalarFieldEnum)[keyof typeof TypeLogementScalarFieldEnum];
export declare const TypeTransactionScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly slug: "slug";
    readonly actif: "actif";
    readonly ordre: "ordre";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TypeTransactionScalarFieldEnum = (typeof TypeTransactionScalarFieldEnum)[keyof typeof TypeTransactionScalarFieldEnum];
export declare const StatutBienScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly slug: "slug";
    readonly actif: "actif";
    readonly ordre: "ordre";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StatutBienScalarFieldEnum = (typeof StatutBienScalarFieldEnum)[keyof typeof StatutBienScalarFieldEnum];
export declare const CategorieMeubleScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly slug: "slug";
    readonly actif: "actif";
    readonly ordre: "ordre";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CategorieMeubleScalarFieldEnum = (typeof CategorieMeubleScalarFieldEnum)[keyof typeof CategorieMeubleScalarFieldEnum];
export declare const CategorieEquipementScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly slug: "slug";
    readonly actif: "actif";
    readonly ordre: "ordre";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CategorieEquipementScalarFieldEnum = (typeof CategorieEquipementScalarFieldEnum)[keyof typeof CategorieEquipementScalarFieldEnum];
export declare const MeubleScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly categorieId: "categorieId";
    readonly actif: "actif";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MeubleScalarFieldEnum = (typeof MeubleScalarFieldEnum)[keyof typeof MeubleScalarFieldEnum];
export declare const EquipementScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly categorieId: "categorieId";
    readonly actif: "actif";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EquipementScalarFieldEnum = (typeof EquipementScalarFieldEnum)[keyof typeof EquipementScalarFieldEnum];
export declare const FormulePremiumScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly nom: "nom";
    readonly dureeJours: "dureeJours";
    readonly prix: "prix";
    readonly accroche: "accroche";
    readonly description: "description";
    readonly idealPour: "idealPour";
    readonly populer: "populer";
    readonly actif: "actif";
    readonly ordre: "ordre";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FormulePremiumScalarFieldEnum = (typeof FormulePremiumScalarFieldEnum)[keyof typeof FormulePremiumScalarFieldEnum];
export declare const BienScalarFieldEnum: {
    readonly id: "id";
    readonly titre: "titre";
    readonly description: "description";
    readonly typeLogementId: "typeLogementId";
    readonly typeTransactionId: "typeTransactionId";
    readonly statutBienId: "statutBienId";
    readonly proprietaireId: "proprietaireId";
    readonly pays: "pays";
    readonly region: "region";
    readonly ville: "ville";
    readonly quartier: "quartier";
    readonly quartierId: "quartierId";
    readonly adresse: "adresse";
    readonly pointRepere: "pointRepere";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly surface: "surface";
    readonly surfaceParcelle: "surfaceParcelle";
    readonly nbChambres: "nbChambres";
    readonly nbSdb: "nbSdb";
    readonly nbSalons: "nbSalons";
    readonly nbCuisines: "nbCuisines";
    readonly etage: "etage";
    readonly nbEtages: "nbEtages";
    readonly nbAppartements: "nbAppartements";
    readonly nbPieces: "nbPieces";
    readonly nbWc: "nbWc";
    readonly typeTerrain: "typeTerrain";
    readonly cloture: "cloture";
    readonly typeBureau: "typeBureau";
    readonly rideauMetallique: "rideauMetallique";
    readonly meuble: "meuble";
    readonly fumeurs: "fumeurs";
    readonly animaux: "animaux";
    readonly parking: "parking";
    readonly ascenseur: "ascenseur";
    readonly prix: "prix";
    readonly prixAncien: "prixAncien";
    readonly dateDerniereModificationPrix: "dateDerniereModificationPrix";
    readonly frequencePaiement: "frequencePaiement";
    readonly chargesIncluses: "chargesIncluses";
    readonly caution: "caution";
    readonly disponibleLe: "disponibleLe";
    readonly photos: "photos";
    readonly nbVues: "nbVues";
    readonly nbFavoris: "nbFavoris";
    readonly actif: "actif";
    readonly statutAnnonce: "statutAnnonce";
    readonly noteAdmin: "noteAdmin";
    readonly publishedAt: "publishedAt";
    readonly estPremium: "estPremium";
    readonly estMisEnAvant: "estMisEnAvant";
    readonly dateDebutPromotion: "dateDebutPromotion";
    readonly dateFinPromotion: "dateFinPromotion";
    readonly positionRotation: "positionRotation";
    readonly dernierAffichage: "dernierAffichage";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BienScalarFieldEnum = (typeof BienScalarFieldEnum)[keyof typeof BienScalarFieldEnum];
export declare const ComptePublicScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly telephone: "telephone";
    readonly email: "email";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ComptePublicScalarFieldEnum = (typeof ComptePublicScalarFieldEnum)[keyof typeof ComptePublicScalarFieldEnum];
export declare const ComptePublicRefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly comptePublicId: "comptePublicId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
};
export type ComptePublicRefreshTokenScalarFieldEnum = (typeof ComptePublicRefreshTokenScalarFieldEnum)[keyof typeof ComptePublicRefreshTokenScalarFieldEnum];
export declare const FavoriScalarFieldEnum: {
    readonly id: "id";
    readonly comptePublicId: "comptePublicId";
    readonly bienId: "bienId";
    readonly prixSnapshot: "prixSnapshot";
    readonly statutSnapshot: "statutSnapshot";
    readonly actifSnapshot: "actifSnapshot";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FavoriScalarFieldEnum = (typeof FavoriScalarFieldEnum)[keyof typeof FavoriScalarFieldEnum];
export declare const VueBienScalarFieldEnum: {
    readonly id: "id";
    readonly bienId: "bienId";
    readonly userId: "userId";
    readonly ipAddress: "ipAddress";
    readonly createdAt: "createdAt";
};
export type VueBienScalarFieldEnum = (typeof VueBienScalarFieldEnum)[keyof typeof VueBienScalarFieldEnum];
export declare const BienEquipementScalarFieldEnum: {
    readonly bienId: "bienId";
    readonly equipementId: "equipementId";
};
export type BienEquipementScalarFieldEnum = (typeof BienEquipementScalarFieldEnum)[keyof typeof BienEquipementScalarFieldEnum];
export declare const BienMeubleScalarFieldEnum: {
    readonly bienId: "bienId";
    readonly meubleId: "meubleId";
    readonly quantite: "quantite";
};
export type BienMeubleScalarFieldEnum = (typeof BienMeubleScalarFieldEnum)[keyof typeof BienMeubleScalarFieldEnum];
export declare const DocumentBienScalarFieldEnum: {
    readonly id: "id";
    readonly bienId: "bienId";
    readonly proprietaireId: "proprietaireId";
    readonly nom: "nom";
    readonly type: "type";
    readonly url: "url";
    readonly taille: "taille";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DocumentBienScalarFieldEnum = (typeof DocumentBienScalarFieldEnum)[keyof typeof DocumentBienScalarFieldEnum];
export declare const EtablissementScalarFieldEnum: {
    readonly id: "id";
    readonly bienId: "bienId";
    readonly type: "type";
    readonly nom: "nom";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly distance: "distance";
    readonly createdAt: "createdAt";
};
export type EtablissementScalarFieldEnum = (typeof EtablissementScalarFieldEnum)[keyof typeof EtablissementScalarFieldEnum];
export declare const LocataireScalarFieldEnum: {
    readonly id: "id";
    readonly proprietaireId: "proprietaireId";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly telephone: "telephone";
    readonly email: "email";
    readonly nbOccupants: "nbOccupants";
    readonly presenceEnfants: "presenceEnfants";
    readonly dateNaissance: "dateNaissance";
    readonly lieuNaissance: "lieuNaissance";
    readonly nationalite: "nationalite";
    readonly sexe: "sexe";
    readonly numPieceIdentite: "numPieceIdentite";
    readonly typePiece: "typePiece";
    readonly dateDelivrance: "dateDelivrance";
    readonly dateExpirationPiece: "dateExpirationPiece";
    readonly autoriteDelivrance: "autoriteDelivrance";
    readonly situationProfessionnelle: "situationProfessionnelle";
    readonly activationToken: "activationToken";
    readonly tokenExpiresAt: "tokenExpiresAt";
    readonly statut: "statut";
    readonly password: "password";
    readonly estSuspendu: "estSuspendu";
    readonly motifSuspension: "motifSuspension";
    readonly dateSuspension: "dateSuspension";
    readonly suspenduPar: "suspenduPar";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LocataireScalarFieldEnum = (typeof LocataireScalarFieldEnum)[keyof typeof LocataireScalarFieldEnum];
export declare const LocataireVerificationScalarFieldEnum: {
    readonly id: "id";
    readonly locataireId: "locataireId";
    readonly typePiece: "typePiece";
    readonly pieceIdentiteRecto: "pieceIdentiteRecto";
    readonly pieceIdentiteVerso: "pieceIdentiteVerso";
    readonly selfie: "selfie";
    readonly statut: "statut";
    readonly conditionsAcceptees: "conditionsAcceptees";
    readonly motifRejet: "motifRejet";
    readonly traitePar: "traitePar";
    readonly dateTraitement: "dateTraitement";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LocataireVerificationScalarFieldEnum = (typeof LocataireVerificationScalarFieldEnum)[keyof typeof LocataireVerificationScalarFieldEnum];
export declare const BailLocationScalarFieldEnum: {
    readonly id: "id";
    readonly bienId: "bienId";
    readonly locataireId: "locataireId";
    readonly proprietaireId: "proprietaireId";
    readonly typeBail: "typeBail";
    readonly dateDebutBail: "dateDebutBail";
    readonly dateFinBail: "dateFinBail";
    readonly renouvellement: "renouvellement";
    readonly montantLoyer: "montantLoyer";
    readonly montantCaution: "montantCaution";
    readonly cautionVersee: "cautionVersee";
    readonly jourLimitePaiement: "jourLimitePaiement";
    readonly delaiGrace: "delaiGrace";
    readonly frequencePaiement: "frequencePaiement";
    readonly statut: "statut";
    readonly motifResiliation: "motifResiliation";
    readonly initiePar: "initiePar";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BailLocationScalarFieldEnum = (typeof BailLocationScalarFieldEnum)[keyof typeof BailLocationScalarFieldEnum];
export declare const EcheancierLoyerScalarFieldEnum: {
    readonly id: "id";
    readonly bailId: "bailId";
    readonly bienId: "bienId";
    readonly proprietaireId: "proprietaireId";
    readonly locataireId: "locataireId";
    readonly dateEcheance: "dateEcheance";
    readonly montant: "montant";
    readonly statut: "statut";
    readonly datePaiement: "datePaiement";
    readonly modePaiement: "modePaiement";
    readonly reference: "reference";
    readonly note: "note";
    readonly sourceEnregistrement: "sourceEnregistrement";
    readonly commissionTaux: "commissionTaux";
    readonly commissionMontant: "commissionMontant";
    readonly montantNet: "montantNet";
    readonly confirmeParProprietaire: "confirmeParProprietaire";
    readonly dateConfirmation: "dateConfirmation";
    readonly confirmeParLocataire: "confirmeParLocataire";
    readonly dateConfirmationLocataire: "dateConfirmationLocataire";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EcheancierLoyerScalarFieldEnum = (typeof EcheancierLoyerScalarFieldEnum)[keyof typeof EcheancierLoyerScalarFieldEnum];
export declare const QuittanceScalarFieldEnum: {
    readonly id: "id";
    readonly echeanceId: "echeanceId";
    readonly bailId: "bailId";
    readonly bienId: "bienId";
    readonly proprietaireId: "proprietaireId";
    readonly locataireId: "locataireId";
    readonly numero: "numero";
    readonly dateGeneration: "dateGeneration";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type QuittanceScalarFieldEnum = (typeof QuittanceScalarFieldEnum)[keyof typeof QuittanceScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly canal: "canal";
    readonly destinataire: "destinataire";
    readonly sujet: "sujet";
    readonly contenu: "contenu";
    readonly statut: "statut";
    readonly messageRetour: "messageRetour";
    readonly echeanceId: "echeanceId";
    readonly bailId: "bailId";
    readonly bienId: "bienId";
    readonly proprietaireId: "proprietaireId";
    readonly locataireId: "locataireId";
    readonly lu: "lu";
    readonly envoyeAt: "envoyeAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const DepotCautionScalarFieldEnum: {
    readonly id: "id";
    readonly bailId: "bailId";
    readonly bienId: "bienId";
    readonly proprietaireId: "proprietaireId";
    readonly locataireId: "locataireId";
    readonly montant: "montant";
    readonly statut: "statut";
    readonly dateReception: "dateReception";
    readonly dateRestitution: "dateRestitution";
    readonly montantRestitue: "montantRestitue";
    readonly motifRetenue: "motifRetenue";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DepotCautionScalarFieldEnum = (typeof DepotCautionScalarFieldEnum)[keyof typeof DepotCautionScalarFieldEnum];
export declare const ModeleContratScalarFieldEnum: {
    readonly id: "id";
    readonly titre: "titre";
    readonly typeBail: "typeBail";
    readonly contenu: "contenu";
    readonly actif: "actif";
    readonly ordre: "ordre";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ModeleContratScalarFieldEnum = (typeof ModeleContratScalarFieldEnum)[keyof typeof ModeleContratScalarFieldEnum];
export declare const ContratScalarFieldEnum: {
    readonly id: "id";
    readonly bailId: "bailId";
    readonly modeleId: "modeleId";
    readonly titre: "titre";
    readonly contenu: "contenu";
    readonly statut: "statut";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ContratScalarFieldEnum = (typeof ContratScalarFieldEnum)[keyof typeof ContratScalarFieldEnum];
export declare const LocataireRefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly locataireId: "locataireId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
};
export type LocataireRefreshTokenScalarFieldEnum = (typeof LocataireRefreshTokenScalarFieldEnum)[keyof typeof LocataireRefreshTokenScalarFieldEnum];
export declare const LocatairePasswordResetTokenScalarFieldEnum: {
    readonly id: "id";
    readonly locataireId: "locataireId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly usedAt: "usedAt";
    readonly createdAt: "createdAt";
};
export type LocatairePasswordResetTokenScalarFieldEnum = (typeof LocatairePasswordResetTokenScalarFieldEnum)[keyof typeof LocatairePasswordResetTokenScalarFieldEnum];
export declare const VerificationDocumentsScalarFieldEnum: {
    readonly id: "id";
    readonly proprietaireId: "proprietaireId";
    readonly typePiece: "typePiece";
    readonly pieceIdentiteRecto: "pieceIdentiteRecto";
    readonly pieceIdentiteVerso: "pieceIdentiteVerso";
    readonly selfie: "selfie";
    readonly conditionsAcceptees: "conditionsAcceptees";
    readonly motifRejet: "motifRejet";
    readonly traitePar: "traitePar";
    readonly dateTraitement: "dateTraitement";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VerificationDocumentsScalarFieldEnum = (typeof VerificationDocumentsScalarFieldEnum)[keyof typeof VerificationDocumentsScalarFieldEnum];
export declare const ProprietaireScalarFieldEnum: {
    readonly id: "id";
    readonly prenom: "prenom";
    readonly nom: "nom";
    readonly sexe: "sexe";
    readonly telephone: "telephone";
    readonly email: "email";
    readonly password: "password";
    readonly statutVerification: "statutVerification";
    readonly verifiedAt: "verifiedAt";
    readonly telephoneVerifie: "telephoneVerifie";
    readonly telephoneOtp: "telephoneOtp";
    readonly telephoneOtpExpiresAt: "telephoneOtpExpiresAt";
    readonly estSuspendu: "estSuspendu";
    readonly motifSuspension: "motifSuspension";
    readonly dateSuspension: "dateSuspension";
    readonly suspenduPar: "suspenduPar";
    readonly nbAvertissements: "nbAvertissements";
    readonly nbSignalementsValides: "nbSignalementsValides";
    readonly estRestreint: "estRestreint";
    readonly dateFinRestriction: "dateFinRestriction";
    readonly dateFinSuspension: "dateFinSuspension";
    readonly estBanni: "estBanni";
    readonly dateBannissement: "dateBannissement";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProprietaireScalarFieldEnum = (typeof ProprietaireScalarFieldEnum)[keyof typeof ProprietaireScalarFieldEnum];
export declare const MessageInterneScalarFieldEnum: {
    readonly id: "id";
    readonly proprietaireId: "proprietaireId";
    readonly bailId: "bailId";
    readonly bienId: "bienId";
    readonly titre: "titre";
    readonly corps: "corps";
    readonly type: "type";
    readonly lu: "lu";
    readonly createdAt: "createdAt";
};
export type MessageInterneScalarFieldEnum = (typeof MessageInterneScalarFieldEnum)[keyof typeof MessageInterneScalarFieldEnum];
export declare const MessageInterneLocataireScalarFieldEnum: {
    readonly id: "id";
    readonly locataireId: "locataireId";
    readonly bailId: "bailId";
    readonly bienId: "bienId";
    readonly titre: "titre";
    readonly corps: "corps";
    readonly type: "type";
    readonly lu: "lu";
    readonly createdAt: "createdAt";
};
export type MessageInterneLocataireScalarFieldEnum = (typeof MessageInterneLocataireScalarFieldEnum)[keyof typeof MessageInterneLocataireScalarFieldEnum];
export declare const ProprietaireRefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly proprietaireId: "proprietaireId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
};
export type ProprietaireRefreshTokenScalarFieldEnum = (typeof ProprietaireRefreshTokenScalarFieldEnum)[keyof typeof ProprietaireRefreshTokenScalarFieldEnum];
export declare const PasswordResetTokenScalarFieldEnum: {
    readonly id: "id";
    readonly proprietaireId: "proprietaireId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly usedAt: "usedAt";
    readonly createdAt: "createdAt";
};
export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum];
export declare const AdminScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum];
export declare const RefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly adminId: "adminId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
};
export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];
export declare const AlerteScalarFieldEnum: {
    readonly id: "id";
    readonly telephone: "telephone";
    readonly ville: "ville";
    readonly quartier: "quartier";
    readonly typeLogement: "typeLogement";
    readonly typeTransaction: "typeTransaction";
    readonly prixMin: "prixMin";
    readonly prixMax: "prixMax";
    readonly canalPrefere: "canalPrefere";
    readonly statut: "statut";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AlerteScalarFieldEnum = (typeof AlerteScalarFieldEnum)[keyof typeof AlerteScalarFieldEnum];
export declare const TransactionScalarFieldEnum: {
    readonly id: "id";
    readonly proprietaireId: "proprietaireId";
    readonly type: "type";
    readonly statut: "statut";
    readonly montant: "montant";
    readonly devise: "devise";
    readonly modePaiement: "modePaiement";
    readonly provider: "provider";
    readonly reference: "reference";
    readonly transactionId: "transactionId";
    readonly dateInitiation: "dateInitiation";
    readonly dateConfirmation: "dateConfirmation";
    readonly dateEcheance: "dateEcheance";
    readonly bienId: "bienId";
    readonly bailId: "bailId";
    readonly echeanceId: "echeanceId";
    readonly locataireId: "locataireId";
    readonly note: "note";
    readonly instructions: "instructions";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum];
export declare const TemoignageScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly temoignage: "temoignage";
    readonly actif: "actif";
    readonly ordre: "ordre";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TemoignageScalarFieldEnum = (typeof TemoignageScalarFieldEnum)[keyof typeof TemoignageScalarFieldEnum];
export declare const PromotionHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly bienId: "bienId";
    readonly proprietaireId: "proprietaireId";
    readonly transactionId: "transactionId";
    readonly formuleId: "formuleId";
    readonly formuleNom: "formuleNom";
    readonly dureeJours: "dureeJours";
    readonly montant: "montant";
    readonly dateDebut: "dateDebut";
    readonly dateFin: "dateFin";
    readonly dateFinReelle: "dateFinReelle";
    readonly modePaiement: "modePaiement";
    readonly reference: "reference";
    readonly note: "note";
    readonly confirmeParAdmin: "confirmeParAdmin";
    readonly dateConfirmation: "dateConfirmation";
    readonly statut: "statut";
    readonly motifArret: "motifArret";
    readonly joursRestants: "joursRestants";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PromotionHistoryScalarFieldEnum = (typeof PromotionHistoryScalarFieldEnum)[keyof typeof PromotionHistoryScalarFieldEnum];
export declare const ConfigMonetisationScalarFieldEnum: {
    readonly id: "id";
    readonly miseEnAvantActive: "miseEnAvantActive";
    readonly commissionActive: "commissionActive";
    readonly tauxCommission: "tauxCommission";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ConfigMonetisationScalarFieldEnum = (typeof ConfigMonetisationScalarFieldEnum)[keyof typeof ConfigMonetisationScalarFieldEnum];
export declare const ConfigSiteScalarFieldEnum: {
    readonly id: "id";
    readonly contactEmail: "contactEmail";
    readonly contactPhone: "contactPhone";
    readonly contactAddress: "contactAddress";
    readonly serviceClientHours: "serviceClientHours";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ConfigSiteScalarFieldEnum = (typeof ConfigSiteScalarFieldEnum)[keyof typeof ConfigSiteScalarFieldEnum];
export declare const BailInvitationScalarFieldEnum: {
    readonly id: "id";
    readonly bienId: "bienId";
    readonly locataireId: "locataireId";
    readonly proprietaireId: "proprietaireId";
    readonly typeBail: "typeBail";
    readonly dateDebutBail: "dateDebutBail";
    readonly dateFinBail: "dateFinBail";
    readonly montantLoyer: "montantLoyer";
    readonly montantCaution: "montantCaution";
    readonly cautionVersee: "cautionVersee";
    readonly jourLimitePaiement: "jourLimitePaiement";
    readonly renouvellement: "renouvellement";
    readonly frequencePaiement: "frequencePaiement";
    readonly token: "token";
    readonly statut: "statut";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BailInvitationScalarFieldEnum = (typeof BailInvitationScalarFieldEnum)[keyof typeof BailInvitationScalarFieldEnum];
export declare const SignalementScalarFieldEnum: {
    readonly id: "id";
    readonly bienId: "bienId";
    readonly comptePublicId: "comptePublicId";
    readonly nom: "nom";
    readonly telephone: "telephone";
    readonly motif: "motif";
    readonly commentaire: "commentaire";
    readonly statut: "statut";
    readonly traitePar: "traitePar";
    readonly dateTraitement: "dateTraitement";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SignalementScalarFieldEnum = (typeof SignalementScalarFieldEnum)[keyof typeof SignalementScalarFieldEnum];
export declare const EtatDesLieuxScalarFieldEnum: {
    readonly id: "id";
    readonly bailId: "bailId";
    readonly bienId: "bienId";
    readonly proprietaireId: "proprietaireId";
    readonly locataireId: "locataireId";
    readonly type: "type";
    readonly statut: "statut";
    readonly dateRealisation: "dateRealisation";
    readonly dateValidation: "dateValidation";
    readonly documentPdf: "documentPdf";
    readonly nbCles: "nbCles";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EtatDesLieuxScalarFieldEnum = (typeof EtatDesLieuxScalarFieldEnum)[keyof typeof EtatDesLieuxScalarFieldEnum];
export declare const PieceEtatDesLieuxScalarFieldEnum: {
    readonly id: "id";
    readonly etatDesLieuxId: "etatDesLieuxId";
    readonly nom: "nom";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PieceEtatDesLieuxScalarFieldEnum = (typeof PieceEtatDesLieuxScalarFieldEnum)[keyof typeof PieceEtatDesLieuxScalarFieldEnum];
export declare const ElementEtatDesLieuxScalarFieldEnum: {
    readonly id: "id";
    readonly pieceId: "pieceId";
    readonly nom: "nom";
    readonly etat: "etat";
    readonly commentaire: "commentaire";
    readonly photos: "photos";
    readonly estConteste: "estConteste";
    readonly motifContestation: "motifContestation";
    readonly photoContestation: "photoContestation";
    readonly statutContestation: "statutContestation";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ElementEtatDesLieuxScalarFieldEnum = (typeof ElementEtatDesLieuxScalarFieldEnum)[keyof typeof ElementEtatDesLieuxScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly AnyNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'StatutAnnonce'
 */
export type EnumStatutAnnonceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutAnnonce'>;
/**
 * Reference to a field of type 'StatutAnnonce[]'
 */
export type ListEnumStatutAnnonceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutAnnonce[]'>;
/**
 * Reference to a field of type 'TypePieceIdentite'
 */
export type EnumTypePieceIdentiteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypePieceIdentite'>;
/**
 * Reference to a field of type 'TypePieceIdentite[]'
 */
export type ListEnumTypePieceIdentiteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypePieceIdentite[]'>;
/**
 * Reference to a field of type 'StatutLocataire'
 */
export type EnumStatutLocataireFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutLocataire'>;
/**
 * Reference to a field of type 'StatutLocataire[]'
 */
export type ListEnumStatutLocataireFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutLocataire[]'>;
/**
 * Reference to a field of type 'StatutVerificationLocataire'
 */
export type EnumStatutVerificationLocataireFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutVerificationLocataire'>;
/**
 * Reference to a field of type 'StatutVerificationLocataire[]'
 */
export type ListEnumStatutVerificationLocataireFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutVerificationLocataire[]'>;
/**
 * Reference to a field of type 'StatutBail'
 */
export type EnumStatutBailFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutBail'>;
/**
 * Reference to a field of type 'StatutBail[]'
 */
export type ListEnumStatutBailFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutBail[]'>;
/**
 * Reference to a field of type 'StatutPaiement'
 */
export type EnumStatutPaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutPaiement'>;
/**
 * Reference to a field of type 'StatutPaiement[]'
 */
export type ListEnumStatutPaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutPaiement[]'>;
/**
 * Reference to a field of type 'TypeNotification'
 */
export type EnumTypeNotificationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeNotification'>;
/**
 * Reference to a field of type 'TypeNotification[]'
 */
export type ListEnumTypeNotificationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeNotification[]'>;
/**
 * Reference to a field of type 'StatutNotification'
 */
export type EnumStatutNotificationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutNotification'>;
/**
 * Reference to a field of type 'StatutNotification[]'
 */
export type ListEnumStatutNotificationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutNotification[]'>;
/**
 * Reference to a field of type 'StatutDepot'
 */
export type EnumStatutDepotFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDepot'>;
/**
 * Reference to a field of type 'StatutDepot[]'
 */
export type ListEnumStatutDepotFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDepot[]'>;
/**
 * Reference to a field of type 'StatutContrat'
 */
export type EnumStatutContratFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutContrat'>;
/**
 * Reference to a field of type 'StatutContrat[]'
 */
export type ListEnumStatutContratFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutContrat[]'>;
/**
 * Reference to a field of type 'StatutVerification'
 */
export type EnumStatutVerificationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutVerification'>;
/**
 * Reference to a field of type 'StatutVerification[]'
 */
export type ListEnumStatutVerificationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutVerification[]'>;
/**
 * Reference to a field of type 'StatutAlerte'
 */
export type EnumStatutAlerteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutAlerte'>;
/**
 * Reference to a field of type 'StatutAlerte[]'
 */
export type ListEnumStatutAlerteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutAlerte[]'>;
/**
 * Reference to a field of type 'TypePaiement'
 */
export type EnumTypePaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypePaiement'>;
/**
 * Reference to a field of type 'TypePaiement[]'
 */
export type ListEnumTypePaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypePaiement[]'>;
/**
 * Reference to a field of type 'StatutTransaction'
 */
export type EnumStatutTransactionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutTransaction'>;
/**
 * Reference to a field of type 'StatutTransaction[]'
 */
export type ListEnumStatutTransactionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutTransaction[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'StatutPromotion'
 */
export type EnumStatutPromotionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutPromotion'>;
/**
 * Reference to a field of type 'StatutPromotion[]'
 */
export type ListEnumStatutPromotionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutPromotion[]'>;
/**
 * Reference to a field of type 'StatutBailInvitation'
 */
export type EnumStatutBailInvitationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutBailInvitation'>;
/**
 * Reference to a field of type 'StatutBailInvitation[]'
 */
export type ListEnumStatutBailInvitationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutBailInvitation[]'>;
/**
 * Reference to a field of type 'MotifSignalement'
 */
export type EnumMotifSignalementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MotifSignalement'>;
/**
 * Reference to a field of type 'MotifSignalement[]'
 */
export type ListEnumMotifSignalementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MotifSignalement[]'>;
/**
 * Reference to a field of type 'StatutSignalement'
 */
export type EnumStatutSignalementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutSignalement'>;
/**
 * Reference to a field of type 'StatutSignalement[]'
 */
export type ListEnumStatutSignalementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutSignalement[]'>;
/**
 * Reference to a field of type 'TypeEtatDesLieux'
 */
export type EnumTypeEtatDesLieuxFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeEtatDesLieux'>;
/**
 * Reference to a field of type 'TypeEtatDesLieux[]'
 */
export type ListEnumTypeEtatDesLieuxFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeEtatDesLieux[]'>;
/**
 * Reference to a field of type 'StatutEtatDesLieux'
 */
export type EnumStatutEtatDesLieuxFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutEtatDesLieux'>;
/**
 * Reference to a field of type 'StatutEtatDesLieux[]'
 */
export type ListEnumStatutEtatDesLieuxFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutEtatDesLieux[]'>;
/**
 * Reference to a field of type 'EtatElement'
 */
export type EnumEtatElementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EtatElement'>;
/**
 * Reference to a field of type 'EtatElement[]'
 */
export type ListEnumEtatElementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EtatElement[]'>;
/**
 * Reference to a field of type 'StatutContestationElement'
 */
export type EnumStatutContestationElementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutContestationElement'>;
/**
 * Reference to a field of type 'StatutContestationElement[]'
 */
export type ListEnumStatutContestationElementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutContestationElement[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export type Datasource = {
    url?: string;
};
export type Datasources = {
    db?: Datasource;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
}
export type GlobalOmitConfig = {
    pays?: Prisma.PaysOmit;
    ville?: Prisma.VilleOmit;
    quartier?: Prisma.QuartierOmit;
    typeLogement?: Prisma.TypeLogementOmit;
    typeTransaction?: Prisma.TypeTransactionOmit;
    statutBien?: Prisma.StatutBienOmit;
    categorieMeuble?: Prisma.CategorieMeubleOmit;
    categorieEquipement?: Prisma.CategorieEquipementOmit;
    meuble?: Prisma.MeubleOmit;
    equipement?: Prisma.EquipementOmit;
    formulePremium?: Prisma.FormulePremiumOmit;
    bien?: Prisma.BienOmit;
    comptePublic?: Prisma.ComptePublicOmit;
    comptePublicRefreshToken?: Prisma.ComptePublicRefreshTokenOmit;
    favori?: Prisma.FavoriOmit;
    vueBien?: Prisma.VueBienOmit;
    bienEquipement?: Prisma.BienEquipementOmit;
    bienMeuble?: Prisma.BienMeubleOmit;
    documentBien?: Prisma.DocumentBienOmit;
    etablissement?: Prisma.EtablissementOmit;
    locataire?: Prisma.LocataireOmit;
    locataireVerification?: Prisma.LocataireVerificationOmit;
    bailLocation?: Prisma.BailLocationOmit;
    echeancierLoyer?: Prisma.EcheancierLoyerOmit;
    quittance?: Prisma.QuittanceOmit;
    notification?: Prisma.NotificationOmit;
    depotCaution?: Prisma.DepotCautionOmit;
    modeleContrat?: Prisma.ModeleContratOmit;
    contrat?: Prisma.ContratOmit;
    locataireRefreshToken?: Prisma.LocataireRefreshTokenOmit;
    locatairePasswordResetToken?: Prisma.LocatairePasswordResetTokenOmit;
    verificationDocuments?: Prisma.VerificationDocumentsOmit;
    proprietaire?: Prisma.ProprietaireOmit;
    messageInterne?: Prisma.MessageInterneOmit;
    messageInterneLocataire?: Prisma.MessageInterneLocataireOmit;
    proprietaireRefreshToken?: Prisma.ProprietaireRefreshTokenOmit;
    passwordResetToken?: Prisma.PasswordResetTokenOmit;
    admin?: Prisma.AdminOmit;
    refreshToken?: Prisma.RefreshTokenOmit;
    alerte?: Prisma.AlerteOmit;
    transaction?: Prisma.TransactionOmit;
    temoignage?: Prisma.TemoignageOmit;
    promotionHistory?: Prisma.PromotionHistoryOmit;
    configMonetisation?: Prisma.ConfigMonetisationOmit;
    configSite?: Prisma.ConfigSiteOmit;
    bailInvitation?: Prisma.BailInvitationOmit;
    signalement?: Prisma.SignalementOmit;
    etatDesLieux?: Prisma.EtatDesLieuxOmit;
    pieceEtatDesLieux?: Prisma.PieceEtatDesLieuxOmit;
    elementEtatDesLieux?: Prisma.ElementEtatDesLieuxOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map