// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var travel = {
    all: function(cb) {
      orm.all("travel", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("travel", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("travel", objColVals, condition, function(res) {
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