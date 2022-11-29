/*Ejercicio 15: 
Dada una cadena de texto, devolver el caracter más usado.

Como hacerlo:
    - Funcion que reciba el texto.
    - Mapear letras en un json.
    - Recorremos el mapeo.
    - Hacemos condición para ver que contador es mayor.

Ejemplos:
masUsado("que letra se repite mas veces") // Devuelve:
La que mas se repite es: e
*/

function masUsado(texto) {
    let mapeoLetras = {};
    let maximoRepeticiones= 0;
    let letraMasRepetida= "";


    for (let letra of texto) {
        if(!mapeoLetras[letra]){
            mapeoLetras[letra] = 1;
        }else{
            mapeoLetras[letra]++;
        }
        // console.log("mapeo letra", mapeoLetras, mapeoLetras[letra])
    }
    for (let letra in mapeoLetras) {
        //toString().trim().length es para que no tenga en cuenta los espacios.
        if(mapeoLetras[letra].toString().trim().length === 1 && mapeoLetras[letra] > maximoRepeticiones){ 
            maximoRepeticiones = mapeoLetras[letra];
            letraMasRepetida = letra;
        }
    }
    
    return letraMasRepetida;
}

console.log("La letra más repetida es:", masUsado("que letra se repite mas veces a parte de los espacios"));
// masUsado("que letra se repite mas veces");
