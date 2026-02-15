import { ZodError } from "zod";
import { AppError } from "../utils/AppError.js";
import { StatusCodes } from "http-status-codes";
/**
 * Middleware de validation générique avec Zod
 */
export const validate = (schema) => {
    return (req, res, next) => {
        try {
            const dataToValidate = {
                ...req.body,
                ...req.params,
                ...req.query,
            };
            const result = schema.safeParse(dataToValidate);
            if (!result.success) {
                // Formater les erreurs Zod
                const errors = result.error.issues.map((issue) => ({
                    field: issue.path.join("."),
                    message: issue.message,
                }));
                throw new AppError(`Validation échouée: ${errors.map((e) => `${e.field}: ${e.message}`).join(", ")}`, StatusCodes.BAD_REQUEST);
            }
            // Remplacer les données validées si présentes
            const parsedData = result.data;
            if (parsedData && parsedData.body) {
                req.body = parsedData.body;
            }
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
/**
 * Middleware pour capturer les erreurs de validation
 */
export const validationErrorHandler = (err, req, res, next) => {
    if (err instanceof ZodError) {
        const errors = err.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
        }));
        res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: "Erreur de validation",
            errors,
        });
        return;
    }
    next(err);
};
/**
 * Middleware pour valider les paramètres d'ID
 */
export const validateId = (paramName = "id") => {
    return (req, res, next) => {
        const idRaw = req.params[paramName];
        const id = Array.isArray(idRaw) ? idRaw[0] : idRaw;
        if (!id) {
            res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: `Paramètre ${paramName} requis`,
            });
            return;
        }
        // UUID regex simple
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (!uuidRegex.test(id)) {
            res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: `Format de ${paramName} invalide`,
            });
            return;
        }
        next();
    };
};
//# sourceMappingURL=validate.middleware.js.map