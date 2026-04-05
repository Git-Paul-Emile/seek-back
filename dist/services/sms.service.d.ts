/**
 * Service SMS via Sendtext (https://api.sendtext.sn)
 *
 * Authentification : headers SNT-API-KEY + SNT-API-SECRET
 * Endpoint envoi   : POST /v1/sms
 * Body             : { sender_name, phone, text, sms_type: "normal" | "flash" }
 *
 * ⚠️  Le champ `sender_name` doit être enregistré dans le portail Sendtext
 *     (sendtext.sn > Mon compte > Noms d'expéditeurs) avant de pouvoir envoyer.
 *     Configurez la variable d'environnement SENDTEXT_SENDER_NAME avec la valeur
 *     exacte approuvée dans le portail.
 */
export interface SmsResult {
    success: boolean;
    messageRetour: string;
}
export declare function normalizePhone(raw: string): string;
export declare const sendSms: (phone: string, message: string, flash?: boolean) => Promise<SmsResult>;
export declare const getBalance: () => Promise<{
    balance: number;
    expiresAt: string;
} | null>;
//# sourceMappingURL=sms.service.d.ts.map