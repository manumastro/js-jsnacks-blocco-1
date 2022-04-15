/*
 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const invitati = ["Mario Rossi", "Giovanni Bianchi", "Giuseppe Verdi"];
const output = document.querySelector("#output");

let invitato = prompt("Inserisci il tuo nome e cognome");

let check = false;

for(let i = 0; i < invitati.length; i++){
  if(invitato.toLowerCase() === invitati[i].toLowerCase() || invitato === invitati[i]){
    check = true;
  }
  console.log("----------------", check);
}

if(check){
  output.innerHTML = "Puoi partecipare";
}
else{
  output.innerHTML = "Non sei stato invitato";}