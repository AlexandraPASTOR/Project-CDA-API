// Repository pour interagir avec la base de données des blagues
// Il utilise Sequelize pour les opérations CRUD sur le modèle Joke.

import sequelize from "./../../../database";
import { DataTypes, Model } from "sequelize";

// Définition du modèle Joke
class Joke extends Model {
    declare id: number;
    declare content: string;
}
// Initialisation du modèle Joke avec Sequelize
Joke.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "Joke",
        timestamps: false, // Désactive les timestamps qui sont deux colonnes createdAt et updatedAt ajoutées automatiquement
    }
);

class JokeRepository {
  async browse() {
    return Joke.findAll();
  }

  async read(id: number) {
    return Joke.findByPk(id);
  }

async readRandom() {
  const count = await Joke.count();
  if (count === 0) throw new Error("Aucune blague trouvée.");
  const randomIndex = Math.floor(Math.random() * count);
  const jokes = await Joke.findAll({ limit: 1, offset: randomIndex });
  return jokes[0];  // renvoyer la blague unique, pas un tableau
}


  async add(content: string) {
    return Joke.create({ content });
  }
}

export default new JokeRepository();
