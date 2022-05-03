let toggleNavbar = 0;
let menu = document.querySelector(".icon");
let menuSelect = document.querySelectorAll(".dropdown-menu, .dropdown-menu li");
let navbar = document.querySelector(".navbar");
let container = document.querySelector(".container");
let body = document.querySelector("body");

menu.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (toggleNavbar == 0) {
    menuSelect.forEach((element) => {
      element.style.display = "flex";
    });
    menu.innerHTML = "&#10005;";
    navbar.style.backgroundColor = "rgb(0, 114, 90)";
    container.style.paddingTop = "220px";
    toggleNavbar = 1;
  } else if (toggleNavbar == 1) {
    menuSelect.forEach((element) => {
      element.style.display = "none";
    });
    menu.innerHTML = "&#9776;";
    navbar.style.backgroundColor = "rgb(0, 179, 140)";
    container.style.paddingTop = "20px";
    toggleNavbar = 0;
  }

  //body.classList.toggle("blur");
}
