const form = document.getElementById("form")
form.addEventListener("submit", e => {
  e.preventDefault()
}
  )
form.addEventListener("submit", function(){
  añadirLibro()
})

form.addEventListener("submit", 
  crearDiv
)
function libro(autor, nombreLibro,paginas,leido){
  this.autor = autor
  this.nombreLibro = nombreLibro
  this.paginas = paginas
  this.leido = leido
}

libro.prototype.togglesRead = function(){
  this.leido = !this.leido
}

function togglesRead(index){
  libros[index].togglesRead()
  crearDiv()
}

let libros = [];
console.log("inicio",libros)

function añadirLibro(){
  let autor = document.getElementById("Autor").value
  let nombreLibro = document.getElementById("Nomlibro").value
  let paginas = document.getElementById("Pagleidas").value
  let terminado = document.getElementById("terminaste").checked
  
  let nuevoLibro = new libro(autor, nombreLibro, paginas, terminado)
  libros.push(nuevoLibro)
  
 
}


function crearDiv(){
  const contenedor = document.getElementById("contenedorTarjetas")
  let nuevoDiv;
  contenedor.innerHTML = "" ;
  for(let i = 0; i < libros.length; i++){
    nuevoDiv = document.createElement("div")
    contenedor.appendChild(nuevoDiv);
    nuevoDiv.classList.add("casillero")
    nuevoDiv.innerHTML = `<h3>${libros[i].autor}</h3>
      	                  <h3>${libros[i].nombreLibro}</h3>
                           <h3>${libros[i].paginas}</h3>
                          <nav>
                              <button class="nocompletado" id="nocompletado" onclick="borrarDiv(${i})">Eliminar</button>
                              <button class="completado" onclick="togglesRead(${i})"> ${libros[i].leido ? "Bien hecho" : "falta terminar"} </button>
                              </nav> `
 
  }
  return nuevoDiv

}
function borrarDiv(index){
  libros.splice(index, 1)
  crearDiv()
}





