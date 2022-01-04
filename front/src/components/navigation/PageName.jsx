import React from "react"
import { makeStyles } from "@mui/styles"

import { transition, color } from "../../constant"
import { useMenuContext } from "../../context"

const { btn } = color

const useStyles = makeStyles({
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
})

export const PageName = () => {
	const { isOpen } = useMenuContext()
	const { pageName } = useStyles(isOpen)

	return (
		<div className={pageName}>
			<p>Real Movie Page</p>
		</div>
	)
}
