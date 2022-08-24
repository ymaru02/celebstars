function hidenScroll() {
  document.body.className = "";
}

$(document).ready(function () {
  $(".carousel-img").hover(function () {
    $(this).css("cursor", "pointer");
  });

  if ($(".profile-img").attr("src")) {
    $(".profile-container").css(
      "background-image",
      `url("${$(".profile-img").attr("src")}")`
    );
  } else {
    $(".profile-container").css(
      "background-image",
      `url("${$(".profile-img img").attr("src")}")`
    );
  }
  loadImg();
});

function loadImg() {
  $("#imglightbox img").each((idx, el) => {
    const div = document.createElement("div");
    div.classList.add("myImgSlides");
    const img = document.createElement("img");
    img.classList.add("pictureSize");
    img.src = el.src;
    div.append(img);
    $("#img-modal .modal-content").append(div);
  });
}
