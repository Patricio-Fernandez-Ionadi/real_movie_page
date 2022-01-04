import React from "react"

import { Link } from "react-router-dom"
import { makeStyles } from "@mui/styles"
import { environment } from "../privateKeys"

const useStyles = makeStyles({
	card: {
		maxWidth: "200px",
		maxHeight: "350px",
		position: "relative",
		border: "1px solid rgba(0,0,0,.2)",
		borderRadius: "3px",
		padding: "3px",
		overflow: "hidden",
		"&:hover": {
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
		transition: "all .2s ease",
	},
	card_title: {
		position: "absolute",
		bottom: "10px",
		right: "50%",
		transform: "translateX(50%)",
		background: "rgba(0,0,0,.5 )",
		color: "#fff",
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
