/*Ejercicio 28: 
Dado un array de números, devolver el array sin elementos duplicados.
Si hay un string eliminarlo del array.

Como hacerlo:
    - Crea una función con parámetro array.
    - Recorrer el array y eliminar strings.
    - Usar objeto para eliminar duplciados.

Ejemplos:
eliminarDuplicados([1,2,1,1,1,3,4]) // Devuelve: [1,2,3,4]
*/

function eliminarDuplicados(array) {
    array = array.filter(elemento =>{
        return typeof elemento === "number";
    })
    let setSinDuplicados = new Set(array)
    return Array.from(setSinDuplicados)
}

console.log(eliminarDuplicados(["uno", "dos", 1, 2, 1, 1, 1, 3, "hola", 4]));