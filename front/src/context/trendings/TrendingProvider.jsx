import React, { useReducer } from "react"

import { TrendingsContext } from "./TrendingContext"
import { trendingReducer } from ".."
import { useTrendings } from "../../hooks/useTrendings"

const INITIAL_STATE = {
	media_type: "all",
	time_window: "day",
	page: 1,
}

export const TrendingsProvider = ({ children }) => {
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

	const trendings = useTrendings({ media_type, time_window, page })

	return (
		<TrendingsContext.Provider
			value={{
				state,
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
