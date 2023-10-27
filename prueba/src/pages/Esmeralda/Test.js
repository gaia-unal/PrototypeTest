import React, { useEffect, useRef, useState } from 'react';
import '../../styles/Test.css';
import { PDFDownloadLink } from '@react-pdf/renderer'; // Importa el componente PDFDownloadLink
import ReportePDF from './ReportePDF'; // Importa tu componente ReportePDF
import ModalComponent from './ModalComponent';
import { GeneralDataInput } from './GeneralDataInput';
import { BackButton } from '../../components/BackButton';
import { useNavigate } from "react-router-dom";

export const Test = ({ module, competence1, competence2, nameActivityC1_1, nameActivityC1_2, nameActivityC1_3, nameActivityC1_4, nameActivityC1_5, nameActivityC1_6, nameActivityC1_7, nameActivityC2_1, nameActivityC2_2, nameActivityC2_3, nameActivityC2_4, nameActivityC2_5, nameActivityC2_6, nameActivityC2_7 }) => {

  const [mostrarModal, setMostrarModal] = useState(false);

  let navigate = useNavigate();

  // Función para mostrar el modal
  const mostrarVentanaEmergente = () => {
    setMostrarModal(true);
  };



  const domain = "http://localhost:3000";

  const srcIframe = [
    { ruta: domain + module + competence1 + "/1/indice.html", nombre: nameActivityC1_1 },
    { ruta: domain + module + competence1 + "/2/indice.html", nombre: nameActivityC1_2 },
    { ruta: domain + module + competence1 + "/3/indice.html", nombre: nameActivityC1_3 },
    { ruta: domain + module + competence1 + "/4/indice.html", nombre: nameActivityC1_4 },
    { ruta: domain + module + competence1 + "/5/indice.html", nombre: nameActivityC1_5 },
    { ruta: domain + module + competence1 + "/6/indice.html", nombre: nameActivityC1_6 },
    { ruta: domain + module + competence1 + "/7/indice.html", nombre: nameActivityC1_7 },

    { ruta: domain + module + competence2 + "/1/indice.html", nombre: nameActivityC2_1 },
    { ruta: domain + module + competence2 + "/2/indice.html", nombre: nameActivityC2_2 },
    { ruta: domain + module + competence2 + "/3/indice.html", nombre: nameActivityC2_3 },
    { ruta: domain + module + competence2 + "/4/indice.html", nombre: nameActivityC2_4 },
    { ruta: domain + module + competence2 + "/5/indice.html", nombre: nameActivityC2_5 },
    { ruta: domain + module + competence2 + "/6/indice.html", nombre: nameActivityC2_6 },
    { ruta: domain + module + competence2 + "/7/indice.html", nombre: nameActivityC2_7 }
  ];


  // Condicional para enviar el tipo de dislexia al informe según corresponda
  var tipoDislexia = '';
  var nameCompetence1 = '';
  var nameCompetence2 = '';
  var message1 = '';
  var message2 = '';

  if (module === "/Activities/EarlyDetection/PhonologicalDyslexia") {
    tipoDislexia = 'Dislexia Fonológica';
    nameCompetence1 = 'Conciencia Fonológica';
    nameCompetence2 = 'Conocimiento de las letras';
    message1 = " Se refiere a la habilidad de una persona para comprender y manipular la estructura de los sonidos en las palabras habladas. Para fortalecer esta competencia se pueden trabajar actividades, habilidades cognitivas y categorías o temáticas como las que se muestra en la siguiente tabla: https://drive.google.com/file/d/1vBTQY4yHhxNUk0Hthb05c3hqkUitIKUT/view?usp=sharing";
    message2 = " Se refiere a la capacidad de una persona para reconocer, identificar y comprender las letras del alfabeto. Para fortalecer esta competencia se pueden trabajar actividades, habilidades cognitivas y categorías o temáticas como las que se muestra en la siguiente tabla:  https://drive.google.com/file/d/15uW6HY7ltgCq9RMVPSQ7smkhjnVaSiCI/view?usp=sharing";
  }
  else {
    tipoDislexia = 'Dislexia Superficial o Visual';
    nameCompetence1 = 'Discriminación visual';
    nameCompetence2 = 'Ortografía';
    message1 = " Es la habilidad visual que ayuda al estudiante a reconocer las semejanzas y las diferencias de formas, colores, letras y posición de objetos, personas y otros materiales, y a advertir las coincidencias entre ellos. Para fortalecer esta competencia se pueden trabajar actividades, habilidades cognitivas y categorías o temáticas como las que se muestra en la siguiente tabla: https://drive.google.com/file/d/1vBTQY4yHhxNUk0Hthb05c3hqkUitIKUT/view?usp=sharing";
    message2 = " La ortografía es la norma o conjunto de reglas que rigen la correcta escritura de una lengua. Para fortalecer esta competencia se pueden trabajar actividades, habilidades cognitivas y categorías o temáticas como las que se muestra en la siguiente tabla:  https://drive.google.com/file/d/15uW6HY7ltgCq9RMVPSQ7smkhjnVaSiCI/view?usp=sharing";
  }

  // The states where the student's general data is saved are defined here:

  const [isDataEntered, setIsDataEntered] = useState(false); // To know if the data has already been entered and the test can be shown

  const [nameStudent, setNameStudent] = useState("");
  const date = new Date();
  const applicationDate = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  const [age, setAge] = useState("");

  // Acá defino las variables que van a llevar las rutas que van a aparecen en el reporte

  const [actividadActual, setActividadActual] = useState(0); // Estado para rastrear la actividad actual
  const iframeRef = useRef(null); // Se utiliza el hook useRef
  //Se utiliza para crear una referencia mutable que puede apuntar a un elemento del DOM o a cualquier otro valor mutable dentro del componente.
  const [iframeHeight, setIframeHeight] = useState(0);

  const [testScore, setTestScore] = useState(0); // A state is used to keep the overall score of the test
  // A state is used to manage the score of each competence
  const [competence1Score, setCompetence1Score] = useState(0);
  const [competence2Score, setCompetence2Score] = useState(0);
  // This status is used to save the score obtained in each activity and the time needed to perform it
  const [results, setResults] = useState([]);
  // Time at which the first activity starts
  const [startTime, setStartTime] = useState(new Date());

  // Function that sets the height of the iframe when each activity is loaded
  const handleIframeLoad = () => {
    if (iframeRef.current) {
      const iframeDocument = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
      const iframeContentHeight = iframeDocument.documentElement.scrollHeight;
      setIframeHeight(iframeContentHeight + 'px');
    }
  };

  useEffect(() => { // Se utiliza el hook useEffect
    // useEffect se utiliza para realizar efectos secundarios en componentes funcionales, en este caso, se activa el
    // efecto secundario recibirMensajeDesdeIframe


    // Antes de usar iframeRef, verifica que no sea null
    if (iframeRef.current) {
      // Accede a las propiedades o métodos del iframe
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
              nameActivity: srcIframe[actividadActual].nombre,
              location: srcIframe[actividadActual].ruta,
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

            if (srcIframe[actividadActual].ruta.includes("PhonologicalAwareness") || srcIframe[actividadActual].ruta.includes("VisualDiscrimination")) {
              cumulativeCompetence1Score += mensajeDesdeIframe;
              setCompetence1Score(cumulativeCompetence1Score);
            }
            else {
              if (srcIframe[actividadActual].ruta.includes("LetterKnowledge") || srcIframe[actividadActual].ruta.includes("Orthography")) {
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
            if (actividadActual === srcIframe.length - 1) {
              // Si la actividad actual es la última en srcIframe, muestra el modal
              mostrarVentanaEmergente();
            }
          }
        }
      };

      // When a change occurs within the activity that increases the size of the 
      // content, this message will be received
      const handleMessage = (event) => {
        if (event.data && event.data.type === 'iframeHeightChange') {
          setIframeHeight(event.data.height);
        }
      };

      window.addEventListener('message', handleMessage);

      // With this event listener we receive the score from the iframe
      window.addEventListener('message', recibirMensajeDesdeIframe);


      return () => {
        // Se hace limpieza del efecto del hook useEffect, para no tener problemas con la siguiente actividad
        window.removeEventListener('message', recibirMensajeDesdeIframe);
        window.removeEventListener('message', handleMessage);
      };
    }

  }, [actividadActual, startTime, results, competence1Score, competence2Score, srcIframe, testScore]);

  // The general data entered by the student is saved
  const saveData = (name, age) => {
    setNameStudent(name)
    setAge(age)
    setIsDataEntered(true)
  }

  return (
    <>
      {!isDataEntered && (
        <>
          <BackButton />
          <GeneralDataInput
            saveData={saveData}
          />
        </>
      )}

      {/* The activities are shown and the fields to enter general data are hidden */}
      {isDataEntered && (
        <>
          {/* Se actualiza el iframe de la actividad actual - índice manejado en los estados */}

          <div style={{ display: 'flex', justifyContent: 'center' }} className='iframe-div'>
            <iframe
              src={srcIframe[actividadActual].ruta}
              frameBorder="0"
              style={{ width: '80%', height: iframeHeight, position: 'relative', top: 0, left: 0 }}
              ref={iframeRef}
              title="Actividad"
              scrolling='no'
              onLoad={handleIframeLoad}></iframe>
          </div>


          {/* Modal */}
          <div>
            {mostrarModal ? (
              // Utiliza PDFDownloadLink para generar y descargar el informe en PDF
              <ModalComponent isOpen={mostrarModal} onClose={() => setMostrarModal(false)}>
                <div style={{ padding: '20px' }}>
                  {/* Contenido dentro del modal */}
                  <PDFDownloadLink
                    document={
                      <ReportePDF
                        resultados={results}
                        competence1Score={competence1Score}
                        competence2Score={competence2Score}
                        testScore={testScore}
                        tipoDislexia={tipoDislexia}
                        nameStudent={nameStudent}
                        applicationDate={applicationDate}
                        age={age + ' años'}
                        nameCompetence1={nameCompetence1}
                        nameCompetence2={nameCompetence2}
                        message1={message1}
                        message2={message2}
                      />
                    }
                    fileName="reporte.pdf"
                  >
                    {({ blob, url, loading, error }) => (
                      <div>
                        <p className="message">¡Felicitaciones! Terminaste la prueba</p>
                        <button className="descargar-button">
                          {loading ? 'Cargando documento...' : 'Descargar reporte'}
                        </button>
                      </div>
                    )}
                  </PDFDownloadLink>
                  <button className="descargar-button" onClick={() => navigate(-(srcIframe.length))}>
                    Volver al inicio
                  </button>
                </div>
              </ModalComponent>
            ) : null}
          </div>
        </>
      )}
    </>
  );
}
