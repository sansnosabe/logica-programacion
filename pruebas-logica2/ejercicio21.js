/*Ejercicio 21: 
Dadas una cadena de texto y un número, recortar el string mostrando los X primeros caracteres.

Como hacerlo:
    - Crea una funcion con parametros "texto" y "hasta".
    - Comprobar que los datos son correctos.
    - Recortar string con substr.


Ejemplos:
recortar('Hola mundo', 4) // Devuelve: 'Hola'
*/

function recortar(texto, hasta) {
    let resultado = "";
    if (typeof texto === 'string' && typeof hasta === 'number') {
        resultado = texto.substring(0, hasta);
    }else{
        resultado = "Introduce bien los parametros!!"
    }

    return resultado;
}

console.log(recortar("hola mundo", 4));

