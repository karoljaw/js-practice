
let textArea = document.querySelector('#words');
let select = document.querySelector('#rate-section')



// console.log(wordsArr)

textArea.addEventListener('blur', ()=> {                  //W MOMENCIE ODKLIKNIĘCIA Z POLA TEKSTOWEGO URUCHAMIA SIĘ EVENT
  let words = document.querySelector('#words').value;
  while(select.firstElementChild) {                       //PĘTLA BĘDZIE SIĘ WYKONYWAĆ DOPUKI ISTNIEJE PIERWSZE DZIECKO ELEMENTU SECTION
    select.removeChild(select.firstChild);
  }
  let wordsArr = words.split(" ");                        //ZAMIENA STRING OTRZYMANY Z POLA TEKSTOWEGO NA ARRAY
  
  let option = document.createElement("option");          //TWORZENIE NOWEJ OPCJI Z ROZWIJANEGO MENU
    option.textContent = "--Wybierz numer--";                              
    select.appendChild(option);                           //DODAWANIE OPCJI PIERWSZEJ "WYBIERZ NUMER"
                         
  wordsArr.forEach(function(word, id) {
    let option = document.createElement("option");        //TWORZENIE NOWEJ OPCJI DO ROZWIJANEGO MENU NA PODSTAWIE TABLICY
    option.textContent = id; 
    
    select.appendChild(option);  

  })
})

//TRZEBA JESZCZE ZROBIĆ TERAZ ŻEBY PO WYBORZE Z MENU POJAWIAŁO SIĘ SŁOWO


