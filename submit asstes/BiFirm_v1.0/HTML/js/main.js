$(document).ready(function () {
  'user strict'; // popup search

  $('.js-search-popup-btn').on('click', function () {
    $('body').addClass('search-open');
  });
  $('.js-search-popup-close').on('click', function (e) {
    $('body').removeClass('search-open');
    e.stopPropagation();
  }); // Carousel

  $(document).keypress(function (e) {
    if (e.keyCode === 27) {
      $('body').removeClass('search-open');
    }
  });
  var $carousel = $('.carousel');

  if ($carousel.length > 0) {
    $carousel.each(function () {
      var elem = $(this);
      elem.options = {
        nav: elem.attr('data-arrows'),
        dots: elem.attr('data-dots'),
        navText: ['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'],
        itemElement: elem.attr('data-item') || 'div',
        autoplay: elem.attr('data-autoplay'),
        autoplayTimeout: elem.attr('data-autoplay-timeout') || 5000,
        autoplayHoverPause: elem.attr('data-hoverpause'),
        autoWidth: elem.attr('data-auto-width'),
        loop: elem.attr('data-loop'),
        margin: elem.attr('data-margin') || 20,
        items: elem.attr('data-items') || 4,
        itemsLg: elem.attr('data-items-lg'),
        itemsMd: elem.attr('data-items-md'),
        itemsSm: elem.attr('data-items-sm'),
        itemsXs: elem.attr('data-items-xs'),
        smartSpeed: 350,
        fluidSpeed: 260,
        video: elem.attr('data-video'),
        animateIn: elem.attr('data-animate-in'),
        animateOut: elem.attr('data-animate-out')
      };
      elem.options.itemsLg = elem.options.itemsLg || Math.min(Number(elem.options.items), Number(4));
      elem.options.itemsMd = elem.options.itemsMd || Math.min(Number(elem.options.itemsLg), Number(3));
      elem.options.itemsSm = elem.options.itemsSm || Math.min(Number(elem.options.itemsMd), Number(2));
      elem.options.itemsXs = elem.options.itemsXs || Math.min(Number(elem.options.itemsSm), Number(1));
      elem.responsive = {
        0: {
          items: Number(elem.options.itemsXs)
        },
        576: {
          items: Number(elem.options.itemsSm)
        },
        768: {
          items: Number(elem.options.itemsMd)
        },
        992: {
          items: Number(elem.options.itemsLg)
        },
        1200: {
          items: Number(elem.options.items)
        }
      };
      elem.owlCarousel({
        nav: elem.options.nav == 'false' ? false : true,
        dots: elem.options.dots == 'false' ? false : true,
        navText: elem.options.navText,
        itemElement: elem.options.itemElement,
        autoplay: elem.options.autoplay == 'true' ? true : false,
        autoplayTimeout: elem.options.autoplayTimeout,
        autoplayHoverPause: elem.options.autoplayHoverPause == 'true' ? true : false,
        autoWidth: elem.options.autoWidth == 'true' ? true : false,
        loop: elem.options.loop == 'true' ? true : false,
        margin: Number(elem.options.margin),
        smartSpeed: Number(elem.options.smartSpeed),
        fluidSpeed: Number(elem.options.fluidSpeed),
        video: elem.options.video == 'true' ? true : false,
        animateIn: elem.options.animateIn,
        animateOut: elem.options.animateOut,
        rtl: elem.options.rtl,
        onInitialize: function onInitialize(event) {
          elem.addClass('carousel-loaded owl-carousel');
        },
        responsive: elem.responsive
      });
    });
  } // tooltip


  $('[data-toggle="tooltip"]').tooltip(); // global select

  $('.js-select').selectpicker(); // Add smooth scrolling on all links to

  $("#js-sidebar-elements-link a[href^='#']").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault(); // Store hash

      var hash = this.hash; // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if

  });
});