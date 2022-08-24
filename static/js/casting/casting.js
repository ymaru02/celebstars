$(document).ready(function () {
  $(".card-bookmark").on("click", function () {
    if ($(this).hasClass("bi-bookmark")) {
      $(this).addClass("bi-bookmark-star-fill");
      $(this).removeClass("bi-bookmark");
    } else {
      $(this).addClass("bi-bookmark");
      $(this).removeClass("bi-bookmark-star-fill");
    }
  });
});
