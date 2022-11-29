/*Ejercicio 20: 
Dadas dos cadenas de texto, crear un algoritmo que compruebe si son anagramas entre si.
No tener en cuenta espacios, simbolos raros, puntos, etc.

Como hacerlo:
    - Crea una función para limpiar los textos.
        - Quitar todo lo que no sea texto, ponerlo en minusculas, crear array de letras, ordenarlo y unirlo.
    - Función para comparar las dos palabras


Ejemplos:
anagramas('Riesgo', 'Sergio') // Devuelve: true
anagramas('Sandra', 'Romper') // Devuelve: false
*/

function limpiarTexto(texto) {
    //[^\w] Significa todo lo que no sean letras
    return texto
        .replace(/[^\w]/gi, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

function anagramas(texto1, texto2) {
    return limpiarTexto(texto1) === limpiarTexto(texto2);
}

console.log(anagramas("Riesgo", "Sergio"));
console.log(anagramas("Sandra", "Romper"));

