/**
 * Service de recherche d'établissements proches
 * Utilise l'API Overpass (OpenStreetMap) pour trouver les POI à proximité
 */
export declare const ETABLISSEMENTS_CONFIG: {
    readonly SANTE: {
        readonly HOPITAL: {
            readonly osmTags: readonly ["amenity=hospital"];
            readonly searchName: "hôpital";
            readonly priority: 1;
        };
        readonly PHARMACIE: {
            readonly osmTags: readonly ["amenity=pharmacy"];
            readonly searchName: "pharmacie";
            readonly priority: 1;
        };
    };
    readonly EDUCATION: {
        readonly ECOLE_MATERNELLE: {
            readonly osmTags: readonly ["amenity=school", "school=kindergarten"];
            readonly searchName: "école maternelle";
            readonly priority: 2;
        };
        readonly ECOLE_PRIMAIRE: {
            readonly osmTags: readonly ["amenity=school", "school=primary"];
            readonly searchName: "école primaire";
            readonly priority: 2;
        };
        readonly COLLEGE: {
            readonly osmTags: readonly ["amenity=school"];
            readonly searchName: "collège";
            readonly priority: 2;
        };
        readonly LYCEE: {
            readonly osmTags: readonly ["amenity=school"];
            readonly searchName: "lycée";
            readonly priority: 2;
        };
        readonly UNIVERSITE: {
            readonly osmTags: readonly ["amenity=university"];
            readonly searchName: "université";
            readonly priority: 2;
        };
        readonly CENTRE_FORMATION: {
            readonly osmTags: readonly ["amenity=college", "amenity=training"];
            readonly searchName: "centre de formation";
            readonly priority: 3;
        };
    };
    readonly COMMERCE_ALIMENTATION: {
        readonly SUPERMARCHE: {
            readonly osmTags: readonly ["shop=supermarket"];
            readonly searchName: "supermarché";
            readonly priority: 1;
        };
        readonly BOUTIQUE_QUARTIER: {
            readonly osmTags: readonly ["shop=convenience", "shop=general"];
            readonly searchName: "boutique";
            readonly priority: 1;
        };
        readonly MARCHE: {
            readonly osmTags: readonly ["amenity=marketplace"];
            readonly searchName: "marché";
            readonly priority: 1;
        };
        readonly CENTRE_COMMERCIAL: {
            readonly osmTags: readonly ["shop=mall"];
            readonly searchName: "centre commercial";
            readonly priority: 2;
        };
        readonly BOULANGERIE: {
            readonly osmTags: readonly ["shop=bakery"];
            readonly searchName: "boulangerie";
            readonly priority: 1;
        };
    };
    readonly LIEUX_CULTE: {
        readonly MOSQUEE: {
            readonly osmTags: readonly ["amenity=place_of_worship", "religion=muslim"];
            readonly searchName: "mosquée";
            readonly priority: 1;
        };
        readonly EGLISE: {
            readonly osmTags: readonly ["amenity=place_of_worship", "religion=christian"];
            readonly searchName: "église";
            readonly priority: 1;
        };
    };
    readonly SECURITE_SERVICES_PUBLICS: {
        readonly COMMISSARIAT_GENDARMERIE: {
            readonly osmTags: readonly ["amenity=police"];
            readonly searchName: "commissariat";
            readonly priority: 1;
        };
        readonly CASERNE_POMPIERS: {
            readonly osmTags: readonly ["amenity=fire_station"];
            readonly searchName: "caserne de pompiers";
            readonly priority: 1;
        };
        readonly MAIRIE: {
            readonly osmTags: readonly ["amenity=townhall"];
            readonly searchName: "mairie";
            readonly priority: 2;
        };
    };
    readonly TRANSPORT: {
        readonly ARRET_BUS: {
            readonly osmTags: readonly ["highway=bus_stop", "public_transport=stop_position"];
            readonly searchName: "arrêt de bus";
            readonly priority: 1;
        };
        readonly GARE: {
            readonly osmTags: readonly ["railway=station"];
            readonly searchName: "gare";
            readonly priority: 2;
        };
        readonly STATION_BRT: {
            readonly osmTags: readonly ["highway=bus_stop"];
            readonly searchName: "station BRT";
            readonly priority: 1;
        };
        readonly ROUTE_PRINCIPALE: {
            readonly osmTags: readonly ["highway=primary", "highway=trunk"];
            readonly searchName: "route principale";
            readonly priority: 3;
        };
    };
    readonly LOISIRS_QUALITE_VIE: {
        readonly SALLE_SPORT: {
            readonly osmTags: readonly ["leisure=sports_centre", "leisure=fitness_centre"];
            readonly searchName: "salle de sport";
            readonly priority: 2;
        };
        readonly PARC: {
            readonly osmTags: readonly ["leisure=park", "leisure=garden"];
            readonly searchName: "parc";
            readonly priority: 2;
        };
        readonly RESTAURANT: {
            readonly osmTags: readonly ["amenity=restaurant"];
            readonly searchName: "restaurant";
            readonly priority: 1;
        };
        readonly PLAGE: {
            readonly osmTags: readonly ["natural=beach", "leisure=beach"];
            readonly searchName: "plage";
            readonly priority: 3;
        };
        readonly TERRAIN_SPORT: {
            readonly osmTags: readonly ["leisure=pitch"];
            readonly searchName: "terrain de sport";
            readonly priority: 2;
        };
    };
};
export interface EtablissementTrouve {
    nom: string;
    type: string;
    categorie: string;
    typeEnum: string;
    latitude: number;
    longitude: number;
    distanceKm: number;
    dureeMinutes: number;
    adresse?: string;
    osmId?: string;
}
/**
 * Recherche tous les établissements proches pour une position donnée
 * Parcourt toutes les catégories et types configurés
 */
export declare function rechercherEtablissementsProches(latitude: number, longitude: number, maxParType?: number): Promise<EtablissementTrouve[]>;
/**
 * Recherche les établissements les plus proches (un seul par type)
 * Optimisé pour un résumé rapide
 */
export declare function rechercherPlusProches(latitude: number, longitude: number): Promise<Map<string, EtablissementTrouve>>;
/**
 * Formate les résultats pour l'affichage
 */
export declare function formaterResultats(etablissements: EtablissementTrouve[]): {
    parCategorie: Record<string, EtablissementTrouve[]>;
    resume: Record<string, {
        nom: string;
        distance: string;
        temps: string;
    }>;
};
declare const _default: {
    rechercherEtablissementsProches: typeof rechercherEtablissementsProches;
    rechercherPlusProches: typeof rechercherPlusProches;
    formaterResultats: typeof formaterResultats;
    ETABLISSEMENTS_CONFIG: {
        readonly SANTE: {
            readonly HOPITAL: {
                readonly osmTags: readonly ["amenity=hospital"];
                readonly searchName: "hôpital";
                readonly priority: 1;
            };
            readonly PHARMACIE: {
                readonly osmTags: readonly ["amenity=pharmacy"];
                readonly searchName: "pharmacie";
                readonly priority: 1;
            };
        };
        readonly EDUCATION: {
            readonly ECOLE_MATERNELLE: {
                readonly osmTags: readonly ["amenity=school", "school=kindergarten"];
                readonly searchName: "école maternelle";
                readonly priority: 2;
            };
            readonly ECOLE_PRIMAIRE: {
                readonly osmTags: readonly ["amenity=school", "school=primary"];
                readonly searchName: "école primaire";
                readonly priority: 2;
            };
            readonly COLLEGE: {
                readonly osmTags: readonly ["amenity=school"];
                readonly searchName: "collège";
                readonly priority: 2;
            };
            readonly LYCEE: {
                readonly osmTags: readonly ["amenity=school"];
                readonly searchName: "lycée";
                readonly priority: 2;
            };
            readonly UNIVERSITE: {
                readonly osmTags: readonly ["amenity=university"];
                readonly searchName: "université";
                readonly priority: 2;
            };
            readonly CENTRE_FORMATION: {
                readonly osmTags: readonly ["amenity=college", "amenity=training"];
                readonly searchName: "centre de formation";
                readonly priority: 3;
            };
        };
        readonly COMMERCE_ALIMENTATION: {
            readonly SUPERMARCHE: {
                readonly osmTags: readonly ["shop=supermarket"];
                readonly searchName: "supermarché";
                readonly priority: 1;
            };
            readonly BOUTIQUE_QUARTIER: {
                readonly osmTags: readonly ["shop=convenience", "shop=general"];
                readonly searchName: "boutique";
                readonly priority: 1;
            };
            readonly MARCHE: {
                readonly osmTags: readonly ["amenity=marketplace"];
                readonly searchName: "marché";
                readonly priority: 1;
            };
            readonly CENTRE_COMMERCIAL: {
                readonly osmTags: readonly ["shop=mall"];
                readonly searchName: "centre commercial";
                readonly priority: 2;
            };
            readonly BOULANGERIE: {
                readonly osmTags: readonly ["shop=bakery"];
                readonly searchName: "boulangerie";
                readonly priority: 1;
            };
        };
        readonly LIEUX_CULTE: {
            readonly MOSQUEE: {
                readonly osmTags: readonly ["amenity=place_of_worship", "religion=muslim"];
                readonly searchName: "mosquée";
                readonly priority: 1;
            };
            readonly EGLISE: {
                readonly osmTags: readonly ["amenity=place_of_worship", "religion=christian"];
                readonly searchName: "église";
                readonly priority: 1;
            };
        };
        readonly SECURITE_SERVICES_PUBLICS: {
            readonly COMMISSARIAT_GENDARMERIE: {
                readonly osmTags: readonly ["amenity=police"];
                readonly searchName: "commissariat";
                readonly priority: 1;
            };
            readonly CASERNE_POMPIERS: {
                readonly osmTags: readonly ["amenity=fire_station"];
                readonly searchName: "caserne de pompiers";
                readonly priority: 1;
            };
            readonly MAIRIE: {
                readonly osmTags: readonly ["amenity=townhall"];
                readonly searchName: "mairie";
                readonly priority: 2;
            };
        };
        readonly TRANSPORT: {
            readonly ARRET_BUS: {
                readonly osmTags: readonly ["highway=bus_stop", "public_transport=stop_position"];
                readonly searchName: "arrêt de bus";
                readonly priority: 1;
            };
            readonly GARE: {
                readonly osmTags: readonly ["railway=station"];
                readonly searchName: "gare";
                readonly priority: 2;
            };
            readonly STATION_BRT: {
                readonly osmTags: readonly ["highway=bus_stop"];
                readonly searchName: "station BRT";
                readonly priority: 1;
            };
            readonly ROUTE_PRINCIPALE: {
                readonly osmTags: readonly ["highway=primary", "highway=trunk"];
                readonly searchName: "route principale";
                readonly priority: 3;
            };
        };
        readonly LOISIRS_QUALITE_VIE: {
            readonly SALLE_SPORT: {
                readonly osmTags: readonly ["leisure=sports_centre", "leisure=fitness_centre"];
                readonly searchName: "salle de sport";
                readonly priority: 2;
            };
            readonly PARC: {
                readonly osmTags: readonly ["leisure=park", "leisure=garden"];
                readonly searchName: "parc";
                readonly priority: 2;
            };
            readonly RESTAURANT: {
                readonly osmTags: readonly ["amenity=restaurant"];
                readonly searchName: "restaurant";
                readonly priority: 1;
            };
            readonly PLAGE: {
                readonly osmTags: readonly ["natural=beach", "leisure=beach"];
                readonly searchName: "plage";
                readonly priority: 3;
            };
            readonly TERRAIN_SPORT: {
                readonly osmTags: readonly ["leisure=pitch"];
                readonly searchName: "terrain de sport";
                readonly priority: 2;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=placesService.d.ts.map