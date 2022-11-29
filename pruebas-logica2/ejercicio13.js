/*Ejercicio 13: 
Dado un array, dividelo en tantos sub-arrays como sea necesario basandonos en un número que indique su tamaño.
Dividirlo en arrays de X elementos.

Como hacerlo:
    - Funcion que reciba los dos parametros.
    - Crear un array.
    - Crear un array e ir añadiendo sub-arrays

Ejemplos:
divideArray([7,8,9,10], 2) // Devuelve:
[[7,8], [9,10]]

*/

function divideArray(arrayPrincipal, numeroElementos) {
    let arreglos = []
    for (let elemento of arrayPrincipal) {
      let ultimoArray = arreglos[arreglos.length - 1]

        if(!ultimoArray || ultimoArray.length === numeroElementos){
          arreglos.push([elemento])
        }else{
          ultimoArray.push(elemento);
        }
    }
    return arreglos;
}

// console.log(divideArray([7,8,9,10], 2));
console.log(divideArray([7,8,9,10,26,5,6,8,20], 3));

