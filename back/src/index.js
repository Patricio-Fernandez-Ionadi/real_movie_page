require("dotenv").config()
const express = require("express")
const app = express()
const axios = require("axios")
const cors = require("cors")

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
app.get("/:medidType/:movieId", (req, res) => {
	const { movieId, medidType } = req.params

	return axios
		.get(
			`https://api.themoviedb.org/3/${medidType}/${movieId}?${APIKEYPARAMETER}`
		)
		.then((movie) => res.json(movie.data))
		.catch((err) => res.json(err))
})

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
