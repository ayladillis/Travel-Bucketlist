// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password",
//   database: "travel_list_db"
// });

var MYSQL_URL = process.env.JAWSDB_URL || "mysql://root:password@localhost:3306/travel_list_db";
// for Heroku
var connection = mysql.createConnection(MYSQL_URL);


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
