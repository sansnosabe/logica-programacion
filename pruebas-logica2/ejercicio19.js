/*Ejercicio 19: 
Dado un array de objetos de peliculas (titulo, director, vista) mostrar todas las peliculas
indicando cual has visto y cual no.

Como hacerlo:
    - Funcion que reciba los dos parametros.
    - Crear un array.
    - Crear un array e ir añadiendo sub-arrays

Ejemplos:
misPeliculas(peliculas) // Devuelve:
Ya has visto: [" 'titulo' de 'director' "]
Te falta por ver: [" 'titulo' de 'director' "]

*/
const coleccionPeliculas = [
    {
        titulo: "Harry potter y la piedra filosofal",
        director: "Chris Columbus",
        vista: true
    },
    {
        titulo: "Spider-Man: Homecoming",
        director: "Jon Watts",
        vista: true
    },
    {
        titulo: "El increible Hulk",
        director: "Louis Leterrier",
        vista: false
    },    
    {
        titulo: "La viuda negra",
        director: "Cate Shortland",
        vista: false
    },
    {
        titulo: "Black panther",
        director: "Ryan Coogler",
        vista: true
    }
];

function misPeliculas(peliculas) {
    peliculasVistas = []
    peliculasNoVistas = []


    for (const pelicula of peliculas) {
        let mostrar = `${pelicula.titulo} de ${pelicula.director}`
        if(pelicula.vista){
            peliculasVistas.push(mostrar)
            // console.log(`Ya has visto: ${mostrar}`)
        }else{
            peliculasNoVistas.push(mostrar)
            // console.log(`Te falta por ver: ${mostrar}`)
        }
    }
    
    console.log("Ya has visto:", peliculasVistas)
    console.log("Te falta por ver:", peliculasNoVistas) 
}

misPeliculas(coleccionPeliculas);