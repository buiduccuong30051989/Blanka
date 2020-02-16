$(document).ready(function () {
  'use strict';

  var tpj = jQuery;
  var revapi8;
  tpj(document).ready(function () {
    if (tpj('#js-slider-home-01').revolution == undefined) {
      revslider_showDoubleJqueryError('#js-slider-home-01');
    } else {
      revapi8 = tpj('#js-slider-home-01').show().revolution({
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
        responsiveLevels: [1920, 992, 768, 576],
        gridwidth: [1200, 600, 600, 300],
        gridheight: [500, 960, 720, 468]
      });
    }
  });
});