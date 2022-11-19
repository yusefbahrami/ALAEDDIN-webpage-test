const imgLogo = document.querySelector(".img-logo");
const imgProfile = document.querySelector(".profile-image");
window.onload = async () => {
  const result = await fetch("./assets/IMG_20221024_160602_501.jpg");
  if (result.status == 200) {
    imgLogo.setAttribute("src", result.url);
    imgProfile.setAttribute("href", result.url);
    document.body.style.background = `linear-gradient(rgba(13, 71, 83, 78%), rgba(13, 71, 83, 78%)),
    url("./assets/IMG_20221024_160602_501.jpg") center center/cover fixed`;
  }
};
