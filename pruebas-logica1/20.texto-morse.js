/* 
*** TEXTO A CODIGO MORSE ***
Devolver la traducción del texto que nos llega por parámetro a código morse.
*/

function morseCode(str) { 
    var code = {
        "A": ".-",
        "B": "-...",
        "C": "-.-.",
        "D": "-..",
        "E": ".",
        "F": "..-.",
        "G": "--.",
        "H": "....",
        "I": "..",
        "J": ".---",
        "K": "-.-",
        "L": ".-..",
        "M": "--",
        "N": "-.",
        "O": "---",
        "P": ".--.",
        "Q": "--.-",
        "R": ".-.",
        "S": "...",
        "T": "-",
        "U": "..-",
        "V": "...-",
        "W": ".--",
        "X": "-..-",
        "Y": "-.--",
        "Z": "--..",
        "1":".----", 
        "2":"..---", 
        "3":"...--", 
        "4":"....-", 
        "5":".....", 
        "6":"-....", 
        "7":"--...", 
        "8":"---..", 
        "9":"----.", 
        "0":"-----" 
    }
    const letras =  str.toUpperCase().split('').map(letters => {
        return code[letters];
    }).join(" ");
    return letras;
}

console.log(morseCode("hola, 26"));

