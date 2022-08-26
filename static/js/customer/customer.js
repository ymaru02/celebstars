function openOption(event, option) {
  var i, customer_content, option_btn;

  customer_content = $(".customer_content");
  for (i = 0; i < customer_content.length; i++) {
    customer_content[i].style.display = "none";
  }

  option_btn = $(".option_btn");
  for (i = 0; i < option_btn.length; i++) {
    option_btn[i].className = option_btn[i].className.replace(" active", "");
  }

  document.getElementById(option).style.display = "block";
  event.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
