import React from "react"
import { makeStyles } from "@mui/styles"
import LunchDiningIcon from "@mui/icons-material/LunchDining"
import CloseIcon from "@mui/icons-material/Close"

import { useMenuContext } from "../../context"
import {
	color,
	tinyShadow,
	transition,
	mediumShadow,
	sizes,
} from "../../constant"

const { extended } = sizes.navigation
const { medium } = color

const useStyles = makeStyles({
	menuBtn: {
		backgroundColor: "transparent",
		border: `1px solid ${medium}`,
		boxShadow: tinyShadow(medium),
		color: medium,
		height: "30px",
		outline: "none",
		position: "relative",
		right: (isOpen) => (isOpen ? `-${extended - 50}px` : "-10px"),
		top: "5px",
		transition: transition,
		width: "40px",
		"&:hover": {
			boxShadow: () => mediumShadow(medium),
		},
	},
})

export const MenuButton = () => {
	const { handleMenu, isOpen } = useMenuContext()
	const { menuBtn } = useStyles(isOpen)

	return (
		<button onClick={handleMenu} className={menuBtn}>
			{isOpen ? <CloseIcon /> : <LunchDiningIcon />}
		</button>
	)
}
