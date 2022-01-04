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
export const navigation = {
	contrainSize: 60,
	extendedSize: 250,
	extendedWidth: `250px`,
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
		id: 1,
		name: "Trendings",
		path: "/trendings",
		icon: <LoginIcon />,
	},
]
