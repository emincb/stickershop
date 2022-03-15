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
