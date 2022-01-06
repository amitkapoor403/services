var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-list");

hamburger.addEventListener("click", toggleButton);

function toggleButton() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
