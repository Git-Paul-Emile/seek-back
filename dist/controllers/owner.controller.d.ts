import type { Request, Response } from "express";
export declare const register: (req: Request, res: Response) => Promise<void>;
export declare const login: (req: Request, res: Response) => Promise<void>;
export declare const refresh: (req: Request, res: Response) => Promise<void>;
export declare const logout: (req: Request, res: Response) => Promise<void>;
export declare const me: (req: Request, res: Response) => Promise<void>;
export declare const updateProfile: (req: Request, res: Response) => Promise<void>;
export declare const deleteProfile: (req: Request, res: Response) => Promise<void>;
export declare const forgotPassword: (req: Request, res: Response) => Promise<void>;
export declare const resetPassword: (req: Request, res: Response) => Promise<void>;
export declare const getMessagesInternes: (req: Request, res: Response) => Promise<void>;
export declare const marquerMessagesLus: (req: Request, res: Response) => Promise<void>;
export declare const verifierTelephone: (req: Request, res: Response) => Promise<void>;
export declare const renvoyerOtp: (req: Request, res: Response) => Promise<void>;
export declare const verifierTelephonePublic: (req: Request, res: Response) => Promise<void>;
export declare const renvoyerOtpPublic: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=owner.controller.d.ts.map