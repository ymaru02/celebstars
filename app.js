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
// redirect CSS bootstrap
app.use("/icon", express.static(__dirname + "/node_modules/bootstrap-icons"));
// redirect slick-carousel CSS
app.use(
  "/slick",
  express.static(__dirname + "/node_modules/slick-carousel/slick")
);

const port = 8000;

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/casting", (req, res) => {
  res.render("casting/casting");
});

// localhost:8000/login
app.get("/login", (req, res) => {
  res.render("loginWeb");
});

// 매거진 모델 페이지
// localhost:8000/choiseoah
app.get("/choiseoah", (req, res) => {
  res.render("magazine/choiseoah");
});
app.get("/profile/choiseoah", (req, res) => {
  res.render("profile/choiseoahProfile");
});
app.get("/update/choiseoah", (req, res) => {
  res.render("profile/update/choiseoahUpdate");
});

// localhost:8000/hannana
app.get("/hannana", (req, res) => {
  res.render("magazine/hannana");
});
app.get("/profile/hannana", (req, res) => {
  res.render("profile/hannanaProfile");
});
app.get("/update/hannana", (req, res) => {
  res.render("profile/update/hannanaUpdate");
});

// localhost:8000/jangmikwan
app.get("/jangmikwan", (req, res) => {
  res.render("magazine/jangmikwan");
});
app.get("/profile/jangmikwan", (req, res) => {
  res.render("profile/jangmikwanProfile");
});
app.get("/update/jangmikwan", (req, res) => {
  res.render("profile/update/jangmikwanUpdate");
});

// localhost:8000/kimbaekjin
app.get("/kimbaekjin", (req, res) => {
  res.render("magazine/kimbaekjin");
});
app.get("/profile/kimbaekjin", (req, res) => {
  res.render("profile/kimbaekjinProfile");
});
app.get("/update/kimbaekjin", (req, res) => {
  res.render("profile/update/kimbaekjinUpdate");
});

// localhost:8000/kimtaehoon
app.get("/kimtaehoon", (req, res) => {
  res.render("magazine/kimtaehoon");
});
app.get("/profile/kimtaehoon", (req, res) => {
  res.render("profile/kimtaehoonProfile");
});
app.get("/update/kimtaehoon", (req, res) => {
  res.render("profile/update/kimtaehoonUpdate");
});

// localhost:8000/parkkwanwoo
app.get("/parkkwanwoo", (req, res) => {
  res.render("magazine/parkkwanwoo");
});
app.get("/profile/parkkwanwoo", (req, res) => {
  res.render("profile/parkkwanwooProfile");
});
app.get("/update/parkkwanwoo", (req, res) => {
  res.render("profile/update/parkkwanwooUpdate");
});

// localhost:8000/parkwhite
app.get("/parkwhite", (req, res) => {
  res.render("magazine/parkwhite");
});
app.get("/profile/parkwhite", (req, res) => {
  res.render("profile/parkwhiteProfile");
});
app.get("/update/parkwhite", (req, res) => {
  res.render("profile/update/parkwhiteUpdate");
});

// localhost:8000/customersupport
app.get("/customersupport", (req, res) => {
  res.render("customersupport/customer");
});

app.listen(port, () => {
  console.log("server open:", port);
});

app.get("/login", (req, res) => {
  res.render("login/login");
});

app.get("/join", (req, res) => {
  res.render("join/join");
});
