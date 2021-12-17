require("dotenv").config()
require('./connection')
const express = require("express")
const app = express()
const axios = require("axios")
const cors = require("cors")

const Serie = require('./models/serieModel')
const Movie = require('./models/movieModel')

app.use(express.json())
app.use(cors())

const { APIKEYPARAMETER } = process.env

app.get("/", (req, res) => {
	res
		.status(200)
		.json({
			aplicacion: {
				name: "The Movie Data Base Project",
				status: "on",
				servidor: process.env.NODE_ENV,
			},
		})
		.end()
})

// retorna paginas de 20 peliculas
app.get("/trendings/:genre/:timeRange", (req, res) => {
	const { genre, timeRange } = req.params
	const page = req.query.page || 1

	return axios
		.get(
			`https://api.themoviedb.org/3/trending/${genre}/${timeRange}?page=${page}&${APIKEYPARAMETER}`
		)
		.then((trendings) => res.json(trendings.data))
		.catch((error) => res.json(error))
})

// retorna 1 sola pelicula
app.get("/:mediaType/:movieId", async (req, res) => {
	const {movieId, mediaType} = req.params

	const serie = await Serie.find({id: movieId})
	const movie = await Movie.find({id: movieId})

	if (!serie[0] && movie[0]) {
		console.log('movie obtenida desde mongo')
		return res.json(movie)
	} else if (!movie[0] && serie[0]) {
		console.log('serie obtenida desde mongo')
		return res.json(serie)
	} else {
		console.log('no se encontraron resultados en mongo, accediendo a api para guardar en db')

		const {data} = await axios
			.get(
				`https://api.themoviedb.org/3/${mediaType}/${movieId}?${APIKEYPARAMETER}`
			).catch(err => res.json(err))

		if (mediaType === 'tv') {
			const newSerie = new Serie(data)
			let savedSerie = await newSerie.save()
			console.log('serie saved in db')
			return res.json(savedSerie)
		}else if (mediaType === 'movie'){
			const newMovie = new Movie(data)
			let savedMovie = await newMovie.save()
			console.log('movie saved in db')
			return res.json(savedMovie)
		}else{
			return console.log('serie media type not valid')
		}


	}
})



// })

// retorna 1 sola pelicula
app.get("/movie/latest", (req, res) => {
	return axios
		.get(
			`https://api.themoviedb.org/3/movie/latest?${APIKEYPARAMETER}&language=en-US`
		)
		.then((latest) => {
			return res.json(latest.data)
		})
		.catch((err) => res.json(err))
})

// const PORT = process.env.NODE_ENV === "test" ? 1234 : 3001
app.listen(3001, () => {
	console.log(`server running on port 3001`)
})
