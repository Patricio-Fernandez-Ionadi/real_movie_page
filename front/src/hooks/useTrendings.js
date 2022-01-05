import { useEffect, useState } from "react"
import { trendingsApi } from "../api"

export const useTrendings = ({ media_type, time_window, page }) => {
	const [trendings, setTrendings] = useState()

	useEffect(() => {
		trendingsApi
			.get(`/${media_type}/${time_window}?page=${page}`)
			.then((res) => setTrendings(res.data))
	}, [media_type, time_window, page])

	return trendings
}
