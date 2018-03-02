var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var StreamerSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true }
});

//Export model
module.exports = mongoose.model("Streamer", StreamerSchema);
