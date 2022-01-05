import React from "react"

import { makeStyles } from "@mui/styles"

import { useMenuContext } from "../../context"
import {
	transition,
	color,
	sizes,
	openedMenu,
	closedMenu,
} from "../../constant"
import { NavigationList } from "./NavigationList"
import { MenuButton } from "./MenuButton"
import { PageName } from "./PageName"

const { darken } = color
const { expanded } = sizes.navigation

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
		width: `${expanded}px`,
		zIndex: 999,
	},
	overlay: {
		backgroundColor: "rgba(0,0,0,.6)",
		height: "100vh",
		position: "fixed",
		width: "100%",
		zIndex: 998,
	},
})

export const Navigation = () => {
	const { handleMenu, isOpen } = useMenuContext()
	const { container, overlay } = useStyles(isOpen)

	return (
		<>
			<nav className={container}>
				<PageName />
				<MenuButton />
				<NavigationList />
			</nav>

			<div className={isOpen ? overlay : ""} onClick={handleMenu}></div>
		</>
	)
}
