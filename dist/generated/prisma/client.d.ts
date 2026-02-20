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
 * // Fetch zero or more Pays
 * const pays = await prisma.pays.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
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
 * Model TypeLogement
 *
 */
export type TypeLogement = Prisma.TypeLogementModel;
/**
 * Model TypeTransaction
 *
 */
export type TypeTransaction = Prisma.TypeTransactionModel;
/**
 * Model StatutBien
 *
 */
export type StatutBien = Prisma.StatutBienModel;
/**
 * Model CategorieMeuble
 *
 */
export type CategorieMeuble = Prisma.CategorieMeubleModel;
/**
 * Model CategorieEquipement
 *
 */
export type CategorieEquipement = Prisma.CategorieEquipementModel;
/**
 * Model Meuble
 *
 */
export type Meuble = Prisma.MeubleModel;
/**
 * Model Equipement
 *
 */
export type Equipement = Prisma.EquipementModel;
/**
 * Model Proprietaire
 *
 */
export type Proprietaire = Prisma.ProprietaireModel;
/**
 * Model ProprietaireRefreshToken
 *
 */
export type ProprietaireRefreshToken = Prisma.ProprietaireRefreshTokenModel;
/**
 * Model Admin
 *
 */
export type Admin = Prisma.AdminModel;
/**
 * Model RefreshToken
 *
 */
export type RefreshToken = Prisma.RefreshTokenModel;
//# sourceMappingURL=client.d.ts.map