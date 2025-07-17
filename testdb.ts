// Fichier de test pour vérifier la connexion à la base de données SQLite
import sequelize from "./server/src/database";
import { DataTypes } from "sequelize";

// Définition du modèle Joke
const Joke = sequelize.define("Joke", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: "Joke",
  timestamps: false, // si ta table n'a pas les colonnes createdAt/updatedAt
});

// Fonction pour tester la connexion à la base de données
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connexion à la base SQLite réussie !");

    const jokes = await Joke.findAll();
    console.log("Blagues récupérées :", jokes.map((j:any) => j.content));
  } catch (error) {
    console.error("Erreur lors de la connexion à la base :", error);
  } finally {
    await sequelize.close();
  }
}

testConnection();
