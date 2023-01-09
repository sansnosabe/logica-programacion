/* 
*** PRIMOS ***
Dado un numero, decir si este es primo(true) o no(false).
*/

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    };
  }
  return true;
}
console.log(isPrime(9)); //false
console.log(isPrime(11)); //true