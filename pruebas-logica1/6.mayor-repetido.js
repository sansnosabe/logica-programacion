/*
*** MAYOR REPETIDO ***
Dado un array, devuelve cuantas veces se repite el número más grande del array.

*/

function countGreater(arr) {
  let numeroAlto = Math.max(...arr)
  let repeticiones = arr.filter(num => num === numeroAlto).length;
  return repeticiones;
}

console.log(countGreater([1, 12, 26, 3, 4, 26, 5, 32, 3, 26, 1, 8])); //1
console.log(countGreater([1, 12, 26, 3, 4, 26, 5, 3, 26, 1, 8])); //3



function countGreater2(arr) {
  let numM = 0;
  let numMayor = arr.sort((a, b) => b - a);

  numMayor.map(element => numMayor[0] === element ? numM += 1 : null);
  return numM;
}

console.log(countGreater2([1, 12, 26, 3, 4, 26, 5, 3, 32, 26, 1, 8]));
console.log(countGreater2([1, 12, 26, 3, 4, 26, 5, 3, 26, 1, 8]));