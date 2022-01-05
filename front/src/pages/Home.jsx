import { usePopularMovies, usePopularTvs } from "../hooks"
import { Slider } from "../components"

export const Home = () => {
	const popularMovies = usePopularMovies()
	const popularTvs = usePopularTvs()

	return (
		<div>
			<Slider data={popularMovies} title='Peliculas populares' />
			<Slider data={popularTvs} />
		</div>
	)
}
