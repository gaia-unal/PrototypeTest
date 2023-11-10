import { useEffect, useRef, useState, useMemo } from "react";
import ModalComponent from './ModalComponent';
import '../../styles/Demo.css';
import { useNavigate } from "react-router-dom";

export const Demo = ({ route }) => {


  const domain = "https://gaia.manizales.unal.edu.co/PiedrasPreciosasPrototipo";

  var srcIframe = useMemo(() => [ //srcIframe is memoized using useMemo and will depend only on the route property. This will prevent a new instance of the array from being created on each rendering, which should resolve the warning.
    { ruta: domain + route + "/1/indice.html" },
    { ruta: domain + route + "/2/indice.html" },
    { ruta: domain + route + "/3/indice.html" },
    { ruta: domain + route + "/4/indice.html" },
  ], [route]);

  const [actividadActual, setActividadActual] = useState(0); // Estado para rastrear la actividad actual
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(0);
  const [mostrarModal, setMostrarModal] = useState(false);
  let navigate = useNavigate();

  // Función para mostrar el modal
  const mostrarVentanaEmergente = () => {
    setMostrarModal(true);
  };

  // Function that sets the height of the iframe when each activity is loaded
  const handleIframeLoad = () => {
    if (iframeRef.current) {
      const iframeDocument = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
      const iframeContentHeight = iframeDocument.documentElement.scrollHeight;
      setIframeHeight(iframeContentHeight + 'px');
    }
  };

  useEffect(() => {

    // Antes de usar iframeRef, verifica que no sea null
    if (iframeRef.current) {
      // Accede a las propiedades o métodos del iframe
      const recibirMensajeDesdeIframe = (event) => {
        if (event.source === iframeRef.current.contentWindow) {
          const mensajeDesdeIframe = event.data;

          // Verifica el mensaje y avanza a la siguiente actividad si es necesario
          if (typeof mensajeDesdeIframe === "number") {
            const siguienteActividad = actividadActual + 1;

            if (siguienteActividad < srcIframe.length) {
              setActividadActual(siguienteActividad); // Si todavía existe una siguiente actividad, entonces se actualiza
              // el estado que tiene el índice de la actividad actual
            }
            else {
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

  }, [actividadActual, srcIframe]);

  return (
    <>
      {/* Button to go back */}
      <div className="positionButton">
        <button className="btn btn-success button" onClick={() => navigate('/esmeralda/inicio')}>
          Atrás
        </button>
      </div>

      {/* ¿Video informativo para los estudiantes, ¿Te sientes identificado con la Dislexia? */}
      <div className='textoVideo'>
        <p id="pregunta2">Tutorial para usar los Recursos Educativos Digitales</p>
      </div>
      <div className="videoContainer">
        <iframe
          className='video'
          src="https://www.youtube.com/embed/OOd8q7jfvG0"
          title="Video de YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>


      <div style={{ display: 'flex', justifyContent: 'center' }} className='iframe-div'>
        <iframe
          src={srcIframe[actividadActual].ruta}
          frameBorder="0"
          style={{ width: '70%', height: iframeHeight, position: 'relative', top: 0, left: 0 }}
          ref={iframeRef}
          title="Actividad"
          scrolling='no'
          onLoad={handleIframeLoad}
          sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
      </div>

      {/* Modal */}
      <div>
        {mostrarModal ? (
          // Utiliza PDFDownloadLink para generar y descargar el informe en PDF
          <ModalComponent isOpen={mostrarModal} onClose={() => setMostrarModal(false)}>
            <div style={{ padding: '20px' }}>
              <div>
                <p className="message">¡Estás listo(a) para explorar y resolver nuestros recursos!</p>
                <button className="descargar-button" onClick={() => navigate(-(srcIframe.length))}>
                  Volver al inicio
                </button>
              </div>
            </div>
          </ModalComponent>
        ) : null}
      </div>
    </>
  )
}
