import React, { useEffect, useState, useReducer } from "react"

import trendingsApi from "../../api/trendingsApi"
import { TrendingsContext } from "./TrendingContext"
import { trendingReducer } from ".."

const INITIAL_STATE = {
	media_type: "all",
	time_window: "day",
	page: 1,
}

export const TrendingsProvider = ({ children }) => {
	const [trendings, setTrendings] = useState()
	const [state, dispatch] = useReducer(trendingReducer, INITIAL_STATE)
	const { media_type, time_window, page } = state

	const setTimeWindow = (time_window) => {
		dispatch({ type: "setTimeWindow", payload: time_window })
	}
	const setMediaType = (media_type) => {
		dispatch({ type: "setMediaType", payload: media_type })
	}
	const setPage = (page) => {
		if (page >= 1 && page < trendings.total_pages) {
			dispatch({ type: "setPage", payload: page })
		}
	}

	useEffect(() => {
		trendingsApi
			.get(`/${media_type}/${time_window}?page=${page}`)
			.then((res) => {
				setTrendings(res.data)
			})
	}, [state])

	return (
		<TrendingsContext.Provider
			value={{
				trendings,
				setTimeWindow,
				setMediaType,
				setPage,
			}}
		>
			{children}
		</TrendingsContext.Provider>
	)
}
