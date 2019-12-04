const input = document.querySelector("#number");
const container = document.querySelector(".container");

input.addEventListener("keyup", ()=> {              //ODPALA SIĘ EVENT JAK URZYTKOWNIK PUSZCZA KLAWISZ
  console.log(input.value)
  if (input.value == 511) {                         //JEŚLI WARTOŚĆ INPUTA RÓWNA SIĘ 511 POJAWIA SIĘ ZIELONA WIADOMOŚĆ....
    let message = document.createElement("p");
    message.style.color = "green";
    message.textContent = "Poprawnie"
    container.appendChild(message)
  } else {                                                              //INACZEJ WIADOMOŚĆ CZERWONA
        if (container.lastElementChild.classList.contains('error')) {   //JEŚLI JUŻ JEST WIDOMOŚĆ CZERWONA TO SIĘ USUWA I POJAWIA NA NOWO
          let error = document.querySelector(".error");
          error.remove();
          let message = document.createElement("p");
          message.style.color = "red";
          message.classList.add("error")
          message.textContent = "Spróbuj jeszcze raz"
          container.appendChild(message)
        } else {                                            //...A JAK NIE MA TO POPROSTU SIĘ POJAWIA
          let message = document.createElement("p");
          message.style.color = "red";
          message.classList.add("error")
          message.textContent = "Spróbuj jeszcze raz"
          container.appendChild(message)
        }
        
      }                                      
    
  
})


