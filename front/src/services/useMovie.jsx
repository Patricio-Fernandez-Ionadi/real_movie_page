import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getSpecificFilm } from "../reducers/trendReducer"

const useMovie = (state, pathname) => {
	const dispatch = useDispatch()

	const movie = useSelector((s) => s.movie)

	let isEmptyStore = !Object.keys(movie)[0]

	useEffect(() => {
		// si el objeto que trae desde la store está vacio lo que podria generarse por entrar desde la url y no desde el direccionamiento interno se dispatcheara el estado con los parametros recibidos de la url
		if (isEmptyStore && pathname.split("/")[1] === "biblioteca") {
			// console.log("obtenido desde parametros")
			dispatch(
				getSpecificFilm({
					media: pathname.split("/")[2],
					id: pathname.split("/")[3],
				})
			)
		} else {
			// console.log("obtenido desde store")
			dispatch(getSpecificFilm(state))
		}
	}, [dispatch, state, pathname]) //eslint-disable-line
	// useEfect ask me for 'isEmptyStore' dependency but it would generate 2 returns

	return movie
}

export default useMovie
