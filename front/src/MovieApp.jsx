// STYLES
import "./App.css"
import { Routes, Route, Link } from "react-router-dom"

import { Trendings, General, Home } from "./pages"
import { TrendingsProvider } from "./context/trendings"

export const MovieApp = () => {
	return (
		<>
			<TrendingsProvider>
				<Routes>
					<Route path='/' element={<General />}>
						<Route index element={<Home />} />
						<Route path='trendings' element={<Trendings />} />
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
		</>
	)
}
