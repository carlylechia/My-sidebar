const menuBtn = document.querySelector(".menu-btn");
const sideBar = document.querySelector(".sidebar");
const closeMenuBtn = document.querySelector(".close-menu-btn");

// function to show menu
const showMenu = () => sideBar.classList.add("show-menu");

// function to close menu
const closeMenu = () => sideBar.classList.remove("show-menu");

// add 'click' event to menu button and close button
menuBtn.addEventListener("click", showMenu);

closeMenuBtn.addEventListener("click", closeMenu);

// close menu when clicked outside of sidebar

function closeSideMenu(e) {
  const isClickedOutside =
    sideBar.contains(e.target) || menuBtn.contains(e.target);

  if (!isClickedOutside) {
    sideBar.classList.remove("show-menu");
  }
}

document.addEventListener("click", closeSideMenu);