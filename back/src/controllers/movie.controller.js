const { detailMovieRequest } = require("../api/detailApi")
const Movie = require("../models/movieModel")

// retorna 1 sola pelicula y la guarda en la DB si no está
const detailMovie = async (req, res) => {
	const { movieId } = req.params

	const movie = await Movie.find({ id: movieId })

	if (movie[0]) {
		console.log("movie obtenida desde mongo")
		return res.json(movie)
	}

	const { data } = await detailMovieRequest
		.get(`/${movieId}`)
		.catch((err) => res.json(err))

	const newMovie = new Movie(data)
	let savedMovie = await newMovie.save()
	console.log("movie saved in db")
	return res.json(savedMovie)
}

// retorna 1 sola pelicula
const latestMovie = (req, res) => {
	return detailMovieRequest
		.get(`/latest`)
		.then((latest) => {
			const idEnCuestion = latest.data.id

			Movie.find({ id: idEnCuestion }).then((movie) => {
				if (!movie[0]) {
					const newMovie = new Movie(latest.data)
					newMovie.save().then((savedMovie) => {
						console.log('"latest" pelicula guardada en db')
						return res.json(savedMovie)
					})
				}
				console.log("pelicula obtenida desde mongo")
				return res.json(movie)
			})
		})
		.catch((err) => res.json(err))
}

module.exports = { latestMovie, detailMovie }
