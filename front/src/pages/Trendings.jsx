import React from "react"
import {
	CardsContainer,
	PaginationButtons,
	TrendingsRadio,
} from "../components"
import { useTrendingsContext } from "../context"

export const Trendings = () => {
	const { trendings } = useTrendingsContext()

	if (!trendings) return <></>

	return (
		<div>
			<h1>Trendings</h1>
			<TrendingsRadio />
			<PaginationButtons />
			<CardsContainer />
			<PaginationButtons />
		</div>
	)
}
