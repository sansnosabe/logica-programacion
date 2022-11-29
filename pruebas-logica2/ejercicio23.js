/*Ejercicio 23: 
Dadas una cadena de texto y un número, poner en mayúscula la primera letra de cada palabra en la cadena
y luego devolver la cadena.

Como hacerlo:
    - Crea una función con parámetro texto
    - Poner la primera letra del string en mayúsculas.
    - Recorrer el string completo.
    - Devolver resutado.
    - Si el caracter anterior a la letra actual es un espacio ponerlo en mayusculas.
    - Si el caracter no es un espacio añadirlo al resultado.


Ejemplos:
enMayuscula('hola mundo') // Devuelve: 'Hola Mundo'
*/

function enMayuscula(texto) {
    let palabras = []
    for (let palabra of texto.split(" ")) {
        palabras.push(palabra[0].toUpperCase() + palabra.substring(1))
    }
    
    return palabras.join(' ');
}

console.log(enMayuscula('hola mundo, puedo poner todo lo que quiera'));

