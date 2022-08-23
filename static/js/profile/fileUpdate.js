function fileChange() {
  const fullImg = document.querySelector(".profile-container");
  const fileImg = document.querySelector(".profile-file");
  console.log();

  const img = document.querySelector(".profile-img img");
  img.src = `/static/img/artistImg/hannana/${fileImg.value.split("\\")[2]}`;
  console.log(fullImg.style.backgroundImage);

  fullImg.style.backgroundImage = `url(/static/img/artistImg/hannana/${
    fileImg.value.split("\\")[2]
  })`;
}
