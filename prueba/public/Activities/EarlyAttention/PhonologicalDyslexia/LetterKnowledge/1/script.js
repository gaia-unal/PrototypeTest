
// Global variable definitions


var idActual = '';



// // Container only for guidance
// document.getElementsByClassName("contenedor")[0].style.border = "solid black";

// Message of the button in the modal
var textoBoton = "";

// Number of the audios to the modal
var audio1Modal = 28;

// 'Continuar' button
var boton = document.getElementById('btn-continuar');

// Ocultar el botón "Atrás" inicialmente
var botonAtras = document.getElementById("botonAtras");


var botonSiguienteActividad = document.getElementById("botonSiguiente");
botonSiguienteActividad.addEventListener('click', function () {
	mostrarModal();
});

// 'Continuar' button of the modal
var boton2 = document.getElementById('boton-continuar-modal');
boton2.addEventListener('click', function () {
	if (textoBoton == "Continuar") {
		// Send a message to the React component in the parent
		procesarPuntaje();
		window.parent.postMessage(1, '*');
	}
});


function procesarPuntaje() {
	// Here, the score is sent for global processing
	window.parent.postMessage('Mensaje desde el iframe', '*');
};

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

	// When the button is clicked
	changeFontButton.addEventListener("click", () => {
		// Change the text font of the required elements
		actualFont = (actualFont + 1) % fonts.length;
		textElement.style.fontFamily = fonts[actualFont];
		changeFontButton.style.fontFamily = fonts[actualFont];
		boton.style.fontFamily = fonts[actualFont];
		botonAtras.style.fontFamily = fonts[actualFont];
		accessibility.style.fontFamily = fonts[actualFont];

		for (let i = 0; i < spans.length; i++) {
			spans[i].style.fontFamily = fonts[actualFont];
		}

		changeHeight();
	});

	// To change the font-size

	let initialFontSize = 2; // Initial font size that text elements have in the activity
	let initialWidth = 50; // Initial width of answer options

	// Function to change the font size
	const changeFontSize = (initialFontSize, initialWidth) => {
		// Text elements
		changeFontButton.style.fontSize = initialFontSize + 'vw';
		textElement.style.fontSize = initialFontSize + 'vw';
		boton.style.fontSize = initialFontSize + 'vw';
		botonAtras.style.fontSize = initialFontSize + 'vw';
		accessibility.style.fontSize = initialFontSize + 'vw';

		// Don't change
		for (let i = 0; i < spans.length; i++) {
			spans[i].style.fontSize = initialFontSize + 'vw';
		}

		changeHeight();
	};

	// Decrease font size
	const decreaseFontButton = document.getElementById("decreaseFontSize");

	// When the button to decrease the font size is clicked
	decreaseFontButton.addEventListener("click", () => {
		if (initialFontSize > 2) {
			initialFontSize -= 0.1; // Decrease font size of text elements
			initialWidth -= 2.7; // Decrease size of images (answer options)

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
			initialWidth += 2.7;

			// The font size of all text elements and images is decreased
			changeFontSize(initialFontSize, initialWidth);
		}
	});

	// To change line spacing

	let initialLineHeight = 1;

	const decreaseLSpacing = document.getElementById("decreaseLineSpacing");

	decreaseLSpacing.addEventListener("click", () => {
		if (initialLineHeight > 1) {
			initialLineHeight -= 0.5;

			// Change line-height of the activity instruction
			textElement.style.lineHeight = initialLineHeight;

			changeHeight();
		}
	});

	const increaseLSpacing = document.getElementById("increaseLineSpacing");

	increaseLSpacing.addEventListener("click", () => {
		if (initialLineHeight < 3.5) {
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

function mostrarBotonAtras() {
	document.getElementById('atras').style.display = "flex";
	changeHeight();
}

function mostrarBotonSiguienteActividad() {
	document.getElementById('siguienteActividad').style.display = "flex";
	changeHeight();
}


function ocultarContinuar() {
	document.getElementById('continuar').style.display = "none";
}

function ocultarBotonAtras() {
	document.getElementById('atras').style.display = "none";
}

function ocultarBotonSiguienteActividad() {
	document.getElementById('siguienteActividad').style.display = "none";
}

function reproducirSonido() {
	// Detener cualquier otro audio que esté sonando
	const todosLosAudios = document.querySelectorAll(".audio-element");
	todosLosAudios.forEach((audioElement) => {
		audioElement.pause();
	});

	// Reproducir el audio actual
	const audio = document.getElementById("audio");
	audio.play();
}

// Definir las imágenes y nombres de archivo de las letras
const letras = [
	{ imagen: "A.png", audio: "audio1.mp3" },
	{ imagen: "B.png", audio: "audio2.mp3" },
	{ imagen: "C.png", audio: "audio3.mp3" },
	{ imagen: "D.png", audio: "audio4.mp3" },
	{ imagen: "E.png", audio: "audio5.mp3" },
	{ imagen: "F.png", audio: "audio6.mp3" },
	{ imagen: "G.png", audio: "audio7.mp3" },
	{ imagen: "H.png", audio: "audio8.mp3" },
	{ imagen: "I.png", audio: "audio9.mp3" },
	{ imagen: "J.png", audio: "audio10.mp3" },
	{ imagen: "K.png", audio: "audio11.mp3" },
	{ imagen: "L.png", audio: "audio12.mp3" },
	{ imagen: "M.png", audio: "audio13.mp3" },
	{ imagen: "N.png", audio: "audio14.mp3" },
	{ imagen: "Ñ.png", audio: "audio15.mp3" },
	{ imagen: "O.png", audio: "audio16.mp3" },
	{ imagen: "P.png", audio: "audio17.mp3" },
	{ imagen: "Q.png", audio: "audio18.mp3" },
	{ imagen: "R.png", audio: "audio19.mp3" },
	{ imagen: "S.png", audio: "audio20.mp3" },
	{ imagen: "T.png", audio: "audio21.mp3" },
	{ imagen: "U.png", audio: "audio22.mp3" },
	{ imagen: "V.png", audio: "audio23.mp3" },
	{ imagen: "W.png", audio: "audio24.mp3" },
	{ imagen: "X.png", audio: "audio25.mp3" },
	{ imagen: "Y.png", audio: "audio26.mp3" },
	{ imagen: "Z.png", audio: "audio27.mp3" }
];


var indiceLetraActual = 0;

// Event when an option is selected
function seleccionar() {

	reproducirSonido();
	if (indiceLetraActual < 26) {
		mostrarContinuar();  // Muestra el botón "Atrás" si es necesario 
	}
	if (indiceLetraActual > 0) {
		mostrarBotonAtras(); // Muestra el botón "Atrás" si es necesario
	}
	if (indiceLetraActual == 26) {
		mostrarBotonSiguienteActividad();
	}
}

// Function to show the before letter
function irAtras() {
	if (indiceLetraActual > 0) {
		const imagen = document.getElementById("imagen");
		const audio = document.getElementById("audio");

		// Cambia la imagen y el audio a la letra en el índice especificado
		imagen.src = letras[indiceLetraActual - 1].imagen;
		audio.src = letras[indiceLetraActual - 1].audio;

		// Decrementa el índice después de cambiar la imagen y el audio
		indiceLetraActual--;

		ocultarContinuar();
		ocultarBotonAtras();
		ocultarBotonSiguienteActividad();
	}
}

function cambiarLetra() {
	if (indiceLetraActual < letras.length) {
		const imagen = document.getElementById("imagen");
		const audio = document.getElementById("audio");

		// Cambia la imagen y el audio a la siguiente letra
		imagen.src = letras[indiceLetraActual + 1].imagen;
		audio.src = letras[indiceLetraActual + 1].audio;


		// Incrementa el índice para la próxima vez
		indiceLetraActual++;

		ocultarContinuar();
		ocultarBotonAtras();
		ocultarBotonSiguienteActividad();
	}
}

// Function to show the modal
function mostrarModal() {
	console.log("Llegamos aquí");
	var mensaje = "";
	var resultadoMensaje = document.getElementById("resultadoMensaje");
	var botonContinuarModal = document.getElementById("boton-continuar-modal");
	var miModal = new bootstrap.Modal(document.getElementById("resultadoModal"));

	mensaje = "¡Muy bien! Has practicado el abecedario 😊";
	botonContinuarModal.textContent = 'Continuar';
	textoBoton = 'Continuar';
	reproducirSonido(audio1Modal);

	resultadoMensaje.textContent = mensaje;
	miModal.show();
}


