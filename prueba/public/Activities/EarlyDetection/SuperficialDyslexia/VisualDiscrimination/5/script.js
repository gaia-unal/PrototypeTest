// Global variable definitions
var puntaje = 0.01;

// Add the IDs of the correct options as an array
var opcionesCorrectas = ["opcion1", "opcion7"];

// Variables to store the values of correct and incorrect options
var valorBueno = 1 / opcionesCorrectas.length;
var valorMalo = valorBueno / 2;

// Array to store selected options
var seleccionadas = Array();

// Variable to store the ID of the just-selected option
var idSeleccion = null;

// Border to set limits in the activity
document.getElementsByClassName("contenedor")[0].style.border = "solid black";

// Continue button
var boton = document.getElementById('btn-continuar');
boton.addEventListener('click', function () {
	// Send a message to the React component in the parent
	procesarPuntaje();
	window.parent.postMessage(puntaje, '*');
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
		accessibility.style.fontFamily = fonts[actualFont];

		for (let i = 0; i < spans.length; i++) {
			spans[i].style.fontFamily = fonts[actualFont];
		}

		// Change the option images
		imagenActual = (imagenActual + 1) % images[0].length;
		for (let i = 0; i < images.length; i++) {
			document.getElementById("imageOption" + i).src = images[i][imagenActual];
		}
	});

	// To change the font-size

	let initialFontSize = 2; // Initial font size that text elements have in the activity
	let initialWidth = 90; // Initial width of answer options


	// Function to change the font size
	const changeFontSize = (initialFontSize, initialWidth) => {
		// Text elements
		changeFontButton.style.fontSize = initialFontSize + 'vw';
		textElement.style.fontSize = initialFontSize + 'vw';
		boton.style.fontSize = initialFontSize + 'vw';
		accessibility.style.fontSize = initialFontSize + 'vw';

		// Don't change
		for (let i = 0; i < spans.length; i++) {
			spans[i].style.fontSize = initialFontSize + 'vw';
		}

		// Images
		for (let i = 0; i < 7; i++) {
			document.getElementById("imageOption" + i).style.width = initialWidth + '%';
		}
	};

	// Decrease font size
	const decreaseFontButton = document.getElementById("decreaseFontSize");

	// When the button to decrease the font size is clicked
	decreaseFontButton.addEventListener("click", () => {
		if (initialFontSize > 2) {
			initialFontSize -= 0.1; // Decrease font size of text elements
			initialWidth -= 0.5; // Decrease size of images (answer options)

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
			initialWidth += 0.5;

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


// Function to show the continue button
function mostrarContinuar() {
	document.getElementById('continuar').style.display = "flex";
}

// Function to hide the continue button
function ocultarContinuar() {
	document.getElementById('continuar').style.display = "none";
}

// Function to process the score
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
		// Here, the score should be sent to be processed globally
		// parent.enviarPuntaje(puntaje);
	}
}

// Function to play the audio
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

// Function to select options
function seleccionar(id) {
	id = "opcion" + id;
	// console.log("El id del seleccionado es:", id);

	// If it's already selected and they click it again, we'll remove the selection
	if (seleccionadas.includes(id)) {
		document.getElementById(id).style.border = "none";
		let indice = seleccionadas.indexOf(id);
		seleccionadas.splice(indice, 1);
	} else { 	// If it's not selected, we'll add the border and save it in the array
		document.getElementById(id).style.border = "solid green";
		seleccionadas.push(id);
	}

	// console.log("Las opciones seleccionadas hasta el momento son", seleccionadas);
	if (seleccionadas.length > 0) {
		mostrarContinuar();
		calificar();
	} else {
		ocultarContinuar();
	}

}

// Function to grade
function calificar() {
	puntaje = 0.0;
	let correctas = 0;
	for (let i = 0; i < opcionesCorrectas.length; i++) {
		if (seleccionadas.includes(opcionesCorrectas[i])) {
			puntaje += valorBueno;
			correctas += 1;
		}
	}
	puntaje = puntaje - ((valorMalo) * (seleccionadas.length - correctas));
	if (puntaje < 0) {
		puntaje = 0;
	}
	// console.log("El puntaje es: ", puntaje);
}