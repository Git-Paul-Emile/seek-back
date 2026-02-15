export declare const TypeProprietaire: {
    readonly PARTICULIER: "PARTICULIER";
    readonly ENTREPRISE: "ENTREPRISE";
};
export type TypeProprietaire = (typeof TypeProprietaire)[keyof typeof TypeProprietaire];
export declare const StatutProprietaire: {
    readonly ACTIF: "ACTIF";
    readonly INACTIF: "INACTIF";
    readonly SUSPENDU: "SUSPENDU";
};
export type StatutProprietaire = (typeof StatutProprietaire)[keyof typeof StatutProprietaire];
export declare const ResetType: {
    readonly EMAIL: "EMAIL";
    readonly SMS: "SMS";
};
export type ResetType = (typeof ResetType)[keyof typeof ResetType];
export declare const TypeBien: {
    readonly APPARTEMENT: "APPARTEMENT";
    readonly VILLA: "VILLA";
    readonly MAISON: "MAISON";
    readonly STUDIO: "STUDIO";
    readonly CHAMBRE: "CHAMBRE";
    readonly BUREAU: "BUREAU";
    readonly LOCAL_COMMERCIAL: "LOCAL_COMMERCIAL";
    readonly TERRAIN: "TERRAIN";
    readonly IMMEUBLE: "IMMEUBLE";
};
export type TypeBien = (typeof TypeBien)[keyof typeof TypeBien];
export declare const StatutBien: {
    readonly DISPONIBLE: "DISPONIBLE";
    readonly LOUE: "LOUE";
    readonly VENDU: "VENDU";
    readonly INDISPONIBLE: "INDISPONIBLE";
    readonly EN_MAINTENANCE: "EN_MAINTENANCE";
};
export type StatutBien = (typeof StatutBien)[keyof typeof StatutBien];
export declare const ModeLocation: {
    readonly JOURNALIER: "JOURNALIER";
    readonly MENSUEL: "MENSUEL";
    readonly ANNUEL: "ANNUEL";
    readonly SAISONNIER: "SAISONNIER";
};
export type ModeLocation = (typeof ModeLocation)[keyof typeof ModeLocation];
export declare const CategorieEtablissement: {
    readonly SANTE: "SANTE";
    readonly EDUCATION: "EDUCATION";
    readonly COMMERCE_ALIMENTATION: "COMMERCE_ALIMENTATION";
    readonly LIEUX_CULTE: "LIEUX_CULTE";
    readonly SECURITE_SERVICES_PUBLICS: "SECURITE_SERVICES_PUBLICS";
    readonly TRANSPORT: "TRANSPORT";
    readonly LOISIRS_QUALITE_VIE: "LOISIRS_QUALITE_VIE";
};
export type CategorieEtablissement = (typeof CategorieEtablissement)[keyof typeof CategorieEtablissement];
export declare const TypeEtablissement: {
    readonly HOPITAL: "HOPITAL";
    readonly PHARMACIE: "PHARMACIE";
    readonly ECOLE_MATERNELLE: "ECOLE_MATERNELLE";
    readonly ECOLE_PRIMAIRE: "ECOLE_PRIMAIRE";
    readonly COLLEGE: "COLLEGE";
    readonly LYCEE: "LYCEE";
    readonly UNIVERSITE: "UNIVERSITE";
    readonly CENTRE_FORMATION: "CENTRE_FORMATION";
    readonly SUPERMARCHE: "SUPERMARCHE";
    readonly BOUTIQUE_QUARTIER: "BOUTIQUE_QUARTIER";
    readonly MARCHE: "MARCHE";
    readonly CENTRE_COMMERCIAL: "CENTRE_COMMERCIAL";
    readonly BOULANGERIE: "BOULANGERIE";
    readonly MOSQUEE: "MOSQUEE";
    readonly EGLISE: "EGLISE";
    readonly COMMISSARIAT_GENDARMERIE: "COMMISSARIAT_GENDARMERIE";
    readonly CASERNE_POMPIERS: "CASERNE_POMPIERS";
    readonly MAIRIE: "MAIRIE";
    readonly ARRET_BUS: "ARRET_BUS";
    readonly GARE: "GARE";
    readonly STATION_BRT: "STATION_BRT";
    readonly ROUTE_PRINCIPALE: "ROUTE_PRINCIPALE";
    readonly SALLE_SPORT: "SALLE_SPORT";
    readonly PARC: "PARC";
    readonly RESTAURANT: "RESTAURANT";
    readonly PLAGE: "PLAGE";
    readonly TERRAIN_SPORT: "TERRAIN_SPORT";
};
export type TypeEtablissement = (typeof TypeEtablissement)[keyof typeof TypeEtablissement];
//# sourceMappingURL=enums.d.ts.map