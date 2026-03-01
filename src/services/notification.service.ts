import { prisma } from "../config/database.js";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NotificationPayload {
  type: "RAPPEL_LOYER" | "CONFIRMATION_PAIEMENT" | "ALERTE_RETARD" | "INITIATION_PAIEMENT";
  canal?: "SMS" | "EMAIL" | "WHATSAPP";
  destinataire: string;
  sujet?: string;
  contenu: string;
  echeanceId?: string;
  bailId?: string;
  bienId?: string;
  proprietaireId?: string;
  locataireId?: string;
}

// ─── Stub d'envoi (remplacer par l'API SMS/Email réelle) ─────────────────────

/**
 * Stub : simule l'envoi d'une notification.
 * Retourne toujours un message "en attente d'intégration".
 * Lorsque l'API sera disponible, remplacer ce bloc par l'appel réel.
 */
async function envoyerViaApi(
  canal: string,
  destinataire: string,
  contenu: string
): Promise<{ success: boolean; messageRetour: string }> {
  // TODO: Intégrer l'API SMS (ex: Orange SMS API, Twilio, etc.)
  // TODO: Intégrer l'API Email (ex: SendGrid, Mailgun, etc.)
  // TODO: Intégrer l'API WhatsApp Business
  return {
    success: false,
    messageRetour: `[STUB ${canal}] Notification programmée pour ${destinataire} — API non configurée. Message : ${contenu.slice(0, 80)}...`,
  };
}

// ─── Créer + envoyer une notification ─────────────────────────────────────────

export const envoyerNotification = async (payload: NotificationPayload) => {
  const canal = payload.canal ?? "SMS";

  // Enregistrer en base (statut EN_ATTENTE)
  const notification = await prisma.notification.create({
    data: {
      type: payload.type,
      canal,
      destinataire: payload.destinataire,
      sujet: payload.sujet,
      contenu: payload.contenu,
      statut: "EN_ATTENTE",
      echeanceId: payload.echeanceId,
      bailId: payload.bailId,
      bienId: payload.bienId,
      proprietaireId: payload.proprietaireId,
      locataireId: payload.locataireId,
    },
  });

  // Tenter l'envoi via l'API externe (stub)
  const result = await envoyerViaApi(canal, payload.destinataire, payload.contenu);

  // Mettre à jour le statut
  const updated = await prisma.notification.update({
    where: { id: notification.id },
    data: {
      statut: result.success ? "ENVOYE" : "EN_ATTENTE",
      messageRetour: result.messageRetour,
      envoyeAt: result.success ? new Date() : null,
    },
  });

  return { notification: updated, stub: true, message: result.messageRetour };
};

// ─── Rappel loyer à venir / en retard ────────────────────────────────────────

export const envoyerRappelLoyer = async (params: {
  locataireTelephone: string;
  locataireEmail?: string | null;
  locataireNom: string;
  montant: number;
  dateEcheance: string;
  bienTitre?: string | null;
  echeanceId: string;
  bailId: string;
  bienId: string;
  proprietaireId: string;
  locataireId: string;
}) => {
  const contenu =
    `Bonjour ${params.locataireNom}, votre loyer de ${params.montant.toLocaleString("fr-FR")} FCFA` +
    ` est dû le ${new Date(params.dateEcheance).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}` +
    (params.bienTitre ? ` pour ${params.bienTitre}` : "") +
    `. Merci de procéder au paiement. — SEEK Immobilier`;

  return envoyerNotification({
    type: "RAPPEL_LOYER",
    canal: "SMS",
    destinataire: params.locataireTelephone,
    sujet: "Rappel de loyer",
    contenu,
    echeanceId: params.echeanceId,
    bailId: params.bailId,
    bienId: params.bienId,
    proprietaireId: params.proprietaireId,
    locataireId: params.locataireId,
  });
};

// ─── Confirmation de paiement ─────────────────────────────────────────────────

export const envoyerConfirmationPaiement = async (params: {
  locataireTelephone: string;
  locataireNom: string;
  montant: number;
  datePaiement: string;
  reference?: string | null;
  bienTitre?: string | null;
  echeanceId: string;
  bailId: string;
  bienId: string;
  proprietaireId: string;
  locataireId: string;
}) => {
  const contenu =
    `Bonjour ${params.locataireNom}, votre paiement de ${params.montant.toLocaleString("fr-FR")} FCFA` +
    ` du ${new Date(params.datePaiement).toLocaleDateString("fr-FR")} a bien été enregistré` +
    (params.reference ? ` (réf: ${params.reference})` : "") +
    (params.bienTitre ? ` pour ${params.bienTitre}` : "") +
    `. Merci. — SEEK Immobilier`;

  return envoyerNotification({
    type: "CONFIRMATION_PAIEMENT",
    canal: "SMS",
    destinataire: params.locataireTelephone,
    sujet: "Confirmation de paiement",
    contenu,
    echeanceId: params.echeanceId,
    bailId: params.bailId,
    bienId: params.bienId,
    proprietaireId: params.proprietaireId,
    locataireId: params.locataireId,
  });
};

// ─── Alerte retard ────────────────────────────────────────────────────────────

export const envoyerAlerteRetard = async (params: {
  locataireTelephone: string;
  locataireNom: string;
  montant: number;
  dateEcheance: string;
  joursRetard: number;
  bienTitre?: string | null;
  echeanceId: string;
  bailId: string;
  bienId: string;
  proprietaireId: string;
  locataireId: string;
}) => {
  const contenu =
    `⚠️ Bonjour ${params.locataireNom}, votre loyer de ${params.montant.toLocaleString("fr-FR")} FCFA` +
    ` est en retard de ${params.joursRetard} jour(s)` +
    (params.bienTitre ? ` pour ${params.bienTitre}` : "") +
    `. Veuillez régulariser au plus vite. — SEEK Immobilier`;

  return envoyerNotification({
    type: "ALERTE_RETARD",
    canal: "SMS",
    destinataire: params.locataireTelephone,
    sujet: "Loyer en retard",
    contenu,
    echeanceId: params.echeanceId,
    bailId: params.bailId,
    bienId: params.bienId,
    proprietaireId: params.proprietaireId,
    locataireId: params.locataireId,
  });
};

// ─── Initiation de paiement (côté locataire) ─────────────────────────────────

export const envoyerInitiationPaiement = async (params: {
  proprietaireTelephone: string;
  locataireNom: string;
  montant: number;
  dateEcheance: string;
  provider: string;
  bienTitre?: string | null;
  echeanceId: string;
  bailId: string;
  bienId: string;
  proprietaireId: string;
  locataireId: string;
}) => {
  const contenu =
    `Votre locataire ${params.locataireNom} indique avoir initié le paiement de ` +
    `${params.montant.toLocaleString("fr-FR")} FCFA via ${params.provider}` +
    (params.bienTitre ? ` pour ${params.bienTitre}` : "") +
    `. Veuillez confirmer la réception. — SEEK Immobilier`;

  return envoyerNotification({
    type: "INITIATION_PAIEMENT",
    canal: "SMS",
    destinataire: params.proprietaireTelephone,
    sujet: "Initiation de paiement locataire",
    contenu,
    echeanceId: params.echeanceId,
    bailId: params.bailId,
    bienId: params.bienId,
    proprietaireId: params.proprietaireId,
    locataireId: params.locataireId,
  });
};

// ─── Lister les notifications d'un bail ───────────────────────────────────────

export const getNotificationsBail = async (bailId: string) =>
  prisma.notification.findMany({
    where: { bailId },
    orderBy: { createdAt: "desc" },
  });

export const getNotificationsEcheance = async (echeanceId: string) =>
  prisma.notification.findMany({
    where: { echeanceId },
    orderBy: { createdAt: "desc" },
  });
