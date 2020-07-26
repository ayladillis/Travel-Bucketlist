var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(MYSQL_URL);
  // connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'travel-bucketlist_db'
  });
};

var MYSQL_URL = process.env.JAWSDB_URL || 
"mysql://xvfddo1g84yd1cjj:oumfso0g3r6dt5fo@x40p5pp7n9rowyv6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/cxkauw9r1gdr2q0n";


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// connection.connect();
module.exports = connection;


