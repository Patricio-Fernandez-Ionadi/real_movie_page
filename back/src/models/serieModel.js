const {Schema, model} = require('mongoose')

const serieSchema = new Schema({
	backdrop_path: String,
	created_by: [
		{
			id: Number,
			credit_id: String,
			name: String,
			gender: Number,
			profile_path: String
		}
	],
	episode_run_time: [
		Number
	],
	first_air_date: String,
	genres: [
		{
			id: Number,
			name: String
		}
	],
	homepage:String,
	id: Number,
	in_production: Boolean,
	languages: [
		String
	],
	last_air_date: String,
	last_episode_to_air: {
		air_date: String,
		episode_number: Number,
		id: Number,
		name: String,
		overview: String,
		production_code: String,
		season_number: Number,
		still_path: String,
		vote_average: Number,
		vote_count: Number
	},
	name: String,
	next_episode_to_air: String,
	networks: [
		{
			name: String,
			id: Number,
			logo_path: String,
			origin_country: String
		}
	],
	number_of_episodes: Number,
	number_of_seasons: Number,
	origin_country: [
		String
	],
	original_language: String,
	original_name: String,
	overview: String,
	popularity: Number,
	poster_path: String,
	production_companies: [
		{
			id: Number,
			logo_path: String,
			name: String,
			origin_country: String
		}
	],
	production_countries: [
		{
			iso_3166_1: String,
			name: String
		}
	],
	seasons: [
		{
			air_date: String,
			episode_count: Number,
			id: Number,
			name: String,
			overview: String,
			poster_path: String,
			season_number: Number
		}
	],
	spoken_languages: [
		{
			english_name: String,
			iso_639_1: String,
			name: String
		}
	],
	status: String,
	tagline: String,
	type: String,
	vote_average: Number,
	vote_count: Number
})

const Serie = model('series', serieSchema)

module.exports = Serie