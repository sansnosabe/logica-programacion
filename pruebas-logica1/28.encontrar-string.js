/*
*** ENCONTRAR  STRING***
Queremos saber cuántas veces se encuentra target dentro de string
*/

function findSubstring(target, string) {
    let resultado = 0;

    if (string.includes(target)){
        let palabras = string.split(" ");
        let diccionario = {};
        
        for (const palabra of palabras){
            if(diccionario[palabra]){
                diccionario[palabra]++;
            }else{
                diccionario[palabra] = 1;
            }
        }
        console.log("diccionario", diccionario)


        resultado = diccionario[target];
    }else{
        resultado = 0;
    }

    return resultado;
}

console.log(findSubstring("ara", "ararara"))
//return => 3
