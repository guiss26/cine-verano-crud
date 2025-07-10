//CREATE - POST
async function createMovie(newMovie) {
    const response = await fetch("http://localhost:3000/movies", {//petición get
        method: "POST",
        headers: {
            'Content-Type': 'application/json' //el contenido que maneja mi aplicación es de tipo json
        }
    })//fin petición
    // let formulario =
}

//READ - GET
async function getMovies() {
    const response = await fetch("http://localhost:3000/movies", {//petición get
        method: "GET",
        headers: {
            'Content-Type': 'application/json' //el contenido que maneja mi aplicación es de tipo json
        }
    })//fin petición
    const movieData = await response.json()
    console.log(movieData)
    return movieData
}
getMovies()

//PRINT 
let moviesContainer = document.getElementById("moviesContainer")

async function printMovies() {
    let listMovies = await getMovies();
    moviesContainer.innerHTML = "" //limpiar antes de imprimir
    const movieList = listMovies.map(movie => {
        return moviesContainer.innerHTML += `<h1>${movie.title}</h1><button onclick="deleteMovie('${movie.id}')">Eliminar</button>`
    })
    return movieList
}

//UPDATE - PUT
function updateMovie(id, editedMovie) {

}
//DELETE - DELETE
async function deleteMovie(id) {
    //método pop
    const response = await fetch(`http://localhost:3000/movies/${id}`, {//petición get
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json' //el contenido que maneja mi aplicación es de tipo json
        }
    })//fin petición
    if(response.ok){
        await printMovies()
        console.log(`Libro ${id} eliminado`)
    }else{
        console.error("Error")
    }
}


