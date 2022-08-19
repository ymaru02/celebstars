$(".back_to_top").on("click", function (e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: 0 }, 200);
});
$(window).on("scroll", function () {
  if ($(document).scrollTop() > 100) {
    $(".back_to_top").addClass("show");
  } else {
    $(".back_to_top").removeClass("show");
  }
});
