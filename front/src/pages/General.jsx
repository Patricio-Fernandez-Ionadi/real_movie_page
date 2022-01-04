import React from "react"
import { Outlet } from "react-router-dom"

import { makeStyles } from "@mui/styles"

import { useMenuContext } from "../context"
import { color } from "../constant"
import { Navigation } from "../components"

const { darkBlue } = color
const useStyles = makeStyles({
	container: {
		backgroundColor: darkBlue,
		minHeight: "100vh",
		paddingLeft: "60px",
	},
	blur: {
		filter: "blur(8px)",
	},
})

export const General = () => {
	const { container, blur } = useStyles()

	const { isOpen } = useMenuContext()

	return (
		<div className={container}>
			<Navigation />
			<div className={isOpen ? blur : ""}>
				<Outlet />
			</div>
		</div>
	)
}
