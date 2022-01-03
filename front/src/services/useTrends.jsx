import axios from "axios"
import { useEffect, useState } from "react"
import { environment } from "../privateKeys"

const useTrends = ({ media_type, time_window, page }) => {
	const [trendings, setTrendings] = useState()

	useEffect(() => {
		axios
			.get(
				`${environment.API_URI}/trending/${media_type}/${time_window}?page=${page}&api_key=${environment.API_KEY}`
			)
			.then((res) => {
				setTrendings(res.data)
			})
	}, [media_type, time_window, page])

	return trendings
}

export default useTrends
