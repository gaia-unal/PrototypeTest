import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente oscuro
  },
  content: {
    width: '50%', // Ancho personalizado
    height: '30%',
    margin: 'auto',
    border: '2px solid black', // Borde negro
    borderRadius: '8px', // Bordes redondeados
    backgroundColor: '#A1DFA1', // Fondo blanco
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', // Sombra ligera
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
};

const ModalComponent = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles} // Aplica los estilos personalizados
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
