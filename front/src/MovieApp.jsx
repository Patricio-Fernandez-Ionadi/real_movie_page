import { Routes, Route } from "react-router-dom"

import { MenuContextProvider, TrendingsProvider } from "./context"
import { Trendings, General, Home, MovieDetail, Login, NotFound } from "./pages"

export const MovieApp = () => {
	return (
		<>
			<MenuContextProvider>
				<TrendingsProvider>
					<Routes>
						<Route path='/' element={<General />}>
							<Route index element={<Home />} />
							<Route path='trendings' element={<Trendings />} />
							<Route path=':media_type/:movieId' element={<MovieDetail />} />
							<Route path='login' element={<Login />} />
						</Route>
						<Route path='*' element={<NotFound />} />
					</Routes>
				</TrendingsProvider>
			</MenuContextProvider>
		</>
	)
}
