var express = require("express");
var router = express.Router();
var cat = require("../models/travel.js");

// routes

router.get("/", function(req, res) {
    cat.all(function(data) {
      var hbsObject = {
        travel: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/cats", function(req, res) {
    cat.create([
      "city_name"
    ], [
      req.body.name, req.body.sleepy
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });