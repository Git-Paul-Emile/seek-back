/**
 * Service de géocodage utilisant l'API Nominatim (OpenStreetMap)
 * Convertit les adresses en coordonnées GPS (latitude, longitude)
 */
interface GeocodingResult {
    latitude: number;
    longitude: number;
    displayName: string;
    city?: string;
    country?: string;
    countryCode?: string;
    postcode?: string;
}
/**
 * Construit une adresse complète à partir des composants
 */
export declare function buildFullAddress(address: string, city?: string, country?: string): string;
/**
 * Géocode une adresse en coordonnées GPS
 * Utilise l'API Nominatim avec mise en cache
 */
export declare function geocodeAddress(address: string, city?: string, countryCode?: string): Promise<GeocodingResult | null>;
/**
 * Géocodage inverse (coordonnées -> adresse)
 */
export declare function reverseGeocode(latitude: number, longitude: number): Promise<GeocodingResult | null>;
/**
 * Calcule la distance entre deux points GPS (formule de Haversine)
 * Retourne la distance en kilomètres
 */
export declare function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number;
/**
 * Estime le temps de trajet à pied (vitesse moyenne 5 km/h)
 */
export declare function estimateWalkingTime(distanceKm: number): number;
/**
 * Estime le temps de trajet en voiture (vitesse moyenne 30 km/h en ville)
 */
export declare function estimateDrivingTime(distanceKm: number): number;
declare const _default: {
    geocodeAddress: typeof geocodeAddress;
    reverseGeocode: typeof reverseGeocode;
    calculateDistance: typeof calculateDistance;
    estimateWalkingTime: typeof estimateWalkingTime;
    estimateDrivingTime: typeof estimateDrivingTime;
    buildFullAddress: typeof buildFullAddress;
};
export default _default;
//# sourceMappingURL=geocodingService.d.ts.map