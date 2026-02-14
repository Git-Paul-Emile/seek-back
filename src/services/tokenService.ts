import { prisma } from "../config/database.js";
import { generateTokenPair, verifyRefreshToken } from "../config/jwt.js";
import type { RefreshTokenPayload } from "../config/jwt.js";
import { hashToken, generateTokenId } from "../utils/crypto.js";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";

export class TokenService {
  /**
   * Créer une nouvelle paire de tokens et les stocker en base
   */
  async createTokenPair(
    proprietaireId: string,
    telephone: string,
    role: string,
    userAgent?: string,
    ipAddress?: string
  ) {
    const tokenId = generateTokenId();
    const tokenString = `${proprietaireId}:${tokenId}`;
    const hashedToken = hashToken(tokenString);

    // Calculer la date d'expiration
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 jours

    // Stocker le refresh token en base
    await (prisma as any).refreshToken.create({
      data: {
        token: hashedToken,
        proprietaireId,
        expiresAt,
        userAgent: userAgent || null,
        ipAddress: ipAddress || null,
      },
    });

    // Générer les tokens JWT
    const { accessToken, refreshToken } = generateTokenPair({
      userId: proprietaireId,
      telephone,
      role,
      tokenId,
    });

    return { accessToken, refreshToken };
  }

  /**
   * Rafraîchir les tokens (rotation)
   */
  async refreshTokens(
    refreshTokenValue: string,
    userAgent?: string,
    ipAddress?: string
  ) {
    try {
      // Vérifier le refresh token
      const payload = verifyRefreshToken(refreshTokenValue);
      const { sub: proprietaireId, tokenId } = payload;

      // Hacher le token pour la recherche en base
      const tokenString = `${proprietaireId}:${tokenId}`;
      const hashedToken = hashToken(tokenString);

      // Récupérer le token en base
      const storedToken = await (prisma as any).refreshToken.findUnique({
        where: { token: hashedToken },
      });

      if (!storedToken) {
        // Token non trouvé - possible vol de token !
        throw new AppError(
          "Token de rafraîchissement invalide",
          StatusCodes.UNAUTHORIZED
        );
      }

      // Vérifier si le token a été révoqué
      if (storedToken.revokedAt) {
        throw new AppError(
          "Token de rafraîchissement révoqué",
          StatusCodes.UNAUTHORIZED
        );
      }

      // Vérifier si le token a expiré
      if (new Date() > storedToken.expiresAt) {
        throw new AppError(
          "Token de rafraîchissement expiré",
          StatusCodes.UNAUTHORIZED
        );
      }

      // RÉVOQUER l'ancien token (anti-replay)
      await (prisma as any).refreshToken.update({
        where: { id: storedToken.id },
        data: { revokedAt: new Date() },
      });

      // Récupérer les infos du propriétaire
      const proprietaire = await prisma.proprietaire.findUnique({
        where: { id: proprietaireId },
      });

      if (!proprietaire || proprietaire.statut !== "ACTIF") {
        throw new AppError(
          "Compte non trouvé ou suspendu",
          StatusCodes.UNAUTHORIZED
        );
      }

      // Créer une nouvelle paire de tokens
      return this.createTokenPair(
        proprietaireId,
        proprietaire.telephone,
        proprietaire.role,
        userAgent,
        ipAddress
      );
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError(
        "Erreur lors du renouvellement du token",
        StatusCodes.UNAUTHORIZED
      );
    }
  }

  /**
   * Révoquer tous les tokens d'un utilisateur (déconnexion complète)
   */
  async revokeAllUserTokens(proprietaireId: string) {
    await (prisma as any).refreshToken.updateMany({
      where: {
        proprietaireId,
        revokedAt: null,
      },
      data: {
        revokedAt: new Date(),
      },
    });
  }

  /**
   * Révoquer un token spécifique
   */
  async revokeToken(refreshTokenValue: string) {
    try {
      const payload = verifyRefreshToken(refreshTokenValue);
      const tokenString = `${payload.sub}:${payload.tokenId}`;
      const hashedToken = hashToken(tokenString);

      await (prisma as any).refreshToken.updateMany({
        where: {
          token: hashedToken,
          revokedAt: null,
        },
        data: {
          revokedAt: new Date(),
        },
      });
    } catch {
      // Ignorer les erreurs - le token était peut-être déjà invalide
    }
  }

  /**
   * Détecter les tokens compromis - révoquer toute la famille de tokens
   */
  async detectCompromisedToken(proprietaireId: string, suspiciousIp?: string) {
    // Révoquer tous les tokens de l'utilisateur
    await this.revokeAllUserTokens(proprietaireId);

    // Logger l'incident pour analyse
    console.error(
      `[SECURITY] Token compromis détecté pour l'utilisateur ${proprietaireId}. IP suspecte: ${suspiciousIp}`
    );
  }
}

export const tokenService = new TokenService();
