const { detailTvRequest } = require("../api/detailApi")
const { popularTvRequest } = require("../api/popularApi")

const Serie = require("../models/serieModel")

// retorna 1 sola serie
const detailTv = async (req, res) => {
	const { tvId } = req.params

	const serie = await Serie.find({ id: tvId })

	if (serie[0]) {
		console.log("movie obtenida desde mongo")
		return res.json(serie)
	}

	const { data } = await detailTvRequest
		.get(`/${tvId}`)
		.catch((err) => res.json(err))

	const newSerie = new Serie(data)
	let savedSerie = await newSerie.save()
	console.log("serie saved in db")
	return res.json(savedSerie)
}

// retorna 20 series
const popularTv = (req, res) => {
	return popularTvRequest
		.get("/popular")
		.then((popular) => {
			return res.json(popular.data)
		})
		.catch((err) => res.json(err))
}

module.exports = { detailTv, popularTv }
