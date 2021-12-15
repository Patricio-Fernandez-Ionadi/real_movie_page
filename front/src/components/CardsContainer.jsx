import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
	setSearchParamsOfTrends,
	setSearchParamsPage,
} from "../reducers/trendReducer"

import MovieCard from "./MovieCard"

const CardsContainer = () => {
	const dispatch = useDispatch()
	const trends = useSelector((s) => s.trendings)
	const searchingParamsStore = useSelector((s) => s.searchingParameters)

	useEffect(() => {
		dispatch(setSearchParamsOfTrends(searchingParamsStore))
	}, [dispatch, searchingParamsStore])

	const handlePagination = ({ target }) => {
		let btnValue = target.value
		if (btnValue === "nextBtn" && searchingParamsStore.page < 1001) {
			dispatch(setSearchParamsPage(searchingParamsStore.page + 1))
		}
		if (btnValue === "prevBtn" && searchingParamsStore.page > 1) {
			dispatch(setSearchParamsPage(searchingParamsStore.page - 1))
		}
	}

	return trends[0] ? (
		<>
			<h1>Cards Container</h1>
			<div>
				{trends.map((each) => {
					return <MovieCard toRender={each} key={each.id} />
				})}
				<button type='button' value='prevBtn' onClick={handlePagination}>
					prev
				</button>
				<button type='button' value='nextBtn' onClick={handlePagination}>
					next
				</button>
			</div>
		</>
	) : (
		<>
			<div>
				<h1>no hay resultados que mostrar</h1>
			</div>
		</>
	)
}

export default CardsContainer
