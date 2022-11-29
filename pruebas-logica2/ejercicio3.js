/*Ejercicio 3: 
Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
    - La frase y la palabra deben ser parametros de una función.

Como hacerlo:
    - Funcion con dos parametros "frase" y "busqueda"
    - Poner string en minusculas y limpiarlo
    - Comprobar si la busqueda esta incluida en la frase
    - Crear un array de palabras de la frase
    - Mapear esas palabras y hacer contador de cada una
    - Devolver el contador de la busqueda
*/


function coincidencias(frase, busqueda) {
    // let textoLimpio = frase.toLowerCase().replaceAll(",", "");
    let textoLimpio = frase.toLowerCase().replace(/[,?¿¡!]/gi, "");
    let resultado = 0;

    if (textoLimpio.includes(busqueda)){
        let palabras = textoLimpio.split(" ");
        let diccionario = {};
        
        for (const palabra of palabras){
            if(diccionario[palabra]){
                diccionario[palabra]++;
            }else{
                diccionario[palabra] = 1;
            }
        }

        resultado = diccionario[busqueda];
    }else{
        resultado = 0;
    }

    return resultado;
}

console.log(
    "Numero de coincidencias en la frase: ", 
    coincidencias("¿Sandra que tal estás?, espero que muy bien!", "que")
)
