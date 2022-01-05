const axios = require("axios")

const detailTvRequest = axios.create({
	baseURL: "https://api.themoviedb.org/3/tv",
	params: {
		api_key: "8dc24acaab70aa4c4fa423a992180f59",
	},
})

const detailMovieRequest = axios.create({
	baseURL: "https://api.themoviedb.org/3/movie",
	params: {
		api_key: "8dc24acaab70aa4c4fa423a992180f59",
	},
})

module.exports = { detailTvRequest, detailMovieRequest }
