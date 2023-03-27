/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    // const message = ''; 
    // Dato che abbiamo bisogno di dar valori differenti a "message" non possiamo renderlo una costante
    let message = ''; // con let abbiamo una variabile assegnata a "message"

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    return message;
    // Termino la funzione e restituisco "message"
}
console.log(checkAge());
// Stampo su console


// ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();


// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     // const total = userNumber + 1;
//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();


// ESERCIZIO 4
// function checkAccess() {
//     const addresses = [
//         'mymail@mail.com',
//         'yourmail@mail.com',
//         'hermail@mail.com',
//         'hismail@mail.com',
//     ];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();
