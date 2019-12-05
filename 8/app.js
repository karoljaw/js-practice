function showAllEven(number) {
  let arr = [];
  if (number > 0) {                          //IDZIE DALEJ JEŚLI DOSTARCZONA LICZBA JEST WIĘKSZA OD ZERA
    for (let i = 1; i <= number; i++) {      //ITERUJE PO DOSTARCZONEJ LICZBIE
    if (i%2 == 0) {                          //JEŚLI LICZBA JEST PODZIELNA PRZEZ 2 ZOSTAJE DODANA DO TABLICY
      arr.push(i)
    }
  }
  }
  
  return arr;
}


console.log(showAllEven(40));


