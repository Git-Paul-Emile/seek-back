import "dotenv/config"; // Doit être le 1er import — charge .env avant tous les autres modules
import { connectToDatabase } from "./config/database.js";
import app from "./config/app.js";




// Lancement
const initializeApp = async () => {
 try {
   const PORT = process.env.PORT || 8000;
   app.listen(PORT, () => {
     console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
   });




   await connectToDatabase();
 } catch (err) {
   console.error("❌ Erreur DB :", err);
   process.exit(1);
 }
};




initializeApp();
