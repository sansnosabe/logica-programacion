/* 
*** ¿ES OBJETO? ***
Devuelva true si value es un objeto, y false si no lo es.
*/

function isObject(value) { 
    if (typeof(value) === "object") {
        return true;
    }else{
        return false;
    }
}

console.log(isObject([1,2,3,4]));
