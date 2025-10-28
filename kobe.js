const text = document.querySelector(".text");
const postkarte = document.querySelector(".postkarte");
const white = document.querySelector(".white");
const logo = document.querySelector("#logo");
const kobe = document.querySelector("#kobe");
const message = document.querySelector("#message");
setTimeout(() => {
  text.style.animation = "showText 3s linear forwards";
}, 2000);

function showPostcard() {
  text.classList.add("hide");
  postkarte.style.animation = "getPost 3s linear forwards";
  setTimeout(() => {
    white.style.animation = "pushWhite  3s linear forwards";
  }, 2000);
  setTimeout(() => {
    logo.style.animation = "pushLogo  3s linear forwards";
    kobe.style.animation = "pushLogo  3s linear forwards";
  }, 4000);
  setTimeout(() => {
    message.style.animation = "pushMessage  3s linear forwards";
  }, 6000);
}
