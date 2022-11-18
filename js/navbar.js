const navBar = document.querySelector(".nav-bar");
const humburgerMenuButton = document.querySelector(".humburger");
function toggle() {
  navBar.classList.toggle("show-menu");
  humburgerMenuButton.style.display = "block";
  if (navBar.classList.contains("show-menu")) {
    humburgerMenuButton.style.display = "none";
  }
}
