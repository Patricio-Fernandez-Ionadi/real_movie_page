// STYLES
import { Routes, Route, Link } from "react-router-dom"

import { Trendings, General, Home, MovieDetail, Login } from "./pages"
import { MenuContextProvider, TrendingsProvider } from "./context"

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
						<Route
							path='*'
							element={
								<>
									<p>Page not Found</p> <Link to='/'>volver al inicio</Link>
								</>
							}
						/>
					</Routes>
				</TrendingsProvider>
			</MenuContextProvider>
		</>
	)
}
