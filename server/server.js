var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var api = require("./routes/api");

var app = express();

//Set up mongoose connection
var mongoose = require("mongoose");
var mongoDB = process.env.MONGOLAB_URI;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// serve all asset files from necessary directories
app.use("/js", express.static(__dirname + "/../public/app/js"));
app.use("/img", express.static(__dirname + "/../public/app/img"));
app.use("/css", express.static(__dirname + "/../public/app/css"));
app.use("/partials", express.static(__dirname + "/../public/app/partials"));

// any API endpoints
app.use("/api", api);

// serve index.html for all remaining routes, in order to leave routing up to angular
app.all("/*", function(req, res, next) {
  res.sendFile("index.html", { root: __dirname + "/../public/app" });
});

module.exports = app;
