const car = document.querySelector(".car");
const counter = document.querySelector(".counter");
let clickCount = 1

car.addEventListener("click", click);

function click(e) {
  counter.textContent = clickCount++
  car.style.color = "blue"
}