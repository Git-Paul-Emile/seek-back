import { prisma } from "../config/database.js";
export const getConfigSite = async () => {
    const config = await prisma.configSite.findUnique({
        where: { id: "config_site" },
    });
    return config;
};
export const updateConfigSite = async (data) => {
    // Ensure config exists first
    const config = await getConfigSite();
    if (!config) {
        throw new Error("Configuration introuvable, veuillez exécuter le seeder.");
    }
    const updated = await prisma.configSite.update({
        where: { id: "config_site" },
        data,
    });
    return updated;
};
//# sourceMappingURL=configSite.service.js.map