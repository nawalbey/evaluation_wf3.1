let img = ["img/background.jpg", "img/agence.jpg"];

let curentImg = 0;

setInterval(() => {
  curentImg++;
  if (curentImg == img.length) {
    curentImg = 0;
  }
  document.getElementById("banner").style.backgroundImage =
    "url(" + img[curentImg] + ")";
}, 15000);

$("#toggleButton").click(function () {
  $(".myDiv").slideToggle();
});

let curentIndex = 0;

// voiture1
let images1 = ["img/vehicule1.png", "img/vehicule2.png"];

$(".prev1").click(() => {
  console.log(2);
  curentIndex--;
  if (curentIndex < 0) {
    curentIndex = images1.length - 1;
  }
  $(".voiture1").css({
    backgroundImage: "url(" + images1[curentIndex] + ")",
  });
});

$(".next1").click(() => {
  curentIndex++;
  if (curentIndex == images1.length) {
    curentIndex = 0;
  }
  $(".voiture1").css({
    backgroundImage: "url(" + images1[curentIndex] + ")",
  });
});
// voiture2
let images2 = ["img/vehicule3.png", "img/vehicule4.png"];

$(".prev2").click(() => {
  console.log(2);
  curentIndex--;
  if (curentIndex < 0) {
    curentIndex = images2.length - 1;
  }
  $(".voiture2").css({
    backgroundImage: "url(" + images2[curentIndex] + ")",
  });
});
$(".next2").click(() => {
  curentIndex++;
  if (curentIndex == images2.length) {
    curentIndex = 0;
  }
  $(".voiture2").css({
    backgroundImage: "url(" + images2[curentIndex] + ")",
  });
});
// voiture3
let images3 = ["img/vehicule3.png", "img/vehicule4.png"];

$(".prev3").click(() => {
  console.log(2);
  curentIndex--;
  if (curentIndex < 0) {
    curentIndex = images3.length - 1;
  }
  $(".voiture3").css({
    backgroundImage: "url(" + images3[curentIndex] + ")",
  });
});
$(".next3").click(() => {
  curentIndex++;
  if (curentIndex == images3.length) {
    curentIndex = 0;
  }
  $(".voiture3").css({
    backgroundImage: "url(" + images3[curentIndex] + ")",
  });
});
// voiture4
let images4 = ["img/vehicule3.png", "img/vehicule4.png"];

$(".prev4").click(() => {
  console.log(2);
  curentIndex--;
  if (curentIndex < 0) {
    curentIndex = images4.length - 1;
  }
  $(".voiture4").css({
    backgroundImage: "url(" + images4[curentIndex] + ")",
  });
});
$(".next4").click(() => {
  curentIndex++;
  if (curentIndex == images4.length) {
    curentIndex = 0;
  }
  $(".voiture4").css({
    backgroundImage: "url(" + images4[curentIndex] + ")",
  });
});

// voiture5
let images5 = ["img/vehicule3.png", "img/vehicule4.png"];

$(".prev5").click(() => {
  console.log(2);
  curentIndex--;
  if (curentIndex < 0) {
    curentIndex = images5.length - 1;
  }
  $(".voiture5").css({
    backgroundImage: "url(" + images5[curentIndex] + ")",
  });
});
$(".next5").click(() => {
  curentIndex++;
  if (curentIndex == images4.length) {
    curentIndex = 0;
  }
  $(".voiture5").css({
    backgroundImage: "url(" + images5[curentIndex] + ")",
  });
});

// voiture6
let images6 = ["img/vehicule3.png", "img/vehicule4.png"];

$(".prev6").click(() => {
  console.log(2);
  curentIndex--;
  if (curentIndex < 0) {
    curentIndex = images5.length - 1;
  }
  $(".voiture6").css({
    backgroundImage: "url(" + images6[curentIndex] + ")",
  });
});
$(".next6").click(() => {
  curentIndex++;
  if (curentIndex == images6.length) {
    curentIndex = 0;
  }
  $(".voiture6").css({
    backgroundImage: "url(" + images6[curentIndex] + ")",
  });
});

// voiture7
let images7 = ["img/vehicule3.png", "img/vehicule4.png"];

$(".prev7").click(() => {
  console.log(2);
  curentIndex--;
  if (curentIndex < 0) {
    curentIndex = images7.length - 1;
  }
  $(".voiture7").css({
    backgroundImage: "url(" + images7[curentIndex] + ")",
  });
});
$(".next7").click(() => {
  curentIndex++;
  if (curentIndex == images7.length) {
    curentIndex = 0;
  }
  $(".voiture7").css({
    backgroundImage: "url(" + images7[curentIndex] + ")",
  });
});


