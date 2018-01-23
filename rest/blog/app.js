var express = require("express"),
app = express(),
bodyParser = require("body-parser"), // takes the body of your request and parses it to whatever you want your server to receive in POST/PUT requests (JSON, URL encoded, text, raw).
mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Title
// Image
// Body
// Created

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is running");
})