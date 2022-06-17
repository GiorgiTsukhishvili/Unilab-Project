"use strict";

const menu = document.querySelector(".fa-bars");
const movingMenu = document.querySelector(".mobile-menu");

menu.addEventListener("click", function () {
  movingMenu.classList.add("active-menu");
});

const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", function () {
  movingMenu.classList.remove("active-menu");
  overlay.classList.add("hidden");
});
