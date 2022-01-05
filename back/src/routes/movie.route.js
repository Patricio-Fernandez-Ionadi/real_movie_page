const movieRoute = require("express").Router()

const { detailMovie, latestMovie } = require("../controllers/movie.controller")

movieRoute.get("/latest", latestMovie)

movieRoute.get("/:movieId", detailMovie)

module.exports = movieRoute
