function lazyload() {
  var lazyloadImages = document.querySelectorAll("img.lazy");
  var scrollTop = window.scrollY;
  // console.log(scrollTop);
  lazyloadImages.forEach(function (img) {
    if (img.offsetTop < window.innerHeight + scrollTop - 100) {
      img.src = img.dataset.src;
      img.classList.remove("lazy");
    }
  });
  if (lazyloadImages.length == 0) {
    document.removeEventListener("scroll", lazyload);
    window.removeEventListener("resize", lazyload);
    window.removeEventListener("orientationChange", lazyload);
  }
}
document.addEventListener("scroll", lazyload);
window.addEventListener("resize", lazyload);
window.addEventListener("orientationChange", lazyload);

$(document).ready(function () {
  lazyload();
});
