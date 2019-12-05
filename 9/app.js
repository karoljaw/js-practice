function code(word) {
  wordArr = word.split("");
 
  for (let i = 0; i < wordArr.length; i++)
  if (wordArr[i] == 'a') {
    wordArr[i] = 'w';
  }
  else if (wordArr[i] == 'i') {
    wordArr[i] = 'z';
  }
  else if (wordArr[i] == 'o') {
    wordArr[i] = 'x';
  }
 
  return wordArr.join("");
      
}

console.log(code("anna i ola"))

