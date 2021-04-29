//Palidroma:
//Chiedere all’utente di inserire una parola 
var parola = prompt('type a word');
parola = parola.toLowerCase();
// trasformo la parola in un array e creo una variabile di essa con .reverse()

//Creare una funzione per capire se la parola inserita è palindroma
/**
 * ## Controlla se una parola è palindroma
 * @param {string} word
 * @returns {string} restituisce se è o meno palindromo
 */
function isPalindromo (word) {
    var reverseWord = word.split('').reverse().join('');
    if (word == reverseWord) {
        return ' è palindromo';
    } else {
        return ' non è palindromo';
    }
}
var message = parola + isPalindromo (parola);
console.log(message);

