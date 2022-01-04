import React from "react"
import { Link } from "react-router-dom"

import LunchDiningIcon from "@mui/icons-material/LunchDining"
import CloseIcon from "@mui/icons-material/Close"
import HomeIcon from "@mui/icons-material/Home"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import LoginIcon from "@mui/icons-material/Login"
import { makeStyles } from "@mui/styles"

import { useMenuContext } from "../context"
import {
	transition,
	color,
	openedMenu,
	closedMenu,
	mediumShadow,
	tinyShadow,
} from "../constant"

const { medium, darken, btn } = color

const contrainSize = 60
const contrainWidth = `${contrainSize}px`
const extendedSize = 250
const extendedWidth = `${extendedSize}px`

const useStyles = makeStyles({
	container: {
		backgroundColor: darken,
		clipPath: (isOpen) => (isOpen ? openedMenu : closedMenu),
		flexDirection: "column",
		height: "100vh",
		left: 0,
		position: "fixed",
		top: 0,
		transition: transition,
		width: extendedWidth,
		zIndex: 999,
	},
	overlay: {
		backgroundColor: "rgba(0,0,0,.6)",
		height: "100vh",
		position: "fixed",
		width: "100%",
		zIndex: 998,
	},
	menuBtn: {
		backgroundColor: "transparent",
		border: `1px solid ${medium}`,
		boxShadow: tinyShadow(medium),
		color: medium,
		height: "30px",
		outline: "none",
		position: "relative",
		right: (isOpen) => (isOpen ? `-${extendedSize - 50}px` : "-10px"),
		top: "5px",
		transition: transition,
		width: "40px",
		"&:hover": {
			boxShadow: () => mediumShadow(medium),
		},
	},
	pageName: {
		fontWeight: "bold",
		left: "15px",
		fontSize: "22px",
		opacity: (isOpen) => !isOpen && 0,
		position: "absolute",
		top: "4px",
		transition: transition,
		color: btn,
	},
	listContainer: {
		display: "flex",
		flexDirection: " column",
		listStyle: "none",
		margin: 0,
		paddingTop: "10px",
	},
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

export const Navigation = () => {
	const { handleMenu, isOpen, closeMenu } = useMenuContext()

	const {
		container,
		overlay,
		menuBtn,
		pageName,
		menuLink,
		listContainer,
		listItem,
		menuIcon,
		iconLabel,
	} = useStyles(isOpen)

	return (
		<>
			<nav className={container}>
				<div className={pageName}>
					<p>Real Movie Page</p>
				</div>

				<button onClick={handleMenu} className={menuBtn}>
					{isOpen ? <CloseIcon /> : <LunchDiningIcon />}
				</button>

				<ul onClick={closeMenu} className={listContainer}>
					<hr />
					<Link to='/' className={menuLink}>
						<li className={listItem}>
							<div className={menuIcon}>
								<HomeIcon />
							</div>
							<p className={iconLabel}>Inicio</p>
						</li>
					</Link>

					<Link to={`/trendings`} className={menuLink}>
						<li className={listItem}>
							<div className={menuIcon}>
								<TrendingUpIcon />
							</div>
							<p className={iconLabel}>Trendings</p>
						</li>
					</Link>

					<Link to={`/trendings`} className={menuLink}>
						<li className={listItem}>
							<div className={menuIcon}>
								<LoginIcon />
							</div>
							<p className={iconLabel}>Iniciar Sesión</p>
						</li>
					</Link>
				</ul>
			</nav>

			<div className={isOpen ? overlay : ""} onClick={handleMenu}></div>
		</>
	)
}
