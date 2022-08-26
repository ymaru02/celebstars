function openOption(event, option) {
  var i, community_content, option_btn;

  community_content = $(".community_content");
  for (i = 0; i < community_content.length; i++) {
    community_content[i].style.display = "none";
  }

  option_btn = $(".option_btn");
  for (i = 0; i < option_btn.length; i++) {
    option_btn[i].className = option_btn[i].className.replace(" active", "");
  }

  document.getElementById(option).style.display = "block";
  event.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
