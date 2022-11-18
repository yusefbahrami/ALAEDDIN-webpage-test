const navBar = document.querySelector(".nav-bar");
const humburgerMenuButton = document.querySelector(".humburger");
function toggle() {
  navBar.classList.toggle("show-menu");
  if (navBar.classList.contains("show-menu")) {
    humburgerMenuButton.style.display = "none";
  }
}
