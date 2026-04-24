import { Router } from "express";
import type { Request, Response } from "express";
import { prisma } from "../config/database.js";
import { diditService } from "../services/didit.service.js";
import { envoyerNotification } from "../services/notification.service.js";

const router = Router();

/**
 * POST /api/webhooks/didit
 * Receives Didit identity verification results.
 * req.body is a Buffer (express.raw) — do NOT use express.json() for this route.
 */
router.post("/", async (req: Request, res: Response) => {
  const rawBody = (req.body as Buffer).toString("utf-8");
  const signature = req.headers["x-signature-v2"] as string;
  const timestamp = req.headers["x-timestamp"] as string;

  if (!diditService.verifyWebhookSignature(rawBody, signature, timestamp)) {
    return res.status(401).json({ error: "Invalid or missing signature" });
  }

  let payload: {
    session_id: string;
    status: string;
    webhook_type: string;
    vendor_data: string;
    decision?: Record<string, unknown>;
  };

  try {
    payload = JSON.parse(rawBody);
  } catch {
    return res.status(400).json({ error: "Invalid JSON payload" });
  }

  const { session_id, status, webhook_type, vendor_data } = payload;

  // Only process status changes
  if (webhook_type !== "status.updated") {
    return res.json({ received: true });
  }

  const internalStatus = diditService.mapStatusToInternal(status);
  if (!internalStatus) {
    return res.json({ received: true });
  }

  // vendor_data format: "owner:{proprietaireId}" or "locataire:{locataireId}"
  const colonIndex = vendor_data.indexOf(":");
  if (colonIndex === -1) {
    return res.status(400).json({ error: "Invalid vendor_data format" });
  }

  const userType = vendor_data.substring(0, colonIndex);
  const userId = vendor_data.substring(colonIndex + 1);

  try {
    if (userType === "owner") {
      await prisma.$transaction(async (tx) => {
        const proprietaire = await tx.proprietaire.update({
          where: { id: userId },
          data: {
            statutVerification: internalStatus,
            verifiedAt: internalStatus === "VERIFIED" ? new Date() : null,
          },
        });

        await tx.verificationDocuments.upsert({
          where: { proprietaireId: userId },
          create: {
            proprietaireId: userId,
            diditSessionId: session_id,
            diditStatus: status,
            conditionsAcceptees: true,
          },
          update: {
            diditSessionId: session_id,
            diditStatus: status,
          },
        });

        // Notify owner of the result
        if (internalStatus === "VERIFIED") {
          envoyerNotification({
            type: "ALERTE",
            telephone: proprietaire.telephone,
            email: proprietaire.email ?? undefined,
            sujet: "Compte vérifié – Badge confiance activé",
            contenu:
              "Félicitations ! Votre identité a été vérifiée avec succès. Votre badge de confiance est maintenant actif sur vos annonces.",
            proprietaireId: userId,
            noSmsEmail: true,
          }).catch(() => null);
        } else if (internalStatus === "REJECTED") {
          envoyerNotification({
            type: "ALERTE",
            telephone: proprietaire.telephone,
            email: proprietaire.email ?? undefined,
            sujet: "Vérification d'identité refusée",
            contenu:
              "Votre vérification d'identité n'a pas abouti. Veuillez recommencer le processus depuis votre espace.",
            proprietaireId: userId,
            noSmsEmail: true,
          }).catch(() => null);
        }
      });
    } else if (userType === "locataire") {
      await prisma.locataireVerification.upsert({
        where: { locataireId: userId },
        create: {
          locataireId: userId,
          diditSessionId: session_id,
          diditStatus: status,
          statut: internalStatus,
          conditionsAcceptees: true,
        },
        update: {
          diditSessionId: session_id,
          diditStatus: status,
          statut: internalStatus,
        },
      });
    } else {
      return res.status(400).json({ error: "Unknown user type in vendor_data" });
    }
  } catch (err) {
    console.error("[Didit webhook] DB error:", err);
    return res.status(500).json({ error: "Processing error" });
  }

  return res.json({ received: true });
});

export default router;
