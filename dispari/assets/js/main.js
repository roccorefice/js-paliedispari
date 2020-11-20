// L’utente sceglie pari o dispari e inserisce un numero
// da 1 a 5.
var sceltaUtente = prompt('Ciao! Scegli "pari" o "dispari"');
var numeroUtente = Number(prompt("Ora scegli un numero da 1 a 5"));

// seleziono e trasporto negli ID i valori scelti dall'utente
document.getElementById("scelta_utente").innerHTML = "Hai scelto: " + sceltaUtente;
document.getElementById("numero_utente").innerHTML = "Il numero da te scelto è: " + numeroUtente;

// Generiamo un numero random (sempre da 1 a 5) per il computer
/** Genera numero random  
 * @param int min - valore minimo del range
 * @param int max - valore massimo del range
 * @return int - numero random tra min e max
*/
function getRandom (min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
var numeroPc = getRandom (1, 5);
// seleziono e trasporto nell' ID il valore random generato dal calcolo
document.getElementById("numero_pc").innerHTML = "Mmm, io invece scelgo il numero: " + numeroPc;


// Sommiamo i due numeri
/** Somma due numeri  
 * @param int num1 - Il primo numero da sommare
 * @param int num2 - Il secondo numero da sommare
 * @return int - La somma dei due numeri
*/
function somma (num1, num2){
    return num1 + num2;
}
var sommaNumeriScelti = somma(numeroUtente, numeroPc);
// seleziono e trasporto nell' ID il valore della somma
document.getElementById("sum_numbers").innerHTML = "La somma dei numeri da noi scelti è:  " + sommaNumeriScelti;


// Stabiliamo se la somma dei due numeri è pari o dispari
/** Scopre se un numero è pari  
 * @param int number - numero da analizzare
 * @return - valore booleano
*/
function isEven (number){
    if(number % 2 === 0) {
        return true;
    }
}
var risultatoPariDispari = isEven(sommaNumeriScelti);

// Dichiariamo chi ha vinto, selezionando il risultato nell'ID in html.
if (sommaNumeriScelti % 2 == 0 && sceltaUtente === "pari"){
    document.getElementById("esito_game").innerHTML = "Hai vinto, sei un GENIO!";
} else if (sommaNumeriScelti % 2 != 0 && sceltaUtente === "dispari") {
    document.getElementById("esito_game").innerHTML = "Hai vinto, sei un GENIO!";
} else if (sommaNumeriScelti % 2 != 0 && sceltaUtente === "pari") {
    document.getElementById("esito_game").innerHTML = "Hai perso, LOSER!";
} else if (sommaNumeriScelti % 2 == 0 && sceltaUtente === "dispari") {
    document.getElementById("esito_game").innerHTML = "Hai perso, LOSER!";
}

