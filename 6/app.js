const selectTime = document.querySelector('#time-section');
const selectHourRate = document.querySelector('#rate-section');
const results = document.querySelector(".results");
const button = document.querySelector(".calculate");

// selectTime.addEventListener("change", ()=> {
//   console.log("changed")
// })

// selectHourRate.addEventListener("change", ()=> {
//   console.log("changed")
// })

button.addEventListener("click", ()=> {
  if (selectTime.value == "full time") {
    let result = 160;
    results.textContent = result * parseInt(selectHourRate.value)
  } else {
    let result = 80;
    results.textContent = result * parseInt(selectHourRate.value)
    
  }
  
  // console.log(selectTime.value + selectHourRate.value)
})


