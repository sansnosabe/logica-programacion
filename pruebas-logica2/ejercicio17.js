/*Ejercicio 17: 
Dado un número mostrar los números de 1 hasta el número.
Pero para múltiplos de tres imprimir "es un multiplo de 3" en lugar del número y para los múltiplos 
de cinco imprimir "es un multiplo de 5", para múltiplos de tres y cinco imprimen "es un multiplo de 3 y 5".

Como hacerlo:
    - Funcion que reciba el parametro.
    - Condiciones numero actual multiplo de 3 o 5
    - Crear funcion para recorrer y mostrar
    - Bucle del 1 al número

Ejemplos:
multiplos(2) // Devuelve:
1
2
es un multiplo de 3
4
es un multiplo de 5

*/

function multiplos(numero) {
    let resultado = "";
    if (numero % 3 === 0 && numero % 5 === 0) {
        resultado = `${numero} es un multiplo de 3 y 5`
    }else if(numero % 3 === 0){
        resultado = `${numero} es un multiplo de 3`
    }else if(numero % 5 === 0){
        resultado = `${numero} es un multiplo de 5`
    }else{
        return numero;
    }
    return resultado;   
}

function imprimir(number) {
    for (let i = 1; i <= number; i++) {
        console.log(multiplos(i));  
    }
}

imprimir(15);
