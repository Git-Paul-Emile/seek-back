import { PrismaClient } from "../../src/generated/prisma/client.js";
// Initialisation singleton de PrismaClient
const prismaClient = new PrismaClient();
export const connectToDatabase = async () => {
    try {
        await prismaClient.$connect();
        console.log("✅ Connecté à la base de données principale");
    }
    catch (err) {
        console.error("❌ Impossible de se connecter à la base de données", err);
        throw err;
    }
};
export const prisma = prismaClient;
//# sourceMappingURL=database.js.map