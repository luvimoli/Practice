function quiengano(a,b) {
  a>b ? result = ["Francia le ganó a Croacia", a, "a", b] : result = ["Croacia le ganó a Francia", b, "a", a];
  return result;
}

var Francia = 3;
var Croacia = 2;

console.log(quiengano(2,3));
