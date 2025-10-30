const shelf = document.getElementById("shelf");

function moveShelf() {
  console.log("shelf", shelf);
  shelf.style.animation = "turnShelf 3s ease-in-out forwards";
  setTimeout(() => {
    document.querySelector(".library").style.visibility = "visible";
    document.querySelector("#nextPage").style.visibility = "visible";
  }, 2000);
}
