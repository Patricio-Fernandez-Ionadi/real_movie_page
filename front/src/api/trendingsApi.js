import axios from "axios"

const trendingsApi = axios.create({
	baseURL: "https://api.themoviedb.org/3/trending",
	params: {
		api_key: "8dc24acaab70aa4c4fa423a992180f59",
	},
})
export default trendingsApi
