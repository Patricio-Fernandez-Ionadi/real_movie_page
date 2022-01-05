const trendingsRoute = require("express").Router()
const trendingsByTerms = require("../controllers/trendings.controller")

trendingsRoute.get("/:media_type/:time_window", trendingsByTerms)

module.exports = trendingsRoute
