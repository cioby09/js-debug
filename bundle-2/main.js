/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) { // Dato che i parte da 0, la condizione i > 5 non si avvera perciò sostituisco con la condizione i < 5
    console.log(i);
}


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) { //Affinchè mi ritorni un valore numerico metto tre uguali
        return num + 5;
    }
    return num;
}
// Stampo su console per avere un output
console.log(addIfEven(6));

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) { //Vado a correggere le virgole con i punti e virgola
        console.log(i);
    }
}
// Invoco la funzione
loopToFive();


// ESERCIZIO 4 (suggerimento: ci sono 8 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) { // Tolgo il punto e virgola dopo "i++"(Errore 1) e tolgo la sottrazione di un 1 alla condizione(Errore 2)
        if (numbers[i] % 2 === 0) { // Tolgo il punto e virgola dopo la condizione (Errore 3), sostituisco l'uguale con il triplo uguale(Errore 4) e aggiungo "[i]" a numbers affinchè selezioni un elemento dell'array(Errore 5)
            evenNumbers.push(numbers[i]); //Correggo il valore di [i] con il valore [i] di numbers(Errore 6)
        }
    }
    return evenNumbers; // Sposto return affinchè non interrompa la funzione(Errore 7)
}
// Invoco la funzione all'interno di un console log per stampare su console(Errore 8)
console.log(displayEvenNumbers());; // [2,4,6,8]