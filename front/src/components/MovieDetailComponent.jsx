import React from "react"
import { environment } from "../privateKeys"

const MovieDetailComponent = ({ movie }) => {
	return (
		<div>
			<p>
				{movie.original_title} - {movie.id}
			</p>
			<figure>
				<img
					style={{ maxWidth: "100%" }}
					src={`${environment.IMAGE_URI}${movie.poster_path}`}
					alt={`${movie.first_air_date ? "Tv Show" : "Movie"} poster`}
				/>
				<img
					style={{ maxWidth: "100%" }}
					src={`${environment.IMAGE_URI}${movie.backdrop_path}`}
					alt='backdrop'
				/>
			</figure>
		</div>
	)
}

export default MovieDetailComponent
