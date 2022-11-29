/* 
*** ENCONTRAR USUARIO DE TWITTER ***
Queremos encontrar el usuario de twitter que se encuentra dentro de str y devolverlo. 
EJ: 'Seguinos en @CourseIt_' => @CourseIt_
*/

function findHandler(str) { 
    if(str.includes("@")){
        arrayPalabras = str.split(" ");
        for (const palabra of arrayPalabras){
           if(palabra.includes("@")){
               return palabra
           }
        }
    }else{
        return false
    }
}


// findHandler("Seguinos en @CourseIt_"); 
console.log(findHandler("Seguinos en @CourseIt_")); 