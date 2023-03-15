const $landInput = $("<input>")
  .attr("type", "text")
  .attr("name", "lands")
  .attr("class", "input")
  .attr("placeholder", "Land");

const $creatureInput = $("<input>")
  .attr("type", "text")
  .attr("name", "creatures")
  .attr("class", "input")
  .attr("placeholder", "Creature");

const $pwalkerInput = $("<input>")
  .attr("type", "text")
  .attr("name", "planeswalkers")
  .attr("class", "input")
  .attr("placeholder", "Planeswalker");

const $artifactInput = $("<input>")
  .attr("type", "text")
  .attr("name", "artifacts")
  .attr("class", "input")
  .attr("placeholder", "Artifact");

const $instantInput = $("<input>")
  .attr("type", "text")
  .attr("name", "instants")
  .attr("class", "input")
  .attr("placeholder", "Instant");

const $sorceryInput = $("<input>")
  .attr("type", "text")
  .attr("name", "sorceries")
  .attr("class", "input")
  .attr("placeholder", "Sorcery");

const $enchantInput = $("<input>")
  .attr("type", "text")
  .attr("name", "enchantments")
  .attr("class", "input")
  .attr("placeholder", "Enchantment");

const $landEdit = $("<input>")
  .attr("type", "text")
  .attr("name", "lands")
  .attr("class", "fit-content-input thin-black-border bc-lt-gry")
  .attr("placeholder", "Land");
const $creatureEdit = $("<input>")
  .attr("type", "text")
  .attr("name", "creatures")
  .attr("class", "fit-content-input thin-black-border bc-lt-gry")
  .attr("placeholder", "Creature");
const $pwalkerEdit = $("<input>")
  .attr("type", "text")
  .attr("name", "planeswalkers")
  .attr("class", "fit-content-input thin-black-border bc-lt-gry")
  .attr("placeholder", "Planeswalker");
const $artifactEdit = $("<input>")
  .attr("type", "text")
  .attr("name", "artifacts")
  .attr("class", "fit-content-input thin-black-border bc-lt-gry")
  .attr("placeholder", "Artifact");
const $instantEdit = $("<input>")
  .attr("type", "text")
  .attr("name", "instants")
  .attr("class", "fit-content-input thin-black-border bc-lt-gry")
  .attr("placeholder", "Instant");
const $sorceryEdit = $("<input>")
  .attr("type", "text")
  .attr("name", "sorceries")
  .attr("class", "fit-content-input thin-black-border bc-lt-gry")
  .attr("placeholder", "Sorcery");
const $enchantEdit = $("<input>")
  .attr("type", "text")
  .attr("name", "enchantments")
  .attr("class", "fit-content-input thin-black-border bc-lt-gry")
  .attr("placeholder", "Enchantment");

const addLInput = () => {
  $(".landDiv").append($landInput);
};

const addCInput = () => {
  $(".creatureDiv").append($creatureInput);
};

const addPInput = () => {
  $(".pwalkerDiv").append($pwalkerInput);
};

const addAInput = () => {
  $(".artifactDiv").append($artifactInput);
};

const addIInput = () => {
  $(".instantDiv").append($instantInput);
};

const addSInput = () => {
  $(".sorceryDiv").append($sorceryInput);
};

const addEInput = () => {
  $(".enchantDiv").append($enchantInput);
};
const addLEdit = () => {
  $(".landDiv").append($landEdit);
};
const addCEdit = () => {
  $(".creatureDiv").append($creatureEdit);
};
const addPEdit = () => {
  $(".pwalkerDiv").append($pwalkerEdit);
};
const addAEdit = () => {
  $(".artifactDiv").append($artifactEdit);
};
const addIEdit = () => {
  $(".instantDiv").append($instantEdit);
};
const addSEdit = () => {
  $(".sorceryDiv").append($sorceryEdit);
};
const addEEdit = () => {
  $enchantEdit.appendTo($(".enchantDiv"));
};

$(() => {
  $("#land").on("click", addLInput);
  $("#creature").on("click", addCInput);
  $("#pwalker").on("click", addPInput);
  $("#artifact").on("click", addAInput);
  $("#instant").on("click", addIInput);
  $("#sorcery").on("click", addSInput);
  $("#enchantment").on("click", addEInput);
  $("#ledit").on("click", addLEdit);
  $("#cedit").on("click", addCEdit);
  $("#pedit").on("click", addPEdit);
  $("#aedit").on("click", addAEdit);
  $("#iedit").on("click", addIEdit);
  $("#sedit").on("click", addSEdit);
  $("#eedit").on("click", addEEdit);
});
