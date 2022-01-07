const { detailMovieRequest } = require("../api/detailApi")
const { popularMoviesRequest } = require("../api/popularApi")
const Movie = require("../models/movieModel")

// retorna 1 sola pelicula y la guarda en la DB si no está
const detailMovie = async (req, res) => {
	const id = Number(req.params.movieId)

	const [movie] = await Movie.find({ id: id })

	if (movie?.id) {
		console.log("movie obtenida desde mongo")
		return res.json(movie)
	}

	const { data } = await detailMovieRequest
		.get(`/${id}`)
		.catch((err) => res.json(err))

	const newMovie = new Movie(data)
	let savedMovie = await newMovie.save()
	console.log("movie saved in db")
	return res.json(savedMovie)
}

// retorna 1 sola pelicula
const latestMovie = (req, res) => {
	return detailMovieRequest
		.get(`/latest?include_adult=false`)
		.then((latest) => {
			const idEnCuestion = latest.data.id

			Movie.find({ id: idEnCuestion }).then((movie) => {
				if (!movie[0]) {
					const newMovie = new Movie(latest.data)
					newMovie.save().then((savedMovie) => {
						console.log('"latest" pelicula guardada en db')
						console.log(savedMovie ? true : false)
						return res.json(savedMovie)
					})
				} else if (movie.poster_path === null) {
					Movie.findOneAndUpdate({ id: idEnCuestion }).then((movie) => {
						const updatedMovie = { ...movie, poster_path: latest.poster_path }
						console.log("movie upodated...")
						updatedMovie.save().then((updatedMovie) => res.json(updatedMovie))
					})
				} else {
					console.log("pelicula obtenida desde mongo")
					return res.json(movie)
				}
			})
		})
		.catch((err) => res.json(err))
}

// retorna 20 peliculas
const popularMovies = (req, res) => {
	return popularMoviesRequest
		.get("/popular")
		.then((popular) => {
			return res.json(popular.data)
		})
		.catch((err) => res.json(err))
}

module.exports = { latestMovie, detailMovie, popularMovies }
