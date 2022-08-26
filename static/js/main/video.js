$(document).ready(function () {
  $(".video").on("ended", function () {
    if ($(this).hasClass("play1")) {
      $(this).removeClass("play1");
      $(this).addClass("play2");
      $(".video").attr("src", "/static/video/celebstars2.mp4");
    } else {
      $(this).removeClass("play2");
      $(this).addClass("play1");
      $(".video").attr("src", "/static/video/celebstars1.mp4");
    }
  });
});
