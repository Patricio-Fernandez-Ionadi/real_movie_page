import React from "react"
import CardsContainer from "../components/CardsContainer"
import TrendingsSelect from "../components/TrendingsSelect"

const Trendings = () => {
	return (
		<div>
			<h1>Trendings</h1>
			<TrendingsSelect />
			<CardsContainer />
		</div>
	)
}

export default Trendings
