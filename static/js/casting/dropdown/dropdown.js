/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.querySelector(".casting-icon-cover").classList.toggle("rotation");
}
function locationClick() {
  document.getElementById("locationDropdown").classList.toggle("show");
  document.querySelector(".lacationicon").classList.toggle("rotation");
}

function dropdownClose(event) {
  if (
    event.target === document ||
    (!event.target?.matches(".casting-btn") &&
      !event.target.parentNode?.matches(".casting-btn") &&
      !event.target.parentNode.parentNode?.matches(".casting-btn"))
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
  if (
    event.target === document ||
    (!event.target?.matches(".location-btn") &&
      !event.target.parentNode?.matches(".location-btn"))
  ) {
    var dropdowns = document.getElementsByClassName(
      "location-dropdown-content"
    );
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
    document.querySelector(".lacationicon").classList.remove("rotation");
  }
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  dropdownClose(event);
};
window.onscroll = function (event) {
  dropdownClose(event);
};

$("#myDropdown li").on("click", function () {
  $(".casting-title").text($(this).text());
});

$(".location-dropdown-content li").on("click", function () {
  $(".casting-dropdown .select-item").text($(this).text());
});
