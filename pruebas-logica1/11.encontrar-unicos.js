/* 
*** ENCONTRAR ÚNICOS ***
Devuelve un array con todos los elementos que aparezcan solo una vez en el array que nos llega por parámetro.
*/

function unique(arr) {
  const result = [];

  arr.map((number) => {
    const count = arr.filter(x => x === number).length;
    count === 1 ? result.push(number) : null
  });

  return result;
}

console.log(unique([4, 4, 4, 4, 4, 3, 2, 4, 2, 1, 7])); //3, 1, 7


// function unique2(arr) {
//   const result = {};

//   arr.forEach((number) => {
//     result[number] = true;
//   });

//   return Object.keys(result);
// }

// console.log(unique2([4, 4, 4, 4, 4, 3, 2, 4, 2, 1, 7])); // [3, 1, 7]