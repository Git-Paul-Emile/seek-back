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
    readonly Pays: "Pays";
    readonly Ville: "Ville";
    readonly TypeLogement: "TypeLogement";
    readonly TypeTransaction: "TypeTransaction";
    readonly StatutBien: "StatutBien";
    readonly CategorieMeuble: "CategorieMeuble";
    readonly CategorieEquipement: "CategorieEquipement";
    readonly Meuble: "Meuble";
    readonly Equipement: "Equipement";
    readonly Proprietaire: "Proprietaire";
    readonly ProprietaireRefreshToken: "ProprietaireRefreshToken";
    readonly Admin: "Admin";
    readonly RefreshToken: "RefreshToken";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
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