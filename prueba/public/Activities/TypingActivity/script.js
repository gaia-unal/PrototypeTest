// Definición de variables globales
// En puntaje va el valor del puntaje de la actividad
var puntaje = null;

// Acá va el valor de la respuesta correcta
var respuestaCorrectaDelInput = 2; 

// Acá se definen las acciones del botón continuar
var boton = document.getElementById('btn-continuar');
boton.addEventListener('click', procesarPuntaje, false);

//Solo hace parte del contenedor
document.getElementsByClassName("contenedor")[0].style.border="solid black";

// To change the font

// Name of the activity's image
const imageName = "imagenLuna";

// Obtain the elements to which the font must be changed
const changeFontButton = document.getElementById("changeFont");
const textElement = document.getElementById("texto");
const answerElement = document.getElementById("respuesta");

// Obtain the elements to which the image must be changed
const imageElement = document.getElementById("imagen1");

// Define available fonts
const fonts = ["Open-Dyslexic", "Arial"]
let actualFont = 0;

// Define the available images, for each type of font
const images = [imageName + "-Open-Dyslexic.png", imageName + "-Arial.png"];
let imagenActual = 0;

// When the button is clicked
changeFontButton.addEventListener("click", () => {
	// Change the text font of the required elements
    actualFont = (actualFont + 1) % fonts.length;
    textElement.style.fontFamily = fonts[actualFont];
	answerElement.style.fontFamily = fonts[actualFont];
	changeFontButton.style.fontFamily = fonts[actualFont];
	boton.style.fontFamily = fonts[actualFont];

	// Change the required images
	imagenActual = (imagenActual + 1) % images.length;
    imageElement.src = images[imagenActual];
});

// Función para mostrar el botón continuar
function mostrarContinuar() {
	document.getElementById('continuar').style.display = "flex";
}

// Función para ocultar el botón continuar
function ocultarContinuar() {
	document.getElementById('continuar').style.display = "none";
}

// Función para procesar el puntaje de la actividad
function procesarPuntaje() {
	console.log("Puntaje de la actividad: ", puntaje);
	if (puntaje == null || isNaN(puntaje)) {
		var texto = 'Por favor completa la actividad';
		if (typeof parent.mostrarAlerta === "function") {
			parent.mostrarAlerta(texto);
		} else {
			alert(texto);
		}
		ocultarContinuar();
	} else {
		//Aquí se envía el puntaje para que se procese de forma global
	}
}

// Función que coloca el puntaje en 0 cuando la actividad es incorrecta
function Error() {
	puntaje = 0;
	mostrarContinuar();
}

// Función que coloca el puntaje en 1 cuando la actividad es correcta
function Correcto() {
	puntaje = 1;
	mostrarContinuar();
}

// Función que reproduce el audio
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

// NO MOVER
var input = document.getElementById('respuesta');
input.addEventListener('input', function (e) {
	calificar(this.value);
});

// Función de calificación
function calificar(valor) {
	if (!valor || isNaN(valor)) {
		ocultarContinuar();
		return false;
	}

	if (valor == respuestaCorrectaDelInput) {
		Correcto();
		console.log('puntaje = 1')
	} else {
		Error();
		console.log('puntaje = 0')
	}
}