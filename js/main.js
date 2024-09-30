// sliders
const sliderSettings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 300,
  centerMode: true,
  variableWidth: true,
};

$(".sliders").slick(sliderSettings);
$(".sliders_two").slick(sliderSettings);

// mobile slider
$(document).ready(function () {
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 300,
  };

  function initSlider() {
    if ($(window).width() < 768) {
      if (!$(".mobile_slider").hasClass("slick-initialized")) {
        $(".mobile_slider").slick(sliderSettings);
      }
    } else {
      if ($(".mobile_slider").hasClass("slick-initialized")) {
        $(".mobile_slider").slick("unslick");
      }
    }
  }

  initSlider();

  $(window).on("resize", function () {
    initSlider();
  });
});

// forms
const buttons = document.querySelectorAll(".main_button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    document.getElementById("Form", "mobile_form").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    document.getElementById("mobile_form").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
