import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
	setSearchParamsMedia,
	setSearchParamsOfTrends,
	setSearchParamsTimeRange,
} from "../reducers/trendReducer"

const TrendingsSelect = () => {
	const dispatch = useDispatch()
	const searchingParamsStore = useSelector((s) => s.searchingParameters)
	// console.log(searchingParamsStore)
	const navigate = useNavigate()

	// establecen en el estado del componente el valor de los select al momento actual del cambio
	const handleMediaSelect = ({ target }) => {
		dispatch(setSearchParamsMedia(target.value))
	}
	const handleTimeSelect = ({ target }) => {
		dispatch(setSearchParamsTimeRange(target.value))
	}

	// realiza al presionar "search" el dispatch correspondiente al store diciendole que debe hacer la request con los parametros provistos
	const searchTrendigs = () => {
		dispatch(setSearchParamsOfTrends(searchingParamsStore))
		navigate(
			`/trendings/${searchingParamsStore.media}/${searchingParamsStore.timeRange}`
		)
	}

	return (
		<div>
			category
			<select name='CATEGORIES' onChange={handleMediaSelect}>
				<option value='all'>All</option>
				<option value='movie'>Movies</option>
				<option value='tv'>TV Shows</option>
			</select>
			time
			<select name='TIMEONSEARCH' onChange={handleTimeSelect}>
				<option value='day'>Today</option>
				<option value='week'>This week</option>
			</select>
			<button onClick={searchTrendigs}>Search</button>
		</div>
	)
}

export default TrendingsSelect
