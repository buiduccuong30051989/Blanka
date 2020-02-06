jQuery(document).ready(function($) {
  "use strict";
  autoPlayYouTubeModal();

  //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
  function autoPlayYouTubeModal() {
    var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function() {
      var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCauto = videoSRC + "?autoplay=1";
      $(theModal + " iframe").attr("src", videoSRCauto);
      $(theModal).on('hidden.bs.modal', function (e) {
        $(theModal + " iframe").attr("src", "");
      })
    });
  }
});
