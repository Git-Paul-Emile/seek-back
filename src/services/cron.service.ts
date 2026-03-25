import cron from "node-cron";
import { prisma } from "../config/database.js";
import { envoyerRappelLoyer } from "./notification.service.js";

export const initCronJobs = () => {
  // Planification quotidienne à 08:00
  cron.schedule("0 8 * * *", async () => {
    try {
      console.log("[CRON] Début de la vérification des rappels de loyers...");
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // Récupérer toutes les échéances impayées
      const echeances = await prisma.echeancierLoyer.findMany({
        where: {
          statut: { in: ["EN_ATTENTE", "EN_RETARD"] },
        },
        include: {
          bail: {
            include: {
              locataire: true,
              bien: true,
            },
          },
        },
      });

      let nbRappels = 0;

      for (const echeance of echeances) {
        if (!echeance.bail.locataire.telephone) continue;

        const dateEcheance = new Date(echeance.dateEcheance);
        dateEcheance.setHours(0, 0, 0, 0);

        const diffTime = dateEcheance.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        let shouldSend = false;

        // Condition 1: 1 semaine (7 jours) avant l'échéance
        if (diffDays === 7) {
          shouldSend = true;
        }

        // Condition 2: le jour même de l'échéance
        if (diffDays === 0) {
          shouldSend = true;
        }

        // Condition 3: Le premier jour du mois de l'échéance
        if (
          today.getDate() === 1 &&
          today.getMonth() === dateEcheance.getMonth() &&
          today.getFullYear() === dateEcheance.getFullYear()
        ) {
          // Eviter un envoi en double si le 1er du mois correspond déjà à J-7 ou Jour J
          if (diffDays !== 7 && diffDays !== 0) {
            shouldSend = true;
          }
        }

        if (shouldSend) {
          await envoyerRappelLoyer({
            locataireTelephone: echeance.bail.locataire.telephone,
            locataireEmail: echeance.bail.locataire.email,
            locataireNom: `${echeance.bail.locataire.prenom} ${echeance.bail.locataire.nom}`,
            montant: echeance.montant,
            dateEcheance: echeance.dateEcheance.toISOString(),
            bienTitre: echeance.bail.bien.titre,
            echeanceId: echeance.id,
            bailId: echeance.bailId,
            bienId: echeance.bienId,
            proprietaireId: echeance.proprietaireId,
            locataireId: echeance.locataireId,
          });
          nbRappels++;
          console.log(`[CRON] Rappel envoyé pour l'échéance ${echeance.id}`);
        }
      }

      console.log(`[CRON] Fin de la vérification. ${nbRappels} rappel(s) envoyé(s).`);
    } catch (err) {
      console.error("[CRON] Erreur lors de l'exécution des rappels de loyers:", err);
    }
  });

  // Purge quotidienne à 03:00 — VueBien (>90j) et Notification (>180j)
  cron.schedule("0 3 * * *", async () => {
    try {
      const cutoffVues = new Date();
      cutoffVues.setDate(cutoffVues.getDate() - 90);

      const cutoffNotifs = new Date();
      cutoffNotifs.setDate(cutoffNotifs.getDate() - 180);

      const [deletedVues, deletedNotifs] = await Promise.all([
        prisma.vueBien.deleteMany({ where: { createdAt: { lt: cutoffVues } } }),
        prisma.notification.deleteMany({ where: { createdAt: { lt: cutoffNotifs } } }),
      ]);

      console.log(`[CRON] Purge : ${deletedVues.count} vues (>90j), ${deletedNotifs.count} notifications (>180j) supprimées.`);
    } catch (err) {
      console.error("[CRON] Erreur lors de la purge :", err);
    }
  });
};
