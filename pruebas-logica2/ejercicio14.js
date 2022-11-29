/*Ejercicio 14: 
Dado un string y un número, repetir el string tantas veces como el número indique.

Como hacerlo:
    - Funcion que reciba los dos parametros.
    - Bucle hasta el numero.
    - Concatenar el string

Ejemplos:
repiteme(hola, 2) // Devuelve:
holahola

*/

function repiteme(texto, numeroRepeticiones) {
    let resultado = "";
    for (let i = 0; i < numeroRepeticiones; i++) {
      resultado += texto;
    }
    return resultado;
}

console.log(repiteme("hola ", 4));