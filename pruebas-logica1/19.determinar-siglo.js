/* 
*** DETERMINAR SIGLO ***
// Devolver el siglo en base al año que nos llega como parámetro. Por ejemplo para el parámetro 2000 tiene que devolver 20.
*/

function whichCentury(num) { 
    return Math.floor((num-1)/100) + 1;
}

console.log(whichCentury(2000));


// Devolver el siglo en base al año que nos llega como parámetro. (Año 2000 = siglo XXI)

// function whichCentury2(num) { 
//     return Math.floor((num)/100) + 1;
// }

// console.log(whichCentury2(2000));