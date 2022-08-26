function fileChange(e) {
  const fullImg = document.querySelector(".profile-container");
  const img = document.querySelector(".profile-img img");

  img.src = URL.createObjectURL(e.files[0]);
  fullImg.style.backgroundImage = `url("${URL.createObjectURL(e.files[0])}")`;
}
