const { Router } = require("express");
const express = require("express");
const { expr } = require("jquery");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static("static"));

// prepare server
// redirect API calls
// app.use("/api", api);
// redirect root
// app.use("/", express.static(__dirname + "/www"));
// redirect bootstrap JS
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
// redirect JS jQuery
app.use("/jq", express.static(__dirname + "/node_modules/jquery/dist"));
// redirect CSS bootstrap
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
// redirect slick-carousel CSS
app.use(
  "/slick",
  express.static(__dirname + "/node_modules/slick-carousel/slick")
);

const port = 8000;

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile", (req, res) => {
  res.render("profile/profile");
});

// localhost:8000/nextpage
app.get("/login", (req, res) => {
  res.render("loginWeb");
});

// localhost:8000/magazine
app.get("/magazine", (req, res) => {
  res.render("magazine");
});

app.listen(port, () => {
  console.log("server open:", port);
});
