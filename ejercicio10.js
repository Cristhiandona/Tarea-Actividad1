//10. Validación de Contraseña:Crea una función que valide si una contraseña cumple con ciertos criterios
//(longitud, caracteres especiales, etc.). Puedes utilizar métodos de funciones.

function validarContraseña(contraseña) {
    if (contraseña.length < 8) {
        return "La contraseña debe tener al menos 8 caracteres.";
    }

    // Verificar si contiene caracteres especiales
    const caracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (!caracteresEspeciales.test(contraseña)) {
        return "La contraseña debe contener al menos un carácter especial.";
    }

    // Si pasa todas las validaciones, la contraseña es válida
    return "Contraseña válida.";
}

const contraseña1 = "miContraseña123";
const contraseña2 = "clave#segura";

console.log(validarContraseña(contraseña1));
console.log(validarContraseña(contraseña2));
