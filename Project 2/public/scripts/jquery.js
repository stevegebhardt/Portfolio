const $landInput = $("<input>")
  .attr("type", "text")
  .attr("name", "lands")
  .attr("class", "input")
  .attr("placeholder", "Land")
  .attr("reduired", "required");

const $creatureInput = $("<input>")
  .attr("type", "text")
  .attr("name", "creatures")
  .attr("class", "input")
  .attr("placeholder", "Creature")
  .attr("reduired", "required");

const $pwalkerInput = $("<input>")
  .attr("type", "text")
  .attr("name", "planeswalkers")
  .attr("class", "input")
  .attr("placeholder", "Planeswalker")
  .attr("reduired", "required");

const $artifactInput = $("<input>")
  .attr("type", "text")
  .attr("name", "artifacts")
  .attr("class", "input")
  .attr("placeholder", "Artifact")
  .attr("reduired", "required");

const $instantInput = $("<input>")
  .attr("type", "text")
  .attr("name", "instants")
  .attr("class", "input")
  .attr("placeholder", "Instant")
  .attr("reduired", "required");

const $sorceryInput = $("<input>")
  .attr("type", "text")
  .attr("name", "sorceries")
  .attr("class", "input")
  .attr("placeholder", "Sorcery")
  .attr("reduired", "required");

const $enchantInput = $("<input>")
  .attr("type", "text")
  .attr("name", "enchantments")
  .attr("class", "input")
  .attr("placeholder", "Enchantment")
  .attr("reduired", "required");

const $landEdit = $("<input>")
  .attr("type", "text")
  .attr("name", "lands")
  .attr("class", "fit-content-input thin-black-border bc-lt-gry")
  .attr("placeholder", "Land")
  .attr("reduired", "required");
const $creatureEdit = $("<input>")
  .attr("type", "text")
  .attr("name", "creatures")
  .attr("class", "fit-content-input thin-black-border bc-lt-gry")
  .attr("placeholder", "Creature")
  .attr("reduired", "required");
const $pwalkerEdit = $("<input>")
  .attr("type", "text")
  .attr("name", "planeswalkers")
  .attr("class", "fit-content-input thin-black-border bc-lt-gry")
  .attr("placeholder", "Planeswalker")
  .attr("reduired", "required");
const $artifactEdit = $("<input>")
  .attr("type", "text")
  .attr("name", "artifacts")
  .attr("class", "fit-content-input thin-black-border bc-lt-gry")
  .attr("placeholder", "Artifact")
  .attr("reduired", "required");
const $instantEdit = $("<input>")
  .attr("type", "text")
  .attr("name", "instants")
  .attr("class", "fit-content-input thin-black-border bc-lt-gry")
  .attr("placeholder", "Instant")
  .attr("reduired", "required");
const $sorceryEdit = $("<input>")
  .attr("type", "text")
  .attr("name", "sorceries")
  .attr("class", "fit-content-input thin-black-border bc-lt-gry")
  .attr("placeholder", "Sorcery")
  .attr("reduired", "required");
const $enchantEdit = $("<input>")
  .attr("type", "text")
  .attr("name", "enchantments")
  .attr("class", "fit-content-input thin-black-border bc-lt-gry")
  .attr("placeholder", "Enchantment")
  .attr("reduired", "required");

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
  $(".landDiv").append(
    "<li class='no-list-style-type'><input type='text' name='lands' class='fit-content-input thin-black-border bc-lt-gry placeholder='Land' required='required'></input><a href='javascript:void(0);' class='remove'>&times;</a></li>"
  );
};
const addCEdit = () => {
  $(".creatureDiv").append(
    "<li class='no-list-style-type'><input type='text' name='creatures' class='fit-content-input thin-black-border bc-lt-gry placeholder='Creature' required='required'></input><a href='javascript:void(0);' class='remove'>&times;</a></li>"
  );
};
const addPEdit = () => {
  $(".pwalkerDiv").append(
    "<li class='no-list-style-type'><input type='text' name='planeswalkers' class='fit-content-input thin-black-border bc-lt-gry placeholder='Planeswalker' required='required'></input><a href='javascript:void(0);' class='remove'>&times;</a></li>"
  );
};
const addAEdit = () => {
  $(".artifactDiv").append(
    "<li class='no-list-style-type'><input type='text' name='artifacts' class='fit-content-input thin-black-border bc-lt-gry placeholder='Artifact' required='required'></input><a href='javascript:void(0);' class='remove'>&times;</a></li>"
  );
};
const addIEdit = () => {
  $(".instantDiv").append(
    "<li class='no-list-style-type'><input type='text' name='instants' class='fit-content-input thin-black-border bc-lt-gry placeholder='Instant' required='required'></input><a href='javascript:void(0);' class='remove'>&times;</a></li>"
  );
};
const addSEdit = () => {
  $(".sorceryDiv").append(
    "<li class='no-list-style-type'><input type='text' name='sorceries' class='fit-content-input thin-black-border bc-lt-gry placeholder='Sorcery' required='required'></input><a href='javascript:void(0);' class='remove'>&times;</a></li>"
  );
};
const addEEdit = () => {
  $(".enchantDiv").append(
    "<li class='no-list-style-type'><input type='text' name='enchantments' class='fit-content-input thin-black-border bc-lt-gry placeholder='Enchantment' required='required'></input><a href='javascript:void(0);' class='remove'>&times;</a></li>"
  );
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
  $(document).on("click", "a.remove", function () {
    $(this).parent().remove();
  });
});
