const body = document.querySelector("body");
const button = document.querySelector(".button");


const arr = ["Karol", "Kamila", 54, 677, "Marta", 87];

button.addEventListener("click", () => {    //DODAJE EVENT NA BUTTONA
  const ul = document.createElement("ul");  //TWORZĘ ELEMENT <UL></UL>
  arr.forEach(function(item) {              //ITERUJĘ TO TABLICY (ITEM TO KAŻDY ELEMENT TABLICY Z OSOBNA NP. "KAROL", 54 ITD...)
    const li = document.createElement("li"); //TWORZĘ LI DO LISTY
    if (isNaN(item)) {                       // JEŚLI ITEM NIE JEST NUMEREM...
      li.style.color = "green";              // ...DOSTAJE KOLOR ZIELONY
    } else {                                 //INACZEJ...
      li.style.color = "blue";              // NIEBIESKI
    }
      li.textContent = item;                //DODAJĘ ITEM JAKO ZAWARTOŚĆ LI
      ul.appendChild(li);                   // DODOJĘ LI DO UL
      body.appendChild(ul);                 // I NA KOŃCU UL DO BODY
  })
  }
)


