//Ejercicio 2:
//Dada una cadena de texto, comprobar si es un palindromo o no.

function palindromo(texto) {
  let invertir = texto.split("").reverse().join("");

  if (invertir === texto) {
    return "Es un palíndromo";
  } else {
    return "No es un palíndromo";
  }

  // return invertir === texto; (es lo mismo que el if pero daría true/false)
}

console.log(palindromo("otto"));
