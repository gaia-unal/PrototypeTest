import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Test.css';

export const Test = ({ module, competence1, competence2 }) => {
  const domain = "http://localhost:3000";

  const srcIframe = [
    domain + module + competence1 + "/1/indice.html",
    domain + module + competence1 + "/2/indice.html",
    domain + module + competence1 + "/3/indice.html",
    domain + module + competence1 + "/4/indice.html",
    domain + module + competence1 + "/5/indice.html",
  ];

  const [actividadActual, setActividadActual] = useState(0); // Estado para rastrear la actividad actual
  const iframeRef = useRef(null); // Se utiliza el hook useRef
  //Se utiliza para crear una referencia mutable que puede apuntar a un elemento del DOM o a cualquier otro valor mutable dentro del componente.

  const [testScore, setTestScore] = useState(0); // A state is used to keep the overall score of the test
  // A state is used to manage the score of each competence
  const [competence1Score, setCompetence1Score] = useState(0);
  const [competence2Score, setCompetence2Score] = useState(0);
  // This status is used to save the score obtained in each activity and the time needed to perform it
  const [results, setResults] = useState([]);
  // Time at which the first activity starts
  const [startTime, setStartTime] = useState(new Date());

  useEffect(() => { // Se utiliza el hook useEffect
    // useEffect se utiliza para realizar efectos secundarios en componentes funcionales, en este caso, se activa el
    // efecto secundario recibirMensajeDesdeIframe
    const recibirMensajeDesdeIframe = (event) => {
      if (event.source === iframeRef.current.contentWindow) {
        const mensajeDesdeIframe = event.data;

        // Verifica el mensaje y avanza a la siguiente actividad si es necesario
        // Si desde el iframe le llega el puntaje de la actividad, entonces se define una constante que guarda el
        // índice de la siguiente actividad y se actualiza el puntaje global
        if (typeof mensajeDesdeIframe === "number") {
          // Time elapsed to perform the activity
          const currentTime = new Date();
          const elapsedTime = (currentTime - startTime) / 1000; // Seconds
          // Information of each activity
          const activitieResult = {
            location: srcIframe[actividadActual],
            score: mensajeDesdeIframe,
            time: elapsedTime
          };
          const currentResults = [...results, activitieResult];
          // Activity information is saved
          setResults(currentResults);

          // Global score is updated
          let cumulativeScore = testScore + mensajeDesdeIframe;
          setTestScore(cumulativeScore);

          // Competence score is updated
          let cumulativeCompetence1Score = competence1Score;
          let cumulativeCompetence2Score = competence2Score;

          if (srcIframe[actividadActual].includes("PhonologicalAwareness") || srcIframe[actividadActual].includes("VisualDiscrimination")) {
            cumulativeCompetence1Score += mensajeDesdeIframe;
            setCompetence1Score(cumulativeCompetence1Score);
          }
          else {
            if (srcIframe[actividadActual].includes("AlphabetKnowledge") || srcIframe[actividadActual].includes("Orthography")) {
              cumulativeCompetence2Score += mensajeDesdeIframe;
              setCompetence2Score(cumulativeCompetence2Score);
            }
          }

          const siguienteActividad = actividadActual + 1;

          if (siguienteActividad < srcIframe.length) {
            setActividadActual(siguienteActividad); // Si todavía existe una siguiente actividad, entonces se actualiza
            // el estado que tiene el índice de la actividad actual
            setStartTime(new Date()); // Update startTime for the next activity
          }
          else {
            // The test is over
            console.log("Puntaje de la prueba calculado: " + cumulativeScore); // We checked this variable because scoreTest has not been updated yet
            console.log("Puntaje de la competencia 1: " + cumulativeCompetence1Score);
            console.log("Puntaje de la competencia 2: " + cumulativeCompetence2Score);
            console.log("Resultados de cada actividad: ");
            console.log(JSON.stringify(currentResults));
          }
        }
      }
    };

    // Con este event listener recibimos el mensaje desde el iframe
    window.addEventListener('message', recibirMensajeDesdeIframe);
    
    return () => {
      // Se hace limpieza del efecto del hook useEffect, para no tener problemas con la siguiente actividad
      window.removeEventListener('message', recibirMensajeDesdeIframe);
    };
  }, [actividadActual, startTime, results]);

  return (
    <div className='iframe-container'>
      {/* Se actualiza el iframe de la actividad actual - índice manejado en los estados */}
      <iframe ref={iframeRef} src={srcIframe[actividadActual]} title="Actividad" scrolling='no'></iframe>
    </div>
  );
}
