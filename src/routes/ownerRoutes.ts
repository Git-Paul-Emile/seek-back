import { Router } from "express";
import { registerProprietaireHandler, loginProprietaireHandler } from "../controllers/ownerController.js";

const router = Router();

// Route d'inscription du propriétaire
router.post("/proprietaires/inscription", registerProprietaireHandler);

// Route de connexion du propriétaire
router.post("/proprietaires/connexion", loginProprietaireHandler);

export default router;
