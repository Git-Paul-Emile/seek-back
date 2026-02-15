/**
 * Service de géocodage utilisant l'API Nominatim (OpenStreetMap)
 * Convertit les adresses en coordonnées GPS (latitude, longitude)
 */
const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org';
const USER_AGENT = 'SeekApp/1.0 (https://github.com/seek-app)';
// Cache simple en mémoire pour éviter les appels répétés
const geocodingCache = new Map();
/**
 * Construit une adresse complète à partir des composants
 */
export function buildFullAddress(address, city, country = 'Sénégal') {
    const parts = [address];
    if (city)
        parts.push(city);
    parts.push(country);
    return parts.join(', ');
}
/**
 * Géocode une adresse en coordonnées GPS
 * Utilise l'API Nominatim avec mise en cache
 */
export async function geocodeAddress(address, city, countryCode = 'sn') {
    // Construire l'adresse complète
    const fullAddress = buildFullAddress(address, city);
    // Vérifier le cache
    const cacheKey = `${fullAddress}_${countryCode}`;
    if (geocodingCache.has(cacheKey)) {
        return geocodingCache.get(cacheKey);
    }
    try {
        const searchParams = new URLSearchParams({
            format: 'json',
            addressdetails: '1',
            limit: '1',
            q: fullAddress,
            ...(countryCode && { countrycodes: countryCode })
        });
        const response = await fetch(`${NOMINATIM_BASE_URL}/search?${searchParams.toString()}`, {
            method: 'GET',
            headers: {
                'User-Agent': USER_AGENT,
                'Accept': 'application/json',
                'Accept-Language': 'fr'
            }
        });
        if (!response.ok) {
            console.error(`[Geocoding] Erreur HTTP: ${response.status}`);
            return null;
        }
        const data = await response.json();
        if (!data || data.length === 0) {
            console.warn(`[Geocoding] Aucun résultat pour: ${fullAddress}`);
            return null;
        }
        const result = data[0];
        if (!result) {
            console.warn(`[Geocoding] Résultat vide pour: ${fullAddress}`);
            return null;
        }
        const geocodingResult = {
            latitude: parseFloat(result.lat),
            longitude: parseFloat(result.lon),
            displayName: result.display_name,
            city: result.address?.city || result.address?.town || result.address?.village || result.address?.municipality,
            country: result.address?.country,
            countryCode: result.address?.country_code?.toUpperCase(),
            postcode: result.address?.postcode
        };
        // Mettre en cache
        geocodingCache.set(cacheKey, geocodingResult);
        console.log(`[Geocoding] Adresse géocodée: ${fullAddress} -> (${geocodingResult.latitude}, ${geocodingResult.longitude})`);
        return geocodingResult;
    }
    catch (error) {
        console.error('[Geocoding] Erreur:', error);
        return null;
    }
}
/**
 * Géocodage inverse (coordonnées -> adresse)
 */
export async function reverseGeocode(latitude, longitude) {
    const cacheKey = `reverse_${latitude}_${longitude}`;
    if (geocodingCache.has(cacheKey)) {
        return geocodingCache.get(cacheKey);
    }
    try {
        const searchParams = new URLSearchParams({
            format: 'json',
            addressdetails: '1',
            lat: latitude.toString(),
            lon: longitude.toString()
        });
        const response = await fetch(`${NOMINATIM_BASE_URL}/reverse?${searchParams.toString()}`, {
            method: 'GET',
            headers: {
                'User-Agent': USER_AGENT,
                'Accept': 'application/json',
                'Accept-Language': 'fr'
            }
        });
        if (!response.ok) {
            return null;
        }
        const result = await response.json();
        if (!result || (typeof result === 'object' && 'error' in result && result.error)) {
            return null;
        }
        const nominatimResult = result;
        const geocodingResult = {
            latitude: parseFloat(nominatimResult.lat),
            longitude: parseFloat(nominatimResult.lon),
            displayName: nominatimResult.display_name,
            city: nominatimResult.address?.city || nominatimResult.address?.town || nominatimResult.address?.village || nominatimResult.address?.municipality,
            country: nominatimResult.address?.country,
            countryCode: nominatimResult.address?.country_code?.toUpperCase(),
            postcode: nominatimResult.address?.postcode
        };
        geocodingCache.set(cacheKey, geocodingResult);
        return geocodingResult;
    }
    catch (error) {
        console.error('[ReverseGeocoding] Erreur:', error);
        return null;
    }
}
/**
 * Calcule la distance entre deux points GPS (formule de Haversine)
 * Retourne la distance en kilomètres
 */
export function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Rayon de la Terre en km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return Math.round(distance * 100) / 100; // Arrondir à 2 décimales
}
function toRad(deg) {
    return deg * (Math.PI / 180);
}
/**
 * Estime le temps de trajet à pied (vitesse moyenne 5 km/h)
 */
export function estimateWalkingTime(distanceKm) {
    const walkingSpeedKmH = 5;
    return Math.round((distanceKm / walkingSpeedKmH) * 60); // Minutes
}
/**
 * Estime le temps de trajet en voiture (vitesse moyenne 30 km/h en ville)
 */
export function estimateDrivingTime(distanceKm) {
    const drivingSpeedKmH = 30;
    return Math.round((distanceKm / drivingSpeedKmH) * 60); // Minutes
}
export default {
    geocodeAddress,
    reverseGeocode,
    calculateDistance,
    estimateWalkingTime,
    estimateDrivingTime,
    buildFullAddress
};
//# sourceMappingURL=geocodingService.js.map