const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.static("public"));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
const db = mongoose.connection;

const Mtg = require("./models/deckschema.js");
const Format = require("./models/formatSchema.js");
// const deck = require("./models/deck.js");
// const format = require("./models/format.js");
const PORT = 3000;
app.use(express.static("public"));
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

// app.get("/seed", (req, res) => {
//   Format.create(format).then((data) => {
//     res.send(data);
//   });
// });

// app.get("/mtg", (req, res) => {
//   Format.find({})
//     .sort({ format: 1 })
//     .then((allDecks) => {
//       res.render("index.ejs", {
//         decks: allDecks,
//       });
//     });
// });

app.get("/mtg", (req, res) => {
  Format.find({}).then((allFormats) => {
    res.render("format_view.ejs", {
      formats: allFormats,
    });
  });
});

app.get("/mtg/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/mtg/game_rules", (req, res) => {
  res.render("game-rules.ejs");
});
app.get("/mtg/std_rules", (req, res) => {
  res.render("std.ejs");
});
app.get("/mtg/vintage_rules", (req, res) => {
  res.render("vintage.ejs");
});
app.get("/mtg/pauper_rules", (req, res) => {
  res.render("pauper.ejs");
});
app.get("/mtg/limited_rules", (req, res) => {
  res.render("limited.ejs");
});
app.get("/mtg/commander_rules", (req, res) => {
  res.render("commander.ejs");
});
app.get("/mtg/cEDH_rules", (req, res) => {
  res.render("cEDH.ejs");
});
app.get("/mtg/modern_rules", (req, res) => {
  res.render("modern.ejs");
});
app.get("/mtg/pioneer_rules", (req, res) => {
  res.render("pioneer.ejs");
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
  Format.findById(req.body.formatId).then((foundFormat) = {
    Mtg.create(req.body).then((createdDeck) => {
      foundFormat.decks.push(createdDeck);
      foundFormat.save().then((data) => {
        res.redirect('/mtg');
      })
    })
  })
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

mongoose.connect("mongodb://localhost:27017/format").then(() => {
  console.log("The connection with god is established");
});
