/* 
*** PIEDRA PAPEL O TIJERA ***
Queremos que de acuerdo al input de dos jugadores(p1, p2), determinar el ganador del pidra papel o tijera. Si gana el jugador 1, retornamos 1. Si gana el jugador 2 retornamos 2. Si es un empate retornamos 0. Valores posibles: piedra, papel, o tijera
*/

function rps(p1,p2) { 
    if(p1 === p2){
        return 0;
    }else if(p1 === "piedra" && p2=== "tijera" || p1 === "tijera" && p2=== "papel"  || p1 === "papel" && p2=== "piedra"){
        return 1;
    }else{
        return 2;
    }
}

console.log(rps("tijera", "papel"));