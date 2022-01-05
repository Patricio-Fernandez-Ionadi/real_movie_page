import axios from "axios"

export const popularMoviesApi = axios.create({
	baseURL: "http://localhost:3001/movie/popular",
})

export const popularTvApi = axios.create({
	baseURL: "http://localhost:3001/tv/popular",
})
