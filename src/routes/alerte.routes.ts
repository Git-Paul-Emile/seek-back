import { Router } from "express";
import { creerAlerte, getAlertes, desactiverAlerte } from "../controllers/alerte.controller.js";

const router = Router();

// Routes publiques (pour les utilisateurs qui créent des alertes)
router.post("/", creerAlerte);
router.post("/desactiver", desactiverAlerte);

// Routes admin
router.get("/", getAlertes);

export default router;
