/*
*** ENCUENTRA EL OPUESTO ***
Dado un número entero, retornar el opuesto.
*/

function opposite(a) { 
    let oppositeNum = 0;
    if (a < 0){
        oppositeNum = Math.abs(a);
    }else{
        oppositeNum = a * (-1)
    }
    return oppositeNum;
}

console.log(opposite(0));
