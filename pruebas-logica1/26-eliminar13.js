/* 
*** ELIMINAR 13 ***
Vamos a recibir un array, tenemos que eliminar todos los múltiplos de 13 y devolver el array.
*/

function removeThirteen(arr) { 
    return arr.filter(arr => arr % 13);
}

console.log(removeThirteen([12, 53, 182, 435, 591, 637]));

//___________________________________________________________________
//Otra solución:
// function removeThirteen(arr) { 
//     const arrayMultiplos = []
//     for (let i = 0; i < arr.length; i++) {
//         const numbersArray = arr[i];

//         if((numbersArray % 13) == 0){
//             numbersArray
//         }else{
//             arrayMultiplos.push(numbersArray)
//         }
//     }   
//     return arrayMultiplos;
// }