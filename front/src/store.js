import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import {
	movieReducer,
	searchParamsReducer,
	trendReducer,
} from "./reducers/trendReducer"

const reducer = combineReducers({
	trendings: trendReducer,
	searchingParameters: searchParamsReducer,
	movie: movieReducer,
})

export const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
)
