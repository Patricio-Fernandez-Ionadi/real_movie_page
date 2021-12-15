import { useState } from "react"
import { useLocation } from "react-router-dom"
import MovieDetailComponent from "../components/MovieDetailComponent"
import TvDetailComponent from "../components/TvDetailComponent"
import useMovie from "../services/useMovie"

const DetailPage = () => {
	let { state, pathname } = useLocation()

	// console.log(state)

	const movie = useMovie(state, pathname)
	// console.log(movie)

	// store almacena el objeto con la ultima pelicula guardada y al volver a cargar el componente en un principio muestra la busqueda anterior hasta que la nueva peticion finalice, este setTimeOut "tapa" eso
	const [loading, setLoading] = useState(true)
	setTimeout(() => {
		setLoading(false)
	}, 1000)

	return !loading ? (
		state.media === "tv" ? (
			<TvDetailComponent tvshow={movie} />
		) : (
			<MovieDetailComponent movie={movie} />
		)
	) : (
		<p>CARGANDO...</p>
	)
}

export default DetailPage
