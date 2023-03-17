const mongoose = require("mongoose");
const Mtg = require("./deckschema.js");

const formatSchema = new mongoose.Schema({
  format: String,
  decks: [Mtg.schema],
});

const Format = mongoose.model("Format", formatSchema);
module.exports = Format;
