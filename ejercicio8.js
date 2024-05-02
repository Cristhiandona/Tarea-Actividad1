//8. Cálculo de Impuestos:Desarrolla una función que calcule el monto de impuestos a pagar según un porcentaje dado. Puedes usar funciones autoejecutables.

const calcularImpuestos = (function() {
    function calcularMontoImpuestos(monto, porcentaje) {
        return monto * (porcentaje / 100);
    }

    return calcularMontoImpuestos;
})();

const monto = 1000;
const porcentajeImpuestos = 10;
const impuestosAPagar = calcularImpuestos(monto, porcentajeImpuestos);
console.log("Impuestos a pagar:", impuestosAPagar);
