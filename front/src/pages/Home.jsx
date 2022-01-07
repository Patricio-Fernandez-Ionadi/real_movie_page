import { usePopularMovies, usePopularTvs } from "../hooks"
import { Slider } from "../components"

// -----------------------------------------------------------------------

import { useEffect, useState } from "react"
import axios from "axios"
import { makeStyles } from "@mui/styles"

import { environment } from "../privateKeys"

const useStyles = makeStyles({
	hero: {
		width: "100%",
		height: "50vh",
		overflow: "hidden",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
	},
	image: {
		position: "absolute",
		top: "-50%",
		display: "block",
		objectFit: "cover",
		zIndex: 49,
	},
	overviewContent: {
		position: "relative",
		zIndex: 50,
	},
	explicit: {
		filter: "blur(10px)",
	},
})
// -----------------------------------------------------------------------

export const Home = () => {
	const popularMovies = usePopularMovies()
	const popularTvs = usePopularTvs()
	// -----------------------------------------------------------------------
	const { image, hero, overviewContent, explicit } = useStyles()
	const [latest, setLatest] = useState({ id: null })
	// let oneDayOnMs = 864e7

	useEffect(() => {
		// setInterval(() => {
		axios
			.get(`http://localhost:3001/movie/latest`)
			.then((res) => setLatest(res.data[0]))
		// }, oneDayOnMs)
	}, [])

	// -----------------------------------------------------------------------

	return (
		<div>
			{!latest || !latest.poster_path ? (
				<h1>LOADING...</h1>
			) : (
				<div>
					<h1>ULTIMO LANZAMIENTO</h1>
					<p style={{ color: "#fff" }}>
						la informacion suele llegar sin .poster_path
					</p>
					<p style={{ color: "red" }}>ver o cambiar</p>
					<div className={hero}>
						<img
							className={`${image} ${latest.adult && explicit}`}
							src={`${environment.IMAGE_URI}${latest.poster_path || "#"}`}
							alt={`${latest.title}`}
						/>
						<div className={overviewContent}>
							<h4>{latest.title}</h4>
							<p>{latest.overview}</p>
						</div>
					</div>
				</div>
			)}
			<Slider data={popularMovies} title='Peliculas Populares' />
			<Slider data={popularTvs} title='Series Populares' />
		</div>
	)
}
