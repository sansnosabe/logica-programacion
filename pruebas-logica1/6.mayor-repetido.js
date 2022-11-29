/*
*** MAYOR REPETIDO ***
Dado un array, devuelve cuantas veces se repite el número más grande del array.

*/

function countGreater(arr) { 
    result = {};
    arr.forEach(number => (result[number] = result[number] + 1 || 1))

    const keysResult = Object.keys(result).sort((a,b) => a-b)
    const numeroAlto = keysResult[keysResult.length - 1]
    
return (result[numeroAlto] === undefined) ? 0 : result[numeroAlto];
}

console.log(countGreater([[1, 12, 26, 3, 4, 26, 5, 3, 32, 26, 1, 8]]));