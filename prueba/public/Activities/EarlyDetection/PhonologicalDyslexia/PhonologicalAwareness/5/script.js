// Global variable definitions

// Activity score, either 1 or 0, goes here
var puntaje = null;

// Selected ID goes here
var idSeleccion = null;

// Put the correct option number here
// The correct option for grading
var idOpcionCorrecta = "opcion" + "2";

// Container only for guidance
document.getElementsByClassName("contenedor")[0].style.border="solid black";

// 'Continuar' button
var boton = document.getElementById('btn-continuar');
boton.addEventListener('click', function() {
	// Send a message to the React component in the parent
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
	["opcion1-Open-Dyslexic.png", "opcion1-Arial.png"],
	["opcion2-Open-Dyslexic.png", "opcion2-Arial.png"],
	["opcion3-Open-Dyslexic.png", "opcion3-Arial.png"],
	["opcion4-Open-Dyslexic.png", "opcion4-Arial.png"]
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

function mostrarContinuar() {
	document.getElementById('continuar').style.display = "flex";
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
		console.log("El puntaje es: ", puntaje);
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
	let audio = document.getElementById("audio"+id);
	console.log(audio);
	audio.pause();
	audio.currentTime = 0;
	audio.play();
}

// Event when an option is selected
function seleccionar(id){
	
	sonido(id);
	id = "opcion"+id;
	console.log("El id del seleccionado es:", id);
	
	let opciones = document.getElementsByClassName("opciones");

	for(let i = 0; i < opciones.length; i++){
		let idOpcionActual = "opcion"+(i+1);
		document.getElementById(idOpcionActual).style.border = "none";
	}

	document.getElementById(id).style.border = "2px solid #28a745";

	idSeleccion = id;
	mostrarContinuar();
	calificar();
}

// Grading function
function calificar(){
	if (idSeleccion == idOpcionCorrecta){
		Correcto();
	}else{
		Error();
	}
}