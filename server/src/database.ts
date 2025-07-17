// Connexion à la base de données SQLite avec Sequelize

import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Initialise Sequelize avec la configuration de la base de données SQLite et le chemin du fichier de stockage
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.SQLITE_STORAGE,
});

export default sequelize;
