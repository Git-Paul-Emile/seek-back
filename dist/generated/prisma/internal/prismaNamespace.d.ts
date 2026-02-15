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
    readonly Proprietaire: "Proprietaire";
    readonly RefreshToken: "RefreshToken";
    readonly PasswordReset: "PasswordReset";
    readonly Pays: "Pays";
    readonly Ville: "Ville";
    readonly Bien: "Bien";
    readonly EtablissementProche: "EtablissementProche";
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
        modelProps: "proprietaire" | "refreshToken" | "passwordReset" | "pays" | "ville" | "bien" | "etablissementProche";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
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
        PasswordReset: {
            payload: Prisma.$PasswordResetPayload<ExtArgs>;
            fields: Prisma.PasswordResetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PasswordResetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PasswordResetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetPayload>;
                };
                findFirst: {
                    args: Prisma.PasswordResetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PasswordResetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetPayload>;
                };
                findMany: {
                    args: Prisma.PasswordResetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetPayload>[];
                };
                create: {
                    args: Prisma.PasswordResetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetPayload>;
                };
                createMany: {
                    args: Prisma.PasswordResetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PasswordResetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetPayload>[];
                };
                delete: {
                    args: Prisma.PasswordResetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetPayload>;
                };
                update: {
                    args: Prisma.PasswordResetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetPayload>;
                };
                deleteMany: {
                    args: Prisma.PasswordResetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PasswordResetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PasswordResetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetPayload>[];
                };
                upsert: {
                    args: Prisma.PasswordResetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetPayload>;
                };
                aggregate: {
                    args: Prisma.PasswordResetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePasswordReset>;
                };
                groupBy: {
                    args: Prisma.PasswordResetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordResetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PasswordResetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordResetCountAggregateOutputType> | number;
                };
            };
        };
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
        EtablissementProche: {
            payload: Prisma.$EtablissementProchePayload<ExtArgs>;
            fields: Prisma.EtablissementProcheFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EtablissementProcheFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementProchePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EtablissementProcheFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementProchePayload>;
                };
                findFirst: {
                    args: Prisma.EtablissementProcheFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementProchePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EtablissementProcheFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementProchePayload>;
                };
                findMany: {
                    args: Prisma.EtablissementProcheFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementProchePayload>[];
                };
                create: {
                    args: Prisma.EtablissementProcheCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementProchePayload>;
                };
                createMany: {
                    args: Prisma.EtablissementProcheCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EtablissementProcheCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementProchePayload>[];
                };
                delete: {
                    args: Prisma.EtablissementProcheDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementProchePayload>;
                };
                update: {
                    args: Prisma.EtablissementProcheUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementProchePayload>;
                };
                deleteMany: {
                    args: Prisma.EtablissementProcheDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EtablissementProcheUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EtablissementProcheUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementProchePayload>[];
                };
                upsert: {
                    args: Prisma.EtablissementProcheUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EtablissementProchePayload>;
                };
                aggregate: {
                    args: Prisma.EtablissementProcheAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEtablissementProche>;
                };
                groupBy: {
                    args: Prisma.EtablissementProcheGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EtablissementProcheGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EtablissementProcheCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EtablissementProcheCountAggregateOutputType> | number;
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
export declare const ProprietaireScalarFieldEnum: {
    readonly id: "id";
    readonly nom_complet: "nom_complet";
    readonly telephone: "telephone";
    readonly email: "email";
    readonly adresse: "adresse";
    readonly mot_de_passe: "mot_de_passe";
    readonly whatsapp: "whatsapp";
    readonly ville: "ville";
    readonly type_proprietaire: "type_proprietaire";
    readonly raison_sociale: "raison_sociale";
    readonly profil_complet: "profil_complet";
    readonly taux_completude_profil: "taux_completude_profil";
    readonly statut: "statut";
    readonly role: "role";
    readonly date_creation: "date_creation";
    readonly date_modification: "date_modification";
};
export type ProprietaireScalarFieldEnum = (typeof ProprietaireScalarFieldEnum)[keyof typeof ProprietaireScalarFieldEnum];
export declare const RefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly token: "token";
    readonly proprietaireId: "proprietaireId";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
    readonly userAgent: "userAgent";
    readonly ipAddress: "ipAddress";
};
export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];
export declare const PasswordResetScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly type: "type";
    readonly proprietaireId: "proprietaireId";
    readonly expiresAt: "expiresAt";
    readonly usedAt: "usedAt";
    readonly createdAt: "createdAt";
};
export type PasswordResetScalarFieldEnum = (typeof PasswordResetScalarFieldEnum)[keyof typeof PasswordResetScalarFieldEnum];
export declare const PaysScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly code: "code";
    readonly date_creation: "date_creation";
    readonly date_modification: "date_modification";
};
export type PaysScalarFieldEnum = (typeof PaysScalarFieldEnum)[keyof typeof PaysScalarFieldEnum];
export declare const VilleScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly paysId: "paysId";
    readonly date_creation: "date_creation";
    readonly date_modification: "date_modification";
};
export type VilleScalarFieldEnum = (typeof VilleScalarFieldEnum)[keyof typeof VilleScalarFieldEnum];
export declare const BienScalarFieldEnum: {
    readonly id: "id";
    readonly titre: "titre";
    readonly type: "type";
    readonly prix: "prix";
    readonly statut: "statut";
    readonly modeLocation: "modeLocation";
    readonly description: "description";
    readonly surface: "surface";
    readonly chambres: "chambres";
    readonly sallesDeBain: "sallesDeBain";
    readonly adresse: "adresse";
    readonly quartier: "quartier";
    readonly villeId: "villeId";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly imageCouverture: "imageCouverture";
    readonly images: "images";
    readonly documents: "documents";
    readonly urlVisiteVirtuelle: "urlVisiteVirtuelle";
    readonly dateCreation: "dateCreation";
    readonly dateModification: "dateModification";
    readonly proprietaireId: "proprietaireId";
};
export type BienScalarFieldEnum = (typeof BienScalarFieldEnum)[keyof typeof BienScalarFieldEnum];
export declare const EtablissementProcheScalarFieldEnum: {
    readonly id: "id";
    readonly bienId: "bienId";
    readonly categorie: "categorie";
    readonly type: "type";
    readonly nom: "nom";
    readonly adresse: "adresse";
    readonly distanceKm: "distanceKm";
    readonly dureeMinutes: "dureeMinutes";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly dateCreation: "dateCreation";
    readonly dateModification: "dateModification";
};
export type EtablissementProcheScalarFieldEnum = (typeof EtablissementProcheScalarFieldEnum)[keyof typeof EtablissementProcheScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
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
 * Reference to a field of type 'TypeProprietaire'
 */
export type EnumTypeProprietaireFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeProprietaire'>;
/**
 * Reference to a field of type 'TypeProprietaire[]'
 */
export type ListEnumTypeProprietaireFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeProprietaire[]'>;
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
 * Reference to a field of type 'StatutProprietaire'
 */
export type EnumStatutProprietaireFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutProprietaire'>;
/**
 * Reference to a field of type 'StatutProprietaire[]'
 */
export type ListEnumStatutProprietaireFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutProprietaire[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'ResetType'
 */
export type EnumResetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResetType'>;
/**
 * Reference to a field of type 'ResetType[]'
 */
export type ListEnumResetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResetType[]'>;
/**
 * Reference to a field of type 'TypeBien'
 */
export type EnumTypeBienFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeBien'>;
/**
 * Reference to a field of type 'TypeBien[]'
 */
export type ListEnumTypeBienFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeBien[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Reference to a field of type 'StatutBien'
 */
export type EnumStatutBienFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutBien'>;
/**
 * Reference to a field of type 'StatutBien[]'
 */
export type ListEnumStatutBienFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutBien[]'>;
/**
 * Reference to a field of type 'ModeLocation'
 */
export type EnumModeLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModeLocation'>;
/**
 * Reference to a field of type 'ModeLocation[]'
 */
export type ListEnumModeLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModeLocation[]'>;
/**
 * Reference to a field of type 'CategorieEtablissement'
 */
export type EnumCategorieEtablissementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategorieEtablissement'>;
/**
 * Reference to a field of type 'CategorieEtablissement[]'
 */
export type ListEnumCategorieEtablissementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategorieEtablissement[]'>;
/**
 * Reference to a field of type 'TypeEtablissement'
 */
export type EnumTypeEtablissementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeEtablissement'>;
/**
 * Reference to a field of type 'TypeEtablissement[]'
 */
export type ListEnumTypeEtablissementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeEtablissement[]'>;
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
    proprietaire?: Prisma.ProprietaireOmit;
    refreshToken?: Prisma.RefreshTokenOmit;
    passwordReset?: Prisma.PasswordResetOmit;
    pays?: Prisma.PaysOmit;
    ville?: Prisma.VilleOmit;
    bien?: Prisma.BienOmit;
    etablissementProche?: Prisma.EtablissementProcheOmit;
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