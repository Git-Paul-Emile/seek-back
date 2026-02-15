import type { ProprietaireInscriptionInput } from "../validators/ownerValidator.js";
import type { Proprietaire } from "../../src/generated/prisma/client.js";
export declare class ProprietaireRepository {
    /**
     * Créer un nouveau propriétaire
     */
    create(data: ProprietaireInscriptionInput): Promise<Proprietaire>;
    /**
     * Trouver un propriétaire par téléphone
     */
    findByPhone(telephone: string): Promise<Proprietaire | null>;
    /**
     * Trouver un propriétaire par email
     */
    findByEmail(email: string): Promise<Proprietaire | null>;
    /**
     * Trouver un propriétaire par ID
     */
    findById(id: string): Promise<Proprietaire | null>;
    /**
     * Vérifier si le téléphone existe déjà
     */
    phoneExists(telephone: string): Promise<boolean>;
    /**
     * Mettre à jour le mot de passe
     */
    updatePassword(id: string, hashedPassword: string): Promise<Proprietaire>;
    /**
     * Mettre à jour les informations du propriétaire
     */
    update(id: string, data: {
        nom_complet?: string;
        telephone?: string;
        adresse?: string;
        email?: string;
        mot_de_passe?: string;
    }): Promise<Proprietaire>;
    /**
     * Supprimer définitivement un propriétaire
     */
    delete(id: string): Promise<void>;
}
export declare const proprietaireRepository: ProprietaireRepository;
//# sourceMappingURL=ownerRepository.d.ts.map