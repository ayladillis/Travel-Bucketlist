// Set up MySQL connection.
var mysql = require("mysql");


connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "travel_list_db"
  });

// var MYSQL_URL = process.env.JAWSDB_URL || "mysql://xvfddo1g84yd1cjj:l7yqfbsuozppv0xp@x40p5pp7n9rowyv6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/cxkauw9r1gdr2q0n";
// var MYSQL_URL = process.env.JAWSDB_URL || "mysql://localhost:3306/cxkauw9r1gdr2q0n";

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
