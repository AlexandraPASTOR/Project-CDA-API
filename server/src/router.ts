import express from "express";
const router = express.Router();

// API Routes
import jokeAction from "./version1/modules/joke/jokeAction";
router.get("/api/blagues", jokeAction.browse);
router.get("/api/blagues/random", jokeAction.readRandom);
router.get("/api/blagues/:id", jokeAction.read);
router.post("/api/blagues", jokeAction.add);

export default router;