/* 
*** ENCONTRAR LA POSICIÓN EN EL ARRAY ***
En base a un array ordenado 'arr', en que posicion se tendria que insertar "num"? Si "num" ya existe devolver su posicion actual.
*/

function insertPosition(arr, num) {
    if(arr.includes(num)){
        return arr.indexOf(num)
    }else if (!arr.includes(num)){
        arr.push(num)
        arr.sort((a,b) => a-b)
        return arr.indexOf(num)
    }else{
        return 0;
    }
}


console.log(insertPosition([10,30,50,60], 7)); 