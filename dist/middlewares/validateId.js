import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils/AppError.js";
export const validateId = (req, res, next) => {
    const { id } = req.params;
    if (!id || typeof id !== "string") {
        throw new AppError("ID invalide", StatusCodes.BAD_REQUEST);
    }
    next();
};
//# sourceMappingURL=validateId.js.map