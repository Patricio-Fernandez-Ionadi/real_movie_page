import { makeStyles } from "@mui/styles"
import React from "react"
import { Link, Outlet } from "react-router-dom"

const useStyles = makeStyles({
	container: {
		backgroundColor: "#053742",
		minHeight: "100vh",
	},
})

export const General = () => {
	const { container } = useStyles()
	return (
		<div className={container}>
			<Link to='/'>Inicio</Link>
			<Link to={`/trendings`}>Trendings</Link>
			<Outlet />
		</div>
	)
}
