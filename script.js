const closeMenu = document.querySelector(".close-dropdown");
const openMenu = document.querySelector("#menu-drop");
const menu = document.querySelector("nav");

function toggleMenu() {
  menu.classList.toggle("active");
}

function openDrop() {
  toggleMenu();
}

function closeDrop() {
  toggleMenu();
  openMenu.checked = false;
}

openMenu.addEventListener("click", openDrop);
closeMenu.addEventListener("click", closeDrop);
