import React from "react"
import { environment } from "../privateKeys"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
	container: {
		color: "#fff",
		width: "100%",
		minHeight: "50vh",
		maxHeight: "70vh",
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
	imgContainer: {
		width: "70%",
		display: "flex",
		justifyContent: "center",
	},
	poster: {
		width: "100%",
		maxWidth: "250px",
	},

	overview: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		zIndex: 2,
		width: "70%",
		// background: "red",
	},
	overviewTitle: {
		width: "100%",
		// background: "yellow",
	},
	overviewCalification: {
		// background: "red",
		padding: "10px",
		display: "flex",
		justifyContent: "center",
		alignItems: " center",
	},
}))

const TvDetailComponent = ({ tvshow }) => {
	const classes = useStyles(tvshow)
	console.log(tvshow)
	return (
		<div className={classes.container}>
			<div className={classes.sombreado}></div>

			<div className={classes.portada}>
				<div className={classes.imgContainer}>
					<img
						className={classes.poster}
						src={`${environment.IMAGE_URI}${tvshow.poster_path}`}
						alt={`${tvshow.first_air_date ? "Tv Show" : "tvshow"} poster`}
					/>
				</div>
			</div>

			<div className={classes.overview}>
				<h1 className={classes.overviewTitle}>
					{tvshow.name} | {tvshow.tagline}
				</h1>
				<small>
					seasons: {tvshow.seasons.length} |{" "}
					{tvshow.first_air_date.split("-")[0]}
				</small>

				<div>
					<h2>overview</h2>
					<p>{tvshow.overview}</p>

					<div className={classes.overviewCalification}>
						<span>
							popularity:{" "}
							{Math.ceil(tvshow.popularity / tvshow.vote_average) / 10}% |{" "}
							calification: {tvshow.vote_average} | votes: {tvshow.vote_count}
						</span>
					</div>

					<div>
						<p>Titulo original: {tvshow.original_name}</p>
						<p>
							Creador:{" "}
							{tvshow.created_by.map((each) => (
								<span> {each.name} </span>
							))}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TvDetailComponent
