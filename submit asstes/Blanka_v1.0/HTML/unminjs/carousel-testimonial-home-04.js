$(document).ready(function () {
  'use strict';

  var sync1 = $('#sync1');
  var sync2 = $('#sync2');
  var syncedSecondary = true;
  sync1.owlCarousel({
    items: 1,
    nav: false,
    autoplay: true,
    dots: false,
    loop: true,
    autoplayTimeout: 9000,
    mouseDrag: false,
    touchDrag: false,
    autoplayHoverPause: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>']
  }).on('changed.owl.carousel', syncPosition);
  sync2.on('initialized.owl.carousel', function () {
    sync2.find('.owl-item').eq(0).addClass('current');
  }).owlCarousel({
    items: 1,
    dots: false,
    nav: false,
    margin: 10,
    slideBy: 1,
    autoplayHoverPause: true,
    autoWidth: true
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }

    if (current > count) {
      current = 0;
    } //end block


    sync2.find('.owl-item').removeClass('current').eq(current).addClass('current');
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();

    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }

    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }

  sync2.on('click', '.owl-item', function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
});