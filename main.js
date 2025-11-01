const image = document.getElementById("pirate");
const cta = document.querySelector("#cta");
const cta2 = document.querySelector("#cta2");
const sprechblase = document.getElementById("sprechblase");
const sprechblase2 = document.getElementById("sprechblase2");
const body = document.querySelector("body");
function shipping() {
  image.setAttribute("src", "images/noodleShip.png");
  cta.classList.add("hide");
  cta2.classList.remove("hide");
  sprechblase.classList.add("hide");
  sprechblase2.classList.remove("hide");
  body.style.backgroundImage = "url(images/wave.png)";
  body.style.backgroundSize = "10%";
  document.getElementById("frame").classList.remove("hide");
}
