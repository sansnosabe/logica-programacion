/*Ejercicio 28: 
Dado un número, indicar si es un número capicúa o no.
Los números capicúa se leen igual de izquierda a derecha y viceversa.

Como hacerlo:
    - Crea una función con parámetro número.
    - Convertir a string.
    - Convertir número en array de numeros.
    - Darle la vuelta.
    - Unirlo y convertirlo a entero.

Ejemplos:
capicua(2002) // Devuelve: true
capicua(2014) // Devuelve: false

*/

function capicua(numero) {
    let conversionNumero = Number(numero.toString().split('').reverse().join(''));

    return numero === conversionNumero;
}

console.log(capicua(2002));