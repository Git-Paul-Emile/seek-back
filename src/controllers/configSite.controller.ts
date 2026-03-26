import type { Request, Response } from "express";
import * as configSiteService from "../services/configSite.service.js";

// Type pour les horaires d'un jour
type ServiceHoursDay = {
  day: string;
  isOpen: boolean;
  open: string;
  close: string;
};

export const get = async (req: Request, res: Response) => {
  try {
    const config = await configSiteService.getConfigSite();
    res.json(config);
  } catch (error) {
    console.error("Erreur récupération config site:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { contactEmail, contactPhone, contactAddress, serviceClientHours } = req.body;
    
    const config = await configSiteService.updateConfigSite({
      contactEmail,
      contactPhone,
      contactAddress,
      serviceClientHours: serviceClientHours as ServiceHoursDay[],
    });
    
    res.json(config);
  } catch (error) {
    console.error("Erreur mise à jour config site:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
