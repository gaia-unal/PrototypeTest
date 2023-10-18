
// Global variable definitions


var idActual = '';



// Container only for guidance
document.getElementsByClassName("contenedor")[0].style.border = "solid black";

// 'Continuar' button
var boton = document.getElementById('btn-continuar');

boton.addEventListener('click', function () {
	// Send a message to the React component in the parent
	window.parent.postMessage('1', '*');
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
		accessibility.style.fontSize = initialFontSize + 'vw';

		// Don't change
		for (let i = 0; i < spans.length; i++) {
			spans[i].style.fontSize = initialFontSize + 'vw';
		}
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
		}
	});

	const increaseLSpacing = document.getElementById("increaseLineSpacing");

	increaseLSpacing.addEventListener("click", () => {
		if (initialLineHeight < 3.5) {
			initialLineHeight += 0.5;

			// Change line-height of the activity instruction
			textElement.style.lineHeight = initialLineHeight;
		}
	});
});





function mostrarContinuar() {
	document.getElementById('continuar').style.display = "flex";
}


function ocultarContinuar() {
	document.getElementById('continuar').style.display = "none";
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
    { imagen: "2.png", audio: "audio2.mp3" },
    { imagen: "3.png", audio: "audio3.mp3" },
    { imagen: "4.png", audio: "audio4.mp3" },
    { imagen: "5.png", audio: "audio5.mp3" },
    { imagen: "6.png", audio: "audio6.mp3" },
    { imagen: "7.png", audio: "audio7.mp3" },
    { imagen: "8.png", audio: "audio8.mp3" },
    { imagen: "9.png", audio: "audio9.mp3" },
    { imagen: "10.png", audio: "audio10.mp3" },
    { imagen: "11.png", audio: "audio11.mp3" },
    { imagen: "12.png", audio: "audio12.mp3" },
    { imagen: "13.png", audio: "audio13.mp3" },
    { imagen: "14.png", audio: "audio14.mp3" },
    { imagen: "15.png", audio: "audio15.mp3" },
    { imagen: "16.png", audio: "audio16.mp3" },
    { imagen: "17.png", audio: "audio17.mp3" },
    { imagen: "18.png", audio: "audio18.mp3" },
    { imagen: "19.png", audio: "audio19.mp3" },
    { imagen: "20.png", audio: "audio20.mp3" },
    { imagen: "21.png", audio: "audio21.mp3" },
    { imagen: "22.png", audio: "audio22.mp3" },
    { imagen: "23.png", audio: "audio23.mp3" },
    { imagen: "24.png", audio: "audio24.mp3" },
    { imagen: "25.png", audio: "audio25.mp3" },
    { imagen: "26.png", audio: "audio26.mp3" },
    { imagen: "27.png", audio: "audio27.mp3" }
];

let indiceLetraActual = 0;

// Event when an option is selected
function seleccionar() {

	reproducirSonido();
	mostrarContinuar();
}

function cambiarLetra() {
    if (indiceLetraActual < letras.length) {
        const imagen = document.getElementById("imagen");
        const audio = document.getElementById("audio");

        // Cambia la imagen y el audio a la siguiente letra
        imagen.src = letras[indiceLetraActual].imagen;
        audio.src = letras[indiceLetraActual].audio;


        // Incrementa el índice para la próxima vez
        indiceLetraActual++;

		ocultarContinuar();
    }
}


