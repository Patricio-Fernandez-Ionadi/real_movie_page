import React from "react"

import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined"
import { makeStyles } from "@mui/styles"

import { color } from "../constant"
import { useTrendingsContext } from "../context"

const { btn, btnHover } = color
const useStyles = makeStyles({
	container: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "15px 0",
	},
	box: {
		width: "100%",
		maxWidth: "800px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
	},
	btn: {
		outline: "none",
		width: "60px",
		height: "25px",
		borderRadius: "13px",
		border: "none",
		backgroundColor: btn,
		color: "#fff",
		"&:hover": {
			backgroundColor: btnHover,
		},
	},
	prev: {
		transform: "rotateY(180deg)",
	},
})

export const PaginationButtons = () => {
	const { prev, container, box, btn } = useStyles()
	const { setPage, trendings } = useTrendingsContext()

	const handlePagination = ({ target }) => {
		switch (target.name) {
			case "prev":
				return setPage(trendings.page - 1)
			case "next":
				return setPage(trendings.page + 1)
			default:
				console.log("nada que hacer (pagination)")
		}
	}

	return (
		<div className={container}>
			<div className={box}>
				<button onClick={handlePagination} name='prev' className={btn}>
					<NavigateNextOutlinedIcon className={prev} />
				</button>

				<button onClick={handlePagination} name='next' className={btn}>
					<NavigateNextOutlinedIcon />
				</button>
			</div>
		</div>
	)
}
