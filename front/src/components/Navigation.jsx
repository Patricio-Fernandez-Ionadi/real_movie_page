import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
	searchBar: {
		width: "100%",
		height: "60px",
		background: "rgba(0,0,0,.3)",
		display: "flex",
		justifyContent: "space-around",
	},
	navigation: {
		display: "flex",
		width: "100%",
		height: "100px",
		justifyContent: "space-around",
	},
	navLink: {
		display: "block",
		width: "100%",
		backgroundColor: "blue",
		"&:hover": {
			backgroundColor: "#09f",
		},
	},
	carouselComponent: {
		width: "100%",
		height: "150px",
		background: "rgba(0,148,247, .8)",
	},
}))

const Navigation = () => {
	const s = useStyles()
	return (
		<header>
			<div className={s.searchBar}>
				<span>logo</span>
				<input type='text' placeholder='¿Qué estas buscando?' />
			</div>
			<nav className={s.navigation}>
				<Link to={"/"} className={s.navLink}>
					<div>
						<p>Inicio</p>
					</div>
				</Link>
				|
				<Link to={"/"} className={s.navLink}>
					<div>
						<p>Peliculas</p>
					</div>
				</Link>
				|
				<Link to={"/"} className={s.navLink}>
					<div>
						<p>Series</p>
					</div>
				</Link>
				|
				<Link to={"/"} className={s.navLink}>
					<div>
						<p>Navidad</p>
					</div>
				</Link>
				|
				<Link to={"/trendings"} className={s.navLink}>
					<div>
						<p>Tendencias</p>
					</div>
				</Link>
			</nav>
			<div className={s.carouselComponent}>
				<p>Carousel</p>
			</div>
		</header>
	)
}

export default Navigation
