function hiddenScroll() {
  document.body.className = "";
}

// Open the Modal
function openModal(target) {
  if (target === "img") {
    document.getElementById("img-modal").style.display = "block";
  } else {
    document.getElementById("video-modal").style.display = "block";
  }
  document.body.classList.add("light-box");
}

// Close the Modal
function closeModal(target) {
  if (target === "img") {
    document.getElementById("img-modal").style.display = "none";
  } else {
    document.getElementById("video-modal").style.display = "none";
  }
  document.body.classList.remove("light-box");
}

function showImgSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myImgSlides");
  if (n > slides.length) {
    slideImgIndex = 1;
  }
  if (n < 1) {
    slideImgIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideImgIndex - 1].style.display = "block";
}

var slideImgIndex = 1;
showImgSlides(slideImgIndex);

// Next/previous controls
function plusImgSlides(n) {
  showImgSlides((slideImgIndex += n));
}

// Thumbnail image controls
function currentImgSlide(n) {
  showImgSlides((slideImgIndex = n));
}

function showVideoSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myVideoSlides");
  if (n > slides.length) {
    slideVideoIndex = 1;
  }
  if (n < 1) {
    slideVideoIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideVideoIndex - 1].style.display = "block";
}

var slideVideoIndex = 1;
showVideoSlides(slideVideoIndex);

// Next/previous controls
function plusVideoSlides(n) {
  showVideoSlides((slideVideoIndex += n));
}

// Thumbnail image controls
function currentVideoSlide(n) {
  showVideoSlides((slideVideoIndex = n));
}

$(document).ready(function () {
  $(".inner img").hover(function () {
    $(this).css("cursor", "pointer");
  });
});
