//Pari e Dispari:
/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// utente scegli pari o dispari
var pariDispari = prompt('scegli tra pari e dispari');
pariDispari = pariDispari.toLowerCase();
console.log('hai scelto ' + pariDispari);
// creo una funzione che mi riconosce pari o dispari
function isPari (number) {
    if (number % 2 == 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}
//inserisce un numero da 1 a 5
var userNumber = Number(prompt('scegli un numero da 1 a 5'));
console.log('hai scelto il numero ' + userNumber);
//funzione per creare numeri random per il pc
function getRandomNumber (number) {
     var pcNumber = Math.ceil(Math.random() * number);
     console.log('il numero casuale del pc è ' + pcNumber);
     return pcNumber;
}

//sommiamo i due numeri e stabiliamo se l'utente ha vinto
var sum = userNumber + getRandomNumber(5);
var messaggio = 'la somma dei due numeri è ' + sum + ' ' + isPari(sum);
console.log(messaggio);
if (isPari(sum) == pariDispari) {
    console.log('congratulazioni hai vinto');
} else {
    console.log('hai perso');
}