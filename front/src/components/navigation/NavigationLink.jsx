import { makeStyles } from "@mui/styles"
import React from "react"
import { Link } from "react-router-dom"

import { color, navigation } from "../../constant"
import { useMenuContext } from "../../context"

const { contrainSize, extendedWidth } = navigation
const { medium, light } = color

const useStyles = makeStyles({
	menuLink: {
		display: "block",
		textDecoration: "none",
		width: extendedWidth,
		// backgroundColor: "red",
		zIndex: 900,
	},
	listItem: {
		borderBottom: "1px solid #ccc",
		display: "flex",
		padding: "5px 0",
	},
	menuIcon: {
		alignItems: "center",
		color: medium,
		display: "flex",
		justifyContent: "center",
		width: `${contrainSize + 1}px`,
		borderRight: `1px solid ${medium}`,
	},
	iconLabel: {
		width: "150px",
		color: medium,
		padding: "0 10px",
	},
	active: {
		backgroundColor: light,
	},
})

export const NavigationLink = ({ route }) => {
	const { menuLink, listItem, menuIcon, iconLabel, active } = useStyles()
	const { setActiveRoute, activeRoute } = useMenuContext()

	const onclick = (e) => {
		setActiveRoute(route.id)
	}

	let activeLink = activeRoute === route.id

	return (
		<Link to={`${route.path}`} className={menuLink} onClick={onclick}>
			<li className={`${listItem} ${activeLink && active}`}>
				<div className={menuIcon}>{route.icon}</div>
				<p className={iconLabel}>{route.name}</p>
			</li>
		</Link>
	)
}
