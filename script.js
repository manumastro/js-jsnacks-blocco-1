/*
 JSnack 5
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/


let numbers = [], num;
const output = document.getElementById("output");

for(let i = 0; i < 6; i++){
  num = parseInt(prompt("Inserire un numero"));
  if(num % 2 !== 0){
    numbers.push(num);
  }
}
console.log(numbers);
output.innerHTML = `${numbers}`
