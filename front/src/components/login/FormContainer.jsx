import { makeStyles } from "@mui/styles"
import React, { useState } from "react"
import { color } from "../../constant"

const useStyles = makeStyles({
	container: {
		width: "100%",
		height: "400px",
		marginTop: "30px",
		marginBottom: "10px",
	},
	background: {
		width: "500px",
		height: "380px",
		backgroundColor: color.darken,
		margin: "auto",
		borderRadius: "25px",
		display: "flex",
		position: "relative",
		boxShadow: "5px 5px 8px 0 #000",
	},
	overlay: {
		width: "250px",
		height: "400px",
		borderRadius: "25px",
		backgroundImage: `url('https://p4.wallpaperbetter.com/wallpaper/847/335/611/forest-mountains-sunset-cool-weather-minimalism-wallpaper-preview.jpg')`,
		position: "absolute",
		border: `1px solid ${color.white}`,
		left: (toggle) => (toggle ? 0 : "50%"),
		transition: "left .1s linear",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		fontSize: "3em",
		top: "-10px",
	},
	btn: {
		outline: "none",
		border: `1px solid ${color.medium}`,
		padding: "5px",
		height: "30px",
		borderRadius: "3px",
		backgroundColor: color.btn,
		"&:hover": {
			backgroundColor: color.btnHover,
		},
	},
	formContainer: {
		width: "250px",
		height: "400px",
		padding: "20px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	child1: {
		borderRadius: "25px 0 0 25px",
	},
	child2: {
		borderRadius: "0 25px 25px 0",
	},
})

export const FormContainer = ({ children }) => {
	const [toggle, change] = useState(true)
	const { container, background, overlay, btn, child1, child2, formContainer } =
		useStyles(toggle)
	// --------------------------------------------------
	let today = new Date()
	let date =
		today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()
	let time = today.getHours() + ":" + today.getMinutes()
	setInterval(() => {
		time = today.getHours() + ":" + today.getMinutes()
	}, 60000)
	// --------------------------------------------------

	const toggleOverlay = () => {
		change(!toggle)
	}
	return (
		<div className={container}>
			<div className={background}>
				<div className={`${child1} ${formContainer}`}>
					{children[0]}
					<button className={btn} type='button' onClick={toggleOverlay}>
						Ya tengo una cuenta
					</button>
				</div>
				<div className={`${child2} ${formContainer}`}>
					{children[1]}
					<button className={btn} type='button' onClick={toggleOverlay}>
						Crear una cuenta
					</button>
				</div>
				<div className={overlay}>
					<p>{date}</p>
					<p>{time}</p>
				</div>
			</div>
		</div>
	)
}
