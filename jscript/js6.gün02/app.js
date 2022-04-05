const bars = document.querySelector(".btn");
const kapat = document.querySelector(".close-btn");
const gizli = document.querySelector(".gizli");

bars.addEventListener("click", function () {
  gizli.classList.toggle("goster");
});

kapat.addEventListener("click", function () {
  gizli.classList.remove("goster");
});
