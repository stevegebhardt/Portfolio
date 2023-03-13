//Pull in all dependencies
const mongoose = require("mongoose"); //requires mongoose
const deckSchema = new mongoose.Schema({
  format: String,
  name: String,
  archetype: String,
  img: String,
  lands: [{ type: String }],
  creatures: [{ type: String }],
  planeswalkers: ["Wrenn and Six x2"],
  artifacts: [{ type: String }],
  instants: [{ type: String }],
  sorceries: [{ type: String }],
  enchantments: [{ type: String }],
});

const MtgCollection = mongoose.model("Mtg", deckSchema);
module.exports = MtgCollection; //makes this exportable to be accessed in app.js
