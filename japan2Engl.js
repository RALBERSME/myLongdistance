const link = document.getElementById("link");

link.addEventListener("mouseenter", (e) => {
  link.innerHTML =
    "We wish you a pleasant flight to Japan!<br/>日本までの快適なフライトをお祈りします！";
});
link.addEventListener("mouseleave", (e) => {
  link.innerHTML = "➽klicke hier für weiter";
});
