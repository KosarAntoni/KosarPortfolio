const bodyElement = document.querySelector("body");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const minimizeButtonRight = rightButton.querySelector(".minimize-button");
const minimizeButtonLeft = leftButton.querySelector(".minimize-button");
const projectCarousel = document.querySelector(".projects-container")

const flkty = new Flickity(projectCarousel,
  {
    cellAlign: "center",
    prevNextButtons: false,
    pageDots: false
  }
);

leftButton.addEventListener("click", () => bodyElement.classList.add("left-part"));
minimizeButtonLeft.addEventListener("click", (event) => {
  event.stopPropagation();
  bodyElement.classList.remove("left-part");
});

rightButton.addEventListener("click", () => {
  bodyElement.classList.add("right-part")
});
minimizeButtonRight.addEventListener("click", (event) => {
  event.stopPropagation();
  flkty.select(0);
  bodyElement.classList.remove("right-part");
});

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
