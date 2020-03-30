//jshint esversion: 6


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static("public"));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));




app.get("/", function (req, res) {
res.sendFile(__dirname + "/index.html");
});


app.post("/index.html", function (req, res) {
res.sendFile(__dirname + "board.html")
});






app.listen(3000, function() {
  console.log("Server onport 3000");
});
