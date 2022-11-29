/*Ejercicio 11: 
Dado un texto y una busqueda, censurar todas las coincidencias de la busqueda en el texto con [-CENSURADO-].
Si el texto y la busqueda están vacios mostrar "No puedes leer el texto y la busqueda" el en caso de que ambos parametros no lleguen.

Como hacerlo:
    - Funcion que reciba un texto y una busqueda.
    - Condiciones en el caso de que algun parametro de false.
    - Remplazar la busqueda por [-CENSURADO-] en el texto.

Ejemplos:
censurado("hola hola", "hola") // Devuelve: [-CENSURADO-] [-CENSURADO-]
censurado("hola") // Devuelve: No puedes leer el texto o la busqueda.

*/

function censurado(texto=false, busqueda=false) {
    let resultado = "";

    if(!texto && !busqueda){
        resultado = "No puedes leer el texto y la busqueda"
    }else if (!texto && busqueda){
        resultado = "No puedes leer el texto"
    }else if (texto && !busqueda){
        resultado = "No puedes hacer la busqueda"
    }else{
        // resultado = texto.replaceAll(busqueda, "[-CENSURADO-]") //Con este las mayusculas no las censura
        resultado = texto.replace(new RegExp(busqueda, "gi"), "[-CENSURADO-]") //De esta manera censura global e indistintamente 
    }

    return resultado;
}

console.log(censurado("hola Hola hola ola", "hola"));