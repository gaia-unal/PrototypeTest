// Global variable definitions

// Activity score, either 1 or 0, goes here
var puntaje = null;

// Selected ID goes here
var idSeleccion = null;

// Put the correct option number here
// The correct option for grading
var idOpcionCorrecta = "opcion" + "2";

// Message of the button in the modal
var textoBoton = "";

// Number of the audios to the modal
var audio1Modal = 6;
var audio2Modal = 7;

// Container only for guidance
// document.getElementsByClassName("contenedor")[0].style.border = "solid black";

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

	// Obtain the elements to which the font must be changed
	const changeFontButton = document.getElementById("changeFont");
	const textElement = document.getElementById("texto");
	const spans = document.querySelectorAll("span");
	const accessibility = document.getElementById("accessibilityButton");

	// Define available fonts
	const fonts = ["Open-Dyslexic", "Arial"]
	let actualFont = 0;

	// Define the available images, for each type of font
	const images = [
		["opcion1-Open-Dyslexic.png", "opcion1-Arial.png"],
		["opcion2-Open-Dyslexic.png", "opcion2-Arial.png"],
		["opcion3-Open-Dyslexic.png", "opcion3-Arial.png"]
	];
	let imagenActual = 0;


	//Aquí
	// When the button is clicked
	changeFontButton.addEventListener("click", () => {
		actualFont = (actualFont + 1) % fonts.length;

		// Change the text font of the required elements
		textElement.style.fontFamily = fonts[actualFont];
		changeFontButton.style.fontFamily = fonts[actualFont];
		boton.style.fontFamily = fonts[actualFont];
		accessibility.style.fontFamily = fonts[actualFont];

		for (let i = 0; i < spans.length; i++) {
			spans[i].style.fontFamily = fonts[actualFont];
		}
	
		// Change the option images
		imagenActual = (imagenActual + 1) % images[0].length;
		for (let i = 0; i < images.length; i++) {
			document.getElementById("imageOption" + i).src = images[i][imagenActual];
		}

		changeHeight();
	});

	// To change the font-size

	let initialFontSize = 19; // Initial font size that text elements have in the activity
	let initialWidth = 40; // Initial width of answer options

	// Function to change the font size
	const changeFontSize = (initialFontSize, initialWidth) => {
		// Text elements
		changeFontButton.style.fontSize = initialFontSize + 'px';
		textElement.style.fontSize = initialFontSize + 'px';
		boton.style.fontSize = initialFontSize + 'px';
		accessibility.style.fontSize = initialFontSize + 'px';

		// Don't change
		for (let i = 0; i < spans.length; i++) {
			spans[i].style.fontSize = initialFontSize + 'px';
		}

		// Images
		for (let i = 0; i < images.length; i++) {
			document.getElementById("imageOption" + i).style.width = initialWidth + '%';
		}

		changeHeight();
	};

	// Decrease font size
	const decreaseFontButton = document.getElementById("decreaseFontSize");

	// When the button to decrease the font size is clicked
	decreaseFontButton.addEventListener("click", () => {
		if (initialFontSize > 19) {
			initialFontSize -= 1; // Decrease font size of text elements
			initialWidth -= 3.3; // Decrease size of images (answer options)

			// The font size of all text elements and images is decreased
			changeFontSize(initialFontSize, initialWidth);
		}
	});

	// Increase font size
	const increaseFontButton = document.getElementById("increaseFontSize");

	// When the button to increase the font size is clicked
	increaseFontButton.addEventListener("click", () => {
		if (initialFontSize < 24) {
			initialFontSize += 1;
			initialWidth += 3.3;

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

// Function that sends the height of the current content of the activity to the iframe
// Delay height calculation in milliseconds
function changeHeight(delay = 0) {
	setTimeout(() => {
		const iframeHeight = document.documentElement.scrollHeight;
		window.parent.postMessage({ type: 'iframeHeightChange', height: iframeHeight }, '*');
	}, delay);
}


function mostrarContinuar() {
	document.getElementById('continuar').style.display = "flex";
	changeHeight();
}


function ocultarContinuar() {
	document.getElementById('continuar').style.display = "none";
}


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
		// console.log("El puntaje es: ", puntaje);
		// The score should be sent to a global function here that processes the score for the entire test
	}
}


function Error() {
	puntaje = 0;
}

function Correcto() {
	puntaje = 1;
}

function sonido(id) {
	// Check if any audio is currently playing and stop it if so

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

// Event when an option is selected
function seleccionar(id) {

	sonido(id);
	id = "opcion" + id;
	// console.log("El id del seleccionado es:", id);

	let opciones = document.getElementsByClassName("opciones");

	for (let i = 0; i < opciones.length; i++) {
		let idOpcionActual = "opcion" + (i + 1);
		document.getElementById(idOpcionActual).style.border = "none";
	}

	document.getElementById(id).style.border = "2px solid #28a745";

	idSeleccion = id;
	mostrarContinuar();
	calificar();
}

// Grading function
function calificar() {
	if (idSeleccion == idOpcionCorrecta) {
		Correcto();
	} else {
		Error();
	}
}

// Function to show the modal
function mostrarModal() {
	var mensaje = "";
	var resultadoMensaje = document.getElementById("resultadoMensaje");
	var botonContinuarModal = document.getElementById("boton-continuar-modal");
	var miModal = new bootstrap.Modal(document.getElementById("resultadoModal"));

	if (puntaje === 1) {
		mensaje = "¡Muy bien! O es la respuesta correcta 😊";
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