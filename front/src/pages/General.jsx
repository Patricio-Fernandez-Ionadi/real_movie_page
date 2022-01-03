import React from "react"
import { Link, Outlet } from "react-router-dom"

export const General = () => {
	return (
		<>
			<Link to='/'>Inicio</Link>
			<Link to={`/trendings`}>Trendings</Link>
			<Outlet />
		</>
	)
}
