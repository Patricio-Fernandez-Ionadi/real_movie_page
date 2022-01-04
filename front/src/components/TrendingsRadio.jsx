import { makeStyles } from "@mui/styles"
import React from "react"
import { useTrendingsContext } from "../context"
import { color } from "../constant"

const { btn, btnHover } = color

const useStyles = makeStyles({
	container: {
		width: "100%",
		height: "60px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	box: {
		backgroundColor: "red",
		display: "inline-flex",
		overflow: "hidden",
		borderRadius: "15px",
		boxShadow: "0 0 5px rgba(0,0,0,.25)",
		margin: "0 20px",
	},
	radio_label: {
		padding: "8px 14px",
		fontSize: "14px",
		fontFamily: "sans-serif",
		color: "#fff",
		backgroundColor: btn,
		cursor: "pointer",
		transition: "backgorund .2s ease",
		"&:not(:last-of-type)": {
			borderRight: `1px solid ${btnHover}`,
		},
	},
	radio_input: {
		display: "none",
		"&:checked + $radio_label": {
			backgroundColor: btnHover,
		},
	},
})

export const TrendingsRadio = () => {
	const { radio_input, radio_label, box, container } = useStyles()
	const { setTimeWindow, setMediaType } = useTrendingsContext()

	const handleChanges = ({ target }) => {
		switch (target.name) {
			case "time-window":
				return setTimeWindow(target.value)
			case "media-type":
				return setMediaType(target.value)
			default:
				console.log("nada que hacer (radio)")
		}
	}

	return (
		<div className={container}>
			<div className={box}>
				<input
					className={radio_input}
					defaultChecked
					id='day'
					name='time-window'
					onChange={handleChanges}
					type='radio'
					value='day'
				/>
				<label htmlFor='day' className={radio_label}>
					Hoy
				</label>

				<input
					className={radio_input}
					id='week'
					name='time-window'
					onChange={handleChanges}
					type='radio'
					value='week'
				/>
				<label htmlFor='week' className={radio_label}>
					Esta semana
				</label>
			</div>

			<div className={box}>
				<input
					className={radio_input}
					defaultChecked
					id='all'
					name='media-type'
					onChange={handleChanges}
					type='radio'
					value='all'
				/>
				<label htmlFor='all' className={radio_label}>
					Todos
				</label>

				<input
					className={radio_input}
					id='movie'
					name='media-type'
					onChange={handleChanges}
					type='radio'
					value='movie'
				/>
				<label htmlFor='movie' className={radio_label}>
					Peliculas
				</label>

				<input
					className={radio_input}
					id='tv'
					name='media-type'
					onChange={handleChanges}
					type='radio'
					value='tv'
				/>
				<label htmlFor='tv' className={radio_label}>
					Series
				</label>
			</div>
		</div>
	)
}
