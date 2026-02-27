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
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map