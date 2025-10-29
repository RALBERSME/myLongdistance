const backgroundArray = [
  "https://cdn.pixabay.com/photo/2022/10/20/11/26/landscape-7534634_640.jpg",
  "https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_960_720.jpg",
  "https://cdn.pixabay.com/photo/2024/09/25/15/53/japan-9074037_640.jpg",
  "https://cdn.pixabay.com/photo/2023/11/17/16/54/boat-8394639_640.jpg",
];
const container = document.querySelector(".container");
function changeBg() {
  let randomNum = Math.floor(Math.random() * 4);
  container.style.backgroundImage = `url(${backgroundArray[randomNum]})`;
}
