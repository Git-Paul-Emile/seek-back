import * as configSiteService from "../services/configSite.service.js";
export const get = async (req, res) => {
    try {
        const config = await configSiteService.getConfigSite();
        res.json(config);
    }
    catch (error) {
        console.error("Erreur récupération config site:", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};
export const update = async (req, res) => {
    try {
        const { contactEmail, contactPhone, contactAddress, serviceClientHours } = req.body;
        const config = await configSiteService.updateConfigSite({
            contactEmail,
            contactPhone,
            contactAddress,
            serviceClientHours: serviceClientHours,
        });
        res.json(config);
    }
    catch (error) {
        console.error("Erreur mise à jour config site:", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};
//# sourceMappingURL=configSite.controller.js.map