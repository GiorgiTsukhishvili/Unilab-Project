"use strict";

const menu = document.querySelector(".fa-bars");
const movingMenu = document.querySelector(".mobile-menu");

menu.addEventListener("click", function () {
  movingMenu.classList.add("active-menu");
});
