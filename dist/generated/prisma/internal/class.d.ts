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
     * `prisma.quartier`: Exposes CRUD operations for the **Quartier** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Quartiers
      * const quartiers = await prisma.quartier.findMany()
      * ```
      */
    get quartier(): Prisma.QuartierDelegate<ExtArgs, {
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
     * `prisma.formulePremium`: Exposes CRUD operations for the **FormulePremium** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more FormulePremiums
      * const formulePremiums = await prisma.formulePremium.findMany()
      * ```
      */
    get formulePremium(): Prisma.FormulePremiumDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bien`: Exposes CRUD operations for the **Bien** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Biens
      * const biens = await prisma.bien.findMany()
      * ```
      */
    get bien(): Prisma.BienDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.comptePublic`: Exposes CRUD operations for the **ComptePublic** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ComptePublics
      * const comptePublics = await prisma.comptePublic.findMany()
      * ```
      */
    get comptePublic(): Prisma.ComptePublicDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.comptePublicRefreshToken`: Exposes CRUD operations for the **ComptePublicRefreshToken** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ComptePublicRefreshTokens
      * const comptePublicRefreshTokens = await prisma.comptePublicRefreshToken.findMany()
      * ```
      */
    get comptePublicRefreshToken(): Prisma.ComptePublicRefreshTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.favori`: Exposes CRUD operations for the **Favori** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Favoris
      * const favoris = await prisma.favori.findMany()
      * ```
      */
    get favori(): Prisma.FavoriDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.vueBien`: Exposes CRUD operations for the **VueBien** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more VueBiens
      * const vueBiens = await prisma.vueBien.findMany()
      * ```
      */
    get vueBien(): Prisma.VueBienDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bienEquipement`: Exposes CRUD operations for the **BienEquipement** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BienEquipements
      * const bienEquipements = await prisma.bienEquipement.findMany()
      * ```
      */
    get bienEquipement(): Prisma.BienEquipementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bienMeuble`: Exposes CRUD operations for the **BienMeuble** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BienMeubles
      * const bienMeubles = await prisma.bienMeuble.findMany()
      * ```
      */
    get bienMeuble(): Prisma.BienMeubleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.documentBien`: Exposes CRUD operations for the **DocumentBien** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DocumentBiens
      * const documentBiens = await prisma.documentBien.findMany()
      * ```
      */
    get documentBien(): Prisma.DocumentBienDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.etablissement`: Exposes CRUD operations for the **Etablissement** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Etablissements
      * const etablissements = await prisma.etablissement.findMany()
      * ```
      */
    get etablissement(): Prisma.EtablissementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.locataire`: Exposes CRUD operations for the **Locataire** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Locataires
      * const locataires = await prisma.locataire.findMany()
      * ```
      */
    get locataire(): Prisma.LocataireDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.locataireVerification`: Exposes CRUD operations for the **LocataireVerification** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LocataireVerifications
      * const locataireVerifications = await prisma.locataireVerification.findMany()
      * ```
      */
    get locataireVerification(): Prisma.LocataireVerificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bailLocation`: Exposes CRUD operations for the **BailLocation** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BailLocations
      * const bailLocations = await prisma.bailLocation.findMany()
      * ```
      */
    get bailLocation(): Prisma.BailLocationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.echeancierLoyer`: Exposes CRUD operations for the **EcheancierLoyer** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EcheancierLoyers
      * const echeancierLoyers = await prisma.echeancierLoyer.findMany()
      * ```
      */
    get echeancierLoyer(): Prisma.EcheancierLoyerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.quittance`: Exposes CRUD operations for the **Quittance** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Quittances
      * const quittances = await prisma.quittance.findMany()
      * ```
      */
    get quittance(): Prisma.QuittanceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Notifications
      * const notifications = await prisma.notification.findMany()
      * ```
      */
    get notification(): Prisma.NotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.depotCaution`: Exposes CRUD operations for the **DepotCaution** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DepotCautions
      * const depotCautions = await prisma.depotCaution.findMany()
      * ```
      */
    get depotCaution(): Prisma.DepotCautionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.modeleContrat`: Exposes CRUD operations for the **ModeleContrat** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ModeleContrats
      * const modeleContrats = await prisma.modeleContrat.findMany()
      * ```
      */
    get modeleContrat(): Prisma.ModeleContratDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.contrat`: Exposes CRUD operations for the **Contrat** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Contrats
      * const contrats = await prisma.contrat.findMany()
      * ```
      */
    get contrat(): Prisma.ContratDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.locataireRefreshToken`: Exposes CRUD operations for the **LocataireRefreshToken** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LocataireRefreshTokens
      * const locataireRefreshTokens = await prisma.locataireRefreshToken.findMany()
      * ```
      */
    get locataireRefreshToken(): Prisma.LocataireRefreshTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.locatairePasswordResetToken`: Exposes CRUD operations for the **LocatairePasswordResetToken** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LocatairePasswordResetTokens
      * const locatairePasswordResetTokens = await prisma.locatairePasswordResetToken.findMany()
      * ```
      */
    get locatairePasswordResetToken(): Prisma.LocatairePasswordResetTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.verificationDocuments`: Exposes CRUD operations for the **VerificationDocuments** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more VerificationDocuments
      * const verificationDocuments = await prisma.verificationDocuments.findMany()
      * ```
      */
    get verificationDocuments(): Prisma.VerificationDocumentsDelegate<ExtArgs, {
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
     * `prisma.messageInterne`: Exposes CRUD operations for the **MessageInterne** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MessageInternes
      * const messageInternes = await prisma.messageInterne.findMany()
      * ```
      */
    get messageInterne(): Prisma.MessageInterneDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.messageInterneLocataire`: Exposes CRUD operations for the **MessageInterneLocataire** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MessageInterneLocataires
      * const messageInterneLocataires = await prisma.messageInterneLocataire.findMany()
      * ```
      */
    get messageInterneLocataire(): Prisma.MessageInterneLocataireDelegate<ExtArgs, {
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
     * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PasswordResetTokens
      * const passwordResetTokens = await prisma.passwordResetToken.findMany()
      * ```
      */
    get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, {
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
    /**
     * `prisma.alerte`: Exposes CRUD operations for the **Alerte** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Alertes
      * const alertes = await prisma.alerte.findMany()
      * ```
      */
    get alerte(): Prisma.AlerteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Transactions
      * const transactions = await prisma.transaction.findMany()
      * ```
      */
    get transaction(): Prisma.TransactionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.temoignage`: Exposes CRUD operations for the **Temoignage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Temoignages
      * const temoignages = await prisma.temoignage.findMany()
      * ```
      */
    get temoignage(): Prisma.TemoignageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.promotionHistory`: Exposes CRUD operations for the **PromotionHistory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PromotionHistories
      * const promotionHistories = await prisma.promotionHistory.findMany()
      * ```
      */
    get promotionHistory(): Prisma.PromotionHistoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.configMonetisation`: Exposes CRUD operations for the **ConfigMonetisation** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ConfigMonetisations
      * const configMonetisations = await prisma.configMonetisation.findMany()
      * ```
      */
    get configMonetisation(): Prisma.ConfigMonetisationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.configSite`: Exposes CRUD operations for the **ConfigSite** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ConfigSites
      * const configSites = await prisma.configSite.findMany()
      * ```
      */
    get configSite(): Prisma.ConfigSiteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bailInvitation`: Exposes CRUD operations for the **BailInvitation** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BailInvitations
      * const bailInvitations = await prisma.bailInvitation.findMany()
      * ```
      */
    get bailInvitation(): Prisma.BailInvitationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.signalement`: Exposes CRUD operations for the **Signalement** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Signalements
      * const signalements = await prisma.signalement.findMany()
      * ```
      */
    get signalement(): Prisma.SignalementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.etatDesLieux`: Exposes CRUD operations for the **EtatDesLieux** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EtatDesLieuxes
      * const etatDesLieuxes = await prisma.etatDesLieux.findMany()
      * ```
      */
    get etatDesLieux(): Prisma.EtatDesLieuxDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pieceEtatDesLieux`: Exposes CRUD operations for the **PieceEtatDesLieux** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PieceEtatDesLieuxes
      * const pieceEtatDesLieuxes = await prisma.pieceEtatDesLieux.findMany()
      * ```
      */
    get pieceEtatDesLieux(): Prisma.PieceEtatDesLieuxDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.elementEtatDesLieux`: Exposes CRUD operations for the **ElementEtatDesLieux** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ElementEtatDesLieuxes
      * const elementEtatDesLieuxes = await prisma.elementEtatDesLieux.findMany()
      * ```
      */
    get elementEtatDesLieux(): Prisma.ElementEtatDesLieuxDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(dirname: string): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map