import { NavLink } from 'react-router-dom'
import '../../styles/HomeEsmeralda.css'
import coverPhonological from '../../assets/ImagenDislexiaFonológica.png'
import coverSuperficial from '../../assets/ImagenDislexiaVisual.png'
import logoEsmeralda from '../../logo.png'

export const HomeEsmeralda = () => {
  return (
    <>
      <NavLink to='/' style={{ textDecoration: 'none' }}>
        <div className='container d-flex flex-row-reverse mt-2'>
          <button className='btn btn-success' title="Regresa al inicio">Volver al inicio</button>
        </div>
      </NavLink>


      <div className='container w-75 container-module-description'>
        <img src={logoEsmeralda} alt="Logo de Esmeralda" className='img-logo' />
        <h4 className='textoEsmeralda'>Esmeralda es el apoyo al docente para realizar una identificación temprana de la Dislexia en el aula de clase y provee las herramientas digitales para el proceso de atención inicial de esta dificultad específica de aprendizaje. A continuación recursos educativos digitales para Dislexia Fonológica y para Dislexia Visual 💚.</h4>
      </div>

      <NavLink to='demo'>
        <div className="text-center">
          <button type="button" className="btn btn-primary" title="Click aquí para probar los recursos educativos digitales">¡Prueba los recursos! 🤍</button>
        </div>
      </NavLink>

      <div className='container mt-5 mb-2'>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <div className='card'>
              <NavLink to="fonologica">
                <img src={coverPhonological} className='card-img-top' alt='Imagen de Dislexia Fonológica' title="Da click para ir a los recursos de Dislexia Fonológica" />
              </NavLink>
              <div className='card-body'>
                <p className='card-text text-center textoEsmeralda'>
                  Es una dificultad específica de aprendizaje en la lectura; se caracteriza por dificultades en la conciencia fonológica,
                  conocimiento de las letras y otras competencias. La conciencia fonológica se refiere a la habilidad de reconocer y manipular
                  los sonidos del habla, como los fonemas, sílabas y segmentos de palabras. Las personas con dislexia fonológica suelen tener problemas
                  para conectar los sonidos del habla con las letras que representan esos sonidos en palabras escritas, hacen una lectura visual de la palabra,
                  es decir, observa la palabra de manera global, deduciendo (más que leyendo) las palabras conocidas, tienen problemas con la comprensión de lectura,
                  les resulta imposible leer palabras que desconocen. Todo esto puede dificultar la lectura, en lugar de leer palabras de manera fluida,
                  a menudo tienen que leerlas letra por letra o sílaba por sílaba (Álvarez Palacio, 2015) - Tesis Esmeralda 💙.
                </p>
              </div>
            </div>
          </div>
          <div className='col d-flex justify-content-center'>
            <div className='card'>
              <NavLink to="superficial">
                <img src={coverSuperficial} className='card-img-top' alt='Imagen de Dislexia Superficial' title="Da click para ir a los recursos de Dislexia Superficial o Visual" />
              </NavLink>
              <div className='card-body'>
                <p className='card-text text-center textoEsmeralda'>
                  Es otro subtipo de dislexia que implica dificultades específicas en la lectura.  Se caractetiza por
                  dificultades en competencias como la discriminación visual y la ortografía. El problema se relaciona con el reconocimiento de palabras enteras como unidades visuales.
                  Las personas con este tipo de dislexia es frecuente que tengan dificultad para leer palabras
                  cuya lectura y pronunciación no se correspondan. También comenten errores en las palabras complejas
                  o largas y leen mejor las palabras regulares que las irregulares, tienen confusión de homófonos
                  porque el acceso al léxico está guiado por el sonido y no por la ortografía de la palabra,
                  suelen tener errores de omisión, adición o sustitución de letras. La dislexia superficial
                  consiste en un mal funcionamiento de la ruta visual léxica o directa, o sea que el alumno tiene problemas
                  a la hora de leer palabras irregulares, donde se verá que comete omisiones, adiciones
                  de letras o sustituciones de palabras (Álvarez Palacio, 2015) - Tesis Esmeralda 💙.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ¿Video informativo para los estudiantes, ¿Te sientes identificado con la Dislexia? */}
      <div className='textoVideo'>
        <p id="pregunta">¿Qué es la Dislexia?</p>
      </div>
      <div className="videoContainer">
        <iframe
          className='video'
          src="https://www.youtube.com/embed/qtBoqtqwaYM"
          title="Video de YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>

      {/* Botón de referencias */}
      <NavLink to='referencias'>
        <div className="text-center botonReferencias">
          <button type="button" className="btn btn-primary" title="Click aquí para ver las referencias del aplicativo">Referencias</button>
        </div>
      </NavLink>
    </>
  )
}
