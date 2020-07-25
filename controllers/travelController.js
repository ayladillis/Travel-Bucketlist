var express = require("express");
var router = express.Router();
var travel = require("../models/travel.js");

// routes

router.get("/", function(req, res) {
    travel.all(function(data) {
      var hbsObject = {
        travel: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/travel", function(req, res) {
    console.log(req.body);
    travel.create([
      "city_name", "fly"
    ], [
      req.body.name, req.body.fly === 'true'
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/travel/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    travel.update(
      {
        fly: req.body.fly
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end()
      }
    );
  });

  module.exports = router;