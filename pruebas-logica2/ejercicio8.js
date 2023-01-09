/*Ejercicio 8: 
Dados un número entero, inviertelo y devuelve de nuevo el entero.

Como lo soluciono:
    - Crear una función que reciba un número.
    - Convertir número en string.
    - Crear un array por cada número.
    - Darle la vuelta al array.
    - Unir el array en un string.
    - Convertir el string en un número.
*/

let numeroParaInvertir = 123456789;

function invertirNumero(numero) {
    let invertir = numero.toString().split('').reverse().join('');
    return invertir;
}

console.log(invertirNumero(numeroParaInvertir)); 

