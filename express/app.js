// EXPRESS Install: npm install express --save

var express = require("express");  // just includes all the contents of the express directory.
var app = express();  // Then we execute it and save it to a variable called app

app.get("/", function(request, response) {  // when a get request is made to the route, we then want this code to run
    response.send("Hi");
});

app.get("/bye", function(request, response) { 
    response.send("Bye");
});

app.get("/r/:subredditName", function(request, response) { // ':' is a variable for that represents the route after whatever precedes it
    var subreddit = request.params.subredditName;
    response.send("Welcome to the " + subreddit +  " subreddit!"); // returns whatever you to type in after /r/
})

// the order of these matter. If '*' below was at the top, then only that path would be the result for any route
app.get("*", function(request, response) { // * will display message "blah" when any route other route in used than ones defined here
    response.send("Blah");
})

// Tell express to listen to requests (start server)
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("App has started");
});