/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/
const output = document.getElementById('output'); 

let num1 = parseInt(prompt("Inserisci il primo numero"));
while(isNaN(num1)){
  alert("Inserire un numero");
  num1 = parseInt(prompt("Inserisci il primo numero"));
}
let num2 = parseInt(prompt("Inserisci il secondo numero"));
while(isNaN(num2)){
  alert("Inserire un numero");
  num2 = parseInt(prompt("Inserisci il secondo numero"));
}



if(num1 > num2){
  output.innerHTML = "Il numero maggiore è " + num1;
}
else if(num2 > num1){
  output.innerHTML = "Il numero maggiore è " + num2;
}
else{
  output.innerHTML = "I numeri sono uguali";
}