const initialTrendingsShow = {
	media_type: "all",
	time_window: "day",
	page: 1,
}

export const actions = {
	set_time_window: "@trendSearch/set_time_window",
	set_media_type: "@trendSearch/set_media_type",
	page_prev: "@trendSearch/page_prev",
	page_next: "@trendSearch/page_next",
	page_reset: "@trendSearch/page_reset",
	page_set: "@trendSearch/page_set",
	reducer_reset: "@trendSearch/reset_reducer",
}

export const trendingsShowReducer = (state = initialTrendingsShow, action) => {
	switch (action?.type) {
		case actions.set_time_window:
			return { ...state, time_window: action.payload }
		case actions.set_media_type:
			return { ...state, media_type: action.payload }
		case actions.page_prev:
			return { ...state, page: state.page - 1 }
		case actions.page_next:
			return { ...state, page: state.page + 1 }
		case actions.page_reset:
			return { ...state, page: 1 }
		case actions.page_set:
			return { ...state, page: action.payload }
		case actions.reducer_reset:
			return (state = initialTrendingsShow)

		default:
			return state
	}
}
