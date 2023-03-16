const $landInput = $("<input>")
  .attr("type", "text")
  .attr("name", "lands")
  .attr("class", "input")
  .attr("placeholder", "Land")
  .attr("reduired", "required");

const $landEdit = $("<input>")
  .attr("type", "text")
  .attr("name", "lands")
  .attr("class", "fit-content-input thin-black-border bc-lt-gry")
  .attr("placeholder", "Land")
  .attr("reduired", "required");

const addLInput = () => {
  $(".landDiv").append(
    "<li class='no-list-style-type'><input type='text' name='lands' class='input' placeholder='Land'><a href='javascript:void(0);' class='remove'>&times;</a></li>"
  );
};

const addCInput = () => {
  $(".creatureDiv").append(
    "<li class='no-list-style-type'><input type='text' name='creatures' class='input' placeholder='Creature'><a href='javascript:void(0);' class='remove'>&times;</a></li>"
  );
};

const addPInput = () => {
  $(".pwalkerDiv").append(
    "<li class='no-list-style-type'><input type='text' name='planeswalkers' class='input' placeholder='Planeswalker'><a href='javascript:void(0);' class='remove'>&times;</a></li>"
  );
};

const addAInput = () => {
  $(".artifactDiv").append(
    "<li class='no-list-style-type'><input type='text' name='artifacts' class='input' placeholder='Artifact'><a href='javascript:void(0);' class='remove'>&times;</a></li>"
  );
};

const addIInput = () => {
  $(".instantDiv").append(
    "<li class='no-list-style-type'><input type='text' name='instants' class='input' placeholder='Instant'><a href='javascript:void(0);' class='remove'>&times;</a></li>"
  );
};

const addSInput = () => {
  $(".sorceryDiv").append(
    "<li class='no-list-style-type'><input type='text' name='sorceries' class='input' placeholder='Sorcery'><a href='javascript:void(0);' class='remove'>&times;</a></li>"
  );
};

const addEInput = () => {
  $(".enchantDiv").append(
    "<li class='no-list-style-type'><input type='text' name='enchantments' class='input' placeholder='Enchantment'><a href='javascript:void(0);' class='remove'>&times;</a></li>"
  );
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
