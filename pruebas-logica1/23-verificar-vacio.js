/* 
*** VERIFICAR VACIO ***
Devolver true si el string está vacío, y false si no lo está.
*/

function isEmpty(str) { 
    return (!str || 0 === str.length);
}

console.log(isEmpty(""));