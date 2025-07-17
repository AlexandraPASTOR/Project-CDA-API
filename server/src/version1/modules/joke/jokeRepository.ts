import sequelize from "../../../database";
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
    const count = await Joke.count(); // Compte le nombre total de blagues
    const randomIndex = Math.floor(Math.random() * count); // Génère un index aléatoire
    return Joke.findAll({ limit: 1, offset: randomIndex }); // Récupère une blague aléatoire
  }

  async add(content: string) {
    return Joke.create({ content });
  }
}

export default new JokeRepository();
