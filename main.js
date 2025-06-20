const express = require("express")
const indexRoute = require("./routes/indexRoute")
const galleryRoute = require("./routes/galleryRoute")
const aboutusRouter = require("./routes/aboutusRoute")
const app = express()
const PORT = process.env.PORT || 8080

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.use(express.static("public"))

app.use("/", indexRoute)
app.use("/gallery", galleryRoute)
app.use("/aboutus", aboutusRouter)

app.listen(PORT, ()=> {
  console.log(`The server is running on port ${PORT}`)
})