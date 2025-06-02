const express = require("express")
const aboutusRouter = express.Router()

aboutusRouter.get("/", (req, res)=> {
  res.render("aboutus")
})

module.exports = aboutusRouter;