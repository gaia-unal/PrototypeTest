import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Test.css';

function Test() {
  const domain = "http://localhost:3000";

  const srcIframe = [
    domain + "/Activities/EarlyDetection/PhonologicalDyslexia/PhonologicalAwareness/1/indice.html",
    domain + "/Activities/EarlyDetection/PhonologicalDyslexia/PhonologicalAwareness/2/indice.html",
    domain + "/Activities/EarlyDetection/SuperficialDyslexia/VisualDiscrimination/1/indice.html"
  ];

  const [actividadActual, setActividadActual] = useState(0); // Estado para rastrear la actividad actual
  const iframeRef = useRef(null); // Se utiliza el hook useRef
  //Se utiliza para crear una referencia mutable que puede apuntar a un elemento del DOM o a cualquier otro valor mutable dentro del componente.

  useEffect(() => { // Se utiliza el hook useEffect
    // useEffect se utiliza para realizar efectos secundarios en componentes funcionales, en este caso, se activa el
    // efecto secundario recibirMensajeDesdeIframe
    const recibirMensajeDesdeIframe = (event) => {
      if (event.source === iframeRef.current.contentWindow) {
        const mensajeDesdeIframe = event.data;

        // Verifica el mensaje y avanza a la siguiente actividad si es necesario
        // Si desde el iframe le llega el mensaje "cambiarActividad", entonces se define una constante que guarda el
        // índice de la siguiente actividad
        if (mensajeDesdeIframe === "cambiarActividad") {
          const siguienteActividad = actividadActual + 1;

          if (siguienteActividad < srcIframe.length) {
            setActividadActual(siguienteActividad); // Si todavía existe una siguiente actividad, entonces se actualiza
            // el estado que tiene el índice de la actividad actual
          }
        }
      }
    };

    // Con este event listener recibimos el mensaje desde el iframe
    window.addEventListener('message', recibirMensajeDesdeIframe);

    return () => {
      //  Se hace limpieza del efecto del hook useEffect, para no tener problemas con la siguiente actividad
      window.removeEventListener('message', recibirMensajeDesdeIframe);
    };
  }, [actividadActual]);

  return (
    <div className='iframe-container'>
      {/* Se actualiza el iframe de la actividad actual - índice manejado en los estados */}
      <iframe ref={iframeRef} src={srcIframe[actividadActual]} title="Actividad" scrolling='no'></iframe>
    </div>
  );
}

export default Test;
