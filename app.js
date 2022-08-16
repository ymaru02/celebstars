const express = require("express");
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

const port = 8000;

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.get("/", (req, res) => {
  res.render("profile/profile");
});

// localhost:8000/nextpage
app.get("/nextpage", (req, res) => {
  res.render("nextpage");
});

// localhost:8000/prepage
app.get("/prepage", (req, res) => {
  res.render("prepage");
});

app.listen(port, () => {
  console.log("server open:", port);
});
