/* 
*** ENCONTRAR ÚNICOS ***
Devuelve un array con todos los elementos que aparezcan al menos dos veces en el array que nos llega por parámetro.
*/

function findDuplicates(arr) {
  const duplicates = [];
  const sortedArray = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i + 1] === sortedArray[i]) {
      duplicates.push(sortedArray[i]);
    }
  }

  let noDuplicates = new Set(duplicates)
  return Array.from(noDuplicates)
}

console.log(findDuplicates(["hola", "hola", 1, 1, 5, 6, 1, 1, 6, 8, 12]));