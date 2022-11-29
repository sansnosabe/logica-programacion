/* 
*** VOCALES ***
// Devolver la cantidad de vocales que tiene el parámetro.
*/

function vowelCounter(str) { 
    try {
        return str.match(/[aeiou]/gi).length;
    } catch (error) {
        return 0;
    }
}

console.log(vowelCounter(""));
