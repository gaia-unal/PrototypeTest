// Global variable definitions
// The 'puntaje' variable holds the activity's score
var puntaje = null;

// Here goes the correct answer value
var respuestaCorrectaDelInput = "sur";

// Here, the actions of the 'continuar' button are defined
var boton = document.getElementById('btn-continuar');
boton.addEventListener('click', function () {
	// Send a message to the React parent component
	procesarPuntaje();
	window.parent.postMessage(puntaje, '*');
});

// Only part of the container
document.getElementsByClassName("contenedor")[0].style.border = "solid black";


// Accessibility functions

document.addEventListener("DOMContentLoaded", () => {
	// Obtain the elements to which the font must be changed
	const changeFontButton = document.getElementById("changeFont");
	const textElement = document.getElementById("texto");
	const answerElement = document.getElementById("respuesta");
	const images = [
		["opcion1-Open-Dyslexic.png", "opcion1-Arial.png"],
		["opcion2-Open-Dyslexic.png", "opcion2-Arial.png"],
		["opcion3-Open-Dyslexic.png", "opcion3-Arial.png"]
	];
	const spans = document.querySelectorAll("span");
	const accessibility = document.getElementById("accessibilityButton");

	let imagenActual = 0;

	// Define available fonts
	const fonts = ["Open-Dyslexic", "Arial"]
	let actualFont = 0;


	// When the button is clicked
	changeFontButton.addEventListener("click", () => {
		// Change the text font of the required elements
		actualFont = (actualFont + 1) % fonts.length;
		textElement.style.fontFamily = fonts[actualFont];
		answerElement.style.fontFamily = fonts[actualFont];
		changeFontButton.style.fontFamily = fonts[actualFont];
		boton.style.fontFamily = fonts[actualFont];
		accessibility.style.fontFamily = fonts[actualFont];

		for (let i = 0; i < spans.length; i++) {
			spans[i].style.fontFamily = fonts[actualFont];
		}

		// Change the option images
		imagenActual = (imagenActual + 1) % images[0].length;

		document.getElementById("imageOption0").src = images[2][imagenActual];
		document.getElementById("imageOption1").src = images[1][imagenActual];
		document.getElementById("imageOption2").src = images[0][imagenActual];
	});

	// To change the font-size

	let initialFontSize = 2; // Initial font size that text elements have in the activity
	let initialWidth = 80; // Initial width of answer options

	// Function to change the font size
	const changeFontSize = (initialFontSize, initialWidth) => {
		// Text elements
		changeFontButton.style.fontSize = initialFontSize + 'vw';
		textElement.style.fontSize = initialFontSize + 'vw';
		answerElement.style.fontSize = initialFontSize + 'vw';
		boton.style.fontSize = initialFontSize + 'vw';
		accessibility.style.fontSize = initialFontSize + 'vw';

		// Don't change
		for (let i = 0; i < spans.length; i++) {
			spans[i].style.fontSize = initialFontSize + 'vw';
		}

		// Images
		document.getElementById("imagen1").style.width = initialWidth + '%';
	};

	// Decrease font size
	const decreaseFontButton = document.getElementById("decreaseFontSize");

	// When the button to decrease the font size is clicked
	decreaseFontButton.addEventListener("click", () => {
		if (initialFontSize > 2) {
			initialFontSize -= 0.1; // Decrease font size of text elements
			initialWidth -= 1.1; // Decrease size of images (answer options)

			// The font size of all text elements and images is decreased
			changeFontSize(initialFontSize, initialWidth);
		}
	});

	// Increase font size
	const increaseFontButton = document.getElementById("increaseFontSize");

	// When the button to increase the font size is clicked
	increaseFontButton.addEventListener("click", () => {
		if (initialFontSize < 3.8) {
			initialFontSize += 0.1;
			initialWidth += 1.1;

			// The font size of all text elements and images is decreased
			changeFontSize(initialFontSize, initialWidth);
		}
	});

	// To change line spacing

	let initialLineHeight = 1;
	
	const decreaseLSpacing = document.getElementById("decreaseLineSpacing");

	decreaseLSpacing.addEventListener("click", () => {
		if(initialLineHeight > 1) {
			initialLineHeight -= 0.5;

			// Change line-height of the activity instruction
			textElement.style.lineHeight = initialLineHeight;
		}
	});

	const increaseLSpacing = document.getElementById("increaseLineSpacing");
	
	increaseLSpacing.addEventListener("click", () => {
		if(initialLineHeight < 3.5) {
			initialLineHeight += 0.5;

			// Change line-height of the activity instruction
			textElement.style.lineHeight = initialLineHeight;
		}
	});

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
	let audio = document.getElementById("audio" + id);
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
	// Chage the answer of the user to lower letters
	valor = valor.toLowerCase()
	if (!valor) {
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