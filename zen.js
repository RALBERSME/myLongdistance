const backgroundArray = [
  "images/landscape.jpg",
  "images/sunset.jpg",
  "images/torSee.jpg",
  "images/boat.jpg",
  "images/seeGarten.jpg",
  "images/rose.jpg",
];
const container = document.querySelector(".container");
function changeBg() {
  let randomNum = Math.floor(Math.random() * 6);
  container.style.backgroundImage = `url(${backgroundArray[randomNum]})`;
}
const info = document.querySelector(".info");
function showText() {
  info.style.animation = "showInfo 2s ease forwards";
}
function hideText() {
  info.style.animation = "hideInfo 2s ease forwards";
}
