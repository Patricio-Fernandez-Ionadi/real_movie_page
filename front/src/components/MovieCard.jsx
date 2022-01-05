import React from "react"
import { Link } from "react-router-dom"

import { makeStyles } from "@mui/styles"

import { environment } from "../privateKeys"
import { color, transition, mediumShadow, sizes } from "../constant"

const { light, medium, white } = color

const useStyles = makeStyles({
	card: {
		maxWidth: `${sizes.cards.cardWidth}px`,
		minWidth: `${sizes.cards.cardWidth}px`,
		height: `${sizes.cards.cardHeight}px`,
		position: "relative",
		border: "1px solid rgba(0,0,0,.2)",
		borderRadius: "3px",
		backgroundColor: medium,
		padding: "3px",
		margin: `0 ${sizes.cards.marginSides}px`,
		overflow: "hidden",
		transition: transition,
		"&:hover": {
			boxShadow: mediumShadow(light),
			"& img": {
				transform: "scale(1)",
			},
		},
	},
	img: {
		transform: "scale(1.1)",
		display: "block",
		objectFit: "cover",
		maxWidth: "100%",
		transition: transition,
	},
	card_title: {
		position: "absolute",
		bottom: "10px",
		right: "50%",
		transform: "translateX(50%)",
		background: "rgba(0,0,0,.5 )",
		color: white,
		textAlign: "center",
		borderRadius: "3px",
	},
})

export const MovieCard = ({ data }) => {
	const classes = useStyles()
	return (
		<Link to={`/${data.media_type}/${data.id}`}>
			<div className={classes.card}>
				<img
					className={classes.img}
					src={`${environment.IMAGE_URI}${data.poster_path}`}
					alt={`some`}
				/>
				<p className={classes.card_title}>
					{data.original_title || data.original_name}
				</p>
			</div>
		</Link>
	)
}
