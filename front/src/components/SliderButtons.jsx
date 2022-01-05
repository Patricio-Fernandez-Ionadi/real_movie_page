import React from "react"

import { makeStyles } from "@mui/styles"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

import { color, sizes } from "../constant"

const useStyles = makeStyles({
	prevBtn: {
		left: "20px",
		transform: "translateY(50%) rotateY(180deg)",
	},
	nextBtn: {
		right: "20px",
		transform: "translateY(50%)",
	},
	sliderBtn: {
		position: "absolute",
		bottom: `${sizes.cards.cardHeight / 2}px`,
		outline: "none",
		width: "60px",
		height: "25px",
		borderRadius: "13px",
		border: "none",
		backgroundColor: color.btn,
		opacity: ".7",
		color: "#fff",
		zIndex: 999,
		"&:hover": {
			backgroundColor: color.btnHover,
		},
	},
})

export const SliderButtons = ({ onevent }) => {
	const { prevBtn, nextBtn, sliderBtn } = useStyles()
	return (
		<>
			<button
				onClick={onevent}
				className={`${prevBtn} ${sliderBtn}`}
				name='btn-prev'
			>
				<NavigateNextIcon />
			</button>
			<button
				onClick={onevent}
				className={`${nextBtn} ${sliderBtn}`}
				name='btn-next'
			>
				<NavigateNextIcon />
			</button>
		</>
	)
}
