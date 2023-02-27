import express from "express"

const app = express()

app.set("views", __dirname + "/views")
app.set("view engine", "pug")

app.get("/", (req, res) => {
  res.render("index")
}),
  app.listen(8080)
