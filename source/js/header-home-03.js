$(document).ready(function() {
  "user strict";

  var stickyHeader = $("#js-header-home-03");
  function initHeader() {
    if (stickyHeader.length > 0) {
      $(window).scroll(function() {
        var headerContainerHeight = $(".header-container").outerHeight(true);
        var headerHeight = stickyHeader.outerHeight(true);
        var windowScroll = $(window).scrollTop();
        if (windowScroll > headerContainerHeight - headerHeight) {
          stickyHeader.addClass("sticky-header");
        } else {
          stickyHeader.removeClass("sticky-header");
        }
      });
    }
  }

  initHeader();

  $(window).on("resize", function() {
    initHeader();
  });
});
