(function ($) {
  $(document).ready(function () {
    "use strict";

    $(".animsition").animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 1500,
      outDuration: 800,
      linkElement: '.animsition-link',
      // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
      loading: true,
      loadingParentElement: '.mm-page',
      //animsition wrapper element because we use mm menu
      loadingClass: 'animsition-loading',
      // can be a custom class with custom animation but
      // must be direct child of '.mm-page'
      loadingInner: '',
      // e.g '<img src="loading.svg" />'
      timeout: true,
      timeoutCountdown: 1000,
      onLoadEvent: true,
      browser: ['animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay: false,
      overlayClass: 'animsition-overlay-slide',
      overlayParentElement: 'body',
      transition: function transition(url) {
        window.location.href = url;
      }
    });
  });
})(jQuery);