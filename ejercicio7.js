/*Estudiantes:
Alejandra Granada
Cristhian Aguirre Cardona
7. Palíndromo:
Implementa una función que verifique si una palabra es un palíndromo (selee igual de 
izquierda a derecha que de derecha a izquierda).
*/

function Palindromo(words) {
  let words1 = words.toLowerCase(); //Convierto todo a minúscula
  let array = words1.split("");
  let reverse = array.reverse();

  return words1 == reverse.join("")
    ? "La Palabra " + words + " SI es un Palindromo":
    "La Palabra " + words + " NO es un Palindromo";
}

console.log(Palindromo("oso"));

