import HomeIcon from "@mui/icons-material/Home"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import LoginIcon from "@mui/icons-material/Login"

export const color = {
	darkBlue: "#0A1929",
	darken: "#053742",
	medium: "#39A2DB",
	light: "#A2DBFA",
	ligther: "#E8F0F2",
	btn: "#009578",
	btnHover: "#006B56",
	white: "#fff",
}

export const transition = "all .2s ease"

export const mediumShadow = (col) => `0 0 10px ${col}`
export const tinyShadow = (col) => `0 0 4px ${col}`

export const openedMenu = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
export const closedMenu = "polygon(0 0, 60px 0, 60px 100%, 0 100%)"

export const routes = [
	{
		id: 0,
		name: "Inicio",
		path: "/",
		icon: <HomeIcon />,
	},
	{
		id: 1,
		name: "Trendings",
		path: "/trendings",
		icon: <TrendingUpIcon />,
	},
	{
		id: 2,
		name: "Iniciar sesión",
		path: "/login",
		icon: <LoginIcon />,
	},
]

export const sizes = {
	cards: {
		cardWidth: 200,
		cardHeight: 300,
		marginSides: 5,
	},
	navigation: {
		expanded: 250,
		contracted: 60,
	},
}
