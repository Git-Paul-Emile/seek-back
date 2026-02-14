import nodemailer from "nodemailer";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";

// Configuration du transporteur
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Envoyer un email de réinitialisation de mot de passe
 */
export const sendPasswordResetEmail = async (
  email: string,
  code: string,
  nomComplet: string
): Promise<void> => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM || "Seek <noreply@seek.sn>",
      to: email,
      subject: "Réinitialisation de votre mot de passe - Seek",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1a1a2e; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .code { font-size: 32px; font-weight: bold; letter-spacing: 5px; text-align: center; padding: 20px; background: #fff; border: 2px dashed #1a1a2e; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Seek</h1>
            </div>
            <div class="content">
              <p>Bonjour ${nomComplet},</p>
              <p>Vous avez demandé la réinitialisation de votre mot de passe.</p>
              <p>Voici votre code de vérification :</p>
              <div class="code">${code}</div>
              <p>Ce code expire dans 10 minutes.</p>
              <p>Si vous n'avez pas demandé cette réinitialisation, ignorez cet email.</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Seek. Tous droits réservés.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Erreur envoi email:", error);
    throw new AppError(
      "Erreur lors de l'envoi de l'email",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

/**
 * Envoyer un email de confirmation d'inscription
 */
export const sendWelcomeEmail = async (
  email: string,
  nomComplet: string
): Promise<void> => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM || "Seek <noreply@seek.sn>",
      to: email,
      subject: "Bienvenue sur Seek - Votre compte a été créé",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1a1a2e; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Seek</h1>
            </div>
            <div class="content">
              <p>Bonjour ${nomComplet},</p>
              <p>Votre compte Seek a été créé avec succès !</p>
              <p>Vous pouvez maintenant vous connecter avec votre numéro de téléphone.</p>
              <p>Nous vous recommandons de compléter votre profil pour une meilleure expérience.</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Seek. Tous droits réservés.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Erreur envoi email de bienvenue:", error);
    // Ne pas throw pour ne pas bloquer l'inscription
  }
};

/**
 * Vérifier la configuration SMTP
 */
export const checkEmailConfig = (): boolean => {
  return !!(
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  );
};
