import { Router } from "express";
import { controllerWrapper } from "../utils/ControllerWrapper.js";
import * as OwnerController from "../controllers/owner.controller.js";
import { authenticateOwner } from "../middlewares/ownerAuth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import { registerOwnerSchema, loginOwnerSchema } from "../validators/owner.validator.js";
const router = Router();
/** POST /api/owner/auth/register */
router.post("/register", validate(registerOwnerSchema), controllerWrapper(OwnerController.register));
/** POST /api/owner/auth/login */
router.post("/login", validate(loginOwnerSchema), controllerWrapper(OwnerController.login));
/** POST /api/owner/auth/refresh */
router.post("/refresh", controllerWrapper(OwnerController.refresh));
/** POST /api/owner/auth/logout — protégé */
router.post("/logout", authenticateOwner, controllerWrapper(OwnerController.logout));
/** GET /api/owner/auth/me — protégé */
router.get("/me", authenticateOwner, controllerWrapper(OwnerController.me));
export default router;
//# sourceMappingURL=owner.routes.js.map