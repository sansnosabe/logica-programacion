/*Ejercicio 7: 
Dados dos numero devolver cuantos numeros impares hay entre ellos.

Como hacerlo:
    - Función que reciba los dos numeros.
    - Bucle del numero1 al numero2.
    - Condición, si el resto es distinto a cero, es impar.
    - Aumentar en uno el contador.
    - Devolver contador
*/

function impares(numero1, numero2){
    let contador = 0;

    while (numero1 < numero2) {
        if(numero1%2 !== 0) {
            contador++;
            // console.log(`El numero ${numero1} es impar`)
        }
        numero1++;
    }
    
    return contador;
}

console.log("Total numeros impares:", impares(1, 100));