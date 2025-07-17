import express from "express";
import router from "./router";
import dotenv from "dotenv";

// Charge les variables d'environnement
dotenv.config();

// Crée l'application Express
const app = express();

// Définit le port d'écoute
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON et lire le corps des requêtes
app.use(express.json());

// Middleware pour gérer les routes
app.use(router);

// Démarre le serveur sur le port spécifié
app
  .listen(PORT, () => {
    console.info(`Server is listening on port ${PORT}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
