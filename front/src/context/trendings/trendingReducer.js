export const trendingReducer = (state, action) => {
	switch (action?.type) {
		case "setTerms":
			return { ...state, ...action.payload }
		case "setTimeWindow":
			return { ...state, time_window: action.payload, page: 1 }
		case "setMediaType":
			return { ...state, media_type: action.payload, page: 1 }
		default:
			return state
	}
}
