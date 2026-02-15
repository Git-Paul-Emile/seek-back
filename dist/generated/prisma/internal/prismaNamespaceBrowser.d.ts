import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
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
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map