import React from "react"
import { makeStyles } from "@mui/styles"
import { color, transition } from "../../constant"

const useStyles = makeStyles({
	input: {
		display: "block",
		width: "100%",
		height: "30px",
		outline: "none",
		border: "none",
		margin: "5px 0",
		background: "none",
		borderBottom: `1px solid ${color.medium}`,
		borderRadius: "3px 3px 0 0",
		transition: transition,
		"&:focus": {
			background: "rgba(255,255,255,.5)",
		},
		"&:hover": {
			background: "rgba(255,255,255,.5)",
		},
		"&:active": {
			background: "rgba(255,255,255,1)",
		},
	},
})

export const FormInput = ({ type, placeholder, name }) => {
	const { input } = useStyles()
	return (
		<input
			name={name}
			className={input}
			type={type}
			placeholder={placeholder}
		/>
	)
}
