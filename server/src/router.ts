import express from "express";
const router = express.Router();
import jokeAction from "./version1/modules/joke/jokeAction";

/**
 * @swagger
 * tags:
 *   - name: Blagues
 *     description: API pour gérer les blagues Carambar
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Blague:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         content:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     NouvelleBlague:
 *       type: object
 *       required:
 *         - content
 *       properties:
 *         content:
 *           type: string
 *           description: Le contenu de la blague
 */

/**
 * @swagger
 * /api/blagues:
 *   get:
 *     tags: [Blagues]
 *     summary: Récupérer toutes les blagues
 *     responses:
 *       200:
 *         description: Liste des blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blague'
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Erreur lors de la récupération des blagues."
 */
router.get("/api/blagues", jokeAction.browse);

/**
 * @swagger
 * /api/blagues/random:
 *   get:
 *     tags: [Blagues]
 *     summary: Récupérer une blague aléatoire
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blague'
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Erreur lors de la récupération de la blague."
 */
router.get("/api/blagues/random", jokeAction.readRandom);


/**
 * @swagger
 * /api/blagues/{id}:
 *   get:
 *     tags: [Blagues]
 *     summary: Récupérer une blague par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la blague
 *     responses:
 *       200:
 *         description: Détails de la blague
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blague'
 *       404:
 *         description: Blague non trouvée
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Erreur lors de la récupération de la blague."
 */
router.get("/api/blagues/:id", jokeAction.read);

/**
 * @swagger
 * /api/blagues:
 *   post:
 *     tags: [Blagues]
 *     summary: Ajouter une nouvelle blague
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NouvelleBlague'
 *     responses:
 *       201:
 *         description: Blague ajoutée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blague'
 *       400:
 *         description: Le contenu est requis
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Le contenu de la blague est requis.
 *       500:
 *         description: Erreur serveur lors de l'ajout
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Erreur lors de l'ajout de la blague.
 */
router.post("/api/blagues", jokeAction.add);

export default router;
