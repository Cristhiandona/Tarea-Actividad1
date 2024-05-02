/*Estudiantes:
Alejandra Granada
Cristhian Aguirre Cardona
4. Contador de Palabras:
Desarrolla una función que cuente la cantidad de palabras en una cadena dada. 
Puedes usar funciones anónimas.
*/
function Counter(words = ""){
    if(typeof words != "string"){
        console.log("El Valor ingresado no es una cadena de texto");
    }else{
        return words.length;
    }
}

words = "carro";
console.log("La palabra", words, "tiene",Counter(words), "letras");