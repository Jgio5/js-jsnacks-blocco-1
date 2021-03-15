// // 1)
// // Crea un array di 10 oggetti che rappresentano una
// // zucchina, indicando per ognuna varietà, peso e lunghezza.
// // Calcola quanto pesano tutte le zucchine.

// var zucchine = [
//     {
//        "varietà": 'viola',
//        "peso": 17,
//        "lunghezza": 25
//    },
//    {
//        "varietà": 'verde',
//        "peso": 13,
//        "lunghezza": 19
//    },
//    {
//        "varietà": 'gialla',
//        "peso": 26,
//        "lunghezza": 32
//    },
//    {
//        "varietà": 'grigia',
//        "peso": 5,
//        "lunghezza": 7
//    },
//    {
//        "varietà": 'porpora',
//        "peso": 30,
//        "lunghezza": 38
//    },
//    {
//        "varietà": 'marrone',
//        "peso": 30,
//        "lunghezza": 22
//    },
//    {
//        "varietà": 'blue',
//        "peso": 11,
//        "lunghezza": 17
//    },
//    {
//        "varietà": 'rossa',
//        "peso": 19,
//        "lunghezza": 15
//    },
//     {
//        "varietà": 'gialla',
//        "peso": 15,
//        "lunghezza": 23
//    },
//    {
//        "varietà": 'arancione',
//        "peso": 10,
//        "lunghezza": 20
//    }
// ];

// console.log(zucchine);

// var totalePeso = 0;

// // for (key in zucchine) {
// //    totalePeso += zucchine[key].peso;
// // }

// for (i = 0; i < zucchine.length; i++) {
//     totalePeso += zucchine[i].peso;
// }

// //In classe
// // var zucchinaAggiuntiva = {
// //     "varietà": 'arancione',
// //     "peso": 10,
// //     "lunghezza": 20
// // }

// // zucchine.push(zucchinaAggiuntiva);

// console.log("Il peso totale delle zucchine è di: " + totalePeso + " kg.");
// console.log("***********************************");

// var zucchineClasse =  {
//     a: {
//         "varietà": 'arancione',
//         "peso": 10,
//         "lunghezza": 20 
//     },
//     b: {
//         "varietà": 'arancione',
//         "peso": 10,
//         "lunghezza": 20 
//     },
//     c: {
//         "varietà": 'arancione',
//         "peso": 10,
//         "lunghezza": 20 
//     }, 
//     d: {
//         "varietà": 'arancione',
//         "peso": 10,
//         "lunghezza": 20 
//     }, 
// };

// var zucchinaAggiuntiva = {
//         p: {
//         "varietà": 'arancione',
//         "peso": 10,
//         "lunghezza": 20
//     }
// };

// //Per aggiungere
// Object.assign(zucchineClasse, zucchinaAggiuntiva);

// //Per cancellare
// // delete zucchineClasse.p;

// console.log(zucchineClasse);

// //Stampare le chiavi di classi di classi
// for (var key in zucchineClasse) {
//     for (var keyUno in zucchineClasse[key]) {
//         console.log(keyUno);
//     }
// }
// console.log("----------------");


// // 2)
// // Crea 10 oggetti che rappresentano una zucchina.
// // Dividi in due array separati le zucchine che misurano
// // meno o più di 15cm (:sorrisetto:).
// // Infine stampa separatamente quanto pesano i due gruppi
// // di zucchine

// var zucchine = [
//     {
//        "varietà": 'viola',
//        "peso": 17,
//        "lunghezza": 25
//    },
//    {
//        "varietà": 'verde',
//        "peso": 13,
//        "lunghezza": 19
//    },
//    {
//        "varietà": 'gialla',
//        "peso": 26,
//        "lunghezza": 32
//    },
//    {
//        "varietà": 'grigia',
//        "peso": 5,
//        "lunghezza": 7
//    },
//    {
//        "varietà": 'porpora',
//        "peso": 30,
//        "lunghezza": 38
//    },
//    {
//        "varietà": 'marrone',
//        "peso": 30,
//        "lunghezza": 22
//    },
//    {
//        "varietà": 'blue',
//        "peso": 11,
//        "lunghezza": 17
//    },
//    {
//        "varietà": 'rossa',
//        "peso": 19,
//        "lunghezza": 15
//    },
//     {
//        "varietà": 'gialla',
//        "peso": 15,
//        "lunghezza": 23
//    },
//    {
//        "varietà": 'arancione',
//        "peso": 10,
//        "lunghezza": 20
//    }
// ];

// var zucchineUnderFifteen = [];
// var pesoTotaleUnder = 0;

// var zucchineOverFifteen = [];
// var pesoTotaleOver = 0;

// for (key in zucchine) {
//     if (zucchine[key].peso < 15) {
//         zucchineUnderFifteen.push(zucchine[key]);
//         pesoTotaleUnder += zucchine[key].peso;
//     }
//     else {
//         zucchineOverFifteen.push(zucchine[key]);
//         pesoTotaleOver += zucchine[key].peso;
//     }
// }

// console.log(zucchineUnderFifteen);
// console.log("Il peso totale delle zucchine con peso > 15 è di: " + pesoTotaleUnder + " kg.");

// console.log(zucchineOverFifteen);
// console.log("Il peso totale delle zucchine con peso > 15 è di: " + pesoTotaleOver + " kg.");
// console.log("***********************************");

// // 3) 
// // Scrivi una funzione che accetti una stringa come
// // argomento e la ritorni girata (es. Ciao -> oaiC)

// var parolaUtente = prompt("Inserisci una parola: ");

// console.log("La parola al contrario è: " + giraParola(parolaUtente));

// function giraParola(parola) {
//     var parolaReverse = "";

//     //  -1 perché parte da 0
//     for (var i = parola.length - 1; i >= 0; i--) {
//       parolaReverse += parola[i];
//     }

//     return parolaReverse;
//   };

// console.log("***********************************");


// 1)
// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di 3 invitati.
console.warn("Esercizio N.1");

var arrayNomi = ["Giorgio", "Luca", "Giulia", "Marco", "Lidia", "Michele", "Camilla"];
var arrayCognomi = ["Bianchi", "De Gregorio", "Almirante", "Marconi", "Viaggio", "Verdi", "Toni"];

console.log("*Lista degli invitati* "+ arrayUnion(arrayNomi, arrayCognomi));

function arrayUnion(array1, array2) {
    var arrayNew = [];

    for (var i = 0; i < 3; i++) {
    //    numArray1 = Math.floor(Math.random() * array1.length);
    //    numArray2 = Math.floor(Math.random() * array2.length);
    //    arraySum = array1[numArray1] + " " + array2[numArray2];
        arraySum = array1[Math.floor(Math.random() * array1.length)] + " " + array2[Math.floor(Math.random() * array2.length)];
        arrayNew.push(arraySum);
    }
    return arrayNew;
}

// 2)
// Crea un array di numeri interi e fai la somma di tutti gli
// elementi che sono in posizione dispari
console.warn("Esercizio N.2");

var arrayInteri = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];
console.log(arrayInteri);

var numSum = 0;

for (var i = 0; i < arrayInteri.length; i++) {
    if (arrayInteri[i] % 2 != 0) {
        numSum += arrayInteri[i];
        // console.log(arrayInteri[i], numSum);
    }
}

console.log("La somma dei numeri in posizione dispari è: " + numSum);



// 3)
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.
console.warn("Esercizio N.3");

var arrayFirst = [1, 2, 3, 4,1, 2, 3, 4, 6, 7, 8, 9, 10, 11];
var arraySecond = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

if (arrayFirst.length < arraySecond.length) {
    for (var i = arrayFirst.length; i < arraySecond.length; i++) {
        arrayFirst.push(Math.floor(Math.random()* 10));
    }
}
else {
    for (var i = arraySecond.length; i < arrayFirst.length; i++) {
        arraySecond.push(Math.floor(Math.random()* 10));
    }
}

console.log("I due Array ora hanno lo stesso numero di elementi: " + arrayFirst.length, arraySecond.length);


// 4)
// Scrivi una funzione che fonda due array (aventi lo stesso
// numero di elementi) prendendo alternativamente gli
// elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
console.warn("Esercizio N.4");

arrayNumeri = [1, 2, 3, 4, 5, 6, 7];
arrayLettere = ["a", "b", "c", "d", "e", "f", "g"];

function arrayMixer(array1, array2) {
    arrayMix = [];
    for (var i = 0; i < array1.length; i++) {
        arrayMix.push(array1[i]);
        arrayMix.push(array2[i]);
    }
    return arrayMix;
}

console.log(arrayMixer(arrayLettere, arrayNumeri));
console.log(arrayMixer(arrayNumeri, arrayLettere));


// 5)
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra “a” e “b”
console.warn("Esercizio N.5");

var arrayWord = ["a", "b", "c", "d", "e", "f", "g"];
console.log(arrayWord.length)


var positionOne = parseInt(prompt("Inserisci il primo numero"));
console.log(positionOne);

var positionTwo = parseInt(prompt("Inserisci il secondo numero"));  
console.log(positionTwo);

console.log("Gli elementi compresi tra " + positionOne + " e " + positionTwo + " sono: " + numBetween(arrayWord, positionOne, positionTwo));

function numBetween(arrayBetween, numero1, numero2) {
    //creo array di appoggio
    var arrayNew = [];
    //Creo la condizione dei min e max
    if ((numero1 < numero2) && (numero2 <= arrayBetween.length)) {
        //Creo un ciclo foor che gira finche la posizione 1 è minore della 2
        for (var i = numero1; i < numero2; i++)
        //Inserisco i valori nell'array
        arrayNew.push(arrayBetween[i]);
    }
    else {
        alert("Torna a inserire i numeri!");
    }
    return arrayNew;
}