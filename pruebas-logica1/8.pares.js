/* 
*** PARES ***
Dado un array, devolver un array con todos los números pares que encuentre en el array.
*/

function isEven(arr) {
    const filtrado = arr.filter(elemento => {
        return elemento % 2 == 0
    });

    return filtrado;
}

console.log(isEven([4, 2, 1, -10000, -7]));