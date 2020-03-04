$(window).on("load", function () {
  "use strict";

  var $container = $(".js-isotope-projects");

  if ($container.length > 0) {
    $container.isotope({
      filter: "*",
      itemSelector: ".js-isotope-projects > .item",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-sizer"
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false
      }
    });
    $(".filterProject a").click(function () {
      $(".filterProject .active").removeClass("active");
      $(this).addClass("active");
      var selector = $(this).attr("data-filter");
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false
        }
      });
      return false;
    });
  }
});