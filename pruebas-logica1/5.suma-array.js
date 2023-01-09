/*
*** SUMA DE ARRAY ***
Dado un array, devuelve la suma de todos los números del array.
*/

function arraySum(arr) {
  return arr.reduce((valorAnt, valorAc) => {
    return valorAnt + valorAc;
  });
}

function arraySum2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function arraySum3(arr) {
  let total = 0;
  for (const numero of arr) {
    total += numero;
  }

  return total;
}

function arraySum4(arr) {
  return eval(arr.join(" + "))
}

console.log("suma1", arraySum([1, 2, 3, 4]));
console.log("suma2", arraySum2([1, 2, 3, 4]));
console.log("suma3", arraySum3([1, 2, 3, 4]));
console.log("suma4", arraySum4([1, 2, 3, 4]));

