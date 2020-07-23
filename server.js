// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "password",
  database: "travel_bucketlistDB"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// Data


// Routes
app.get("/", function(req, res){

})

app.post("/api/travel", function(req, res){
    
})

app.put("/api/travel/:id", function(req, res){
    
})





app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });