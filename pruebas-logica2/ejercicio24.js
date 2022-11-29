/*Ejercicio 24: 
Dado un array de enteros y un número, detectar si esa lista de números es una permutación del 1 al número aportado.
    (En este caso una permutación es una secuencia de números en orden sin que falte ninguno entre ellos.)

Como hacerlo:
    - Crea una función con parámentro secuencia y número.
    - Bucle del 0 al número.
    - Return false si el numero actual + 1, no se encuentra.
    - Si salimos del bucle, devolver true.


Ejemplos:
permutacion([1, 2, 3, 4, 5], 5) // Devuelve: true
permutacion([1, 2, 3, 5], 5) // Devuelve: false

*/

function permutacion(secuencia, numero) {
    for (let i = 0; i < numero; i++) {
        if(secuencia.indexOf(i + 1) < 0){
            return false;
        }
    }
    
    return true;
}

console.log(permutacion([1, 2, 3, 4, 5, 6], 5));