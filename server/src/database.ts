// Connexion à la base de données SQLite avec Sequelize

import { Sequelize } from "sequelize";
import dotenv from "dotenv";

import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

console.log("Chemin SQLITE_STORAGE :", process.env.SQLITE_STORAGE);
// Initialise Sequelize avec la configuration de la base de données SQLite et le chemin du fichier de stockage
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.SQLITE_STORAGE,
});

export default sequelize;
