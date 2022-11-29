/*Ejercicio 12: 
Dado un numero mostrar todos los números desde ese al 0 de 8 en 8 en una lista con guines donde cada número debe empezar por nº

Como hacerlo:
    - Funcion que reciba un numero.
    - Inicializar variable con encabezado.
    - Bucle del número al cero.
    - Concatenar guion, nº, numero y salto de linea.
    . Restar 8
    - Concatenar FIN.

Ejemplos:
hastaCero("100) // Devuelve:
--- Del 100 al 0 ---
- nº100
- nº92
- nº84
- nº76
- nº68
- nº60
- nº52
- nº44
- nº26
- nº28
- nº20
- nº12
- nº4
--- FIN ---

*/

function hastaCero(numero) {
    let resultado = `--- Del ${numero} al 0 --- \n`
      
    while(numero > 0){
      resultado += `- nº${numero} \n`;
      numero -= 8;
    }
    
    resultado += "--- FIN ---"

    return resultado;
}

console.log(hastaCero(100));