/**
 * Service de cache en mémoire pour optimiser les requêtes fréquentes
 * Utilise un cache LRU avec TTL (Time To Live)
 */
declare class MemoryCache<T> {
    private cache;
    private defaultTTL;
    constructor(defaultTTL?: number);
    /**
     * Récupère une valeur du cache
     */
    get(key: string): T | null;
    /**
     * Définit une valeur dans le cache
     */
    set(key: string, data: T, ttl?: number): void;
    /**
     * Supprime une entrée du cache
     */
    delete(key: string): void;
    /**
     * Supprime toutes les entrées dont la clé commence par le préfixe donné
     */
    deleteMany(prefix: string): void;
    /**
     * Vide complètement le cache
     */
    clear(): void;
    /**
     * Nettoie les entrées expirées
     */
    cleanup(): void;
}
export declare const dernieresAnnoncesCache: MemoryCache<any[]>;
export declare const rechercheCache: MemoryCache<{
    items: any[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}>;
export declare const lieuxCache: MemoryCache<{
    quartiers: string[];
    villes: string[];
}>;
/**
 * Invalide le cache lorsqu'une nouvelle annonce est publiée ou modifiée
 */
export declare const invalidateAnnoncesCache: () => void;
/**
 * Invalide le cache des recherches (garder les dernières annonces)
 */
export declare const invalidateRechercheCache: () => void;
export {};
//# sourceMappingURL=cache.service.d.ts.map