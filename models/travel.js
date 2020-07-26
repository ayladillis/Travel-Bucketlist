// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var travel = {
    selectAll: function(cb) {
      orm.selectAll("travel", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("travel", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("travel", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("travel", condition, function(res) {
        cb(res);
      });
    }
  };


module.exports = travel;