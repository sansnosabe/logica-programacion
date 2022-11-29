/*Ejercicio 4: 
Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, sin usar métodos propios del lenguaje, solo estructuras de control.
*/

function invertir(texto){
    return texto.split('').reverse().join('');
}

console.log('Texto invertido: ', invertir('Texto para invertir'))

