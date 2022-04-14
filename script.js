/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/


// con ciclo for
let somma = 0;
const array1 = [];

const output = document.getElementById("output");
 
for(let i = 0; i < 5; i++){
  array1[i] = parseInt(prompt("For----Inserire un numero"));
  somma = somma + array1[i];  
}

output.innerHTML = "La somma dei numeri è : " + somma;



// con ciclo while
somma = 0;
array1.length = 0;

let c = 0;
while(c < 5){
  array1[c] = parseInt(prompt("While----Inserire un numero"));
  somma = somma + array1[c];  
  c++;
}
output.innerHTML = "La somma dei numeri è : " + somma;
