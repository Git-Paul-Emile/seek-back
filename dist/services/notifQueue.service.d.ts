/**
 * File d'attente simple en mémoire pour les notifications (SMS + email).
 *
 * Chaque tâche est exécutée en arrière-plan via setImmediate / process.nextTick
 * afin de ne pas bloquer la réponse HTTP.
 *
 * Usage :
 *   import { enqueueNotif } from "./notifQueue.service.js";
 *   enqueueNotif(async () => { await sendSms(phone, msg); });
 */
type NotifTask = () => Promise<void>;
/**
 * Ajoute une tâche à la file et démarre le traitement en arrière-plan
 * (non-bloquant pour l'appelant).
 */
export declare const enqueueNotif: (task: NotifTask) => void;
export {};
//# sourceMappingURL=notifQueue.service.d.ts.map