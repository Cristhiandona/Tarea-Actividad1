/*Estudiantes:
Alejandra Granada
Cristhian Aguirre Cardona
9. Generador de Tabla de Multiplicar:
Escribe una función que genere la tabla de multiplicar de un número específico.
*/

function Multiplicar(num) {
  const multiplicando = +process.argv[2];
  let multiplicador = 1;
  const result = [];

  while (multiplicador <= 10) {
    result.push({
      Multiplicando: num,
      Por: multiplicador,
      Igual: num * multiplicador,
    });
    multiplicador++;
  }
  return result;
}

console.table(Multiplicar(2));

