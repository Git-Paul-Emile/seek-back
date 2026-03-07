import { Router } from "express";
import * as TransactionController from "../controllers/transaction.controller.js";
import { authenticateOwner } from "../middlewares/ownerAuth.middleware.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

// Admin
router.get("/admin", authenticate, TransactionController.getAdminHistorique);
router.get("/admin/stats", authenticate, TransactionController.getAdminStats);

// Routes pour l'historique des transactions
// NOTE: Les routes sont commentées car l'authentification n'est pas encore activée
// pour permettre les tests. Décommentez authenticateOwner en production.

// GET /api/transactions - Récupérer l'historique des transactions
router.get("/", TransactionController.getHistorique);

// GET /api/transactions/stats - Récupérer les statistiques
router.get("/stats", TransactionController.getStats);

// GET /api/transactions/:id - Récupérer les détails d'une transaction
router.get("/:id", TransactionController.getTransactionDetail);

export default router;
