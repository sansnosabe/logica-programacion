/*Ejercicio 18: 
Dado un número mostrar todos sus números divisores.

Como hacerlo:
    - Funcion que reciba dos parametros y que compruebe si un número es divisor de otro.
    - Crear funcion para recorrer y mostrar los números divisores del número que pasamos por parámetro.
*/

function divisor(numero, posibleDivisor) {
    return numero % posibleDivisor === 0 ? posibleDivisor : 0 
}

function mostrarDivisores(numero) {
    numerosDivisores = []
    for (let i = 0; i <= numero; i++) {
        const esDivisor = divisor(numero, i)
        if (esDivisor){
            numerosDivisores.push(esDivisor)
        }
    }
    return `Los numeros: ` + numerosDivisores + ` son divisores de: ${numero}`;
}

console.log(mostrarDivisores(26));
