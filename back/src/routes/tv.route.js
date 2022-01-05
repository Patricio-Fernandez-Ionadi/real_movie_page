const tvRoute = require("express").Router()

const detailTv = require("../controllers/tv.controller")

tvRoute.get("/:tvId", detailTv)

module.exports = tvRoute
