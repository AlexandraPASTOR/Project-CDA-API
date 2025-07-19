// Gestion des actions : contient les fonctions pour lire, ajouter des blagues, etc.
// Il utilise un repository pour interagir avec la base de données.

import type { RequestHandler } from "express";

import jokeRepository from "./jokeRepository";

const browse: RequestHandler = async (req, res) => {
  try {
    const jokes = await jokeRepository.browse();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des blagues." });
  }
};


const read: RequestHandler = async (req, res) => {
  try {
    // Récupère une blague par son ID
    const id = Number(req.params.id);
    const joke = await jokeRepository.read(id);
    if (joke == null) {
      res.status(404).json({ error: "Blague non trouvée." });
    } else {
      res.json(joke);
    }
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération de la blague." });
  }
};

const readRandom: RequestHandler = async (req, res) => {
  try {
    const joke = await jokeRepository.readRandom();
    return res.json(joke);
  } catch (error: any) {
    console.error("Erreur dans readRandom:", error);
    return res.status(500).json({ error: error.message || "Erreur lors de la récupération de la blague." });
  }
};


const add: RequestHandler = async (req, res) => {
    // Ajoute une nouvelle blague
  const { content } = req.body;
  try {
    // Vérifie que le contenu de la blague est fourni
    if (!content) {
      return res.status(400).json({ error: "Le contenu de la blague est requis." });
    }
    const newJoke = await jokeRepository.add(content);
    res.json(newJoke);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'ajout de la blague." });
  }
};

export default { browse, read, readRandom, add };