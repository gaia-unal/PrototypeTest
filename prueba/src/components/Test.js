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
  const iframeRef = useRef(null);

  useEffect(() => {
    const recibirMensajeDesdeIframe = (event) => {
      if (event.source === iframeRef.current.contentWindow) {
        const mensajeDesdeIframe = event.data;

        // Verifica el mensaje y avanza a la siguiente actividad si es necesario
        if (mensajeDesdeIframe === "cambiarActividad") {
          const siguienteActividad = actividadActual + 1;

          if (siguienteActividad < srcIframe.length) {
            setActividadActual(siguienteActividad);
          }
        }
      }
    };

    window.addEventListener('message', recibirMensajeDesdeIframe);

    return () => {
      window.removeEventListener('message', recibirMensajeDesdeIframe);
    };
  }, [actividadActual]);

  return (
    <div className='iframe-container'>
      <iframe ref={iframeRef} src={srcIframe[actividadActual]} title="Actividad" scrolling='no'></iframe>
    </div>
  );
}

export default Test;
