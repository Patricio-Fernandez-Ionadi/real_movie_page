import React from "react"
import { useTrendingsContext } from "../context"
export const PaginationButtons = () => {
	const { setPage, trendings } = useTrendingsContext()
	const handlePagination = ({ target }) => {
		switch (target.name) {
			case "prev":
				return setPage(trendings.page - 1)
			case "next":
				return setPage(trendings.page + 1)
			default:
				console.log("nada que hacer (pagination)")
		}
	}
	return (
		<div>
			<button onClick={handlePagination} name='prev'>
				prev
			</button>
			<button onClick={handlePagination} name='next'>
				next
			</button>
		</div>
	)
}
