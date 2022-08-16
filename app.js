const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static("static"));

const port = 8000;

app.get("/", (req, res) => {
	res.render("index");
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
