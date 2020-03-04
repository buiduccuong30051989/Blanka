$(document).ready(function () {
  "user strict";

  var stickyHeader = $("#js-header-home-01");

  function initHeader() {
    if (!window.mobileAndTabletcheck() || $(window).width() > 991) {
      if (stickyHeader.length > 0) {
        $(window).scroll(function () {
          var headerContainerHeight = $(".header-container").outerHeight(true);
          var headerHeight = stickyHeader.outerHeight(true);
          var windowScroll = $(window).scrollTop();

          if (windowScroll > headerContainerHeight - headerHeight) {
            stickyHeader.addClass("fixed-top");
          } else {
            stickyHeader.removeClass("fixed-top");
          }
        });
      }
    }
  }

  initHeader();
  $(window).on("resize", function () {
    initHeader();
  });
});