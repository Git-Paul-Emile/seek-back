import type { ProprietaireInscriptionInput } from "../validators/ownerValidator.js";
import type { Proprietaire } from "../../src/generated/prisma/client.js";
import { prisma } from "../config/database.js";
import bcrypt from "bcrypt";

export class ProprietaireRepository {
  /**
   * Créer un nouveau propriétaire
   */
  async create(data: ProprietaireInscriptionInput): Promise<Proprietaire> {
    const hashedPassword = await bcrypt.hash(data.mot_de_passe, 10);
    
    return prisma.proprietaire.create({
      data: {
        nom_complet: data.nom_complet,
        telephone: data.telephone,
        email: data.email || null,
        adresse: data.adresse,
        mot_de_passe: hashedPassword,
        role: "PROPRIETAIRE",
        statut: "ACTIF",
        profil_complet: false,
        taux_completude_profil: 25, // Inscription minimale = 25% complet
      },
    }) as unknown as Promise<Proprietaire>;
  }

  /**
   * Trouver un propriétaire par téléphone
   */
  async findByPhone(telephone: string): Promise<Proprietaire | null> {
    return prisma.proprietaire.findUnique({
      where: { telephone },
    }) as unknown as Promise<Proprietaire | null>;
  }

  /**
   * Trouver un propriétaire par email
   */
  async findByEmail(email: string): Promise<Proprietaire | null> {
    return prisma.proprietaire.findUnique({
      where: { email },
    }) as unknown as Promise<Proprietaire | null>;
  }

  /**
   * Trouver un propriétaire par ID
   */
  async findById(id: string): Promise<Proprietaire | null> {
    return prisma.proprietaire.findUnique({
      where: { id },
    }) as unknown as Promise<Proprietaire | null>;
  }

  /**
   * Vérifier si le téléphone existe déjà
   */
  async phoneExists(telephone: string): Promise<boolean> {
    const owner = await prisma.proprietaire.findUnique({
      where: { telephone },
    });
    return owner !== null;
  }

  /**
   * Mettre à jour le mot de passe
   */
  async updatePassword(id: string, hashedPassword: string): Promise<Proprietaire> {
    return prisma.proprietaire.update({
      where: { id },
      data: { mot_de_passe: hashedPassword },
    }) as unknown as Promise<Proprietaire>;
  }

    /**
     * Mettre à jour les informations du propriétaire
     */
    async update(id: string, data: {
      nom_complet?: string;
      telephone?: string;
      adresse?: string;
      email?: string;
      mot_de_passe?: string;
    }): Promise<Proprietaire> {
      const updateData: any = {};
      if (data.nom_complet) updateData.nom_complet = data.nom_complet;
      if (data.telephone) updateData.telephone = data.telephone;
      if (data.adresse) updateData.adresse = data.adresse;
      if (data.email) updateData.email = data.email;
      if (data.mot_de_passe) {
        const hashedPassword = await bcrypt.hash(data.mot_de_passe, 10);
        updateData.mot_de_passe = hashedPassword;
      }
      return prisma.proprietaire.update({
        where: { id },
        data: updateData,
      }) as unknown as Promise<Proprietaire>;
    }

    /**
     * Supprimer définitivement un propriétaire
     */
    async delete(id: string): Promise<void> {
      await prisma.proprietaire.delete({
        where: { id },
      });
    }
}

export const proprietaireRepository = new ProprietaireRepository();
