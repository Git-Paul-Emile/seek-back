import { prisma } from "../config/database.js";
import { sendMail } from "../utils/mailer.js";
import { sendSms } from "./sms.service.js";
import { enqueueNotif } from "./notifQueue.service.js";

// ─── Types ────────────────────────────────────────────────────────────────────

export type TypeNotif =
  | "RAPPEL_LOYER"
  | "CONFIRMATION_PAIEMENT"
  | "ALERTE_RETARD"
  | "INITIATION_PAIEMENT"
  | "VERIFICATION_LOCATAIRE"
  | "PAIEMENT_LOCATAIRE"
  | "PREAVIS"
  | "RESILIATION"
  | "FIN_BAIL"
  | "CONTRAT"
  | "RESET_PASSWORD"
  | "ALERTE"
  | "INVITATION_BAIL"
  | "VERIFICATION_TELEPHONE";

export interface NotificationPayload {
  type: TypeNotif;
  /** Numéro de téléphone (obligatoire, prioritaire) */
  telephone: string;
  /** Email (optionnel, envoyé en complément si fourni) */
  email?: string | null;
  sujet?: string;
  contenu: string;
  /** HTML pour l'email (si différent du contenu texte) */
  htmlEmail?: string;
  echeanceId?: string;
  bailId?: string;
  bienId?: string;
  proprietaireId?: string;
  locataireId?: string;
}

// ─── Envoi réel SMS + email en arrière-plan ────────────────────────────────────

async function dispatchSmsEtEmail(
  notifId: string,
  telephone: string,
  email: string | null | undefined,
  contenu: string,
  sujet: string | undefined,
  htmlEmail: string | undefined
): Promise<void> {
  // ── 1. SMS (obligatoire et prioritaire) ──────────────────────────────────
  const smsResult = await sendSms(telephone, contenu);

  // ── 2. Email (si fourni) ─────────────────────────────────────────────────
  let emailSuccess = true;
  let emailRetour = "";

  if (email) {
    try {
      await sendMail({
        to: email,
        subject: sujet ?? "Notification SEEK Immobilier",
        html: htmlEmail ?? `<p>${contenu.replace(/\n/g, "<br>")}</p>`,
        text: contenu,
      });
      emailRetour = "EMAIL_OK";
    } catch (err) {
      emailSuccess = false;
      emailRetour = `EMAIL_ERR: ${err instanceof Error ? err.message : String(err)}`;
      console.error("[Notif] Erreur envoi email :", err);
    }
  }

  // ── 3. Mise à jour du statut en DB ───────────────────────────────────────
  const success = smsResult.success;
  const retours = [
    `SMS: ${smsResult.messageRetour}`,
    ...(email ? [`Email: ${emailRetour}`] : []),
  ].join(" | ");

  await prisma.notification.update({
    where: { id: notifId },
    data: {
      statut:       success ? "ENVOYE" : "ECHEC",
      messageRetour: retours,
      envoyeAt:      success ? new Date() : null,
    },
  });
}

// ─── Créer + envoyer une notification ─────────────────────────────────────────

export const envoyerNotification = async (payload: NotificationPayload) => {
  // Enregistrer en base (statut EN_ATTENTE)
  const notification = await prisma.notification.create({
    data: {
      type:          payload.type as any,
      canal:         payload.email ? "SMS_EMAIL" : "SMS",
      destinataire:  payload.telephone,
      sujet:         payload.sujet,
      contenu:       payload.contenu,
      statut:        "EN_ATTENTE",
      echeanceId:    payload.echeanceId,
      bailId:        payload.bailId,
      bienId:        payload.bienId,
      proprietaireId: payload.proprietaireId,
      locataireId:   payload.locataireId,
    },
  });

  // Envoi en arrière-plan (non-bloquant)
  enqueueNotif(() =>
    dispatchSmsEtEmail(
      notification.id,
      payload.telephone,
      payload.email,
      payload.contenu,
      payload.sujet,
      payload.htmlEmail
    )
  );

  return notification;
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
    `. Merci de procéder au paiement. - SEEK Immobilier`;

  return envoyerNotification({
    type: "RAPPEL_LOYER",
    telephone: params.locataireTelephone,
    email: params.locataireEmail,
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
  locataireEmail?: string | null;
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
    `. Merci. - SEEK Immobilier`;

  return envoyerNotification({
    type: "CONFIRMATION_PAIEMENT",
    telephone: params.locataireTelephone,
    email: params.locataireEmail,
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
  locataireEmail?: string | null;
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
    `Bonjour ${params.locataireNom}, votre loyer de ${params.montant.toLocaleString("fr-FR")} FCFA` +
    ` est en retard de ${params.joursRetard} jour(s)` +
    (params.bienTitre ? ` pour ${params.bienTitre}` : "") +
    `. Veuillez régulariser au plus vite. - SEEK Immobilier`;

  return envoyerNotification({
    type: "ALERTE_RETARD",
    telephone: params.locataireTelephone,
    email: params.locataireEmail,
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
  proprietaireEmail?: string | null;
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
    `. Veuillez confirmer la réception. - SEEK Immobilier`;

  return envoyerNotification({
    type: "INITIATION_PAIEMENT",
    telephone: params.proprietaireTelephone,
    email: params.proprietaireEmail,
    sujet: "Initiation de paiement locataire",
    contenu,
    echeanceId: params.echeanceId,
    bailId: params.bailId,
    bienId: params.bienId,
    proprietaireId: params.proprietaireId,
    locataireId: params.locataireId,
  });
};

// ─── Paiement enregistré par le locataire (notifier le propriétaire) ──────────

export const envoyerPaiementLocataire = async (params: {
  proprietaireTelephone: string;
  proprietaireEmail?: string | null;
  locataireNom: string;
  montant: number;
  montantPaye: number;
  datePaiement: string;
  reference?: string | null;
  bienTitre?: string | null;
  nombreMois?: number;
  echeanceId?: string;
  bailId: string;
  bienId: string;
  proprietaireId: string;
  locataireId: string;
}) => {
  const montantStr    = params.montant.toLocaleString("fr-FR");
  const montantPayeStr = params.montantPaye.toLocaleString("fr-FR");
  const dateStr       = new Date(params.datePaiement).toLocaleDateString("fr-FR");
  const nbMois        = params.nombreMois && params.nombreMois > 1 ? ` (${params.nombreMois} mois)` : "";
  const partiel       = params.montantPaye < params.montant
    ? ` - paiement partiel, reste ${(params.montant - params.montantPaye).toLocaleString("fr-FR")} FCFA`
    : "";

  const contenu =
    `Votre locataire ${params.locataireNom} a enregistré un paiement de loyer de ` +
    `${montantPayeStr} FCFA${nbMois} le ${dateStr}` +
    (params.reference ? ` (réf: ${params.reference})` : "") +
    (params.bienTitre ? ` pour ${params.bienTitre}` : "") +
    `${partiel}. Merci de confirmer la réception. - SEEK Immobilier`;

  return envoyerNotification({
    type: "PAIEMENT_LOCATAIRE",
    telephone: params.proprietaireTelephone,
    email: params.proprietaireEmail,
    sujet: "Paiement de loyer enregistré par votre locataire",
    contenu,
    echeanceId: params.echeanceId,
    bailId: params.bailId,
    bienId: params.bienId,
    proprietaireId: params.proprietaireId,
    locataireId: params.locataireId,
  });
};

// ─── Préavis (locataire notifié) ───────────────────────────────────────────────

export const envoyerPreavisLocataire = async (params: {
  locataireTelephone: string;
  locataireEmail?: string | null;
  locataireNom: string;
  bienTitre?: string | null;
  dateFinBail: string;
  bailId: string;
  bienId: string;
  proprietaireId: string;
  locataireId: string;
}) => {
  const fin = new Date(params.dateFinBail).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  const contenu =
    `Bonjour ${params.locataireNom}, votre bailleur a déclenché un préavis` +
    (params.bienTitre ? ` pour ${params.bienTitre}` : "") +
    `. Date de fin de bail fixée au ${fin}. - SEEK Immobilier`;

  return envoyerNotification({
    type: "PREAVIS",
    telephone: params.locataireTelephone,
    email: params.locataireEmail,
    sujet: "Préavis de fin de bail",
    contenu,
    bailId: params.bailId,
    bienId: params.bienId,
    proprietaireId: params.proprietaireId,
    locataireId: params.locataireId,
  });
};

// ─── Préavis (propriétaire notifié — locataire donne le préavis) ───────────────

export const envoyerPreavisProprietaire = async (params: {
  proprietaireTelephone: string;
  proprietaireEmail?: string | null;
  locataireNom: string;
  bienTitre?: string | null;
  dateFinBail: string;
  bailId: string;
  bienId: string;
  proprietaireId: string;
  locataireId: string;
}) => {
  const fin = new Date(params.dateFinBail).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  const contenu =
    `Votre locataire ${params.locataireNom} a donné son préavis` +
    (params.bienTitre ? ` pour ${params.bienTitre}` : "") +
    `. Date de fin de bail fixée au ${fin}. - SEEK Immobilier`;

  return envoyerNotification({
    type: "PREAVIS",
    telephone: params.proprietaireTelephone,
    email: params.proprietaireEmail,
    sujet: "Préavis donné par votre locataire",
    contenu,
    bailId: params.bailId,
    bienId: params.bienId,
    proprietaireId: params.proprietaireId,
    locataireId: params.locataireId,
  });
};

// ─── Résiliation (locataire notifié) ──────────────────────────────────────────

export const envoyerResiliationLocataire = async (params: {
  locataireTelephone: string;
  locataireEmail?: string | null;
  locataireNom: string;
  bienTitre?: string | null;
  motif?: string | null;
  bailId: string;
  bienId: string;
  proprietaireId: string;
  locataireId: string;
}) => {
  const contenu =
    `Bonjour ${params.locataireNom}, votre bailleur a résilié votre bail` +
    (params.bienTitre ? ` pour ${params.bienTitre}` : "") +
    (params.motif ? `. Motif : ${params.motif}` : "") +
    `. - SEEK Immobilier`;

  return envoyerNotification({
    type: "RESILIATION",
    telephone: params.locataireTelephone,
    email: params.locataireEmail,
    sujet: "Résiliation de votre bail",
    contenu,
    bailId: params.bailId,
    bienId: params.bienId,
    proprietaireId: params.proprietaireId,
    locataireId: params.locataireId,
  });
};

// ─── Résiliation par locataire (propriétaire notifié) ─────────────────────────

export const envoyerResiliationProprietaire = async (params: {
  proprietaireTelephone: string;
  proprietaireEmail?: string | null;
  locataireNom: string;
  bienTitre?: string | null;
  motif?: string | null;
  bailId: string;
  bienId: string;
  proprietaireId: string;
  locataireId: string;
}) => {
  const contenu =
    `Votre locataire ${params.locataireNom} a résilié le bail` +
    (params.bienTitre ? ` pour ${params.bienTitre}` : "") +
    (params.motif ? `. Motif : ${params.motif}` : "") +
    `. - SEEK Immobilier`;

  return envoyerNotification({
    type: "RESILIATION",
    telephone: params.proprietaireTelephone,
    email: params.proprietaireEmail,
    sujet: "Résiliation par votre locataire",
    contenu,
    bailId: params.bailId,
    bienId: params.bienId,
    proprietaireId: params.proprietaireId,
    locataireId: params.locataireId,
  });
};

// ─── Fin de bail (locataire notifié) ──────────────────────────────────────────

export const envoyerFinBailLocataire = async (params: {
  locataireTelephone: string;
  locataireEmail?: string | null;
  locataireNom: string;
  bienTitre?: string | null;
  bailId: string;
  bienId: string;
  proprietaireId: string;
  locataireId: string;
}) => {
  const contenu =
    `Bonjour ${params.locataireNom}, votre bail a été clôturé par votre bailleur` +
    (params.bienTitre ? ` pour ${params.bienTitre}` : "") +
    `. Merci pour votre séjour. - SEEK Immobilier`;

  return envoyerNotification({
    type: "FIN_BAIL",
    telephone: params.locataireTelephone,
    email: params.locataireEmail,
    sujet: "Fin de votre bail",
    contenu,
    bailId: params.bailId,
    bienId: params.bienId,
    proprietaireId: params.proprietaireId,
    locataireId: params.locataireId,
  });
};

// ─── Lien d'activation du compte locataire ────────────────────────────────────

export const envoyerLienActivationLocataire = async (params: {
  locataireTelephone: string;
  locataireEmail?: string | null;
  locataireNom: string;
  lien: string;
  locataireId: string;
  proprietaireId: string;
}) => {
  const contenu =
    `Bonjour ${params.locataireNom}, votre propriétaire vous invite à activer votre compte locataire SEEK. ` +
    `Cliquez sur ce lien : ${params.lien} (valable 72h). - SEEK Immobilier`;

  const htmlEmail = `
    <p>Bonjour ${params.locataireNom},</p>
    <p>Votre propriétaire vous invite à activer votre compte locataire sur <strong>SEEK Immobilier</strong>.</p>
    <p><a href="${params.lien}" style="background:#2563eb;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none">Activer mon compte</a></p>
    <p>Ou copiez ce lien : ${params.lien}</p>
    <p><small>Ce lien est valable 72 heures.</small></p>
  `;

  return envoyerNotification({
    type: "VERIFICATION_LOCATAIRE",
    telephone: params.locataireTelephone,
    email: params.locataireEmail,
    sujet: "Activez votre compte locataire SEEK",
    contenu,
    htmlEmail,
    locataireId: params.locataireId,
    proprietaireId: params.proprietaireId,
  });
};

// ─── Reset password (SMS + email) ─────────────────────────────────────────────

export const envoyerResetPasswordProprietaire = async (params: {
  telephone: string;
  email?: string | null;
  prenom: string;
  lien: string;
  proprietaireId: string;
}) => {
  const contenu =
    `Bonjour ${params.prenom}, réinitialisez votre mot de passe SEEK : ${params.lien} (valable 1h). ` +
    `Si vous n'êtes pas à l'origine de cette demande, ignorez ce message.`;

  const htmlEmail = `
    <p>Bonjour ${params.prenom},</p>
    <p>Une demande de réinitialisation de mot de passe a été effectuée pour votre compte SEEK Immobilier.</p>
    <p><a href="${params.lien}" style="background:#2563eb;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none">Réinitialiser mon mot de passe</a></p>
    <p>Ou copiez ce lien : ${params.lien}</p>
    <p><small>Ce lien expire dans 1 heure.</small></p>
    <p><small>Si vous n'avez pas demandé cette réinitialisation, ignorez cet email.</small></p>
  `;

  return envoyerNotification({
    type: "RESET_PASSWORD",
    telephone: params.telephone,
    email: params.email,
    sujet: "Réinitialisation de votre mot de passe SEEK",
    contenu,
    htmlEmail,
    proprietaireId: params.proprietaireId,
  });
};

// ─── OTP vérification téléphone (propriétaire inscription) ───────────────────

export const envoyerOtpTelephone = async (params: {
  telephone: string;
  prenom: string;
  otp: string;
  proprietaireId: string;
}) => {
  const contenu =
    `Bonjour ${params.prenom}, votre code de vérification SEEK est : ${params.otp}. ` +
    `Valable ${process.env.OTP_EXPIRES_IN_MINUTES ?? "10"} minutes. Ne partagez jamais ce code.`;

  return envoyerNotification({
    type: "VERIFICATION_TELEPHONE",
    telephone: params.telephone,
    sujet: "Code de vérification SEEK",
    contenu,
    proprietaireId: params.proprietaireId,
  });
};

// ─── Lister les notifications ─────────────────────────────────────────────────

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
