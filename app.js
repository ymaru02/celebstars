const { Router } = require("express");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static("static"));
// 부트스트랩 적용
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

const port = 8000;

app.get("/", (req, res) => {
  res.render("index");
});

// localhost:8000/logincorp
app.get("/logincorp", (req, res) => {
  res.render("login_corp");
});

app.listen(port, () => {
  console.log("server open:", port);
});
