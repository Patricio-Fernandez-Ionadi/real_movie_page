import React from "react"
import { environment } from "../privateKeys"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(({ theme }) => ({
	container: {
		width: "100%",
		minHeight: "80vh",
		maxHeight: "80bh",
		backgroundImage: ({ backdrop_path }) =>
			`url('${environment.IMAGE_URI}${backdrop_path}')`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		display: "flex",
		position: "relative",
		zIndex: 0,
	},
	sombreado: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		background: "rgba(0,0,0,.6)",
		zIndex: "1",
	},
	portada: {
		zIndex: 2,
		width: "30%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	overview: {
		zIndex: 2,
		width: "70%",
	},
}))

const TvDetailComponent = ({ tvshow }) => {
	const classes = useStyles(tvshow)
	return (
		<div className={classes.container}>
			<div className={classes.sombreado}></div>
			<div className={classes.portada}>
				<img
					style={{ maxWidth: "70%" }}
					src={`${environment.IMAGE_URI}${tvshow.poster_path}`}
					alt={`${tvshow.first_air_date ? "Tv Show" : "tvshow"} poster`}
				/>
			</div>
			<div>
				<p>
					{tvshow.original_name} - {tvshow.id}
				</p>
			</div>
		</div>
	)
}

export default TvDetailComponent
