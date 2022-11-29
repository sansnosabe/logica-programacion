/*Ejercicio 5: 
¿Cuanto es el X por ciento de X número?

Como hacerlo:
    - Función con parametros "porcentaje" y "numero".
    - Crear una variable para la operación del porcentaje.
    - Devolver string que responda a la pregunta del enunciado.
*/

function tantoPorCiento(porcentaje, numero){
    let operacion = (numero * (porcentaje/100))
    let resultado = `El ${porcentaje}% de ${numero} es ${operacion}`

    return resultado;
}

console.log(tantoPorCiento(43, 522))
