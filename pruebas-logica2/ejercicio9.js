/*Ejercicio 9: 
Dados dos arrays, devolver array con solo los elementos comunes entre ambos.

Como hacerlo:
    - Funcion que reciba dos arrays
    - Filtrar array evaluando una condicion
    - Devolver array nuevo
*/

function elementosComunes(array1, array2) {
    const filtrado = array1.filter(elemento => {
        return array2.includes(elemento)
    });
    
    return filtrado;
}

console.log("Los elementos comunes son:", elementosComunes([4,5,6,7], [7,8,9,7,5]));
console.log("Los elementos comunes son:", elementosComunes(["sandra", "laura", "eiden", 2, 8, false], ["sandra", "ander", 2, 26, false, true]));