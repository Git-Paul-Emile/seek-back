import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options?: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.pays`: Exposes CRUD operations for the **Pays** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Pays
  * const pays = await prisma.pays.findMany()
  * ```
  */
    get pays(): Prisma.PaysDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ville`: Exposes CRUD operations for the **Ville** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Villes
      * const villes = await prisma.ville.findMany()
      * ```
      */
    get ville(): Prisma.VilleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.typeLogement`: Exposes CRUD operations for the **TypeLogement** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TypeLogements
      * const typeLogements = await prisma.typeLogement.findMany()
      * ```
      */
    get typeLogement(): Prisma.TypeLogementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.typeTransaction`: Exposes CRUD operations for the **TypeTransaction** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TypeTransactions
      * const typeTransactions = await prisma.typeTransaction.findMany()
      * ```
      */
    get typeTransaction(): Prisma.TypeTransactionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.statutBien`: Exposes CRUD operations for the **StatutBien** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more StatutBiens
      * const statutBiens = await prisma.statutBien.findMany()
      * ```
      */
    get statutBien(): Prisma.StatutBienDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.categorieMeuble`: Exposes CRUD operations for the **CategorieMeuble** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CategorieMeubles
      * const categorieMeubles = await prisma.categorieMeuble.findMany()
      * ```
      */
    get categorieMeuble(): Prisma.CategorieMeubleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.categorieEquipement`: Exposes CRUD operations for the **CategorieEquipement** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CategorieEquipements
      * const categorieEquipements = await prisma.categorieEquipement.findMany()
      * ```
      */
    get categorieEquipement(): Prisma.CategorieEquipementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.meuble`: Exposes CRUD operations for the **Meuble** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Meubles
      * const meubles = await prisma.meuble.findMany()
      * ```
      */
    get meuble(): Prisma.MeubleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.equipement`: Exposes CRUD operations for the **Equipement** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Equipements
      * const equipements = await prisma.equipement.findMany()
      * ```
      */
    get equipement(): Prisma.EquipementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.proprietaire`: Exposes CRUD operations for the **Proprietaire** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Proprietaires
      * const proprietaires = await prisma.proprietaire.findMany()
      * ```
      */
    get proprietaire(): Prisma.ProprietaireDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.proprietaireRefreshToken`: Exposes CRUD operations for the **ProprietaireRefreshToken** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProprietaireRefreshTokens
      * const proprietaireRefreshTokens = await prisma.proprietaireRefreshToken.findMany()
      * ```
      */
    get proprietaireRefreshToken(): Prisma.ProprietaireRefreshTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Admins
      * const admins = await prisma.admin.findMany()
      * ```
      */
    get admin(): Prisma.AdminDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RefreshTokens
      * const refreshTokens = await prisma.refreshToken.findMany()
      * ```
      */
    get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(dirname: string): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map