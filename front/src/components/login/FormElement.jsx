import React from "react"
import { makeStyles } from "@mui/styles"
import { color } from "../../constant"

const useStyles = makeStyles({
	formElement: {
		width: "100%",
		height: "300px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
		marginBottom: "5px",
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
})

export const FormElement = ({ children, buttonlabel, onevent }) => {
	const { formElement, btn } = useStyles()
	return (
		<form className={formElement} onSubmit={onevent}>
			{children}
			<button className={btn} type='submit'>
				{buttonlabel}
			</button>
		</form>
	)
}
