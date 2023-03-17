const mongoose = require("mongoose");
const Mtg = require("./deckschema");

const formatSchema = new mongoose.Schema({
  format: String,
  decks: [Mtg.schema],
});

const Format = mongoose.model("Format", formatSchema);
module.exports = Format;
