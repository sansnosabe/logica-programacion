/* 
*** INVERTIR STRING ***
Dado un texto, devolverlo invertido.
*/

function reverseString(str) { 
    return str.split('').reverse().join('');
}

console.log(reverseString("hola mundo"));