/*Ejercicio 28: 
Dado un número, devolver su factorial.
El factorial de un número es la multiplicación de todos los numeros hasta llegar a el.

Como hacerlo:
    - Crea una función con parámetro número.
    - Bucle del 1 al número.
    - Multiplicar el número con el actual.
    - Devolver resultado.

Ejemplos:
factorial(3) // Devuelve: 6
*/

function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado = resultado*i;
    }

    return `El factorial de ${numero} es: ${resultado}`
}

console.log(factorial(3));