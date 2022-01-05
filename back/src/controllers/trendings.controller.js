const trendsRequest = require("../api/trendsApi")

// retorna paginas de 20 peliculas
const trendingsByTerms = (req, res) => {
	const { media_type, time_window } = req.params
	const page = req.query.page || 1

	return trendsRequest
		.get(`/${media_type}/${time_window}?page=${page}`)
		.then((trendings) => res.json(trendings.data))
		.catch((error) => res.json(error))
}

module.exports = trendingsByTerms
