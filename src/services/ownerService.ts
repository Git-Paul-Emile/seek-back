import { proprietaireRepository } from "../repositories/ownerRepository.js";
import { proprietaireInscriptionSchema, type ProprietaireInscriptionInput } from "../validators/ownerValidator.js";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";

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

    // Créer le propriétaire
    const proprietaire = await proprietaireRepository.create(validData);

    // Retourner sans le mot de passe
    const { mot_de_passe: _, ...proprietaireSansMotDePasse } = proprietaire;
    
    return {
      success: true,
      data: proprietaireSansMotDePasse,
      message: "Inscription réussie"
    };
  }

  /**
   * Authentifier un propriétaire
   */
  async login(telephone: string, mot_de_passe: string) {
    const proprietaire = await proprietaireRepository.findByPhone(telephone);
    
    if (!proprietaire) {
      throw new AppError("Numéro de téléphone ou mot de passe incorrect", StatusCodes.UNAUTHORIZED);
    }

    const isPasswordValid = await bcrypt.compare(mot_de_passe, proprietaire.mot_de_passe);
    
    if (!isPasswordValid) {
      throw new AppError("Numéro de téléphone ou mot de passe incorrect", StatusCodes.UNAUTHORIZED);
    }

    // Retourner sans le mot de passe
    const { mot_de_passe: _, ...proprietaireSansMotDePasse } = proprietaire;
    
    return {
      success: true,
      data: proprietaireSansMotDePasse,
      message: "Connexion réussie"
    };
  }
}

export const proprietaireService = new ProprietaireService();
