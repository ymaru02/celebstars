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
function ageClick() {
  document.getElementById("ageDropdown").classList.toggle("show");
  document.querySelector(".ageicon").classList.toggle("rotation");
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
    document.querySelector(".casting-icon-cover")?.classList.remove("rotation");
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

function ageRangeClose() {
  var dropdowns = document.getElementsByClassName("age-dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains("show")) {
      openDropdown.classList.remove("show");
    }
  }
  document.querySelector(".ageicon").classList.remove("rotation");
}

function ageApply() {
  var textAge = document.getElementById("age-text");
  var startAge = document.getElementById("start-age").innerText;
  var endAge = document.getElementById("end-age").innerText;

  if (startAge == "0" && endAge == "100") {
    textAge.innerText = "전체";
  } else if (startAge == "0" && endAge == "10") {
    textAge.innerText = "유아";
  } else if (startAge == "10" && endAge == "20") {
    textAge.innerText = "10대";
  } else if (startAge == "20" && endAge == "30") {
    textAge.innerText = "20대";
  } else if (startAge == "30" && endAge == "40") {
    textAge.innerText = "30대";
  } else if (startAge == "40" && endAge == "50") {
    textAge.innerText = "40대";
  } else if (startAge == "50" && endAge == "60") {
    textAge.innerText = "50대";
  } else if (startAge == "60" && endAge == "70") {
    textAge.innerText = "60대";
  } else if (startAge == "70" && endAge == "80") {
    textAge.innerText = "70대";
  } else if (startAge == "80" && endAge == "90") {
    textAge.innerText = "80대";
  } else if (startAge == "90" && endAge == "100") {
    textAge.innerText = "90대";
  } else {
    textAge.innerText = `${startAge} 이상 ${endAge} 미만`;
  }
  ageRangeClose();
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  dropdownClose(event);
};
window.onscroll = function (event) {
  dropdownClose(event);
  ageRangeClose();
};

$("#myDropdown li").on("click", function () {
  $(".casting-title").text($(this).text());
});

$(".location-dropdown-content li").on("click", function () {
  $("#gender").text($(this).text());
});
