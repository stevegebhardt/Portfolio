const $blueLightFilter = () => {
  $("body").css("filter", "brightness(50%)");
  //   $("#header").css("background-color", "rgba(117 175 50 0.4)");
  //   $("#footer").css("background-color", "rgba(117 175 50 0.4)");
};

const $dropDown = () => {
  $(".dropDown").css("display", "block");
};
$(() => {
  $(".fa-cloud-moon").on("click", $blueLightFilter);
  //$(".linksDiv").hover($dropDown);
});
