/*Ejercicio 25: 
Dado un string, ponerlo competo en mayusculas o minusculas dependiendo de si hay mas mayusculas o minusculas en el string.
Si hay mas mayúsculas ponerlo todo en mayus.
Si hay mas minusculas ponerlo todo en minus.

Como hacerlo:
    - Crea una función con parámetro texto.
    - Crear dos contadores para mayus y minus.
    - Recorrer el texto y comrpobar si las letras que vamos recorriendo son mayus.
    - Aumentar contadores.
    - Convertir a mayus o minus y devolver resultados.

Ejemplos:
mayusMinus('SANDra') // Devuelve: SANDRA
mayusMinus('saNdRa') // Devuelve: sandra
*/

function mayusMinus(texto) {
    let mayusculas = 0;
    let minusculas = 0;
    for (let letra of texto) {
        if (/[A-Z]/.test(letra)) {
            mayusculas ++;
        }else{
            minusculas ++;
        }
    }

    console.log(mayusculas)
    console.log(minusculas)

}

console.log(mayusMinus("SAnDrA"));

