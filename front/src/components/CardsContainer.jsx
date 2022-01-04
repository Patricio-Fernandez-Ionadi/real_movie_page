import { makeStyles } from "@mui/styles"
import React from "react"
import { useTrendingsContext } from "../context"
import { MovieCard } from "./MovieCard"

const useStyles = makeStyles({
	cards_container: {
		display: "flex",
		flexWrap: "wrap",
		width: "100%",
		justifyContent: "center",
		gap: "10px",
	},
})

export const CardsContainer = () => {
	const { trendings } = useTrendingsContext()
	const classes = useStyles()

	return (
		<div className={classes.cards_container}>
			{trendings.results.map((_) => (
				<MovieCard key={_.id} data={_} />
			))}
		</div>
	)
}
