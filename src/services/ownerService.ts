import bcrypt from "bcrypt";
import { proprietaireRepository } from "../repositories/ownerRepository.js";
import { 
  proprietaireInscriptionSchema, 
  type ProprietaireInscriptionInput,
  proprietaireConnexionSchema,
  resetPasswordSchema,
  type ResetPasswordInput
} from "../validators/ownerValidator.js";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";
import { tokenService } from "./tokenService.js";
import { cookieOptions, refreshCookieOptions, clearAuthCookies } from "../config/cookies.js";
import { sendPasswordResetEmail, sendWelcomeEmail } from "./emailService.js";
import { sendPasswordResetSMS, checkTwilioConfig } from "./smsService.js";
import { generateOTP, isOTPExpired } from "../utils/crypto.js";
import { prisma } from "../config/database.js";

export class ProprietaireService {
  /**
   * Enregistrer un nouveau propriétaire
   */
  async register(data: ProprietaireInscriptionInput) {
    // Valider les données
    const validationResult = proprietaireInscriptionSchema.safeParse(data);
    
    if (!validationResult.success) {
      const errorMessages = validationResult.error.issues.map(err => `${err.path.join('.')}: ${err.message}`).join('; ');
      throw new AppError(`Validation échouée: ${errorMessages}`, StatusCodes.BAD_REQUEST);
    }

    const validData = validationResult.data;

    // Vérifier si le téléphone existe déjà
    const phoneExists = await proprietaireRepository.phoneExists(validData.telephone);
    if (phoneExists) {
      throw new AppError("Ce numéro de téléphone est déjà utilisé", StatusCodes.BAD_REQUEST);
    }

    // Vérifier si l'email existe déjà (si fourni)
    if (validData.email) {
      const emailExists = await proprietaireRepository.findByEmail(validData.email);
      if (emailExists) {
        throw new AppError("Cet email est déjà utilisé", StatusCodes.BAD_REQUEST);
      }
    }

    // Créer le propriétaire
    const hashedPassword = await bcrypt.hash(validData.mot_de_passe, 10);
    
    const proprietaire = await proprietaireRepository.create({
      ...validData,
      mot_de_passe: validData.mot_de_passe,
    });

    // Envoyer l'email de bienvenue
    if (validData.email) {
      await sendWelcomeEmail(validData.email, validData.nom_complet).catch(console.error);
    }

    // Générer les tokens automatiquement (connexion directe)
    const { accessToken, refreshToken } = await tokenService.createTokenPair(
      proprietaire.id,
      proprietaire.telephone,
      proprietaire.role
    );

    // Retourner sans le mot de passe
    const { mot_de_passe: _, ...proprietaireSansMotDePasse } = proprietaire;
    
    return {
      success: true,
      data: {
        owner: proprietaireSansMotDePasse,
        accessToken,
        refreshToken,
      },
      message: "Inscription réussie - Connexion automatique"
    };
  }

  /**
   * Authentifier un propriétaire et générer les tokens
   */
  async login(telephone: string, mot_de_passe: string, userAgent?: string, ipAddress?: string) {
    // Valider les données
    const validationResult = proprietaireConnexionSchema.safeParse({ telephone, mot_de_passe });
    
    if (!validationResult.success) {
      throw new AppError("Données de connexion invalides", StatusCodes.BAD_REQUEST);
    }

    const proprietaire = await proprietaireRepository.findByPhone(telephone);
    
    if (!proprietaire) {
      throw new AppError("Numéro de téléphone ou mot de passe incorrect", StatusCodes.UNAUTHORIZED);
    }

    const isPasswordValid = await bcrypt.compare(mot_de_passe, proprietaire.mot_de_passe);
    
    if (!isPasswordValid) {
      throw new AppError("Numéro de téléphone ou mot de passe incorrect", StatusCodes.UNAUTHORIZED);
    }

    if (proprietaire.statut !== "ACTIF") {
      throw new AppError("Compte suspendu ou inactif", StatusCodes.FORBIDDEN);
    }

    // Générer les tokens
    const { accessToken, refreshToken } = await tokenService.createTokenPair(
      proprietaire.id,
      proprietaire.telephone,
      proprietaire.role,
      userAgent,
      ipAddress
    );

    // Retourner sans le mot de passe
    const { mot_de_passe: _, ...proprietaireSansMotDePasse } = proprietaire;
    
    return {
      success: true,
      data: {
        owner: proprietaireSansMotDePasse,
        accessToken,
        refreshToken,
      },
      message: "Connexion réussie"
    };
  }

  /**
   * Déconnexion - révoquer les tokens
   */
  async logout(proprietaireId: string, res: any) {
    // Révoquer tous les tokens de l'utilisateur
    await tokenService.revokeAllUserTokens(proprietaireId);
    
    // Effacer les cookies
    clearAuthCookies(res);
    
    return {
      success: true,
      message: "Déconnexion réussie"
    };
  }

  /**
   * Rafraîchir les tokens
   */
  async refreshTokens(refreshTokenValue: string, userAgent?: string, ipAddress?: string) {
    const tokens = await tokenService.refreshTokens(refreshTokenValue, userAgent, ipAddress);
    
    return {
      success: true,
      data: tokens,
      message: "Tokens renouvelés avec succès"
    };
  }

  /**
   * Obtenir le profil du propriétaire connecté
   */
  async getProfile(proprietaireId: string) {
    const proprietaire = await proprietaireRepository.findById(proprietaireId);
    
    if (!proprietaire) {
      throw new AppError("Propriétaire non trouvé", StatusCodes.NOT_FOUND);
    }

    const { mot_de_passe: _, ...proprietaireSansMotDePasse } = proprietaire;
    
    return {
      success: true,
      data: proprietaireSansMotDePasse
    };
  }

  /**
   * Mettre à jour le profil du propriétaire connecté
   */
  async updateProfile(proprietaireId: string, data: {
    nom_complet?: string;
    email?: string;
    adresse?: string;
    whatsapp?: string;
    ville?: string;
  }) {
    // Vérifier si le propriétaire existe
    const proprietaire = await proprietaireRepository.findById(proprietaireId);
    if (!proprietaire) {
      throw new AppError("Propriétaire non trouvé", StatusCodes.NOT_FOUND);
    }

    // Si nouvel email, vérifier disponibilité
    if (data.email && data.email !== proprietaire.email) {
      const emailExists = await proprietaireRepository.findByEmail(data.email);
      if (emailExists) {
        throw new AppError("Cet email est déjà utilisé", StatusCodes.BAD_REQUEST);
      }
    }

    // Mettre à jour
    const updated = await proprietaireRepository.update(proprietaireId, data);
    
    const { mot_de_passe: _, ...proprietaireSansMotDePasse } = updated;
    
    return {
      success: true,
      data: proprietaireSansMotDePasse,
      message: "Profil mis à jour avec succès"
    };
  }

  /**
   * Changer le mot de passe directement (avec l'ancien mot de passe)
   */
  async changePassword(proprietaireId: string, ancienMotDePasse: string, nouveauMotDePasse: string) {
    // Vérifier si le propriétaire existe
    const proprietaire = await proprietaireRepository.findById(proprietaireId);
    if (!proprietaire) {
      throw new AppError("Propriétaire non trouvé", StatusCodes.NOT_FOUND);
    }

    // Vérifier l'ancien mot de passe
    const isPasswordValid = await bcrypt.compare(ancienMotDePasse, proprietaire.mot_de_passe);
    if (!isPasswordValid) {
      throw new AppError("Mot de passe actuel incorrect", StatusCodes.UNAUTHORIZED);
    }

    // Hacher et mettre à jour le mot de passe
    const hashedPassword = await bcrypt.hash(nouveauMotDePasse, 10);
    await proprietaireRepository.updatePassword(proprietaireId, hashedPassword);

    return {
      success: true,
      message: "Mot de passe modifié avec succès"
    };
  }


  /**
   * Demander la réinitialisation du mot de passe par email
   */
  async forgotPasswordByEmail(email: string) {
    // Anti-énumération : toujours dire "si le compte existe"
    const proprietaire = await proprietaireRepository.findByEmail(email);
    
    if (!proprietaire) {
      // Le compte n'existe pas, mais on ne le dit pas
      return {
        success: true,
        message: "Si un compte existe avec cet email, un code de vérification a été envoyé"
      };
    }

    // Générer le code OTP
    const code = generateOTP(6);
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 10); // 10 minutes

    // Stocker le code en base
    await (prisma as any).passwordReset.create({
      data: {
        code,
        type: "EMAIL",
        proprietaireId: proprietaire.id,
        expiresAt,
      },
    });

    // Envoyer l'email
    await sendPasswordResetEmail(email, code, proprietaire.nom_complet);

    return {
      success: true,
      message: "Si un compte existe avec cet email, un code de vérification a été envoyé"
    };
  }

  /**
   * Demander la réinitialisation du mot de passe par SMS
   */
  async forgotPasswordBySms(telephone: string) {
    // Anti-énumération
    const proprietaire = await proprietaireRepository.findByPhone(telephone);
    
    if (!proprietaire) {
      return {
        success: true,
        message: "Si un compte existe avec ce numéro, un code de vérification a été envoyé par SMS"
      };
    }

    // Générer le code OTP
    const code = generateOTP(6);
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 10);

    // Stocker le code en base
    await (prisma as any).passwordReset.create({
      data: {
        code,
        type: "SMS",
        proprietaireId: proprietaire.id,
        expiresAt,
      },
    });

    // Envoyer le SMS
    const result = await sendPasswordResetSMS(telephone, code, proprietaire.nom_complet);

    return {
      success: true,
      devCode: result.devCode, // En dev, retourner le code
      message: "Si un compte existe avec ce numéro, un code de vérification a été envoyé par SMS"
    };
  }

  /**
   * Réinitialiser le mot de passe avec le code OTP (email)
   */
  async resetPasswordByEmail(code: string, mot_de_passe: string) {
    // Valider les données
    const validationResult = resetPasswordSchema.safeParse({ code, mot_de_passe });
    
    if (!validationResult.success) {
      throw new AppError("Données invalides", StatusCodes.BAD_REQUEST);
    }

    const validData = validationResult.data;

    // Trouver le code en base
    const resetRecord = await (prisma as any).passwordReset.findFirst({
      where: {
        code: validData.code,
        type: "EMAIL",
        usedAt: null,
      },
      orderBy: { createdAt: "desc" },
    });

    if (!resetRecord) {
      throw new AppError("Code de vérification invalide", StatusCodes.BAD_REQUEST);
    }

    if (isOTPExpired(resetRecord.expiresAt)) {
      throw new AppError("Code de vérification expiré", StatusCodes.BAD_REQUEST);
    }

    // Marquer le code comme utilisé
    await (prisma as any).passwordReset.update({
      where: { id: resetRecord.id },
      data: { usedAt: new Date() },
    });

    // Récupérer le propriétaire
    const proprietaire = await prisma.proprietaire.findUnique({
      where: { id: resetRecord.proprietaireId! },
    });

    if (!proprietaire) {
      throw new AppError("Propriétaire non trouvé", StatusCodes.NOT_FOUND);
    }

    // Hacher et mettre à jour le mot de passe
    const hashedPassword = await bcrypt.hash(validData.mot_de_passe, 10);
    
    await prisma.proprietaire.update({
      where: { id: proprietaire.id },
      data: { mot_de_passe: hashedPassword },
    });

    // Révoquer tous les tokens existants
    await tokenService.revokeAllUserTokens(proprietaire.id);

    return {
      success: true,
      message: "Mot de passe réinitialisé avec succès"
    };
  }

  /**
   * Réinitialiser le mot de passe avec le code OTP (SMS)
   */
  async resetPasswordBySms(code: string, mot_de_passe: string) {
    const validationResult = resetPasswordSchema.safeParse({ code, mot_de_passe });
    
    if (!validationResult.success) {
      throw new AppError("Données invalides", StatusCodes.BAD_REQUEST);
    }

    const validData = validationResult.data;

    const resetRecord = await (prisma as any).passwordReset.findFirst({
      where: {
        code: validData.code,
        type: "SMS",
        usedAt: null,
      },
      orderBy: { createdAt: "desc" },
    });

    if (!resetRecord) {
      throw new AppError("Code de vérification invalide", StatusCodes.BAD_REQUEST);
    }

    if (isOTPExpired(resetRecord.expiresAt)) {
      throw new AppError("Code de vérification expiré", StatusCodes.BAD_REQUEST);
    }

    await (prisma as any).passwordReset.update({
      where: { id: resetRecord.id },
      data: { usedAt: new Date() },
    });

    if (!resetRecord.proprietaireId) {
      throw new AppError("Propriétaire non trouvé", StatusCodes.NOT_FOUND);
    }

    const hashedPassword = await bcrypt.hash(validData.mot_de_passe, 10);
    
    await prisma.proprietaire.update({
      where: { id: resetRecord.proprietaireId },
      data: { mot_de_passe: hashedPassword },
    });

    await tokenService.revokeAllUserTokens(resetRecord.proprietaireId);

    return {
      success: true,
      message: "Mot de passe réinitialisé avec succès"
    };
  }

  /**
   * Définir les cookies de tokens
   */
  setTokenCookies(res: any, accessToken: string, refreshToken: string): void {
    res.cookie("access_token", accessToken, cookieOptions);
    res.cookie("refresh_token", refreshToken, refreshCookieOptions);
  }
}

export const proprietaireService = new ProprietaireService();
