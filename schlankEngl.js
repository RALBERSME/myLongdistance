const problem = document.getElementById("problem");
const japan = document.getElementById("japan");
const wrapper = document.querySelector(".wrapper");
const wrapper2 = document.querySelector(".wrapper2");

setTimeout(() => {
  problem.style.animation = "showText  3s linear forwards";
}, 2000);
setTimeout(() => {
  wrapper.classList.remove("invisible");
}, 4000);
setTimeout(() => {
  wrapper2.classList.remove("invisible");
}, 6000);
setTimeout(() => {
  japan.style.animation = "showText  3s linear forwards";
}, 8000);

const text = document.querySelector(".text");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const container = document.querySelector(".container");
function changeScene() {
  text.style.animation = "addBgText 2s ease forwards";
  text2.style.animation = "addBgText2 2s ease forwards";
  text3.style.animation = "addBgText3 2s ease forwards";
  right.style.animation = "addBgRight 2s ease forwards";
  left.style.animation = "addBgLeft 2s ease forwards";
  container.style.animation = "addBgContainer 2s ease forwards";
  setTimeout(() => {
    text.innerHTML = `<h1>Let's take <br>a look at Japan!</h1>`;
    text.style.paddingTop = "55%";
    text.style.color = "white";
    document.querySelector(".middle").style.animation =
      "reduceWidth 3s linear forwards";
    document.querySelector("ul").style.animation = "moveUl 3s linear forwards";
  }, 2000);
}
