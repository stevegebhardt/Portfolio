const $showMyBio = () => {
  $(".bio").toggle();
  $(".bio").on("mouseleave", () => {
    $(".bio").hide();
  });
};

const $blueLightFilter = () => {
  $("body").css("filter", "brightness(90%)");
  $("body").css("backdrop-filter", "brightness(90%)");
  $("body").css("backdrop-filter", "sepia(35%)");
  $("#header").css("background-color", "rgba(175, 175, 135, 0.8)");
  $("#footer").css("background-color", "rgba(175, 175, 135, 0.8)");
  $(".fa-cloud-moon").hide();
  $(".fa-sun").show();
};
const $regularDisplay = () => {
  $("body").css("filter", "brightness(100%)");
  $("body").css("backdrop-filter", "brightness(100%)");
  $("#header").css("background-color", "rgba(117, 223, 255, 0.8)");
  $("#footer").css("background-color", "rgba(117, 223, 255, 0.8)");
  $(".fa-sun").hide();
  $(".fa-cloud-moon").show();
};
const $dropDown = () => {
  $(".dropDown").css("display", "block");
};
const $showMyEmail = () => {
  $(".email").toggle();
  $(".email").on("mouseleave", () => {
    $(".email").hide();
  });
};
const $showInterests = () => {
  $(".dropDown").hide();
  $(".interestsSection").show();
};

const $youFoundTheEgg = () => {
  $("#header").remove();
  $("#mainSectionTop").remove();
  $("#mainSectionBottom").remove();
  $("#footer").remove();
  $("#EGG").remove();
  const $eggDiv = $("<div>")
    .addClass("youWon")
    .text("Congratulations!!\nYou have found the Egg!!");
  $("body").css("background-image", "url('https://i.imgur.com/0fa3Wn1.jpeg')");
  $eggDiv.css("background-color", "rgba(250, 250, 250, 0.7");
  $eggDiv.css("color", "black");
  $eggDiv.css("font-size", "100px");
  $eggDiv.css("border-radius", "20px");
  $eggDiv.css("text-align", "center");
  $("body").append($eggDiv);
};
$(() => {
  $("#bioTab").on("click", $showMyBio);
  $("#emailTab").on("click", $showMyEmail);

  $(".fa-sun").hide();
  $(".fa-cloud-moon").on("click", $blueLightFilter);
  $(".fa-sun").on("click", $regularDisplay);

  $(".dropDown").hide();
  $(".linksDiv").hover(
    () => {
      $(".dropDown").show();
    },
    () => {
      $(".dropDown").hide();
    }
  );

  $(".interestsLink").on("click", $showInterests);

  let currentImgIndex = 0;
  const numOfImages = $(".images").children().length - 1;
  $(".next").on("click", () => {
    $(".images").children().eq(currentImgIndex).css("display", "none");
    if (currentImgIndex < numOfImages) {
      currentImgIndex++;
    } else {
      currentImgIndex = 0;
    }

    $(".images").children().eq(currentImgIndex).css("display", "block");
  });

  $(".previous").on("click", () => {
    $(".images").children().eq(currentImgIndex).css("display", "none");
    if (currentImgIndex > 0) {
      currentImgIndex--;
    } else {
      currentImgIndex = numOfImages;
    }

    $(".images").children().eq(currentImgIndex).css("display", "block");
  });

  $(".button").on("mousedown", () => {
    $(".button").css("cursor", "grabbing");
  });
  $(".button").on("mouseup", () => {
    $(".button").css("cursor", "grab");
  });

  $(".interestsSection").on("mouseleave", () => {
    $(".interestsSection").hide();
  });

  $("#EGG").on("dblclick", $youFoundTheEgg);
});
