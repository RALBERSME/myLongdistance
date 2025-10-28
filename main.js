const image = document.getElementById("pirate");
const cta = document.querySelector("#cta");
const cta2 = document.querySelector("#cta2");
const sprechblase = document.getElementById("sprechblase");
const sprechblase2 = document.getElementById("sprechblase2");
const body = document.querySelector("body");
function shipping() {
  image.setAttribute(
    "src",
    "https://cdn.pixabay.com/photo/2023/02/07/21/09/ai-generated-7775168_640.png"
  );
  cta.classList.add("hide");
  cta2.classList.remove("hide");
  sprechblase.classList.add("hide");
  sprechblase2.classList.remove("hide");
  body.style.backgroundImage =
    "url(https://cdn.pixabay.com/photo/2024/03/24/05/37/asian-woman-8652456_640.jpg)";
  body.style.backgroundSize = "10%";
}
