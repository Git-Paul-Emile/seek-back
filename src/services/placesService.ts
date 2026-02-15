/**
 * Service de recherche d'établissements proches
 * Utilise l'API Overpass (OpenStreetMap) pour trouver les POI à proximité
 */

import { calculateDistance, estimateWalkingTime } from './geocodingService.js';

// Configuration des catégories et types d'établissements avec leurs tags OSM
export const ETABLISSEMENTS_CONFIG = {
  SANTE: {
    HOPITAL: {
      osmTags: ['amenity=hospital'],
      searchName: 'hôpital',
      priority: 1
    },
    PHARMACIE: {
      osmTags: ['amenity=pharmacy'],
      searchName: 'pharmacie',
      priority: 1
    }
  },
  EDUCATION: {
    ECOLE_MATERNELLE: {
      osmTags: ['amenity=school', 'school=kindergarten'],
      searchName: 'école maternelle',
      priority: 2
    },
    ECOLE_PRIMAIRE: {
      osmTags: ['amenity=school', 'school=primary'],
      searchName: 'école primaire',
      priority: 2
    },
    COLLEGE: {
      osmTags: ['amenity=school'],
      searchName: 'collège',
      priority: 2
    },
    LYCEE: {
      osmTags: ['amenity=school'],
      searchName: 'lycée',
      priority: 2
    },
    UNIVERSITE: {
      osmTags: ['amenity=university'],
      searchName: 'université',
      priority: 2
    },
    CENTRE_FORMATION: {
      osmTags: ['amenity=college', 'amenity=training'],
      searchName: 'centre de formation',
      priority: 3
    }
  },
  COMMERCE_ALIMENTATION: {
    SUPERMARCHE: {
      osmTags: ['shop=supermarket'],
      searchName: 'supermarché',
      priority: 1
    },
    BOUTIQUE_QUARTIER: {
      osmTags: ['shop=convenience', 'shop=general'],
      searchName: 'boutique',
      priority: 1
    },
    MARCHE: {
      osmTags: ['amenity=marketplace'],
      searchName: 'marché',
      priority: 1
    },
    CENTRE_COMMERCIAL: {
      osmTags: ['shop=mall'],
      searchName: 'centre commercial',
      priority: 2
    },
    BOULANGERIE: {
      osmTags: ['shop=bakery'],
      searchName: 'boulangerie',
      priority: 1
    }
  },
  LIEUX_CULTE: {
    MOSQUEE: {
      osmTags: ['amenity=place_of_worship', 'religion=muslim'],
      searchName: 'mosquée',
      priority: 1
    },
    EGLISE: {
      osmTags: ['amenity=place_of_worship', 'religion=christian'],
      searchName: 'église',
      priority: 1
    }
  },
  SECURITE_SERVICES_PUBLICS: {
    COMMISSARIAT_GENDARMERIE: {
      osmTags: ['amenity=police'],
      searchName: 'commissariat',
      priority: 1
    },
    CASERNE_POMPIERS: {
      osmTags: ['amenity=fire_station'],
      searchName: 'caserne de pompiers',
      priority: 1
    },
    MAIRIE: {
      osmTags: ['amenity=townhall'],
      searchName: 'mairie',
      priority: 2
    }
  },
  TRANSPORT: {
    ARRET_BUS: {
      osmTags: ['highway=bus_stop', 'public_transport=stop_position'],
      searchName: 'arrêt de bus',
      priority: 1
    },
    GARE: {
      osmTags: ['railway=station'],
      searchName: 'gare',
      priority: 2
    },
    STATION_BRT: {
      osmTags: ['highway=bus_stop'],
      searchName: 'station BRT',
      priority: 1
    },
    ROUTE_PRINCIPALE: {
      osmTags: ['highway=primary', 'highway=trunk'],
      searchName: 'route principale',
      priority: 3
    }
  },
  LOISIRS_QUALITE_VIE: {
    SALLE_SPORT: {
      osmTags: ['leisure=sports_centre', 'leisure=fitness_centre'],
      searchName: 'salle de sport',
      priority: 2
    },
    PARC: {
      osmTags: ['leisure=park', 'leisure=garden'],
      searchName: 'parc',
      priority: 2
    },
    RESTAURANT: {
      osmTags: ['amenity=restaurant'],
      searchName: 'restaurant',
      priority: 1
    },
    PLAGE: {
      osmTags: ['natural=beach', 'leisure=beach'],
      searchName: 'plage',
      priority: 3
    },
    TERRAIN_SPORT: {
      osmTags: ['leisure=pitch'],
      searchName: 'terrain de sport',
      priority: 2
    }
  }
} as const;

// Interface pour un établissement trouvé
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

// Interface pour la réponse Overpass
interface OverpassElement {
  type: string;
  id: number;
  lat?: number;
  lon?: number;
  tags?: {
    name?: string;
    'addr:street'?: string;
    'addr:city'?: string;
    'addr:housenumber'?: string;
    amenity?: string;
    shop?: string;
    leisure?: string;
    [key: string]: string | undefined;
  };
  center?: {
    lat: number;
    lon: number;
  };
}

const OVERPASS_API_URL = 'https://overpass-api.de/api/interpreter';
const SEARCH_RADIUS = 5000; // Rayon de recherche en mètres (5 km)

/**
 * Construit une requête Overpass pour un type d'établissement
 */
function buildOverpassQuery(
  lat: number,
  lon: number,
  osmTags: readonly string[],
  radius: number = SEARCH_RADIUS
): string {
  const queries = osmTags.map(tag => {
    const [key, value] = tag.split('=');
    return `
      node["${key}"="${value}"](around:${radius},${lat},${lon});
      way["${key}"="${value}"](around:${radius},${lat},${lon});
      relation["${key}"="${value}"](around:${radius},${lat},${lon});
    `;
  }).join('\n');

  return `
    [out:json][timeout:25];
    (
      ${queries}
    );
    out center;
  `;
}

/**
 * Recherche les établissements d'un type spécifique autour d'une position
 */
async function searchEstablishmentsByType(
  lat: number,
  lon: number,
  categorie: string,
  typeKey: string,
  typeConfig: { osmTags: readonly string[]; searchName: string; priority: number },
  maxResults: number = 3
): Promise<EtablissementTrouve[]> {
  try {
    const query = buildOverpassQuery(lat, lon, typeConfig.osmTags);
    
    const response = await fetch(OVERPASS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `data=${encodeURIComponent(query)}`
    });

    if (!response.ok) {
      console.error(`[Places] Erreur Overpass: ${response.status}`);
      return [];
    }

    const data = await response.json();
    const elements: OverpassElement[] = data.elements || [];

    // Calculer les distances et trier
    const results: EtablissementTrouve[] = elements
      .map(el => {
        const elLat = el.lat || el.center?.lat;
        const elLon = el.lon || el.center?.lon;
        
        if (!elLat || !elLon) return null;

        const distance = calculateDistance(lat, lon, elLat, elLon);
        
        return {
          nom: el.tags?.name || typeConfig.searchName,
          type: typeConfig.searchName,
          categorie,
          typeEnum: typeKey,
          latitude: elLat,
          longitude: elLon,
          distanceKm: distance,
          dureeMinutes: estimateWalkingTime(distance),
          adresse: el.tags?.['addr:street'] 
            ? `${el.tags?.['addr:housenumber'] || ''} ${el.tags?.['addr:street']}`.trim()
            : undefined,
          osmId: `${el.type}/${el.id}`
        } as EtablissementTrouve;
      })
      .filter((item): item is EtablissementTrouve => item !== null)
      .sort((a: EtablissementTrouve, b: EtablissementTrouve) => a.distanceKm - b.distanceKm)
      .slice(0, maxResults);

    return results;
  } catch (error) {
    console.error(`[Places] Erreur recherche ${typeConfig.searchName}:`, error);
    return [];
  }
}

/**
 * Recherche tous les établissements proches pour une position donnée
 * Parcourt toutes les catégories et types configurés
 */
export async function rechercherEtablissementsProches(
  latitude: number,
  longitude: number,
  maxParType: number = 3
): Promise<EtablissementTrouve[]> {
  const tousResultats: EtablissementTrouve[] = [];

  // Parcourir toutes les catégories
  for (const [categorie, types] of Object.entries(ETABLISSEMENTS_CONFIG)) {
    // Parcourir tous les types de la catégorie
    for (const [typeKey, typeConfig] of Object.entries(types)) {
      console.log(`[Places] Recherche: ${typeConfig.searchName}...`);
      
      const resultats = await searchEstablishmentsByType(
        latitude,
        longitude,
        categorie,
        typeKey,
        typeConfig,
        maxParType
      );

      if (resultats.length > 0) {
        tousResultats.push(...resultats);
      }

      // Petit délai pour ne pas surcharger l'API
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }

  console.log(`[Places] ${tousResultats.length} établissements trouvés au total`);
  return tousResultats;
}

/**
 * Recherche les établissements les plus proches (un seul par type)
 * Optimisé pour un résumé rapide
 */
export async function rechercherPlusProches(
  latitude: number,
  longitude: number
): Promise<Map<string, EtablissementTrouve>> {
  const plusProches = new Map<string, EtablissementTrouve>();

  const resultats = await rechercherEtablissementsProches(latitude, longitude, 1);
  
  resultats.forEach(etablissement => {
    const key = `${etablissement.categorie}_${etablissement.typeEnum}`;
    const existant = plusProches.get(key);
    
    if (!existant || etablissement.distanceKm < existant.distanceKm) {
      plusProches.set(key, etablissement);
    }
  });

  return plusProches;
}

/**
 * Formate les résultats pour l'affichage
 */
export function formaterResultats(etablissements: EtablissementTrouve[]): {
  parCategorie: Record<string, EtablissementTrouve[]>;
  resume: Record<string, { nom: string; distance: string; temps: string }>;
} {
  const parCategorie: Record<string, EtablissementTrouve[]> = {};
  
  etablissements.forEach(e => {
    const list = parCategorie[e.categorie] ?? [];
    list.push(e);
    parCategorie[e.categorie] = list;
  });

  // Trier chaque catégorie par distance
  Object.keys(parCategorie).forEach(cat => {
    const items = parCategorie[cat];
    if (items) {
      items.sort((a: EtablissementTrouve, b: EtablissementTrouve) => a.distanceKm - b.distanceKm);
    }
  });

  // Créer un résumé
  const resume: Record<string, { nom: string; distance: string; temps: string }> = {};
  etablissements.forEach(e => {
    const key = `${e.categorie}_${e.typeEnum}`;
    const existingResume = resume[key];
    const existingDistance = existingResume ? parseFloat(existingResume.distance) : Number.POSITIVE_INFINITY;

    if (!existingResume || e.distanceKm < existingDistance) {
      resume[key] = {
        nom: e.nom,
        distance: `${e.distanceKm} km`,
        temps: `${e.dureeMinutes} min à pied`
      };
    }
  });

  return { parCategorie, resume };
}

export default {
  rechercherEtablissementsProches,
  rechercherPlusProches,
  formaterResultats,
  ETABLISSEMENTS_CONFIG
};