import { useEffect, useRef, useState } from "react";
import ModalComponent from './ModalComponent';
import { NavLink, useNavigate } from "react-router-dom";

export const AttentionResource = ({ route }) => {

  const domain = "http://localhost:3000";

  const srcIframe = [
    { ruta: domain + route + "/1/indice.html" },
    { ruta: domain + route + "/2/indice.html" },
    { ruta: domain + route + "/3/indice.html" },
    { ruta: domain + route + "/4/indice.html" },
    { ruta: domain + route + "/5/indice.html" },
    { ruta: domain + route + "/6/indice.html" },
    { ruta: domain + route + "/7/indice.html" }
  ];

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
              <div>
                <p className="message">¡Felicitaciones! Ya terminaste</p>
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
