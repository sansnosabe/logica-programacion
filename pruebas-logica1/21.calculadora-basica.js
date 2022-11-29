/* 
*** CALCULADORA BASICA ***
Recibiendo un número, un operador ('+', '-', '*', '/'), y otro número, resuelva la cuenta ingresada.
*/

function basicCalculator(firstNumber, operator, secondNumber) { 
    if (operator == "+") {
        return firstNumber + secondNumber;
    }else if (operator == "-") {
        return firstNumber - secondNumber;
    }else if (operator == "*") {
        return firstNumber * secondNumber;
    }else if (operator == "/") {
        return firstNumber / secondNumber;
    }
}

console.log(basicCalculator(12, "/", 5));