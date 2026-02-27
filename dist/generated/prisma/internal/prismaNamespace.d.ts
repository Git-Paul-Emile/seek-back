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
    readonly TypeLogement: "TypeLogement";
    readonly TypeTransaction: "TypeTransaction";
    readonly StatutBien: "StatutBien";
    readonly CategorieMeuble: "CategorieMeuble";
    readonly CategorieEquipement: "CategorieEquipement";
    readonly Meuble: "Meuble";
    readonly Equipement: "Equipement";
    readonly Bien: "Bien";
    readonly BienEquipement: "BienEquipement";
    readonly BienMeuble: "BienMeuble";
    readonly Etablissement: "Etablissement";
    readonly Locataire: "Locataire";
    readonly BailLocation: "BailLocation";
    readonly LocataireRefreshToken: "LocataireRefreshToken";
    readonly Proprietaire: "Proprietaire";
    readonly ProprietaireRefreshToken: "ProprietaireRefreshToken";
    readonly Admin: "Admin";
    readonly RefreshToken: "RefreshToken";
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
        modelProps: "pays" | "ville" | "typeLogement" | "typeTransaction" | "statutBien" | "categorieMeuble" | "categorieEquipement" | "meuble" | "equipement" | "bien" | "bienEquipement" | "bienMeuble" | "etablissement" | "locataire" | "bailLocation" | "locataireRefreshToken" | "proprietaire" | "proprietaireRefreshToken" | "admin" | "refreshToken";
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
    readonly frequencePaiement: "frequencePaiement";
    readonly chargesIncluses: "chargesIncluses";
    readonly caution: "caution";
    readonly disponibleLe: "disponibleLe";
    readonly photos: "photos";
    readonly actif: "actif";
    readonly statutAnnonce: "statutAnnonce";
    readonly noteAdmin: "noteAdmin";
    readonly hasPendingRevision: "hasPendingRevision";
    readonly pendingRevision: "pendingRevision";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BienScalarFieldEnum = (typeof BienScalarFieldEnum)[keyof typeof BienScalarFieldEnum];
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
    readonly dateExpiration: "dateExpiration";
    readonly autoriteDelivrance: "autoriteDelivrance";
    readonly situationProfessionnelle: "situationProfessionnelle";
    readonly activationToken: "activationToken";
    readonly tokenExpiresAt: "tokenExpiresAt";
    readonly statut: "statut";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LocataireScalarFieldEnum = (typeof LocataireScalarFieldEnum)[keyof typeof LocataireScalarFieldEnum];
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
    readonly frequencePaiement: "frequencePaiement";
    readonly statut: "statut";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BailLocationScalarFieldEnum = (typeof BailLocationScalarFieldEnum)[keyof typeof BailLocationScalarFieldEnum];
export declare const LocataireRefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly locataireId: "locataireId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
};
export type LocataireRefreshTokenScalarFieldEnum = (typeof LocataireRefreshTokenScalarFieldEnum)[keyof typeof LocataireRefreshTokenScalarFieldEnum];
export declare const ProprietaireScalarFieldEnum: {
    readonly id: "id";
    readonly prenom: "prenom";
    readonly nom: "nom";
    readonly sexe: "sexe";
    readonly telephone: "telephone";
    readonly email: "email";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProprietaireScalarFieldEnum = (typeof ProprietaireScalarFieldEnum)[keyof typeof ProprietaireScalarFieldEnum];
export declare const ProprietaireRefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly proprietaireId: "proprietaireId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
};
export type ProprietaireRefreshTokenScalarFieldEnum = (typeof ProprietaireRefreshTokenScalarFieldEnum)[keyof typeof ProprietaireRefreshTokenScalarFieldEnum];
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
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Reference to a field of type 'StatutAnnonce'
 */
export type EnumStatutAnnonceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutAnnonce'>;
/**
 * Reference to a field of type 'StatutAnnonce[]'
 */
export type ListEnumStatutAnnonceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutAnnonce[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
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
 * Reference to a field of type 'StatutBail'
 */
export type EnumStatutBailFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutBail'>;
/**
 * Reference to a field of type 'StatutBail[]'
 */
export type ListEnumStatutBailFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutBail[]'>;
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
    typeLogement?: Prisma.TypeLogementOmit;
    typeTransaction?: Prisma.TypeTransactionOmit;
    statutBien?: Prisma.StatutBienOmit;
    categorieMeuble?: Prisma.CategorieMeubleOmit;
    categorieEquipement?: Prisma.CategorieEquipementOmit;
    meuble?: Prisma.MeubleOmit;
    equipement?: Prisma.EquipementOmit;
    bien?: Prisma.BienOmit;
    bienEquipement?: Prisma.BienEquipementOmit;
    bienMeuble?: Prisma.BienMeubleOmit;
    etablissement?: Prisma.EtablissementOmit;
    locataire?: Prisma.LocataireOmit;
    bailLocation?: Prisma.BailLocationOmit;
    locataireRefreshToken?: Prisma.LocataireRefreshTokenOmit;
    proprietaire?: Prisma.ProprietaireOmit;
    proprietaireRefreshToken?: Prisma.ProprietaireRefreshTokenOmit;
    admin?: Prisma.AdminOmit;
    refreshToken?: Prisma.RefreshTokenOmit;
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