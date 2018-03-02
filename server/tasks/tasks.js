(function() {
  var Streamer = require("../models/streamer");
  var url = require("url");
  var CronJob = require("cron").CronJob;
  var job = new CronJob(
    "0 * * * * *",
    function() {
      console.log("Ping -> " + new Date().toLocaleString());

      //var new_streamer = new Streamer({
      //  name: "Shroud",
      //  url: new Date().toLocaleString()
      //});
      //
      //// call the built-in save method to save to the database
      //new_streamer.save(function(err) {
      //  if (err) throw err;
      //
      //  console.log("Streamer saved successfully!");
      //});
    },
    function() {
      console.log("Task runner ended");
    },
    true
  );
})();
