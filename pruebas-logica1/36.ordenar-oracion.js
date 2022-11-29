/* 
*** ORDENAR ORACIÓN ***
Se recibirá una oración, donde cada palabra de la oracion puede contener un número del 1 al 9 dentro de la palabra. 
El objetivo es ordenar cada palabra de acuerdo al número que cada una contiene: `mun2do ho1la` -> `hola mundo`
*/

function orderSentence(sentence) { 
    const order = sentence.split(' ')
                    .map(letters => `${letters.replace(/[^0-9]/ig, "")} ${letters.replace(/[0-9]/ig, "")}`)
                    .sort()
                    .map(letters => letters.replace(/[0-9]/ig, ""))
                    .join('');

    return order;
}

console.log(orderSentence("a2 Apre1nde prog3ramar"));
//return => Aprende a programar