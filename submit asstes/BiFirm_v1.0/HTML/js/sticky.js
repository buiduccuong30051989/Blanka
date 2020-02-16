$(document).ready(function () {
  'user strict';

  var stickyMenu = $('#js-sticked-menu');

  if (stickyMenu.length > 0) {
    var headerHeight = stickyMenu.height();
    var headerWidth = $('#js-sticked-menu').width();
    var offsetHeader = $('#js-sticked-menu').offset().top;
    $('#js-sticked-menu').wrap("<div class='wrap-sticky'></div>");
    $('.wrap-sticky').css({
      width: headerWidth,
      height: headerHeight
    });
    var header = new Headroom(document.querySelector('#js-sticked-menu'), {
      tolerance: 5,
      offset: headerHeight + offsetHeader,
      classes: {
        initial: 'headroom',
        pinned: 'headroom--pinned',
        unpinned: 'headroom--unpinned'
      }
    });
    header.init();
  } // Polyfill for request animation frame
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
  // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
  // MIT license
  // refer: https://gomakethings.com/debouncing-events-with-requestanimationframe-for-better-performance/


  (function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];

    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  })(); // Setup a timer


  var timeout; // Listen for scroll/resize events

  window.addEventListener('scroll', function (event) {
    // If there's a timer, cancel it
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    } // Setup the new requestAnimationFrame()


    timeout = window.requestAnimationFrame(function () {
      // Run our scroll functions
      if ($(document).scrollTop() > offsetHeader + 200) {
        $('.header-container').addClass('header-fixed');
      } else {
        $('.header-container').removeClass('header-fixed');
      }
    });
  }, false);
  $(window).on('resize', function () {
    if (stickyMenu.length > 0) {
      var headerHeight = $('#js-sticked-menu').height();
      var headerWidth = $('#js-sticked-menu').width();
      var offsetHeader = $('#js-sticked-menu').offset().top;
      $('.wrap-sticky').css({
        width: headerWidth,
        height: headerHeight
      });
    }
  });
});