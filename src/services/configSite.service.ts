import { prisma } from "../config/database.js";

// Type pour les horaires du service client
export type ServiceHoursDay = {
  day: string;
  isOpen: boolean;
  open: string;
  close: string;
};

export const getConfigSite = async () => {
  const config = await prisma.configSite.findUnique({
    where: { id: "config_site" },
  });

  return config;
};

export const updateConfigSite = async (data: {
  contactEmail?: string;
  contactPhone?: string;
  contactAddress?: string;
  serviceClientHours?: ServiceHoursDay[];
}) => {
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
