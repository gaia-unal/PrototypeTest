// Global variable definitions
// The 'puntaje' variable holds the activity's score
var puntaje = null;

// Here goes the correct answer value
var respuestaCorrectaDelInput1 = 'gato';
var respuestaCorrectaDelInput2 = 'gatos';

// Message of the button in the modal
var textoBoton = "";

// Number of the audios to the modal
var audio1Modal = 1;
var audio2Modal = 2;

// 'Continuar' button
var boton = document.getElementById('btn-continuar');
boton.addEventListener('click', function () {
	mostrarModal();
});

// 'Continuar' button of the modal
var boton2 = document.getElementById('boton-continuar-modal');
boton2.addEventListener('click', function () {
	if (textoBoton == "Continuar") {
		// Send a message to the React component in the parent
		procesarPuntaje();
		window.parent.postMessage(puntaje, '*');
	}
});

// Accessibility functions

document.addEventListener("DOMContentLoaded", () => {
	// To change the font

	// Name of the activity's image
	const imageName = "G";

	// Obtain the elements to which the font must be changed
	const changeFontButton = document.getElementById("changeFont");
	const textElement = document.getElementById("texto");
	const answerElement = document.getElementById("respuesta");
	const spans = document.querySelectorAll("span");
	const accessibility = document.getElementById("accessibilityButton");

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
		accessibility.style.fontFamily = fonts[actualFont];

		for (let i = 0; i < spans.length; i++) {
			spans[i].style.fontFamily = fonts[actualFont];
		}

		// Change the required images
		imagenActual = (imagenActual + 1) % images.length;
		imageElement.src = images[imagenActual];

		changeHeight();
	});

	// To change the font-size

	let initialFontSize = 2; // Initial font size that text elements have in the activity
	let initialWidth = 20; // Initial width of answer options

	// Function to change the font size
	const changeFontSize = (initialFontSize, initialWidth) => {
		// Text elements
		changeFontButton.style.fontSize = initialFontSize + 'rem';
		textElement.style.fontSize = initialFontSize + 'rem';
		answerElement.style.fontSize = initialFontSize + 'rem';
		boton.style.fontSize = initialFontSize + 'rem';
		accessibility.style.fontSize = initialFontSize + 'rem';

		// Don't change
		for (let i = 0; i < spans.length; i++) {
			spans[i].style.fontSize = initialFontSize + 'rem';
		}

		// Images
		document.getElementById("imagen1").style.width = initialWidth + '%';

		changeHeight();
	};

	// Decrease font size
	const decreaseFontButton = document.getElementById("decreaseFontSize");

	// When the button to decrease the font size is clicked
	decreaseFontButton.addEventListener("click", () => {
		if (initialFontSize > 2) {
			initialFontSize -= 0.1; // Decrease font size of text elements
			initialWidth -= 4.4; // Decrease size of images (answer options)

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
			initialWidth += 4.4;

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

			changeHeight();
		}
	});

	const increaseLSpacing = document.getElementById("increaseLineSpacing");
	
	increaseLSpacing.addEventListener("click", () => {
		if(initialLineHeight < 3.5) {
			initialLineHeight += 0.5;

			// Change line-height of the activity instruction
			textElement.style.lineHeight = initialLineHeight;

			changeHeight();
		}
	});

});

// Only part of the container
// document.getElementsByClassName("contenedor")[0].style.border = "solid black";

// Function that sends the height of the current content of the activity to the iframe
// Delay height calculation in milliseconds
function changeHeight(delay = 0) {
	setTimeout(() => {
		const iframeHeight = document.documentElement.scrollHeight;
		window.parent.postMessage({ type: 'iframeHeightChange', height: iframeHeight }, '*');
	}, delay);
}


// Function to show the 'continuar' button
function mostrarContinuar() {
	document.getElementById('continuar').style.display = "flex";
	changeHeight();
}

// Function to hide the 'continuar' button
function ocultarContinuar() {
	document.getElementById('continuar').style.display = "none";
}

// Function to process the activity's score
function procesarPuntaje() {
	// console.log("Puntaje de la actividad: ", puntaje);
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
	// console.log(audio);
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
	valor = valor.toLowerCase()
	if (!valor) {
		ocultarContinuar();
		return false;
	}

	if (valor == respuestaCorrectaDelInput1 || valor == respuestaCorrectaDelInput2) {
		Correcto();
		console.log('puntaje = 1')
	} else {
		Error();
		console.log('puntaje = 0')
	}
}

// Function to show the modal
function mostrarModal() {
	var mensaje = "";
	var resultadoMensaje = document.getElementById("resultadoMensaje");
	var botonContinuarModal = document.getElementById("boton-continuar-modal");
	var miModal = new bootstrap.Modal(document.getElementById("resultadoModal"));

	if (puntaje === 1) {
		mensaje = "¡Muy bien! Esa es la respuesta correcta 😊";
		botonContinuarModal.textContent = 'Continuar';
		textoBoton = 'Continuar';
		sonido(audio1Modal); // Se reproduce el audio que dice: "Muy bien"
	} else {
		mensaje = "Inténtalo nuevamente, ¡Tú puedes! 😊";
		botonContinuarModal.textContent = 'Intentar nuevamente';
		textoBoton = "Intentar nuevamente";
		sonido(audio2Modal); // Se reproduce el audio que dice "Inténtalo nuevamente"
	}

	resultadoMensaje.textContent = mensaje;
	miModal.show();
}