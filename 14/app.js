let input = document.querySelector(".input");
let inputVal = document.querySelector(".input").value;
console.log(input);

input.addEventListener("keyup", getInput);

function getInput(e) {
 console.log("hello")
}