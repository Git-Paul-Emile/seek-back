import type { Request, Response, NextFunction } from "express";
export declare const controllerWrapper: (controller: (req: Request, res: Response, next: NextFunction) => Promise<any>) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=ControllerWrapper.d.ts.map