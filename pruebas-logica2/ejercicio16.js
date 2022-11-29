/*Ejercicio 16: 
Dada una cadena de texto, devolver cuantas vocales tiene.

Como hacerlo:
    - Crear una funcion que reciba el texto.
    - Metodo match con expresion regular.
    - Devolver resultado

Ejemplos:
devolverVocales("holacaracola") // Devuelve: 
Número de vocales: 6

*/

function devolverVocales(texto) {
    let coincidencias = texto.match(/[aeiou]/gi);
    return coincidencias ? coincidencias.length : 0;

    // if (coincidencias) {
    //     return coincidencias.length;
    // }else{
    //     return 0;
    // }
}

console.log("Número de vocales:", devolverVocales("holacaracola"));
