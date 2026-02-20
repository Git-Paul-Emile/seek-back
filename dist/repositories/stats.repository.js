import { prisma } from "../config/database.js";
export const getSiteStats = async () => {
    const [villesCouvertes] = await Promise.all([
        prisma.ville.count(),
    ]);
    return {
        annoncesActives: 0, // sera remplacé par prisma.bien.count() quand le modèle existera
        proprietaires: 0, // sera remplacé par prisma.utilisateur.count() quand le modèle existera
        villesCouvertes,
    };
};
//# sourceMappingURL=stats.repository.js.map