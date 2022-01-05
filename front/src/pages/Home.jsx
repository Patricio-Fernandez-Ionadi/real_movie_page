import { usePopularMovies, usePopularTvs } from "../hooks"
import { Slider } from "../components"

export const Home = () => {
	const popularMovies = usePopularMovies()
	const popularTvs = usePopularTvs()

	return (
		<div>
			<div>
				<h1>ULTIMO LANZAMIENTO</h1>
			</div>
			<Slider data={popularMovies} title='Peliculas Populares' />
			<Slider data={popularTvs} title='Series Populares' />
		</div>
	)
}
