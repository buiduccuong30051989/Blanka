$(document).ready(function () {
  'use strict';

  var tpj = jQuery;
  var revapi8;
  tpj(document).ready(function () {
    if (tpj('#js-slider-home-05').revolution == undefined) {
      revslider_showDoubleJqueryError('#js-slider-home-05');
    } else {
      revapi8 = tpj('#js-slider-home-05').show().revolution({
        sliderType: 'standard',
        jsFileLocation: '../revolution-slider/revolution/js/',
        sliderLayout: 'fullscreen',
        delay: 9000,
        fullScreenOffsetContainer: '.header-container',
        navigation: {
          arrows: {
            enable: true,
            style: 'metis'
          }
        },
        responsiveLevels: [1920, 1200, 769, 576],

        /* [DESKTOP, LAPTOP, TABLET, SMARTPHONE] */
        gridwidth: [1140, 960, 720, 540]
        /* [DESKTOP, LAPTOP, TABLET, SMARTPHONE] */
        // gridheight: [590, 400, 400, 400]

      });
    }
  });
});