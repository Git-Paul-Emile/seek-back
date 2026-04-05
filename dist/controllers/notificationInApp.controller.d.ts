import type { Request, Response } from "express";
/** GET /api/owner/notifications */
export declare const getOwnerNotifications: (req: Request, res: Response) => Promise<void>;
/** PATCH /api/owner/notifications/mark-all-read */
export declare const markOwnerNotificationsRead: (req: Request, res: Response) => Promise<void>;
/** PATCH /api/owner/notifications/:id/read */
export declare const markOwnerOneNotificationRead: (req: Request, res: Response) => Promise<void>;
/** GET /api/locataire/notifications */
export declare const getLocataireNotifications: (req: Request, res: Response) => Promise<void>;
/** PATCH /api/locataire/notifications/mark-all-read */
export declare const markLocataireNotificationsRead: (req: Request, res: Response) => Promise<void>;
/** PATCH /api/locataire/notifications/:id/read */
export declare const markLocataireOneNotificationRead: (req: Request, res: Response) => Promise<void>;
/** GET /api/admin/notifications - Aggregated system events */
export declare const getAdminNotifications: (_req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=notificationInApp.controller.d.ts.map