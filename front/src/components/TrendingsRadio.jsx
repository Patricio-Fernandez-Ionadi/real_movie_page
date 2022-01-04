import React from "react"
import { useTrendingsContext } from "../context"
export const TrendingsRadio = () => {
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
		<>
			<label>
				Hoy
				<input
					type='radio'
					name='time-window'
					value='day'
					defaultChecked
					onChange={handleChanges}
				/>
			</label>
			<label>
				Esta Semana
				<input
					type='radio'
					name='time-window'
					value='week'
					onChange={handleChanges}
				/>
			</label>
			<label>
				Todos
				<input
					type='radio'
					name='media-type'
					value='all'
					defaultChecked
					onChange={handleChanges}
				/>
			</label>
			<label>
				Peliculas
				<input
					type='radio'
					name='media-type'
					value='movie'
					onChange={handleChanges}
				/>
			</label>
			<label>
				Series
				<input
					type='radio'
					name='media-type'
					value='tv'
					onChange={handleChanges}
				/>
			</label>
		</>
	)
}
