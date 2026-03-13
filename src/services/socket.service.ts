import { Server as SocketIOServer } from "socket.io";
import type { Server as HTTPServer } from "http";

let io: SocketIOServer | null = null;

// Types d'événements WebSocket
export enum WebSocketEvents {
  // Notifications
  NOTIFICATION_NEW = "notification:new",
  BADGE_UPDATE = "badge:update",
  
  // Transactions
  TRANSACTION_STATUS = "transaction:status",
  PAYMENT_CONFIRMED = "payment:confirmed",
  PAYMENT_FAILED = "payment:failed",
  
  // Stats
  STATS_UPDATE = "stats:update",
  
  // Alertes nouveaux biens
  NEW_PROPERTY_ALERT = "property:new",
  
  // Vérifications d'identité
  VERIFICATION_SUBMITTED = "verification:submitted",
  VERIFICATION_COUNT_UPDATE = "verification:count",
}

// Types de données pour les événements
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
  proprietaireId?: string; // undefined pour les stats globales admin
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
export const initializeWebSocket = (httpServer: HTTPServer): SocketIOServer => {
  io = new SocketIOServer(httpServer, {
    cors: {
      origin: [
        process.env.FRONT_URL || "http://localhost:8080",
        process.env.FRONT_URL_PROD || "https://seek-front-plum.vercel.app",
        "http://localhost:5173",
        "http://localhost:3000",
        "https://seek-front-plum.vercel.app",
      ],
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  // Gestion des connexions
  io.on("connection", (socket) => {
    console.log(`✅ Client connecté: ${socket.id}`);

    // Room pour les propriétaires (identifiés par leur ID)
    socket.on("join:owner", (proprietaireId: string) => {
      socket.join(`owner:${proprietaireId}`);
      console.log(`👤 Propriétaire ${proprietaireId} a rejoint la room`);
    });

    // Room pour les locataires
    socket.on("join:locataire", (locataireId: string) => {
      socket.join(`locataire:${locataireId}`);
      console.log(`🏠 Locataire ${locataireId} a rejoint la room`);
    });

    // Room pour les admins
    socket.on("join:admin", () => {
      socket.join("admin");
      console.log(`⚡ Admin ${socket.id} a rejoint la room admin`);
    });

    // Room pour les alertes (par téléphone utilisateur)
    socket.on("join:alerts", (telephone: string) => {
      socket.join(`alerts:${telephone}`);
      console.log(`🔔 Utilisateur ${telephone} a rejoint les alertes`);
    });

    // Déconnexion
    socket.on("disconnect", () => {
      console.log(`❌ Client déconnecté: ${socket.id}`);
    });
  });

  console.log("🔌 Serveur WebSocket initialisé");
  return io;
};

/**
 * Récupère l'instance du serveur WebSocket
 */
export const getIO = (): SocketIOServer => {
  if (!io) {
    throw new Error("WebSocket non initialisé. Appelez initializeWebSocket d'abord.");
  }
  return io;
};

// ============= ÉMETTEURS D'ÉVÉNEMENTS =============

/**
 * Émet une nouvelle notification à un propriétaire
 */
export const emitNotification = (payload: NotificationPayload): void => {
  if (!io) return;
  io.to(`owner:${payload.proprietaireId}`).emit(WebSocketEvents.NOTIFICATION_NEW, payload);
  emitBadgeUpdate(payload.proprietaireId);
};

/**
 * Met à jour les badges d'un propriétaire
 */
export const emitBadgeUpdate = async (proprietaireId: string): Promise<void> => {
  if (!io) return;
  
  // Import dynamique pour éviter les dépendances circulaires
  const { prisma } = await import("../config/database.js");
  
  // Compter les notifications non lues du propriétaire
  const notificationsCount = await prisma.notification.count({
    where: {
      proprietaireId,
    },
  });

  // Compter les transactions en attente
  const transactionsPending = await prisma.transaction.count({
    where: {
      proprietaireId,
      statut: "EN_ATTENTE",
    },
  });

  const payload: BadgeUpdatePayload = {
    proprietaireId,
    notificationsCount,
    transactionsPending,
    total: notificationsCount + transactionsPending,
  };

  io.to(`owner:${proprietaireId}`).emit(WebSocketEvents.BADGE_UPDATE, payload);
};

/**
 * Émet une mise à jour de statut de transaction
 */
export const emitTransactionStatus = (payload: TransactionStatusPayload): void => {
  if (!io) return;
  io.to(`owner:${payload.proprietaireId}`).emit(WebSocketEvents.TRANSACTION_STATUS, payload);
  
  if (payload.statut === "CONFIRME") {
    io.to(`owner:${payload.proprietaireId}`).emit(WebSocketEvents.PAYMENT_CONFIRMED, payload);
  } else if (payload.statut === "ECHEC") {
    io.to(`owner:${payload.proprietaireId}`).emit(WebSocketEvents.PAYMENT_FAILED, payload);
  }
};

/**
 * Émet une mise à jour des statistiques (pour les admins)
 */
export const emitStatsUpdate = (payload: StatsUpdatePayload): void => {
  if (!io) return;
  io.to("admin").emit(WebSocketEvents.STATS_UPDATE, payload);
};

/**
 * Émet une alerte de nouveau bien aux utilisateurs concernés
 */
export const emitPropertyAlert = async (bienId: string): Promise<void> => {
  if (!io) return;
  
  const { prisma } = await import("../config/database.js");
  
  // Récupérer les alertes actives
  const alerts = await prisma.alerte.findMany({
    where: {
      statut: "ACTIVE",
    },
  });

  // Récupérer les infos du bien
  const bien = await prisma.bien.findUnique({
    where: { id: bienId },
    select: {
      titre: true,
      typeTransaction: {
        select: { nom: true }
      },
      prix: true,
      ville: true,
      quartier: true,
    },
  });

  if (!bien) return;

  // Envoyer à chaque utilisateur concerné
  for (const alert of alerts) {
    // Vérifier si le bien correspond aux critères de l'alerte
    const correspond = (
      (!alert.ville || alert.ville === bien.ville) &&
      (!alert.quartier || alert.quartier === bien.quartier) &&
      (!alert.prixMin || (bien.prix && bien.prix >= alert.prixMin)) &&
      (!alert.prixMax || (bien.prix && bien.prix <= alert.prixMax))
    );

    if (correspond) {
      const payload: PropertyAlertPayload = {
        alerteId: alert.id,
        telephone: alert.telephone,
        bienId,
        titre: bien.titre || "",
        typeTransaction: bien.typeTransaction?.nom || "",
        prix: bien.prix || 0,
        localisation: `${bien.ville || ""}, ${bien.quartier || ""}`,
      };
      
      io.to(`alerts:${alert.telephone}`).emit(WebSocketEvents.NEW_PROPERTY_ALERT, payload);
    }
  }
};

/**
 * Émet une notification de nouvelle vérification aux administrateurs
 */
export const emitVerificationSubmitted = async (proprietaireId: string): Promise<void> => {
  if (!io) return;
  
  const { prisma } = await import("../config/database.js");
  
  // Récupérer les infos du propriétaire
  const proprietaire = await prisma.proprietaire.findUnique({
    where: { id: proprietaireId },
    include: { verification: true },
  });

  if (!proprietaire) return;

  // Compter le nombre de vérifications en attente
  const pendingCount = await prisma.proprietaire.count({
    where: { statutVerification: "PENDING" },
  });

  const payload: VerificationSubmittedPayload = {
    proprietaireId: proprietaire.id,
    prenom: proprietaire.prenom,
    nom: proprietaire.nom,
    telephone: proprietaire.telephone,
    typePiece: proprietaire.verification?.typePiece || "CNI",
    createdAt: new Date().toISOString(),
  };

  // Émettre aux admins
  io.to("admin").emit(WebSocketEvents.VERIFICATION_SUBMITTED, payload);
  
  // Mettre à jour le compteur
  io.to("admin").emit(WebSocketEvents.VERIFICATION_COUNT_UPDATE, { count: pendingCount });
};
