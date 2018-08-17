//regular function to convert a number in degrees Fahrenheit to degrees Celsius
function FahtoCelsius(Fahrenheit) {
    var result;
    result = (Fahrenheit - 32) / 1.8;
    return result;
  }

console.log("La temperatura es de", FahtoCelsius(70), "grados Celsius.");
