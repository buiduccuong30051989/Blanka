$(document).ready(function () {
  'use strict';

  var tpj = jQuery;
  var revapi8;
  tpj(document).ready(function () {
    if (tpj('#js-slider-home-02').revolution == undefined) {
      revslider_showDoubleJqueryError('#js-slider-home-02');
    } else {
      revapi8 = tpj('#js-slider-home-02').show().revolution({
        sliderType: 'standard',
        jsFileLocation: '../revolution-slider/revolution/js/',
        sliderLayout: 'fullwidth',
        delay: 9000,
        navigation: {
          arrows: {
            enable: true,
            style: 'uranus'
          }
        },
        responsiveLevels: [1920, 992, 768, 576],
        gridwidth: [1200, 600, 600, 300],
        gridheight: [590, 400, 400, 400]
      });
    }
  });
});