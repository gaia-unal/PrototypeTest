// Global variable definitions
// The 'puntaje' variable holds the activity's score
var puntaje = null;

// Here goes the correct answer value
var respuestaCorrectaDelInput1 = 'luna'; 
var respuestaCorrectaDelInput2 = 'lunita'; 
var respuestaCorrectaDelInput3 = 'la luna'; 

// Here, the actions of the 'continuar' button are defined
var boton = document.getElementById('btn-continuar');
boton.addEventListener('click', function() {
	// Send a message to the React parent component
	procesarPuntaje();
	window.parent.postMessage(puntaje, '*');
  });

// Only part of the container
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

// Function to show the 'continuar' button
function mostrarContinuar() {
	document.getElementById('continuar').style.display = "flex";
}

// Function to hide the 'continuar' button
function ocultarContinuar() {
	document.getElementById('continuar').style.display = "none";
}

// Function to process the activity's score
function procesarPuntaje() {
	console.log("Puntaje de la actividad: ", puntaje);
	if (puntaje == null) {
		var texto = 'Por favor completa la actividad';
		if (typeof parent.mostrarAlerta === "function") {
			parent.mostrarAlerta(texto);
		} else {
			alert(texto);
		}
		ocultarContinuar();
	} else {
		// Here, the score is sent for global processing
		window.parent.postMessage('Mensaje desde el iframe', '*');
	}
}

// Function to set the score to 0 when the activity is incorrect
function Error() {
	puntaje = 0;
	mostrarContinuar();
}

// Function to set the score to 1 when the activity is correct
function Correcto() {
	puntaje = 1;
	mostrarContinuar();
}

// Function to play the audio
function sonido(id) {
	
	// We check that there is no audio playing, and if there is, we stop it
	let audioElements = document.getElementsByClassName("audio-element");
    
    for (let i = 0; i < audioElements.length; i++) {
        let audio = audioElements[i];
        
        if (audio.id !== "audio" + id) {
            audio.pause();
            audio.currentTime = 0;
        }
    }
	// Play the desired audio
	let audio = document.getElementById("audio"+id);
	console.log(audio);
	audio.pause();
	audio.currentTime = 0;
	audio.play();
}

var input = document.getElementById('respuesta');
input.addEventListener('input', function (e) {
	calificar(this.value);
});

// Grading function
function calificar(valor) {
	// Change the answer of the user to lower letters
	valor =  valor.toLowerCase()
	if (!valor) {
		ocultarContinuar();
		return false;
	}

	if (valor == respuestaCorrectaDelInput1 || valor == respuestaCorrectaDelInput2 || valor == respuestaCorrectaDelInput3) {
		Correcto();
		console.log('puntaje = 1')
	} else {
		Error();
		console.log('puntaje = 0')
	}
}