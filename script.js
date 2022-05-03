let menu = document.querySelector(".icon");
let menuSelect = document.querySelectorAll(".dropdown-menu, .dropdown-menu li");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", menuClick);

function menuClick(){
    menuSelect.forEach(element => {
        element.style.display = "grid";
    });
    navbar.style.backgroundColor = "rgb(0, 114, 90)";
}
