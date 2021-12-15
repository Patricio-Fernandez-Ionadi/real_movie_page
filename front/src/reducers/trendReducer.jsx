import axios from "axios"

// ------------- ///////////// -------------
export const trendReducer = (state = [], action) => {
	// console.log(state)
	if (action.type === "@trendings/makeRequestOfTrendings") {
		return action.payload
	}
	return state
}
export const setSearchParamsOfTrends = ({
	media = "all",
	timeRange = "day",
	page = 1,
}) => {
	return (dispatch) => {
		return axios
			.get(`http://localhost:3001/trendings/${media}/${timeRange}?page=${page}`)
			.then((res) => {
				return dispatch({
					type: "@trendings/makeRequestOfTrendings",
					payload: res.data.results,
				})
			})
	}
}

// ------------- ///////////// -------------
export const searchParamsReducer = (
	searchingParams = { media: "all", timeRange: "day", page: 1 },
	action
) => {
	if (action.type === "@searchparams/get_actual_params") {
		return searchingParams
	}

	if (action.type === "@searchparams/set_page") {
		return {
			...searchingParams,
			page: action.payload,
		}
	}

	if (action.type === "@searchparams/set_media") {
		return {
			...searchingParams,
			media: action.payload,
		}
	}

	if (action.type === "@searchparams/set_timeRange") {
		return {
			...searchingParams,
			timeRange: action.payload,
		}
	}

	return searchingParams
}
export const getSearchParams = () => {
	return (dispatch) => {
		dispatch({
			type: "@searchparams/get_actual_params",
		})
	}
}
export const setSearchParamsPage = (page) => {
	return (dispatch) => {
		dispatch({
			type: "@searchparams/set_page",
			payload: page,
		})
	}
}
export const setSearchParamsMedia = (media) => {
	return (dispatch) => {
		dispatch({
			type: "@searchparams/set_media",
			payload: media,
		})
	}
}
export const setSearchParamsTimeRange = (timeRange) => {
	return (dispatch) => {
		dispatch({
			type: "@searchparams/set_timeRange",
			payload: timeRange,
		})
	}
}

// ------------- ///////////// -------------
export const movieReducer = (state = {}, action) => {
	if (action.type === "@movie/getMovie") {
		return action.payload
	}
	return state
}

export const getSpecificFilm = ({ media, id }) => {
	return (dispatch) => {
		return axios.get(`http://localhost:3001/${media}/${id}`).then((res) => {
			return dispatch({
				type: "@movie/getMovie",
				payload: res.data,
			})
		})
	}
}
