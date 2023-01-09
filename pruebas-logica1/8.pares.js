/* 
*** PARES ***
Dado un array, devolver un array con todos los números pares que encuentre en el array.
*/

function isEven(arr) {
  return arr.filter(numero => {
    return numero % 2 === 0
  });
}

console.log(isEven([4, 2, 1, -10000, -7, 3, 31, -12, 2620]));