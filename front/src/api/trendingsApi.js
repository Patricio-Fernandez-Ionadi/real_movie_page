import axios from "axios"

export const trendingsApi = axios.create({
	baseURL: "http://localhost:3001/trendings",
})
