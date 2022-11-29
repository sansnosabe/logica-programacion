/* 
*** HORAS A SEGUNDOS ***
Devolver el valor de hours en segundos
*/

function hoursToSeconds(hours) { 
    return hours * 60 * 60

}

console.log(hoursToSeconds(1));

//___________________________________________________________________
//Otra solución peor:

// function hoursToSeconds(hours) { 
//     let horasMinutos = hours * 60
//     let minutosSegundos = horasMinutos * 60 

//     return minutosSegundos
// }