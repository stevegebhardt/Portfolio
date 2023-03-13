const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.static("public"));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
const db = mongoose.connection;

const Mtg = require("./models/deckschema.js");
// const deck = require("./models/deck.js");
const PORT = 3000;
app.use(express.static("public"));
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

// app.get("/seed", (req, res) => {
//   Mtg.create(deck).then((data) => {
//     res.send(data);
//   });
// });

app.get("/mtg", (req, res) => {
  Mtg.find({}).then((allDecks) => {
    res.render("index.ejs", {
      decks: allDecks,
    });
  });
});

app.get("/mtg/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/mtg/:id", (req, res) => {
  Mtg.findById(req.params.id).then((foundDeck) => {
    res.render("view.ejs", {
      deck: foundDeck,
    });
  });
});

app.get("/mtg/:id/edit", (req, res) => {
  Mtg.findById(req.params.id).then((foundDeck) => {
    res.render(edit.ejs, {
      deck: foundDeck,
    });
  });
});

app.post("/mtg", (req, res) => {
  Mtg.create(req.body).then((createdBudget) => {
    res.redirect("/mtg");
  });
});

app.delete("/mtg/:id", (req, res) => {
  Mtg.findByIdAndDelete(req.params.id).then(() => {
    res.redirect("/mtg");
  });
});

app.put("/mtg/:id", (req, res) => {
  Mtg.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedDeck) => {
      res.redirect("/mtg");
    }
  );
});

mongoose.connect("mongodb://localhost:27017/formats").then(() => {
  console.log("The connection with god is established");
});
