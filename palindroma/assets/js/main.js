// Chiedere all’utente di inserire una parola
var parolaUtente = prompt("Scopri se la tua parola è palindroma");

//Creare una funzione per capire se la parola inserita è palindroma
/** 
 * Mostra se una parola è palindroma
 * @param str parola - parola inserita da utente
 * @return valore booleano - true o false
 */

function checkPalindroma(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
  }

parola = checkPalindroma(parolaUtente);

//risultato
if (parola){
    console.log("La parola è palindroma");
} else{
    console.log("La parola non è palindroma");
}