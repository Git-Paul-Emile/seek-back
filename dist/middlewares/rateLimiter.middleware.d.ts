/**
 * Rate limiter global - 100 requêtes par 15 minutes
 */
export declare const limiteurGlobal: import("express-rate-limit").RateLimitRequestHandler;
/**
 * Rate limiter pour l'authentification (inscription, connexion, mot de passe oublié)
 * 10 tentatives par 15 minutes
 */
export declare const limiteurAuth: import("express-rate-limit").RateLimitRequestHandler;
/**
 * Rate limiter pour les OTP (mot de passe oublié par SMS/Email)
 * 5 tentatives par heure
 */
export declare const limiteurOtp: import("express-rate-limit").RateLimitRequestHandler;
/**
 * Rate limiter strict pour les opérations sensibles
 * 5 tentatives par 15 minutes
 */
export declare const limiteurStrict: import("express-rate-limit").RateLimitRequestHandler;
/**
 * Rate limiter pour le refresh token
 * 30 requêtes par heure
 */
export declare const limiteurRefresh: import("express-rate-limit").RateLimitRequestHandler;
//# sourceMappingURL=rateLimiter.middleware.d.ts.map