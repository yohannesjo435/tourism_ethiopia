const express = require("express")
const galleryRoute = express.Router()

galleryRoute.get("/", (req, res)=> {
  res.render("gallery")
})

module.exports = galleryRoute