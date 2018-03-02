var express = require("express");
var router = express.Router();
let Parser = require("rss-parser");
let parser = new Parser();
let https = require("https");

//Include db models
var Streamer = require("../models/streamer");

router.get("/", function(req, res, next) {
  res.send("API not yet implemented...");
});

router.post("/streamer/new", function(req, res, next) {
  var new_streamer = new Streamer({
    name: req.body.name,
    url: req.body.url
  });

  new_streamer.save(function(err) {
    if (err) {
      console.log(err);
      res.status(400);
    } else {
      console.log("Streamer saved successfully!");
      res.status(200);
    }
    res.redirect("/dashboard");
  });
});

router.get("/streamer/all", function(req, res, next) {
  Streamer.find(function(err, streamers) {
    if (err) {
      res.json({ error: "error message" });
    } else {
      res.json(streamers);
    }
  });
});

router.get("/streamer/update", function(req, res, next) {
  //Update streamer row with _id
});

router.get("/streamer/delete", function(req, res, next) {
  //Delete streamer row with _id
});

router.get("/news", function(req, res, next) {
  parser.parseURL("https://www.gosugamers.net/news/rss", function(err, feed) {
    res.send(feed.items);
  });
});

router.get("/gaming", function(req, res, next) {
  parser.parseURL(
    "https://www.reddit.com/r/gaming/.rss?sort=hot&limit=10",
    function(err, feed) {
      res.send(feed.items);
    }
  );
});

router.get("/esports", function(req, res, next) {
  parser.parseURL(
    "https://www.reddit.com/r/esports/.rss?sort=hot&limit=10",
    function(err, feed) {
      res.send(feed.items);
    }
  );
});

module.exports = router;
