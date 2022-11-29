/* 
*** PRÓXIMO NÚMERO ***
Queremos encontrar y retornar el siguiente número más grande (usando los mismos dígitos) 
al que nos llega en el parámetro 'num'.
*/

function nextLargerNumber(num) { 
    let numeroMax = Math.max(num)

    return numeroMax
}

console.log(nextLargerNumber(2019));
//return => 2091