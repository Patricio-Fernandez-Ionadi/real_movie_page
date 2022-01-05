import { useEffect, useState } from "react"

import { popularMoviesApi } from "../api"

export const usePopularMovies = () => {
	const [popular, setPopular] = useState()

	useEffect(() => {
		return popularMoviesApi.get("/").then((res) => setPopular(res.data))
	}, [])

	return popular
}
