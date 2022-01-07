import axios from "axios"
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { environment } from "../privateKeys"
export const MovieDetail = () => {
	const { pathname } = useLocation()
	let media_type = pathname.split("/")[1]
	let id = pathname.split("/")[2]

	const [movie, setMovie] = useState({})

	useEffect(() => {
		// setInterval(() => {
		if (media_type === "movie") {
			axios
				.get(`http://localhost:3001/movie/${id}`)
				.then((res) => setMovie(res.data))
		}
	}, [id, media_type])

	if (!movie) return <h1>LOADING...</h1>

	console.log(movie)
	return (
		<div>
			<h1>Detail</h1>
			<div>
				<img
					style={{ maxWidth: "100%" }}
					src={`${environment.IMAGE_URI}${movie.backdrop_path}`}
					alt={movie.original_title}
				/>
			</div>
		</div>
	)
}
