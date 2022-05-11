let toggleNavbar = 0;
let menu = document.querySelector(".icon");
let menuSelect = document.querySelectorAll(".dropdown-menu, .dropdown-menu li");
let dropdown = document.querySelector(".dropdown-menu");
let container = document.querySelector(".container");
let nthChild = document.querySelector(".icon").children;

menu.addEventListener("click", toggleMenu);
window.addEventListener("resize", resetNavbar);

function toggleMenu() {
  if (toggleNavbar == 0) {
    openMenu();
  } else if (toggleNavbar == 1) {
    closeMenu();
  }
}

function openMenu() {
  menuSelect.forEach((element) => {
    element.style.display = "flex";
  });
  container.classList.add("paddingTop");
  toggleNavbar = 1;
}

function closeMenu() {
  menuSelect.forEach((element) => {
    element.style.display = "none";
  });
  container.classList.remove("paddingTop");
  toggleNavbar = 0;
}

function hamburgerMenu() {
  nthChild[0].classList.toggle("rotateLeft");
  nthChild[1].classList.toggle("rotateRight");
  nthChild[2].classList.toggle("middleHide");
}

function resetNavbar() {
  if (toggleNavbar == 1 && window.innerWidth > 600) {
    closeMenu();
    hamburgerMenu();
  }
}

function changeImage(img) {
  let preview = document.querySelector(".preview img");
  let text = document.querySelector(".text-box");
  preview.src = img.src;
  
  text.innerHTML = img.alt;
}
