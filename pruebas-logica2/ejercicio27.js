/*Ejercicio 27: 
Dado un número, mostrar cuantos años, meses y días equivalen.

Como hacerlo:
    - Crea una función con parámetro días.
    - Divisores para sacar años, meses y días.
*/

function calcularDias(dias) {
    let años = Math.floor(dias / 365);
    let diasRestantes = (dias % 365);

    let meses = Math.floor(diasRestantes / 30);
    diasRestantes = (diasRestantes % 30);

    return `Equivale a ${años} años, ${meses} meses y ${diasRestantes} días.`
}

console.log(calcularDias(10000));