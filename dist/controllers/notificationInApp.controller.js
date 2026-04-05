import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
import { jsonResponse } from "../utils/responseApi.js";
import { prisma } from "../config/database.js";
// ─── Owner ────────────────────────────────────────────────────────────────────
/** GET /api/owner/notifications */
export const getOwnerNotifications = async (req, res) => {
    const proprietaireId = req.owner?.id;
    if (!proprietaireId)
        throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
    const notifications = await prisma.notification.findMany({
        where: { proprietaireId },
        orderBy: { createdAt: "desc" },
        take: 50,
        select: {
            id: true,
            type: true,
            sujet: true,
            contenu: true,
            lu: true,
            bailId: true,
            bienId: true,
            locataireId: true,
            createdAt: true,
        },
    });
    const unreadCount = await prisma.notification.count({
        where: { proprietaireId, lu: false },
    });
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Notifications récupérées", data: { notifications, unreadCount } }));
};
/** PATCH /api/owner/notifications/mark-all-read */
export const markOwnerNotificationsRead = async (req, res) => {
    const proprietaireId = req.owner?.id;
    if (!proprietaireId)
        throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
    await prisma.notification.updateMany({
        where: { proprietaireId, lu: false },
        data: { lu: true },
    });
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Toutes les notifications marquées comme lues", data: null }));
};
/** PATCH /api/owner/notifications/:id/read */
export const markOwnerOneNotificationRead = async (req, res) => {
    const proprietaireId = req.owner?.id;
    if (!proprietaireId)
        throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
    await prisma.notification.updateMany({
        where: { id: String(req.params.id), proprietaireId },
        data: { lu: true },
    });
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Notification marquée comme lue", data: null }));
};
// ─── Locataire ────────────────────────────────────────────────────────────────
/** GET /api/locataire/notifications */
export const getLocataireNotifications = async (req, res) => {
    const locataireId = req.locataire?.id;
    if (!locataireId)
        throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
    const notifications = await prisma.notification.findMany({
        where: { locataireId },
        orderBy: { createdAt: "desc" },
        take: 50,
        select: {
            id: true,
            type: true,
            sujet: true,
            contenu: true,
            lu: true,
            bailId: true,
            bienId: true,
            createdAt: true,
        },
    });
    const unreadCount = await prisma.notification.count({
        where: { locataireId, lu: false },
    });
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Notifications récupérées", data: { notifications, unreadCount } }));
};
/** PATCH /api/locataire/notifications/mark-all-read */
export const markLocataireNotificationsRead = async (req, res) => {
    const locataireId = req.locataire?.id;
    if (!locataireId)
        throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
    await prisma.notification.updateMany({
        where: { locataireId, lu: false },
        data: { lu: true },
    });
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Toutes les notifications marquées comme lues", data: null }));
};
/** PATCH /api/locataire/notifications/:id/read */
export const markLocataireOneNotificationRead = async (req, res) => {
    const locataireId = req.locataire?.id;
    if (!locataireId)
        throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
    await prisma.notification.updateMany({
        where: { id: String(req.params.id), locataireId },
        data: { lu: true },
    });
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Notification marquée comme lue", data: null }));
};
// ─── Admin ────────────────────────────────────────────────────────────────────
/** GET /api/admin/notifications - Aggregated system events */
export const getAdminNotifications = async (_req, res) => {
    const [pendingAnnonces, pendingVerifications, activeSignalements] = await Promise.all([
        prisma.bien.count({ where: { statutAnnonce: "EN_ATTENTE" } }),
        prisma.proprietaire.count({ where: { statutVerification: "PENDING" } }),
        prisma.signalement.count({ where: { statut: "EN_ATTENTE" } }),
    ]);
    const total = pendingAnnonces + pendingVerifications + activeSignalements;
    const items = [
        ...(pendingAnnonces > 0
            ? [{ id: "annonces", type: "ANNONCE_EN_ATTENTE", titre: "Annonces en attente", message: `${pendingAnnonces} annonce${pendingAnnonces > 1 ? "s" : ""} en attente de validation`, lien: "/admin/annonces", count: pendingAnnonces, createdAt: new Date().toISOString() }]
            : []),
        ...(pendingVerifications > 0
            ? [{ id: "verifications", type: "VERIFICATION_EN_ATTENTE", titre: "Vérifications d'identité", message: `${pendingVerifications} vérification${pendingVerifications > 1 ? "s" : ""} en attente`, lien: "/admin/verifications", count: pendingVerifications, createdAt: new Date().toISOString() }]
            : []),
        ...(activeSignalements > 0
            ? [{ id: "signalements", type: "SIGNALEMENT_ACTIF", titre: "Signalements actifs", message: `${activeSignalements} signalement${activeSignalements > 1 ? "s" : ""} à traiter`, lien: "/admin/signalements", count: activeSignalements, createdAt: new Date().toISOString() }]
            : []),
    ];
    res.status(StatusCodes.OK).json(jsonResponse({ status: "success", message: "Notifications admin récupérées", data: { items, unreadCount: total } }));
};
//# sourceMappingURL=notificationInApp.controller.js.map