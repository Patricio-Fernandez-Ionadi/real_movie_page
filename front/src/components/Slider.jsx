import React, { useState, useRef } from "react"

import { makeStyles } from "@mui/styles"

import { transition, color, sizes } from "../constant"
import { MovieCard, SliderButtons } from "."

const { cardHeight, cardWidth, marginSides } = sizes.cards
const useStyles = makeStyles({
	sliderContainer: {
		width: "100%",
		overflow: "hidden",
		position: "relative",
		padding: "10px 0",
	},
	slider: {
		display: "flex",
		height: `${cardHeight}px`,
		position: "relative",
		transition: transition,
		left: (sliderPosition) => `-${sliderPosition}px`,
	},
	titleCss: {
		color: color.white,
		fontSize: "24px",
		padding: "10px",
	},
})
export const Slider = ({ data, title }) => {
	const [sliderPosition, setSliderPosition] = useState(0)
	const sliding = useRef()
	const { current: slideReference } = sliding
	const { slider, sliderContainer, titleCss } = useStyles(sliderPosition)

	const handleSliderMovement = ({ target }) => {
		let spaceForCards = window.innerWidth - 60
		let cardsToRender = Math.floor(spaceForCards / cardWidth)
		let spaceToMove =
			cardsToRender * cardWidth + cardsToRender * (marginSides * 2)
		let maxSliderSize = slideReference?.scrollWidth - spaceForCards

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

	if (data) {
		const { media_type } = data
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
						return <MovieCard key={_.id} data={{ ..._, media_type }} />
					})}
				</div>
				<SliderButtons onevent={handleSliderMovement} />
			</div>
		)
	} else {
		return (
			<>
				<h1>LOADING...</h1>
			</>
		)
	}
}
