import React from "react"
import { Link } from "react-router-dom"

const Navigation = () => {
	return (
		<nav
			style={{ display: "flex", width: "100%", justifyContent: "space-around" }}
		>
			<Link to={"/"}>Home</Link>
			<div>
				<span>categorias</span>
				<ul>
					<li>caregoria1</li>
					<li>caregoria2</li>
					<li>caregoria3</li>
					<li>caregoria4</li>
				</ul>
			</div>
			<Link to={"/trendings"}>Trendings</Link>
		</nav>
	)
}

export default Navigation
