//Palidroma:
//Chiedere all’utente di inserire una parola 
var parola = prompt('type a word');
// trasformo la parola in un array e creo una variabile di essa con .reverse()

//Creare una funzione per capire se la parola inserita è palindroma
function isPalindromo (word) {
    var reverseWord = word.split('').reverse().join('');
    console.log(reverseWord);
    if (word == reverseWord) {
        console.log('è palindromo');
    } else {
        console.log('non è palindromo');
    }
}
isPalindromo (parola);