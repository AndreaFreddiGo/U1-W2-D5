/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
const stampPets = function () {
  for (let i = 0; i < pets.length; i++) {
    console.log(pets[i])
  }
  return
}
stampPets()

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const orderPets = function () {
  let orderedPets = [...pets] //ho dovuto applicare l'operatore "spread" per creare una copia
  // indipendente di "pets" altrimenti, anche se l'array "orderedPets" è creato nella funzione e
  // quindi dovrebbe esistere solo all'interno di essa, con il solo operatore "=" andava a legarsi
  // all'array originale "pets" su cui andavano a riflettersi tutte le modifiche fatte anche se
  // "pets" è fuori dalla funzione
  orderedPets = orderedPets.sort()
  return console.log(orderedPets)
}
orderPets()

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

const stampReversedPets = function () {
  for (let i = pets.length - 1; i >= 0; i--) {
    console.log(pets[i])
  }
  return
}
stampReversedPets()

// una soluzione alternativa poteva essere quella di creare un nuovo array (sempre però creando una
// copia di "pets" per non sovrascriverlo) ed applicarle il metodo .reverse() per poi fare
// console.log() del nuovo array

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const invertPets = function () {
  let invertedPets = [...pets]
  invertedPets[0] = pets[pets.length - 1]
  invertedPets[pets.length - 1] = pets[0]
  return console.log(invertedPets)
}
invertPets()

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

// const addsLicensePlate = function (ford, peugeot, volkswagen) {
//   let licensePlates = [ford, peugeot, volkswagen]
//   for (let i = 0; i < cars.length; i++) {
//     cars[i].licensePlate = licensePlates[i]
//   }
//   return console.log(cars)
// }

// addsLicensePlate('AB123', 'CD456', 'EF789')

// con questo codice ovviamente si da per scontato che si sappia che ci sono solo 3 oggetti (3 auto)
// ed in che ordine sono (per assegnare giusta targa); un altro metodo potrebbe essere quello di
// creare funzione con due parametri (modello auto, targa) in modo da assegnare nuovo oggetto "licensePlate"
// alla corrispettiva auto (anche questo metodo ha un limite: quello che si presuppone esista solo
// un'auto per brand)

const addsLicensePlate = function (brand, licensePlate) {
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].brand === brand) {
      cars[i].licensePlate = licensePlate
    }
  }
  return console.log(cars)
}

addsLicensePlate('Ford', 'AB123')
addsLicensePlate('Peugeot', 'CD456')
addsLicensePlate('Volkswagen', 'EF789')

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const addNewCar = function (brand, model, color, licensePlate, trims) {
  let newCar = {
    brand: brand,
    model: model,
    color: color,
    licensePlate: licensePlate,
    trims: trims,
  }
  cars.push(newCar)
  return console.log(cars)
}

addNewCar('Tesla', 'Model 3', 'deep blue', 'XY000', [
  'base',
  'long range',
  'performace',
])

const deleteLastTrim = function () {
  for (let i = 0; i < cars.length; i++) {
    cars[i].trims.pop()
  }
  return console.log(cars)
}

deleteLastTrim()

// per questo esercizio ho deciso di creare due distinte funzioni, una che permettesse di aggiungere una nuova
// auto a fronte dell'inserimento dei rispettivi parametri, ed un'altra funzione che cancelli l'ultimo elemento
// della proprietà trims come richiesto

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
const saveFirstTrim = function () {
  for (let i = 0; i < cars.length; i++) {
    justTrims.push(cars[i].trims[0])
  }
  return console.log(justTrims)
}

saveFirstTrim()

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

const fizzBuzz = function () {
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].color.charAt(0) === 'b') {
      console.log(
        'Il colore della ' +
          cars[i].brand +
          ' è ' +
          cars[i].color +
          ', quindi: Fizz'
      )
    } else {
      console.log(
        'Il colore della ' +
          cars[i].brand +
          ' è ' +
          cars[i].color +
          ', quindi: Buzz'
      )
    }
  }
  return
}

fizzBuzz()

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

const stampTill32 = function () {
  let i = 0
  while (numericArray[i] !== 32) {
    console.log(numericArray[i])
    i++
  }
  return
}

stampTill32()

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const charactersPositions = []
const definePosition = function () {
  let italianAlphabet = 'abcdefghilmnopqrstuvz'
  for (let i = 0; i < charactersArray.length; i++) {
    charactersPositions[i] = italianAlphabet.indexOf(charactersArray[i]) + 1
  }
  return console.log(charactersPositions)
}

definePosition()

// per questo esercizio ho creato una stringa con tutte le lettere dell'alfabeto italiano in modo che, grazie
// al metodo index.of(), fosse possibile capire a che posizione della stringa (e quindi dell'alfabeto) poter
// trovare le lettere inserite come singoli elementi nell'array
