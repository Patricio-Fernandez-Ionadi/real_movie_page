require("dotenv").config()
require("./connection")

const express = require("express")
const app = express()
const cors = require("cors")

// Routes
const trendingsRoute = require("./routes/trendings.route")
const tvRoute = require("./routes/tv.route")
const movieRoute = require("./routes/movie.route")

// Middlewares
app.use(express.json())
app.use(cors())

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

app.use("/trendings", trendingsRoute)

app.use("/tv", tvRoute)

app.use("/movie", movieRoute)

const PORT = process.env.NODE_ENV === "test" ? 1234 : 3001
app.listen(PORT, () => {
	console.log(`server running on http://localhost:${PORT}`)
})
