import "dotenv/config"; // Doit être le 1er import — charge .env avant tous les autres modules
import { createServer } from "http";
import { connectToDatabase } from "./config/database.js";
import app from "./config/app.js";
import { initializeWebSocket } from "./services/socket.service.js";




// Lancement
const initializeApp = async () => {
  try {
    const PORT = process.env.PORT || 8000;
    
    // Créer le serveur HTTP pour Express
    const httpServer = createServer(app);
    
    // Initialiser WebSocket
    initializeWebSocket(httpServer);
    
    // Démarrer le serveur
    httpServer.listen(PORT, () => {
      console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
    });




    await connectToDatabase();
  } catch (err) {
    console.error("❌ Erreur DB :", err);
    process.exit(1);
  }
};




initializeApp();
