function backProfile() {
  const link = window.location.href.split("/");
  link.splice(3, 0, "profile");
  location.href = `${link.join("/")}`;
}
