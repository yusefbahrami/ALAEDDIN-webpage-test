const navBar = document.querySelector(".nav-bar");
const humburgerMenuButton = document.querySelector(".humburger");
function toggle() {
  navBar.classList.toggle("show-menu");
  navBar.classList.toggle("disactive");
  if (navBar.classList.contains("show-menu")) {
    humburgerMenuButton.style.display = "none";
  } else {
    humburgerMenuButton.style.display = "block";
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 480 && !navBar.classList.contains("show-menu")) {
    humburgerMenuButton.style.display = "none";
  } else if (
    window.innerWidth <= 480 &&
    !navBar.classList.contains("show-menu")
  ) {
    humburgerMenuButton.style.display = "block";
  }
});
