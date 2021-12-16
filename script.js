"use strict";
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector(".menu");
const screen = window.innerWidth;
if (screen < 768) {
  hamburger.style.display = "inline-block";
}
hamburger.addEventListener("click", function () {
  menu.classList.toggle("active");
});
