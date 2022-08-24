/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.querySelector(".casting-icon-cover").classList.toggle("rotation");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (
    !event.target.matches(".casting-btn") &&
    !event.target.parentNode?.matches(".casting-btn") &&
    !event.target.parentNode.parentNode?.matches(".casting-btn")
  ) {
    var dropdowns = document.getElementsByClassName("casting-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
    document.querySelector(".casting-icon-cover").classList.remove("rotation");
  }
};

$("li").on("click", function () {
  $(".casting-title").text($(this).text());
});
