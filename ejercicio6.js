//6. Filtrar Números Pares:Crea una función que filtre los números pares de un array. Puedes utilizar funciones de expresión.

const filtrarNumerosPares = function(array) {
    return array.filter(numero => numero % 2 === 0);
};

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = filtrarNumerosPares(numeros);
console.log("Números pares:", numerosPares);
