// Definición de variables globales
var puntaje = 0.01;

// Agregar los id de los div de las opciones correctas en forma de arreglo
var opcionesCorrectas = ["opcion1", "opcion7"];

// Variables para guardar el valor de las opciones correctas e incorrectas
var valorBueno = 1/opcionesCorrectas.length;
var valorMalo = valorBueno/2;

// Arreglo para guardar las opciones seleccionadas
var seleccionadas = Array();

// Variable para guardar el id de la opción que se acaba de seleccionar
var idSeleccion = null;

// Marco para establecer límites en la actividad
document.getElementsByClassName("contenedor")[0].style.border="solid black";

var boton = document.getElementById('btn-continuar');

boton.addEventListener('click', function() {
	// Envía un mensaje al componente React en el padre
	procesarPuntaje();
	window.parent.postMessage(puntaje, '*');
  });

// To change the font

// Obtain the elements to which the font must be changed
const changeFontButton = document.getElementById("changeFont");
const textElement = document.getElementById("texto");

// Define available fonts
const fonts = ["Open-Dyslexic", "Arial"]
let actualFont = 0;

// Define the available images, for each type of font
const images = [
	["letra1-Open-Dyslexic.png", "letra1-Arial.png"],
	["letra2-Open-Dyslexic.png", "letra2-Arial.png"],
	["letra3-Open-Dyslexic.png", "letra3-Arial.png"],
	["letra4-Open-Dyslexic.png", "letra4-Arial.png"],
	["letra5-Open-Dyslexic.png", "letra5-Arial.png"],
	["letra6-Open-Dyslexic.png", "letra6-Arial.png"],
	["letra7-Open-Dyslexic.png", "letra7-Arial.png"],
	["letra8-Open-Dyslexic.png", "letra8-Arial.png"]
];
let imagenActual = 0;

// When the button is clicked
changeFontButton.addEventListener("click", () => {
	// Change the text font of the required elements
    actualFont = (actualFont + 1) % fonts.length;
    textElement.style.fontFamily = fonts[actualFont];
	changeFontButton.style.fontFamily = fonts[actualFont];
	boton.style.fontFamily = fonts[actualFont];

	// Change the option images
	imagenActual = (imagenActual + 1) % images[0].length;
	for (let i = 0; i < images.length; i++) {
	    document.getElementById("imageOption" + i).src = images[i][imagenActual];
	}
});


// Función para mostrar el botón de continuar
function mostrarContinuar() {
	document.getElementById('continuar').style.display = "flex";
}

// Función para ocultar el botón de continuar
function ocultarContinuar() {
	document.getElementById('continuar').style.display = "none";
}

// Función para procesar el puntaje
function procesarPuntaje() {
	if (puntaje == null || isNaN(puntaje)) {
		var texto = 'Por favor completa la actividad';
		if (typeof parent.mostrarAlerta === "function") {
			parent.mostrarAlerta(texto);
		} else {
			alert(texto);
		}
		ocultarContinuar();
	} else {
		console.log("El puntaje es: ", puntaje);
		// Aquí se envía el puntaje para que se procese de forma global
		// parent.enviarPuntaje(puntaje);
	}
}

// Función para reproducir el audio
function sonido(id) {
	// Verificamos que no haya ningun audio reproduciendose, o sino lo detenemos

	let audioElements = document.getElementsByClassName("audio-element");
    
    for (let i = 0; i < audioElements.length; i++) {
        let audio = audioElements[i];
        
        if (audio.id !== "audio" + id) {
            audio.pause();
            audio.currentTime = 0;
        }
    }
	// Reproducimos el audio que queremos
	let audio = document.getElementById("audio"+id);
	console.log(audio);
	audio.pause();
	audio.currentTime = 0;
	audio.play();
}

// Función para seleccionar las opciones
function seleccionar(id){
	id = "opcion"+id;
	// console.log("El id del seleccionado es:", id);

	// Si ya está seleccionada y la acaban de volver a pulsar, voy a quitar su selección
	if(seleccionadas.includes(id)){
		document.getElementById(id).style.border = "none";
		let indice = seleccionadas.indexOf(id);
		seleccionadas.splice(indice, 1);
	}else{ // Si no está seleccionada, le pongo el borde y la guardo en el arreglo
		document.getElementById(id).style.border = "solid lightgreen";
		seleccionadas.push(id);
	}
	
	// console.log("Las opciones seleccionadas hasta el momento son", seleccionadas);
	if(seleccionadas.length > 0){
		mostrarContinuar();
		calificar();
	}else{
		ocultarContinuar();
	}
	
}

// Función para calificar
function calificar(){
	puntaje = 0.0;
	let correctas = 0;
	for(let i = 0; i < opcionesCorrectas.length; i++){
		if(seleccionadas.includes(opcionesCorrectas[i])){
			puntaje += valorBueno;
			correctas += 1;
		}
	}
	puntaje = puntaje - ((valorMalo) * (seleccionadas.length - correctas));
	if(puntaje < 0){
		puntaje = 0;
	}
	console.log("El puntaje es: ", puntaje);
}