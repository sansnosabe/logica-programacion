/*Ejercicio 22: 
Dadas dos números indicar cual es mayor y cual es menor.

Ejemplos:
mayorNumero(2, 6) // Devuelve: 
El número mayor es: 6
El número menor es : 2
*/

function mayorNumero(numero1, numero2) {
  let resultado = "";

  if (numero1 > numero2) {
    resultado = `
    El numero mayor es: ${numero1}
    El numero menor es: ${numero2}`;
  }else{
    resultado = `
    El numero mayor es: ${numero2}
    El numero menor es: ${numero1}`;
  }

  return resultado;
}

console.log(mayorNumero(2, 6));

