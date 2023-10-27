import { NavLink } from 'react-router-dom'
import '../../styles/HomeEsmeralda.css'
import coverPhonological from '../../assets/ImagenDislexiaFonológica.png'
import coverSuperficial from '../../assets/ImagenDislexiaVisual.png'
import esmeralda from '../../assets/2.png'

export const HomeEsmeralda = () => {
  return (
    <>
      <NavLink to='/' style={{ textDecoration: 'none' }}>
        <div className='container d-flex flex-row-reverse mt-2'>
          <button className='btn btn-success' title="Regresa al inicio">Volver al inicio</button>
        </div>
      </NavLink>

      <div className='container w-75 container-module-description'>
        <img src={esmeralda} alt="Logo de Esmeralda" className='img-logo' />
        <h4 className='text-center'>Apoyo al docente a realizar una identificación temprana de la Dislexia en el aula de clase</h4>
      </div>

      <NavLink to='demo'>
        <button>Demo</button>
      </NavLink>

      <div className='container mt-5 mb-2'>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <div className='card'>
              <NavLink to="fonologica">
                <img src={coverPhonological} className='card-img-top' alt='Imagen de Dislexia Fonológica' title="Imagen de Dislexia Fonológica" />
              </NavLink>
              <div className='card-body'>
                <p className='card-text text-center'>
                  "Es una dificultad específica de aprendizaje en la lectura; se caracteriza por dificultades en la conciencia fonológica, conocimiento de las letras y otras competencias. La conciencia fonológica se refiere a la habilidad de reconocer y manipular los sonidos del habla, como los fonemas, sílabas y segmentos de palabras. Las personas con dislexia fonológica suelen tener problemas para conectar los sonidos del habla con las letras que representan esos sonidos en palabras escritas, hacen una lectura visual de la palabra, es decir, observa la palabra de manera global, deduciendo (más que leyendo) las palabras conocidas, tienen problemas con la comprensión de lectura, les resulta imposible leer palabras que desconocen y pseudopalabras, ya que no pueden utilizar el mecanismo de conversión grafema a fonema, comenten errores en las palabras de sonido similar, entre otras características. Todo esto puede dificultar la lectura, en lugar de leer palabras de manera fluida, a menudo tienen que leerlas letra por letra o sílaba por sílaba". Citado de la tesis Esmeralda.
                </p>
              </div>
            </div>
          </div>
          <div className='col d-flex justify-content-center'>
            <div className='card'>
              <NavLink to="superficial">
                <img src={coverSuperficial} className='card-img-top' alt='Imagen de Dislexia Superficial' title="Imagen de Dislexia Superficial" />
              </NavLink>
              <div className='card-body'>
                <p className='card-text text-center'>
                  "Es otro subtipo de dislexia que implica dificultades específicas en la lectura. El problema se relaciona con el reconocimiento de palabras enteras como unidades visuales. Las personas con este tipo de dislexia es frecuente que tengan dificultad para leer palabras cuya lectura y pronunciación no se correspondan. También comenten errores en las palabras complejas o largas y leen mejor las palabras regulares que las irregulares, tienen confusión de homófonos porque el acceso al léxico está guiado por el sonido y no por la ortografía de la palabra, suelen tener errores de omisión, adición o sustitución de letras. La dislexia superficial consiste en un mal funcionamiento de la ruta visual léxica o directa, o sea que el alumno no tiene problemas de lectura de palabras regulares, ya que no tiene una alteración de grafemas y fonemas, pero sí a la hora de leer palabras irregulares, donde se verá que comete omisiones, adiciones de letras o sustituciones de palabras". Citado de la tesis Esmeralda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
