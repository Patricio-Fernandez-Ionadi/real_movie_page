import { useEffect, useState } from "react"

import { popularTvApi } from "../api"

export const usePopularTvs = () => {
	const [popular, setPopular] = useState()

	useEffect(() => {
		return popularTvApi
			.get("/")
			.then((res) => setPopular({ ...res.data, media_type: "tv" }))
	}, [])

	return popular
}
