function showText(num) {
  const top = document.getElementById(`top${num}`);
  const bottom = document.getElementById(`bottom${num}`);
  top.classList.add("hide");
  bottom.classList.remove("hide");
}
function hideText(num) {
  const top = document.getElementById(`top${num}`);
  const bottom = document.getElementById(`bottom${num}`);
  bottom.classList.add("hide");
  top.classList.remove("hide");
}
