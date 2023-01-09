/*
*** ENCUENTRA EL OPUESTO ***
Dado un número entero, retornar el opuesto.
*/

function opposite(a) {
  return a < 0 ? Math.abs(a) : a + (-1);
}

console.log(opposite(-2));
