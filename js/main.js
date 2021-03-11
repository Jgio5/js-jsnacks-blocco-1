// 1)
// Crea un array di 10 oggetti che rappresentano una
// zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

var zucchine = [
    {
       "varietà": 'viola',
       "peso": 17,
       "lunghezza": 25
   },
   {
       "varietà": 'verde',
       "peso": 13,
       "lunghezza": 19
   },
   {
       "varietà": 'gialla',
       "peso": 26,
       "lunghezza": 32
   },
   {
       "varietà": 'grigia',
       "peso": 5,
       "lunghezza": 7
   },
   {
       "varietà": 'porpora',
       "peso": 30,
       "lunghezza": 38
   },
   {
       "varietà": 'marrone',
       "peso": 30,
       "lunghezza": 22
   },
   {
       "varietà": 'blue',
       "peso": 11,
       "lunghezza": 17
   },
   {
       "varietà": 'rossa',
       "peso": 19,
       "lunghezza": 15
   },
    {
       "varietà": 'gialla',
       "peso": 15,
       "lunghezza": 23
   },
   {
       "varietà": 'arancione',
       "peso": 10,
       "lunghezza": 20
   }
];

console.log(zucchine);

var totalePeso = 0;

for (key in zucchine) {
   totalePeso += zucchine[key].peso;
}

console.log("Il peso totale delle zucchine è di: " + totalePeso + " kg.");
console.log("***********************************");



// 2)
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm (:sorrisetto:).
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine

var zucchine = [
    {
       "varietà": 'viola',
       "peso": 17,
       "lunghezza": 25
   },
   {
       "varietà": 'verde',
       "peso": 13,
       "lunghezza": 19
   },
   {
       "varietà": 'gialla',
       "peso": 26,
       "lunghezza": 32
   },
   {
       "varietà": 'grigia',
       "peso": 5,
       "lunghezza": 7
   },
   {
       "varietà": 'porpora',
       "peso": 30,
       "lunghezza": 38
   },
   {
       "varietà": 'marrone',
       "peso": 30,
       "lunghezza": 22
   },
   {
       "varietà": 'blue',
       "peso": 11,
       "lunghezza": 17
   },
   {
       "varietà": 'rossa',
       "peso": 19,
       "lunghezza": 15
   },
    {
       "varietà": 'gialla',
       "peso": 15,
       "lunghezza": 23
   },
   {
       "varietà": 'arancione',
       "peso": 10,
       "lunghezza": 20
   }
];

var zucchineUnderFifteen = [];
var pesoTotaleUnder = 0;

var zucchineOverFifteen = [];
var pesoTotaleOver = 0;

for (key in zucchine) {
    if (zucchine[key].peso < 15) {
        zucchineUnderFifteen.push(zucchine[key]);
        pesoTotaleUnder += zucchine[key].peso;
    }
    else {
        zucchineOverFifteen.push(zucchine[key]);
        pesoTotaleOver += zucchine[key].peso;
    }
}

console.log(zucchineUnderFifteen);
console.log("Il peso totale delle zucchine con peso > 15 è di: " + pesoTotaleUnder + " kg.");

console.log(zucchineOverFifteen);
console.log("Il peso totale delle zucchine con peso > 15 è di: " + pesoTotaleOver + " kg.");
console.log("***********************************");

// 3)
// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC)

var parolaUtente = prompt("Inserisci una parola: ");

console.log("La parola al contrario è: " + giraParola(parolaUtente));

function giraParola(parola) {
    var parolaReverse = "";

    //  -1 perché parte da 0
    for (var i = parola.length - 1; i >= 0; i--) {
      parolaReverse += parola[i];
    }

    return parolaReverse;
  };

  console.log("***********************************");