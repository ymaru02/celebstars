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

app.get("/profile", (req, res) => {
	res.render("profile/profile");
});
app.get("/profileupdate", (req, res) => {
	res.render("profile/profileUpdate");
});

// localhost:8000/login
app.get("/login", (req, res) => {
	res.render("loginWeb");
});

// localhost:8000/kimbackjin
app.get("/kimbackjin", (req, res) => {
	res.render("magazine/kimbackjin");
});

// localhost:8000/kimtaehoon
app.get("/kimtaehoon", (req, res) => {
	res.render("magazine/kimtaehoon");
});

// localhost:8000/kimtaehoon
app.get("/parkkwanwoo", (req, res) => {
	res.render("magazine/parkkwanwoo");
});

// localhost:8000/parkhayan
app.get("/parkhayan", (req, res) => {
	res.render("magazine/parkhayan");
});

// localhost:8000/customersupport
app.get("/customersupport", (req, res) => {
	res.render("customersupport/customer");
});

app.listen(port, () => {
	console.log("server open:", port);
});
