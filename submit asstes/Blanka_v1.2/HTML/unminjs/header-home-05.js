$(document).ready(function () {
  "user strict";

  function initHeader() {
    var stickyHeader = $("#js-header-home-05");
    var headerWidth = stickyHeader.width();
    var headerHeight = stickyHeader.outerHeight(true);

    if (!window.mobileAndTabletcheck() || $(window).width() > 991) {
      if (stickyHeader.length > 0) {
        if ($(".wrap-sticky").length) {
          var headerWidth2 = $(".ts-header").width();
          var headerHeight2 = $(".ts-header").outerHeight(true);
          $(".wrap-sticky").css({
            width: headerWidth2,
            height: headerHeight2
          });
        } else {
          stickyHeader.wrap("<div class='wrap-sticky'></div>");
          $(".wrap-sticky").css({
            width: headerWidth,
            height: headerHeight
          });
        }

        $(window).scroll(function () {
          var headerContainerHeight = $(".header-container").outerHeight(true);
          var headerHeight = stickyHeader.outerHeight(true);
          var windowScroll = $(window).scrollTop();

          if (windowScroll > 57) {
            stickyHeader.addClass("fixed-top");
          } else {
            stickyHeader.removeClass("fixed-top");
          }
        });
      }
    } else {
      if ($(".wrap-sticky").length) {
        var headerWidth2 = $(".ts-header").width();
        var headerHeight2 = $(".ts-header").outerHeight(true);
        $(".wrap-sticky").css({
          width: headerWidth2,
          height: headerHeight2
        });
      } else {
        stickyHeader.wrap("<div class='wrap-sticky'></div>");
        $(".wrap-sticky").css({
          width: headerWidth,
          height: headerHeight
        });
      }
    }
  }

  initHeader();
  $(window).on("resize", function () {
    initHeader();
  });
});