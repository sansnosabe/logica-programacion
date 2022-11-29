/*Ejercicio 26: 
Dado un número, mostrar su serie de fibonacci.
La serie fibonacci es un orden de numeros donde cada número es la suma de los dos anteriores.

Como hacerlo:
    - Crea una función con parámetro número.
    - Crear variable con dos primeros numeros de la serie.
    - Bucle desde dos al numero.
    - Sumar los dos anteriores valores a número actual.
    - Devolver el resultado.
*/

function fibonacci(numero) {
    let primerosNumeros = [0, 1]

    for (let i = 2; i <= numero; i++) {
        // console.log("menos 1", primerosNumeros[i - 1])
        // console.log("menos 2", primerosNumeros[i - 2])
        primerosNumeros.push(primerosNumeros[i - 1] + primerosNumeros[i - 2]);
    }

    return [primerosNumeros, primerosNumeros[numero]];
}

console.log("Serie completa:", fibonacci(10)[0]);
console.log("Resultado serie fib:", fibonacci(10)[1]);