const movieRoute = require("express").Router()

const {
	detailMovie,
	latestMovie,
	popularMovies,
} = require("../controllers/movie.controller")

movieRoute.get("/latest", latestMovie)

movieRoute.get("/popular", popularMovies)

movieRoute.get("/:movieId", detailMovie)

module.exports = movieRoute
