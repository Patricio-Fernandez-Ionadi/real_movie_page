// STYLES
import "./App.css"
import { Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import Trendings from "./pages/Trendings"

import CardsContainer from "./components/CardsContainer"
import DetailPage from "./pages/DetailPage"

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />

					<Route path='trendings' element={<Trendings />}>
						<Route path=':media/:timeRange' element={<CardsContainer />} />
					</Route>

					<Route path='biblioteca'>
						<Route path=':media/:mediaId' element={<DetailPage />} />
					</Route>
				</Route>
			</Routes>
		</>
	)
}

export default App
