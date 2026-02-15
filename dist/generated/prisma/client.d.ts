import * as runtime from "@prisma/client/runtime/library";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Proprietaires
 * const proprietaires = await prisma.proprietaire.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Proprietaire
 *
 */
export type Proprietaire = Prisma.ProprietaireModel;
/**
 * Model RefreshToken
 *
 */
export type RefreshToken = Prisma.RefreshTokenModel;
/**
 * Model PasswordReset
 *
 */
export type PasswordReset = Prisma.PasswordResetModel;
/**
 * Model Pays
 *
 */
export type Pays = Prisma.PaysModel;
/**
 * Model Ville
 *
 */
export type Ville = Prisma.VilleModel;
/**
 * Model Bien
 *
 */
export type Bien = Prisma.BienModel;
/**
 * Model EtablissementProche
 *
 */
export type EtablissementProche = Prisma.EtablissementProcheModel;
//# sourceMappingURL=client.d.ts.map