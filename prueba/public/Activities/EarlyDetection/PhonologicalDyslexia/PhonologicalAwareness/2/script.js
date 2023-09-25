// Definición de variables globales

// Aquí queda el puntaje de esta actividad, 1 o 0
var puntaje = null;

var idSeleccion = null;

// Poner en la segunda cadena (que está vacía) el número de la opción correcta
// Aquí va la opción que es correcta para ser calificada
var idOpcionCorrecta = "opcion" + "1";

//Contenedor solo para guiarse
document.getElementsByClassName("contenedor")[0].style.border="solid black";

// Botón de continuar
var boton = document.getElementById('btn-continuar').addEventListener('click', function() {
	// Envía un mensaje al componente React en el padre
	window.parent.postMessage('cambiarActividad', '*');
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

// NO MOVER
function ocultarContinuar() {
	document.getElementById('continuar').style.display = "none";
}

// NO MOVER
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
		// Aquí deberia enviarse el puntaje a una función global que procese el puntaje de toda la prueba
	}
}

// NO MOVER
function Error() {
	puntaje = 0;
}

// NO MOVER
function Correcto() {
	puntaje = 1;
}

// NO MOVER
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

// Evento cuando se selecciona alguna de las opciones
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

// NO MOVER
function calificar(){
	if (idSeleccion == idOpcionCorrecta){
		Correcto();
	}else{
		Error();
	}
}