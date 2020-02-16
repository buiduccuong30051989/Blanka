$(document).ready(function () {
  'use strict';

  var tpj = jQuery;
  var revapi8;
  tpj(document).ready(function () {
    if (tpj('#js-home03-slider').revolution == undefined) {
      revslider_showDoubleJqueryError('#js-home03-slider');
    } else {
      revapi8 = tpj('#js-home03-slider').show().revolution({
        sliderType: 'standard',
        jsFileLocation: '../revolution-slider/revolution/js/',
        sliderLayout: 'fullscreen',
        delay: 9000,
        fullScreenOffsetContainer: '.header-container',
        navigation: {
          arrows: {
            enable: true,
            style: 'uranus'
          }
        },
        responsiveLevels: [1920, 992, 768, 576],
        gridwidth: [1200, 600, 600, 300],
        gridheight: [500, 960, 720, 468]
      });
    }
  });
});