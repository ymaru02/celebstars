var modal = document.getElementById("inquiry_box");
var btn = document.querySelector(".qa_btn");
var span = document.getElementsByClassName("close")[0];
var submit = document.querySelector("#inquiry_submit_btn");

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
submit.onclick = function () {
  modal.style.display = "none";
  Swal.fire("작성 완료!", "", "success");
};
