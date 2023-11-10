// Global variable definitions

const retoCheckbox = document.getElementById('retoCumplido');


// 'Continuar' button
var boton = document.getElementById('btn-continuar');
boton.addEventListener('click', function () {
	// Send a message to the React component in the parent
	procesarPuntaje();
	window.parent.postMessage(1, '*');
});

retoCheckbox.addEventListener('change', function () {
	if (retoCheckbox.checked) {
	  mostrarContinuar();
	} else {
	  ocultarContinuar();
	}
  });


// Accessibility functions

document.addEventListener("DOMContentLoaded", () => {
	// To change the font

	// Name of the activity's image
	const imageName = "trabalenguas";

	// Obtain the elements to which the font must be changed
	const changeFontButton = document.getElementById("changeFont");
	const textElement = document.getElementById("texto");
	const spans = document.querySelectorAll("span");
	const accessibility = document.getElementById("accessibilityButton");
	const reto = document.getElementById("reto");

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
		changeFontButton.style.fontFamily = fonts[actualFont];
		boton.style.fontFamily = fonts[actualFont];
		accessibility.style.fontFamily = fonts[actualFont];
		reto.style.fontFamily = fonts[actualFont];

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
	let initialWidth = 70; // Initial width of answer options

	// Function to change the font size
	const changeFontSize = (initialFontSize, initialWidth) => {
		// Text elements
		changeFontButton.style.fontSize = initialFontSize + 'vw';
		textElement.style.fontSize = initialFontSize + 'vw';
		boton.style.fontSize = initialFontSize + 'vw';
		accessibility.style.fontSize = initialFontSize + 'vw';
		reto.style.fontSize = initialFontSize + 'vw';

		// Don't change
		for (let i = 0; i < spans.length; i++) {
			spans[i].style.fontSize = initialFontSize + 'vw';
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
			initialWidth -= 1.6; // Decrease size of images (answer options)

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
			initialWidth += 1.6;

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

	// Here, the score is sent for global processing
	window.parent.postMessage('Mensaje desde el iframe', '*');
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


