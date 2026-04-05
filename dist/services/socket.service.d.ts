import { Server as SocketIOServer } from "socket.io";
import type { Server as HTTPServer } from "http";
export declare enum WebSocketEvents {
    NOTIFICATION_NEW = "notification:new",
    BADGE_UPDATE = "badge:update",
    TRANSACTION_STATUS = "transaction:status",
    PAYMENT_CONFIRMED = "payment:confirmed",
    PAYMENT_FAILED = "payment:failed",
    STATS_UPDATE = "stats:update",
    NEW_PROPERTY_ALERT = "property:new",
    VERIFICATION_SUBMITTED = "verification:submitted",
    VERIFICATION_COUNT_UPDATE = "verification:count",
    BAIL_UPDATED = "bail:updated",
    BIEN_UPDATED = "bien:updated",
    SIGNALEMENT_NEW = "signalement:new",
    SIGNALEMENT_UPDATED = "signalement:updated"
}
export interface NotificationPayload {
    id: string;
    proprietaireId: string;
    type: string;
    titre: string;
    message: string;
    bailId?: string;
    bienId?: string;
    createdAt: string;
}
export interface BadgeUpdatePayload {
    proprietaireId: string;
    notificationsCount: number;
    transactionsPending: number;
    total: number;
}
export interface TransactionStatusPayload {
    transactionId: string;
    proprietaireId: string;
    statut: "EN_ATTENTE" | "CONFIRME" | "ECHEC" | "ANNULE" | "REMBOURSE";
    montant: number;
    type: string;
    bienId?: string;
    updatedAt: string;
}
export interface StatsUpdatePayload {
    proprietaireId?: string;
    nouveauxBiens: number;
    nouvellesInscriptions: number;
    transactionsDuJour: number;
}
export interface PropertyAlertPayload {
    alerteId: string;
    telephone: string;
    bienId: string;
    titre: string;
    typeTransaction: string;
    prix: number;
    localisation: string;
}
export interface VerificationSubmittedPayload {
    proprietaireId: string;
    prenom: string;
    nom: string;
    telephone: string;
    typePiece: string;
    createdAt: string;
}
export interface VerificationCountPayload {
    count: number;
}
/**
 * Initialise le serveur WebSocket
 */
export declare const initializeWebSocket: (httpServer: HTTPServer) => SocketIOServer;
/**
 * Récupère l'instance du serveur WebSocket
 */
export declare const getIO: () => SocketIOServer;
/**
 * Émet une nouvelle notification à un propriétaire
 */
export declare const emitNotification: (payload: NotificationPayload) => void;
/**
 * Met à jour les badges d'un propriétaire
 */
export declare const emitBadgeUpdate: (proprietaireId: string) => Promise<void>;
/**
 * Émet une mise à jour de statut de transaction
 */
export declare const emitTransactionStatus: (payload: TransactionStatusPayload) => void;
/**
 * Émet une mise à jour des statistiques (pour les admins)
 */
export declare const emitStatsUpdate: (payload: StatsUpdatePayload) => void;
/**
 * Requête les 3 compteurs "du jour" et les émet aux admins connectés
 */
export declare const fetchAndEmitStatsGlobales: () => Promise<void>;
/**
 * Émet une alerte de nouveau bien aux utilisateurs concernés
 */
export declare const emitPropertyAlert: (bienId: string) => Promise<void>;
/**
 * Émet une mise à jour de bail (créer, terminer, résilier, archiver, paiement)
 */
export declare const emitBailUpdated: (proprietaireId: string, bienId: string) => void;
/**
 * Émet une mise à jour d'un bien (statut changé)
 */
export declare const emitBienUpdated: (proprietaireId: string, bienId: string) => void;
/**
 * Émet un nouveau signalement aux admins
 */
export declare const emitSignalementNew: (bienId: string) => void;
/**
 * Émet une mise à jour de signalement (validé ou rejeté) aux admins et au propriétaire
 */
export declare const emitSignalementUpdated: (bienId: string, proprietaireId?: string) => void;
/**
 * Émet une notification de nouvelle vérification aux administrateurs
 */
export declare const emitVerificationSubmitted: (proprietaireId: string) => Promise<void>;
//# sourceMappingURL=socket.service.d.ts.map