//CREATE - POST
function createMovie(newMovie){
    
}

//READ - GET
async function getMovies(){
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
console.log(getMovies())

//UPDATE - PUT
function updateMovie(id, editedMovie){

}
//DELETE - DELETE
function deleteMovie(deleteMovie){

}

//PRINT 
let moviesContainer = document.querySelector("section")

async function printMovies() {
    console.log("Hola")
    let movies = await getMovies();
    const movieList = movies.map(movie => {
        return moviesContainer.innerHTML += `<h1>${movie.title}</h1>`
    })
    return movieList
}
