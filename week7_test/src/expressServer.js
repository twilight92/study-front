const express = require("express");
const path = require("path");
const app = express();
const DB = require("./DB");

app.set("views", path.resolve(__dirname, "../views"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  // res.send('hello express')
  res.render("index");
  // 확장자 빼고
});

app.get("/users", (req, res) => {
  // res.send('hello users')
  const users = DB.selectAll("users");
  res.render("users", {
    title: "유저!",
    users: users,
  });

  // express 쓰면 JSON.stringify 알아서 해줌
});

app.get("/api/users", (req, res) => {
  const users = DB.selectAll("users");
  res.send(users);
});

app.listen(8080);
