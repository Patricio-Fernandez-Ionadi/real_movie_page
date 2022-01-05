const tvRoute = require("express").Router()

const { detailTv, popularTv } = require("../controllers/tv.controller")

tvRoute.get("/popular", popularTv)

tvRoute.get("/:tvId", detailTv)

module.exports = tvRoute
