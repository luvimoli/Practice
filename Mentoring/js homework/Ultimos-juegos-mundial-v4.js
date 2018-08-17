
//función para usar for loop

function quienGano(juegos) {

let equipo1 = juego[0];
let equipo2 = juego[1];
let equipo3 = juego[2];

let result = equipo1.score > equipo2.score ?  equipo1.name + " le ganó a " + equipo2.name + " " + equipo1.score + " a " + equipo2.score : equipo2.name + " le ganó a " + equipo1.name + " " + equipo2.score + " a " + equipo1.score;
  return result;
}

var Francia = 4;
var Croacia = 1;

// let juego = [
// {'name': 'Dinamarca', 'score': 3},
// {'name':'Austria', 'score': 4}
// ];

let juegos = [
  [
    {'name': 'Dinamarca', 'score': 3},
    {'name':'Austria', 'score': 4}
  ],
  [
    {'name': 'Francia', 'score': 5},
    {'name':'Croacia', 'score': 2}
  ],
  [
    {'name': 'República Dominicana', 'score': 5},
    {'name': 'Jamaica', 'score': 3}
  ]
];

console.log(quienGano(juego));

for ()
