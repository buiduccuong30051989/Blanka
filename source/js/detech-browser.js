$(document).ready(function() {
  'user strict'; // popup search

  function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      return true;
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      var rv = ua.indexOf('rv:');
      return true;
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
      return true;
    }
    return false;
  }

  if (detectIE()) {
    $('body').addClass('ie');
    var $div = $('<div><h1>Sorry for this inconvenience, We are not support IE in this verision<br></br>I will be update to support IE in next verision, thank you!</h1></div>').appendTo('body');
    $div.attr('class', 'overlay-browser-not-support');
  }
});
