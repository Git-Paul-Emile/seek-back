/**
 * Service de cache en mémoire pour optimiser les requêtes fréquentes
 * Utilise un cache LRU avec TTL (Time To Live)
 */
class MemoryCache {
    cache = new Map();
    defaultTTL; // en millisecondes
    constructor(defaultTTL = 5 * 60 * 1000) {
        this.defaultTTL = defaultTTL;
    }
    /**
     * Récupère une valeur du cache
     */
    get(key) {
        const entry = this.cache.get(key);
        if (!entry)
            return null;
        // Vérifier si l'entrée a expiré
        if (Date.now() > entry.expiresAt) {
            this.cache.delete(key);
            return null;
        }
        return entry.data;
    }
    /**
     * Définit une valeur dans le cache
     */
    set(key, data, ttl) {
        const expiresAt = Date.now() + (ttl ?? this.defaultTTL);
        this.cache.set(key, { data, expiresAt });
    }
    /**
     * Supprime une entrée du cache
     */
    delete(key) {
        this.cache.delete(key);
    }
    /**
     * Supprime toutes les entrées dont la clé commence par le préfixe donné
     */
    deleteMany(prefix) {
        for (const key of this.cache.keys()) {
            if (key.startsWith(prefix)) {
                this.cache.delete(key);
            }
        }
    }
    /**
     * Vide complètement le cache
     */
    clear() {
        this.cache.clear();
    }
    /**
     * Nettoie les entrées expirées
     */
    cleanup() {
        const now = Date.now();
        for (const [key, entry] of this.cache.entries()) {
            if (now > entry.expiresAt) {
                this.cache.delete(key);
            }
        }
    }
}
// Cache pour les dernières annonces (TTL: 3 minutes)
export const dernieresAnnoncesCache = new MemoryCache(3 * 60 * 1000);
// Cache pour les résultats de recherche (TTL: 2 minutes)
export const rechercheCache = new MemoryCache(2 * 60 * 1000);
// Cache pour les lieux distincts (TTL: 10 minutes)
export const lieuxCache = new MemoryCache(10 * 60 * 1000);
// Nettoyage périodique du cache (toutes les 5 minutes)
setInterval(() => {
    dernieresAnnoncesCache.cleanup();
    rechercheCache.cleanup();
    lieuxCache.cleanup();
}, 5 * 60 * 1000);
/**
 * Invalide le cache lorsqu'une nouvelle annonce est publiée ou modifiée
 */
export const invalidateAnnoncesCache = () => {
    dernieresAnnoncesCache.clear();
    rechercheCache.clear();
};
/**
 * Invalide le cache des recherches (garder les dernières annonces)
 */
export const invalidateRechercheCache = () => {
    rechercheCache.clear();
};
//# sourceMappingURL=cache.service.js.map