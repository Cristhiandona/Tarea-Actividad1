/*Estudiantes:
Alejandra Granada
Cristhian Aguirre Cardona
Ejercicio 2. Factorial:Implementa una función que calcule el factorial de un númerodado. 
Puedes usar cualquier tipo de función.
*/

function Factorial(number){
    if(number == 0){
        return 1;
    }else{
        return number * Factorial(number -1);
    }
}

let number = 10;
Factorial(number);

console.log("El Factorial de:", number, " es ", Factorial(number));


