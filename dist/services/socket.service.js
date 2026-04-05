import { Server as SocketIOServer } from "socket.io";
let io = null;
// Types d'événements WebSocket
export var WebSocketEvents;
(function (WebSocketEvents) {
    // Notifications
    WebSocketEvents["NOTIFICATION_NEW"] = "notification:new";
    WebSocketEvents["BADGE_UPDATE"] = "badge:update";
    // Transactions
    WebSocketEvents["TRANSACTION_STATUS"] = "transaction:status";
    WebSocketEvents["PAYMENT_CONFIRMED"] = "payment:confirmed";
    WebSocketEvents["PAYMENT_FAILED"] = "payment:failed";
    // Stats
    WebSocketEvents["STATS_UPDATE"] = "stats:update";
    // Alertes nouveaux biens
    WebSocketEvents["NEW_PROPERTY_ALERT"] = "property:new";
    // Vérifications d'identité
    WebSocketEvents["VERIFICATION_SUBMITTED"] = "verification:submitted";
    WebSocketEvents["VERIFICATION_COUNT_UPDATE"] = "verification:count";
    // Bail & Bien
    WebSocketEvents["BAIL_UPDATED"] = "bail:updated";
    WebSocketEvents["BIEN_UPDATED"] = "bien:updated";
    // Signalements
    WebSocketEvents["SIGNALEMENT_NEW"] = "signalement:new";
    WebSocketEvents["SIGNALEMENT_UPDATED"] = "signalement:updated";
})(WebSocketEvents || (WebSocketEvents = {}));
/**
 * Initialise le serveur WebSocket
 */
export const initializeWebSocket = (httpServer) => {
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
        socket.on("join:owner", (proprietaireId) => {
            socket.join(`owner:${proprietaireId}`);
            console.log(`👤 Propriétaire ${proprietaireId} a rejoint la room`);
        });
        socket.on("leave:owner", (proprietaireId) => {
            socket.leave(`owner:${proprietaireId}`);
            console.log(`👤 Propriétaire ${proprietaireId} a quitté la room`);
        });
        // Room pour les locataires
        socket.on("join:locataire", (locataireId) => {
            socket.join(`locataire:${locataireId}`);
            console.log(`🏠 Locataire ${locataireId} a rejoint la room`);
        });
        socket.on("leave:locataire", (locataireId) => {
            socket.leave(`locataire:${locataireId}`);
            console.log(`🏠 Locataire ${locataireId} a quitté la room`);
        });
        // Room pour les admins
        socket.on("join:admin", () => {
            socket.join("admin");
            console.log(`⚡ Admin ${socket.id} a rejoint la room admin`);
        });
        socket.on("leave:admin", () => {
            socket.leave("admin");
            console.log(`⚡ Admin ${socket.id} a quitté la room admin`);
        });
        // Room pour les alertes (par téléphone utilisateur)
        socket.on("join:alerts", (telephone) => {
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
export const getIO = () => {
    if (!io) {
        throw new Error("WebSocket non initialisé. Appelez initializeWebSocket d'abord.");
    }
    return io;
};
// ============= ÉMETTEURS D'ÉVÉNEMENTS =============
/**
 * Émet une nouvelle notification à un propriétaire
 */
export const emitNotification = (payload) => {
    if (!io)
        return;
    if (payload.proprietaireId) {
        io.to(`owner:${payload.proprietaireId}`).emit(WebSocketEvents.NOTIFICATION_NEW, payload);
        emitBadgeUpdate(payload.proprietaireId);
    }
    if (payload.locataireId) {
        io.to(`locataire:${payload.locataireId}`).emit(WebSocketEvents.NOTIFICATION_NEW, payload);
    }
};
/**
 * Met à jour les badges d'un propriétaire
 */
export const emitBadgeUpdate = async (proprietaireId) => {
    if (!io)
        return;
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
    const payload = {
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
export const emitTransactionStatus = (payload) => {
    if (!io)
        return;
    io.to(`owner:${payload.proprietaireId}`).emit(WebSocketEvents.TRANSACTION_STATUS, payload);
    if (payload.statut === "CONFIRME") {
        io.to(`owner:${payload.proprietaireId}`).emit(WebSocketEvents.PAYMENT_CONFIRMED, payload);
    }
    else if (payload.statut === "ECHEC") {
        io.to(`owner:${payload.proprietaireId}`).emit(WebSocketEvents.PAYMENT_FAILED, payload);
    }
};
/**
 * Émet une mise à jour des statistiques (pour les admins)
 */
export const emitStatsUpdate = (payload) => {
    if (!io)
        return;
    io.to("admin").emit(WebSocketEvents.STATS_UPDATE, payload);
};
/**
 * Requête les 3 compteurs "du jour" et les émet aux admins connectés
 */
export const fetchAndEmitStatsGlobales = async () => {
    if (!io)
        return;
    const { prisma } = await import("../config/database.js");
    const debutJour = new Date();
    debutJour.setHours(0, 0, 0, 0);
    const [nouveauxBiens, nouvellesInscriptions, transactionsDuJour] = await Promise.all([
        prisma.bien.count({ where: { createdAt: { gte: debutJour } } }),
        prisma.proprietaire.count({ where: { createdAt: { gte: debutJour } } }),
        prisma.transaction.count({ where: { statut: "CONFIRME", dateConfirmation: { gte: debutJour } } }),
    ]);
    emitStatsUpdate({ nouveauxBiens, nouvellesInscriptions, transactionsDuJour });
};
/**
 * Émet une alerte de nouveau bien aux utilisateurs concernés
 */
export const emitPropertyAlert = async (bienId) => {
    if (!io)
        return;
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
    if (!bien)
        return;
    // Envoyer à chaque utilisateur concerné
    for (const alert of alerts) {
        // Vérifier si le bien correspond aux critères de l'alerte
        const correspond = ((!alert.ville || alert.ville === bien.ville) &&
            (!alert.quartier || alert.quartier === bien.quartier) &&
            (!alert.prixMin || (bien.prix && bien.prix >= alert.prixMin)) &&
            (!alert.prixMax || (bien.prix && bien.prix <= alert.prixMax)));
        if (correspond) {
            const payload = {
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
 * Émet une mise à jour de bail (créer, terminer, résilier, archiver, paiement)
 */
export const emitBailUpdated = (proprietaireId, bienId) => {
    if (!io)
        return;
    io.to(`owner:${proprietaireId}`).emit(WebSocketEvents.BAIL_UPDATED, { proprietaireId, bienId });
};
/**
 * Émet une mise à jour d'un bien (statut changé)
 */
export const emitBienUpdated = (proprietaireId, bienId) => {
    if (!io)
        return;
    io.to(`owner:${proprietaireId}`).emit(WebSocketEvents.BIEN_UPDATED, { proprietaireId, bienId });
    io.to("admin").emit(WebSocketEvents.BIEN_UPDATED, { proprietaireId, bienId });
};
/**
 * Émet un nouveau signalement aux admins
 */
export const emitSignalementNew = (bienId) => {
    if (!io)
        return;
    io.to("admin").emit(WebSocketEvents.SIGNALEMENT_NEW, { bienId });
};
/**
 * Émet une mise à jour de signalement (validé ou rejeté) aux admins et au propriétaire
 */
export const emitSignalementUpdated = (bienId, proprietaireId) => {
    if (!io)
        return;
    io.to("admin").emit(WebSocketEvents.SIGNALEMENT_UPDATED, { bienId });
    if (proprietaireId) {
        io.to(`owner:${proprietaireId}`).emit(WebSocketEvents.SIGNALEMENT_UPDATED, { bienId });
    }
};
/**
 * Émet une notification de nouvelle vérification aux administrateurs
 */
export const emitVerificationSubmitted = async (proprietaireId) => {
    if (!io)
        return;
    const { prisma } = await import("../config/database.js");
    // Récupérer les infos du propriétaire
    const proprietaire = await prisma.proprietaire.findUnique({
        where: { id: proprietaireId },
        include: { verification: true },
    });
    if (!proprietaire)
        return;
    // Compter le nombre de vérifications en attente
    const pendingCount = await prisma.proprietaire.count({
        where: { statutVerification: "PENDING" },
    });
    const payload = {
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
//# sourceMappingURL=socket.service.js.map