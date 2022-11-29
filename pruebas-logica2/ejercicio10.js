/*Ejercicio 10: 
Dado un número, mostrar una escalera con escalones de "[-]" usando el número para los niveles de ecalera.

Como hacerlo:
    - Funcion que reciba un numero.
    - Recorrer el número de escaleras.
    - En cada iteración pintar los escalones de ese nivel.
    - Haciendo un bucle desde 1 hasta el nivel en el que estamos.

Ejemplos:
escalera(4) // Devuelve:

[-]
[-][-]
[-][-][-]
[-][-][-][-]
*/

function escalera(numero) {
    let escaleraCompleta = "";
    for (let item = 1; item <= numero; item++) {
        let escalones = "";
        for (let escalon = 1; escalon <= item ; escalon++) {
            escalones += "[-]"; 
        }
        escaleraCompleta += escalones + '\n';
    }

    return escaleraCompleta;
}

console.log(escalera(3));