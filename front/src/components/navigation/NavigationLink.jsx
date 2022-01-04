import { makeStyles } from "@mui/styles"
import React from "react"
import { Link } from "react-router-dom"

import { color, navigation } from "../../constant"

const { contrainSize, extendedWidth } = navigation
const { medium } = color

const useStyles = makeStyles({
	menuLink: {
		display: "block",
		textDecoration: "none",
		width: extendedWidth,
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
})

export const NavigationLink = ({ route }) => {
	const { menuLink, listItem, menuIcon, iconLabel } = useStyles()
	return (
		<Link to={`${route.path}`} className={menuLink}>
			<li className={listItem}>
				<div className={menuIcon}>{route.icon}</div>
				<p className={iconLabel}>{route.name}</p>
			</li>
		</Link>
	)
}
