//Ejercicio 1:
//Dado un número, devolver la tabla de multiplicar completa:

function tablaMultiplicar(numero) {
  let resultado = "";

  for (let i = 1; i <= 10; i++) {
    let multiplicacion = i * numero;
    resultado += `${i} x ${numero} = ${multiplicacion} \n`;
  }

  return resultado;
}

console.log(tablaMultiplicar(5));
