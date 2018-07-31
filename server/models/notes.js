const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  name: String,
  date: { type: Date, default: Date.now }
});

const Notes = mongoose.model("Notes", noteSchema);

module.exports = Notes;
