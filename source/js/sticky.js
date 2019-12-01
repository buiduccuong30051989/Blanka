$(document).ready(function() {
  "user strict";

  var stickyStaticHeader = $("#js-headroom-static");
  var stickyHeaderFixed = $("#js-headroom-fixed");
  var stickyHeader = $("#js-header-sticky");
  var fixedStickyHeader = $("#js-header-fixed-sticky");
  if (stickyStaticHeader.length > 0) {
    // var headerHeight = stickyStaticHeader.outerHeight(true);
    setTimeout(function() {
      var headerHeight = stickyStaticHeader.outerHeight(true);
      var headerWidth = stickyStaticHeader.width();
      var offsetHeader = stickyStaticHeader.offset().top;
      stickyStaticHeader.wrap("<div class='wrap-sticky'></div>");
      $(".wrap-sticky").css({
        width: headerWidth,
        height: headerHeight
      });
      var header = new Headroom(document.querySelector("#js-headroom-static"), {
        tolerance: 5,
        offset: headerHeight + offsetHeader,
        classes: {
          initial: "headroom",
          pinned: "headroom--pinned",
          unpinned: "headroom--unpinned"
        }
      });
      header.init();

      // Setup a timer
      var timeout;

      // Listen for scroll/resize events
      window.addEventListener(
        "scroll",
        function(event) {
          // If there's a timer, cancel it
          if (timeout) {
            window.cancelAnimationFrame(timeout);
          }

          // Setup the new requestAnimationFrame()
          timeout = window.requestAnimationFrame(function() {
            // Run our scroll functions
            if ($(document).scrollTop() > offsetHeader + 200) {
              $(".header-container").addClass("fixed-top");
            } else {
              $(".header-container").removeClass("fixed-top");
            }
          });
        },
        false
      );
    }, 1);
  }

  if (stickyHeaderFixed.length > 0) {
    var headerHeight = stickyHeaderFixed.outerHeight(true);
    var header = new Headroom(document.querySelector("#js-headroom-fixed"), {
      tolerance: 5,
      offset: headerHeight,
      classes: {
        initial: "headroom",
        pinned: "headroom--pinned",
        unpinned: "headroom--unpinned"
      }
    });
    header.init();
  }

  if (stickyHeader.length > 0) {
    var headerWidth = stickyHeader.width();
    var headerHeight = stickyHeader.outerHeight(true);
    stickyHeader.wrap("<div class='wrap-sticky'></div>");
    $(".wrap-sticky").css({
      width: headerWidth,
      height: headerHeight
    });

    $(window).scroll(function() {
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

  if (fixedStickyHeader.length > 0) {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 10) {
        fixedStickyHeader.addClass('sticky-header');
      } else {
        fixedStickyHeader.removeClass('sticky-header');
      }
    });
  }

  // Polyfill for request animation frame
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

  // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

  // MIT license
  // refer: https://gomakethings.com/debouncing-events-with-requestanimationframe-for-better-performance/

  (function() {
    var lastTime = 0;
    var vendors = ["ms", "moz", "webkit", "o"];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame =
        window[vendors[x] + "RequestAnimationFrame"];
      window.cancelAnimationFrame =
        window[vendors[x] + "CancelAnimationFrame"] ||
        window[vendors[x] + "CancelRequestAnimationFrame"];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
  })();

  // Setup a timer
  // var timeout;

  // Listen for scroll/resize events
  // window.addEventListener(
  //   "scroll",
  //   function(event) {
  //     // If there's a timer, cancel it
  //     if (timeout) {
  //       window.cancelAnimationFrame(timeout);
  //     }

  //     // Setup the new requestAnimationFrame()
  //     timeout = window.requestAnimationFrame(function() {
  //       // Run our scroll functions
  //       if ($(document).scrollTop() > offsetHeader + 200) {
  //         $(".header-container").addClass("header-fixed");
  //       } else {
  //         $(".header-container").removeClass("header-fixed");
  //       }
  //     });
  //   },
  //   false
  // );

  // $(window).on("resize", function() {
  //   if (stickyMenu.length > 0) {
  //     var headerHeight = $("#js-headroom-menu").height();
  //     var headerWidth = $("#js-headroom-menu").width();
  //     var offsetHeader = $("#js-headroom-menu").offset().top;
  //     $(".wrap-sticky").css({
  //       width: headerWidth,
  //       height: headerHeight
  //     });
  //   }
  // });
});
