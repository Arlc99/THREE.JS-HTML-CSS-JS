// Selecciona el botón con el id "iniciarSesion"
const boton = document.getElementById("btn");
const botonVolver = document.getElementById("volver");
const portada = document.getElementById("portada")
const body = document.body;

//escenarios del juego
const fondo = document.getElementById('fondo')

// Función que se ejecutará al hacer clic
botonVolver.style.display = "none";
fondo.style.display = "none";

function iniciar() {
    console.log("Hola, el juego");
     body.style.backgroundImage = ""
    portada.style.display = "none";
    botonVolver.style.display = "block";
    fondo.style.display = "block";

    
        
}
function volver() {
    portada.style.display = "block";
    botonVolver.style.display = "none";
    fondo.style.display = "none";
}

// Asigna el evento click al botón
if (boton) {
    boton.addEventListener("click", iniciar);
}
if(botonVolver){
    botonVolver.addEventListener('click',volver)
}else{
    console.log("error!¡")
}