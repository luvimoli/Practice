function quiengano(a,b) {
let result = a > b ?  "Francia le ganó a Croacia " + a + " a " + b : "Croacia le ganó a Francia " + b + " a " + a;
  return result;
}


var Francia = 4;
var Croacia = 1;

console.log(quiengano(Francia,Croacia));
