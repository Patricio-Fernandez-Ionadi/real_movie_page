import React, { useState, useRef } from "react"
import { makeStyles } from "@mui/styles"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

import { transition, color, sizes } from "../constant"
import { MovieCard } from "."

const { cardHeight, cardWidth, marginSides } = sizes.cards
const useStyles = makeStyles({
	sliderContainer: {
		width: "100%",
		// height: `${cardHeight + 48}px`,
		overflow: "hidden",
		position: "relative",
	},
	slider: {
		display: "flex",
		height: `${cardHeight}px`,
		position: "relative",
		transition: transition,
		left: (sliderPosition) => `-${sliderPosition}px`,
	},
	sliderButtons: {
		position: "absolute",
		bottom: "150px",
		width: "100%",
		transform: "translateY(50%)",
		display: "flex",
		justifyContent: "space-between",
		padding: "5px",
	},
	titleCss: {
		color: color.white,
	},
	prevBtn: {
		transform: "rotateY(180deg)",
	},
	sliderBtn: {
		width: "30px",
		height: "30px",
		color: color.white,
		background: "transparent",
		border: "1px solid #ccc",
		borderRadius: "50%",
		outline: "none",
		transition: transition,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		"&:hover": {
			background: "rgba(255,255,255,.5)",
		},
	},
})
export const Slider = ({ data, title }) => {
	const [sliderPosition, setSliderPosition] = useState(0)
	const sliding = useRef()
	const { current: slideReference } = sliding

	const {
		slider,
		sliderButtons,
		sliderContainer,
		titleCss,
		prevBtn,
		sliderBtn,
	} = useStyles(sliderPosition)

	const handleSliderMovement = ({ target }) => {
		let spaceForCards = window.innerWidth - 60
		let cardsToRender = Math.floor(spaceForCards / cardWidth)
		let spaceToMove =
			cardsToRender * cardWidth + cardsToRender * (marginSides * 2)
		let maxSliderSize = slideReference.scrollWidth - spaceForCards

		switch (
			target.name ||
			target.parentElement.parentElement.name ||
			target.parentElement.name
		) {
			case "btn-next":
				setSliderPosition((prev) => {
					let posToReach = (prev += spaceToMove)

					return maxSliderSize >= posToReach
						? (prev = posToReach)
						: (prev = maxSliderSize)
				})
				break
			case "btn-prev": {
				setSliderPosition((prev) => {
					let posToReach = (prev -= spaceToMove)

					return posToReach >= 0 ? (prev = posToReach) : (prev = 0)
				})
				break
			}
			default:
				console.log("nada que hacer (slider)")
		}
	}

	return (
		<div className={sliderContainer}>
			<div>
				<p className={titleCss}>
					{title ||
						'"title" prop can be defined to especify a title for this slider'}
				</p>
			</div>
			<div className={slider} ref={sliding}>
				{data?.results.map((_) => {
					return <MovieCard key={_.id} data={_} />
				})}
			</div>
			<div className={sliderButtons}>
				<button
					onClick={handleSliderMovement}
					className={`${prevBtn} ${sliderBtn}`}
					name='btn-prev'
				>
					<NavigateNextIcon />
				</button>
				<button
					onClick={handleSliderMovement}
					className={sliderBtn}
					name='btn-next'
				>
					<NavigateNextIcon />
				</button>
			</div>
		</div>
	)
}
