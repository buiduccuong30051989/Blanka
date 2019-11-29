$(window).scroll(function() {
  var $Fade = document.getElementById("js-fade-elements");
  var windowHeight = $(window).height();
  var offsetFade = $($Fade).offset();
  var offsetTop = offsetFade.top;
  var scroll = $(window).scrollTop() + windowHeight;
  if (offsetTop - scroll < 0) {
    var opacity = Math.abs(offsetTop - scroll - windowHeight / 2) / 1000;
    $($Fade).css({
      opacity: opacity
    });
  }
});
