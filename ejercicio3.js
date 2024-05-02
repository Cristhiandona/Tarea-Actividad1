//3.Ordenar un Array:Crea una función que ordene un array de números de manera ascendente. Puedes utilizar funciones flecha.

const ordenarAscendente = (array) => {
 
    array.sort((a, b) => a - b);
    return array;
}

const numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const numerosOrdenados = ordenarAscendente(numeros);
console.log(numerosOrdenados); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]
