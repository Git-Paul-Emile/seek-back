import { prisma } from "../config/database.js";
import bcrypt from "bcrypt";
export class ProprietaireRepository {
    /**
     * Créer un nouveau propriétaire
     */
    async create(data) {
        const hashedPassword = await bcrypt.hash(data.mot_de_passe, 10);
        return prisma.proprietaire.create({
            data: {
                nom_complet: data.nom_complet,
                telephone: data.telephone,
                email: data.email || null,
                mot_de_passe: hashedPassword,
                role: "PROPRIETAIRE",
                statut: "ACTIF",
            },
        });
    }
    /**
     * Trouver un propriétaire par téléphone
     */
    async findByPhone(telephone) {
        return prisma.proprietaire.findUnique({
            where: { telephone },
        });
    }
    /**
     * Trouver un propriétaire par email
     */
    async findByEmail(email) {
        return prisma.proprietaire.findUnique({
            where: { email },
        });
    }
    /**
     * Trouver un propriétaire par ID
     */
    async findById(id) {
        return prisma.proprietaire.findUnique({
            where: { id },
        });
    }
    /**
     * Vérifier si le téléphone existe déjà
     */
    async phoneExists(telephone) {
        const owner = await prisma.proprietaire.findUnique({
            where: { telephone },
        });
        return owner !== null;
    }
    /**
     * Mettre à jour le mot de passe
     */
    async updatePassword(id, hashedPassword) {
        return prisma.proprietaire.update({
            where: { id },
            data: { mot_de_passe: hashedPassword },
        });
    }
    /**
     * Mettre à jour les informations du propriétaire
     */
    async update(id, data) {
        const updateData = {};
        if (data.nom_complet)
            updateData.nom_complet = data.nom_complet;
        if (data.email)
            updateData.email = data.email;
        if (data.mot_de_passe) {
            const hashedPassword = await bcrypt.hash(data.mot_de_passe, 10);
            updateData.mot_de_passe = hashedPassword;
        }
        return prisma.proprietaire.update({
            where: { id },
            data: updateData,
        });
    }
    /**
     * Supprimer définitivement un propriétaire
     */
    async delete(id) {
        await prisma.proprietaire.delete({
            where: { id },
        });
    }
}
export const proprietaireRepository = new ProprietaireRepository();
//# sourceMappingURL=ownerRepository.js.map