import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as LocataireAuthController from "../controllers/locataireAuth.controller.js";
import { authenticateLocataire } from "../middlewares/locataireAuth.middleware.js";
const router = Router();
/** POST /api/locataire/auth/activer — activer le compte avec le token */
router.post("/activer", controllerWrapper(LocataireAuthController.activer));
/** POST /api/locataire/auth/login */
router.post("/login", controllerWrapper(LocataireAuthController.login));
/** POST /api/locataire/auth/refresh */
router.post("/refresh", controllerWrapper(LocataireAuthController.refreshToken));
/** POST /api/locataire/auth/logout */
router.post("/logout", authenticateLocataire, controllerWrapper(LocataireAuthController.logout));
/** GET /api/locataire/auth/me */
router.get("/me", authenticateLocataire, controllerWrapper(LocataireAuthController.me));
/** PUT /api/locataire/auth/profil */
router.put("/profil", authenticateLocataire, controllerWrapper(LocataireAuthController.updateProfil));
export default router;
//# sourceMappingURL=locataireAuth.routes.js.map