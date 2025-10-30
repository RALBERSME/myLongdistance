const backgroundArray = [
  "https://cdn.pixabay.com/photo/2022/10/20/11/26/landscape-7534634_640.jpg",
  "https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_960_720.jpg",
  "https://cdn.pixabay.com/photo/2024/09/25/15/53/japan-9074037_640.jpg",
  "https://cdn.pixabay.com/photo/2023/11/17/16/54/boat-8394639_640.jpg",
  "https://cdn.pixabay.com/photo/2016/05/23/07/36/japanese-1409839_640.jpg",
  "https://cdn.pixabay.com/photo/2020/04/25/13/24/japanese-garden-5090793_640.jpg",
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
