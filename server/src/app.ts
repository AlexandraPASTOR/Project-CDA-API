import express from "express";
import router from "./router";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";

// Charge les variables d'environnement
dotenv.config();

// Crée l'application Express
const app = express();

// Middleware pour gérer les CORS
const cors = require("cors");
app.use(cors());

// Définit le port d'écoute
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON et lire le corps des requêtes
app.use(express.json());

// Middleware pour la documentation Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
