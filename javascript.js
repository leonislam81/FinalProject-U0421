const btn = document.querySelector(".mobileMenuBtn");
const menu = document.querySelector(".destopMenu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const preloader = document.querySelector("#preloader");

window.addEventListener("load", load);

function load() {
  setInterval(function () {
    preloader.style.display = "none";
  }, 2000);
}
