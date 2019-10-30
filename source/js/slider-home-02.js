$(document).ready(function () {
  'user strict';

  var $carouselIntro = $('.js-owl-intro');

  if ($carouselIntro.length > 0) {
    $carouselIntro.each(function () {
      var owl = $(this);

      function setAnimation(_elem, _InOut) {
        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

        _elem.each(function () {
          var $elem = $(this);
          var $animationType = 'animated ' + $elem.data('animation-' + _InOut);
          var $animationDelay = $elem.data('animation-delay');
          $(this).css('animation-delay', $animationDelay);
          $elem.addClass($animationType).one(animationEndEvent, function () {
            $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
          });
        });
      }

      owl.on('initialize.owl.carousel initialized.owl.carousel ' + 'initialize.owl.carousel initialize.owl.carousel ', function (event) {
        var $currentItem = $('.owl-item', owl).eq(event.item.index);
        var $elemsToanim = $currentItem.find('[data-animation-in]');
        setAnimation($elemsToanim, 'in');
      });
      owl.owlCarousel({
        loop: true,
        margin: 0,
        navSpeed: 500,
        nav: true,
        items: 1,
        animateIn: 'fadeIn',
        autoplay: true,
        autoplayTimeout: 9000,
        mouseDrag: false,
        touchDrag: false,
        autoplayHoverPause: true,
        navText: ['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>']
      });
      owl.on('changed.owl.carousel', function (event) {
        var $currentItem = $('.owl-item', owl).eq(event.item.index);
        var $elemsToanim = $currentItem.find('[data-animation-in]');
        setAnimation($elemsToanim, 'in');
      });
    });
  }
});