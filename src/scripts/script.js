"use strict";

const carouselSlide = document.querySelector(".slider");
const slide = document.querySelectorAll(".slide");

let counter = 0;
const slideWidth = slide[0].clientWidth;
const size = slide.length;

function changeImage() {
  if (counter === size) {
    counter = 0;
  } else {
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    counter += 1;
  }
}

setInterval(changeImage, 3000);

const topHeader = document.querySelector(".top-header");
window.addEventListener("scroll", function () {
  if (this.scrollY === 0) {
    topHeader.style.removeProperty("position");
  } else {
    topHeader.style.position = "fixed";
  }
});

const exploreBtn = document.querySelector(".explore-btn span");
const productSection = document.querySelector(".product-section");

exploreBtn.addEventListener("click", function () {
  productSection.scrollIntoView({ behavior: "smooth" });
});
