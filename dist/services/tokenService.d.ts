export declare class TokenService {
    /**
     * Créer une nouvelle paire de tokens et les stocker en base
     */
    createTokenPair(proprietaireId: string, telephone: string, role: string, userAgent?: string, ipAddress?: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    /**
     * Rafraîchir les tokens (rotation)
     */
    refreshTokens(refreshTokenValue: string, userAgent?: string, ipAddress?: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    /**
     * Révoquer tous les tokens d'un utilisateur (déconnexion complète)
     */
    revokeAllUserTokens(proprietaireId: string): Promise<void>;
    /**
     * Révoquer un token spécifique
     */
    revokeToken(refreshTokenValue: string): Promise<void>;
    /**
     * Détecter les tokens compromis - révoquer toute la famille de tokens
     */
    detectCompromisedToken(proprietaireId: string, suspiciousIp?: string): Promise<void>;
}
export declare const tokenService: TokenService;
//# sourceMappingURL=tokenService.d.ts.map