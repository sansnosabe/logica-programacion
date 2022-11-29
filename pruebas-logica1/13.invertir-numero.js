/* 
*** INVERTIR NUMEROS ***
Dado un número, devolverlo invertido.
*/

function invertNumber(num) { 
    let reverse = num.toString().split('').reverse().join('');    
    return Number(reverse);
}

console.log(invertNumber(123456789));