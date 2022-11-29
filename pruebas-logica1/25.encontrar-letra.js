/* 
*** ENCONTRAR LETRA EN EL ABECEDARIO ***
Encontrar la letra en el abecedario según el número, si no se encuentra devolver el string "invalid".
*/

function positionInAlphabet(num) { 
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const abecedario = letters.split("")

    if(abecedario[num -1]){
        return abecedario[num - 1]
    }

    return "invalid"
}

console.log(positionInAlphabet(26));