/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");

let word1, word2;
word1 = prompt("Inserire la prima parola");
while(!isNaN(word1)){
  alert ("Inserire una parola")
  word1 = prompt("Inserire la prima parola");
}
word2 = prompt("Inserire la seconda parola");
while(!isNaN(word2)){
  alert ("Inserire una parola")
  word2 = prompt("Inserire la seconda parola");
}

if(word1.length > word2.length){
  output1.innerHTML = word2;
  output2.innerHTML = word1;
  console.log(output1, output2);
}
else if(word1.length < word2.length){
  output1.innerHTML = word1;
  output2.innerHTML = word2;
  console.log(output1, output2);
}
else{
  output1.innerHTML = "Le parole hanno la stessa lunghezza";
}