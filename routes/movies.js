const express = require("express");
const router = express.Router();
const mockData = require("../mockData");

let movies = mockData;

const apiKey = "5";

const authenticateAPIKey = (req, res, next) => {
  console.log(req)
  const { apiKey: reqKey } = req.query;

  if (apiKey === reqKey) {
    next(); // Fortsätt till nästa middleware eller route
  } else {
    res
      .status(401)
      .json({ message: "Unauthorized" });
  }
};

router.use(authenticateAPIKey);

router.get("/", (req, res) => {
  res.json(movies);
});

router.get("/:imdbID", (req, res) => {
  const imdbID = req.params.imdbID;
  const movie = movies.find((movie) => movie.imdbID === imdbID);
  console.log(movie);

  if (!character) {
    return res
      .status(404)
      .json({ message: "movie doesn't exist" });
  }

  res.json(movie);
})

router.delete("/:imdbID", (req, res) => {
  const imdbID = req.params.imdbID;
  const movie = movies.find((movie) => movie.imdbID === imdbID);

  if (!movies) {
    return res
      .status(404)
      .json({ message: "Ingen karaktär med det idt kunde hittas!" });
  }

  const newData = movies.find((movie) => movie.imdbID === imdbID);
  movies = newData;

  res.json({ message: "filmen har blivit borttagen!" });
});

let nextId = 304
router.post("/", (req, res) => {
  const movie = req.body.movie;
  console.log(movie)
  const newMovie = {
    ...movie,
    imdbID: nextId.toString()
  };

  nextId++;

  movies.push(newMovie);
  res.json(newMovie);
});

router.put("/", (req, res) => {
  const imdbID = req.params.imdbID;
  const movie = req.body.movie;

  const index = movies.findIndex((movie) => movie.id === imdbID);

  if (index === -1) {
    return res
      .status(404)
      .json({ message: "movie not found" });
  }

  const updatedMovie = { ...movies[index], ...movie };
  movies[index] = updatedMovie;

  res.json(updatedMovie);
})

module.exports = router;

