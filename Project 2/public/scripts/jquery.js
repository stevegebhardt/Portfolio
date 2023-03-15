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

$(() => {
  $("#land").on("click", addLInput);
  $("#creature").on("click", addCInput);
  $("#pwalker").on("click", addPInput);
  $("#artifact").on("click", addAInput);
  $("#instant").on("click", addIInput);
  $("#sorcery").on("click", addSInput);
  $("#enchantment").on("click", addEInput);
});
