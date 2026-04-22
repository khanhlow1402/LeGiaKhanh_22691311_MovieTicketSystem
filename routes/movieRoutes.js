import express from "express";
import Movie from "../models/Movie.js";

const router = express.Router();

// GET /movies
router.get("/", async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// POST /movies
router.post("/", async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.json(movie);
});

router.post("/bulk", async (req, res) => {
  try {
    const movies = await Movie.insertMany(req.body);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
