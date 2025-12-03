function showTips() {
  document.getElementById("myAudio").play();
  document.querySelector(".solution").style.animation =
    "showSolution 2s ease forwards";
  document.querySelector(".leave").style.animation =
    "showSolution 2s ease forwards";
}
