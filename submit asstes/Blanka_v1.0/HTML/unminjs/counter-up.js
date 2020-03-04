jQuery(document).ready(function ($) {
  'use strict';

  $(window).on('resize scroll', function () {
    $('.js-counter-up').each(function () {
      if ($(this).isInViewport()) {
        var originValue = $(this).text();
        var isComma = /[0-9]+,[0-9]+/.test(originValue);
        var unit = $(this).attr('data-unit') || "";
        var value = originValue.replace(/,/g, '');
        $(this).removeClass('js-counter-up').prop('Counter', 0).animate({
          Counter: value
        }, {
          duration: 4000,
          easing: 'swing',
          step: function step(now) {
            var formatter = new Intl.NumberFormat('en-US');

            if (isComma) {
              $(this).text(formatter.format(Math.ceil(now)) + unit);
            } else {
              $(this).text(Math.ceil(now) + unit);
            }
          }
        });
      }
    });
  });
});