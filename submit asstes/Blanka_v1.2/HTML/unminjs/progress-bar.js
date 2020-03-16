jQuery(document).ready(function ($) {
  "use strict";

  $(window).on("resize scroll", function () {
    $(".js-progress-bar").each(function () {
      if ($(this).isInViewport()) {
        var value = $(this).find(".progress-bar").attr("aria-valuenow");
        if (value > 100) value = 100;
        var progressBar = $(this).find(".progress-bar");
        var percentageText = $(this).find(".ts-progress-percentage");
        var currentValue = $(percentageText).text();

        if (currentValue !== value) {
          $(percentageText).prop("Counter", 0).animate({
            Counter: value
          }, {
            duration: 1000,
            easing: "swing",
            step: function step(now) {
              $(percentageText).text(Math.ceil(now));
            }
          });
        }

        progressBar.css("width", value + "%");
        $(this).removeClass("js-progress-bar");
      }
    });
  });
});